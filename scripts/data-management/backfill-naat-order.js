const path = require("path");
const dotenv = require("dotenv");
const { Client, Databases, Query } = require("node-appwrite");

dotenv.config({ path: path.join(process.cwd(), "apps", "mobile", ".env.local") });

const APPWRITE_ENDPOINT =
  process.env.APPWRITE_ENDPOINT ||
  process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ||
  process.env.ENDPOINT;
const APPWRITE_PROJECT_ID =
  process.env.APPWRITE_PROJECT_ID ||
  process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ||
  process.env.PROJECTID;
const APPWRITE_API_KEY =
  process.env.APPWRITE_API_KEY ||
  process.env.APPWRITE_SECRET_KEY ||
  process.env.API_KEY;
const DATABASE_ID = process.env.APPWRITE_DATABASE_ID || "seerat";
const NAATS_COLLECTION_ID =
  process.env.APPWRITE_NAATS_COLLECTION_ID ||
  process.env.EXPO_PUBLIC_APPWRITE_NAATS_COLLECTION_ID ||
  "seerat";

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID)
  .setKey(APPWRITE_API_KEY);

const databases = new Databases(client);

function extractEpisodeOrder(title) {
  const patterns = [
    /\bepisode\s*#?\s*(\d{1,4})\b/i,
    /\bep\s*#?\s*(\d{1,4})\b/i,
    /\bpart\s*#?\s*(\d{1,4})\b/i,
    /#\s*(\d{1,4})\b/,
  ];

  for (const pattern of patterns) {
    const match = title.match(pattern);
    if (match) {
      return Number.parseInt(match[1], 10);
    }
  }

  return null;
}

function isLastEpisodeTitle(title) {
  return /\blast\s+episode\b|\bakhri\s+qist\b|آخری\s+قسط/i.test(title);
}

async function fetchAllNaats() {
  const documents = [];
  const batchSize = 100;
  let offset = 0;

  while (true) {
    const response = await databases.listDocuments(DATABASE_ID, NAATS_COLLECTION_ID, [
      Query.limit(batchSize),
      Query.offset(offset),
    ]);

    documents.push(...response.documents);

    if (response.documents.length < batchSize) {
      break;
    }

    offset += batchSize;
  }

  return documents;
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("Backfilling naat order...\n");

  // Appwrite attribute/index propagation can lag briefly after provisioning.
  await sleep(5000);

  const naats = await fetchAllNaats();
  const updates = [];
  const groupedByChannel = new Map();

  for (const naat of naats) {
    const key = naat.channelId || "unknown";
    if (!groupedByChannel.has(key)) {
      groupedByChannel.set(key, []);
    }
    groupedByChannel.get(key).push(naat);
  }

  for (const channelNaats of groupedByChannel.values()) {
    const explicitOrders = channelNaats
      .map((naat) => extractEpisodeOrder(naat.title || ""))
      .filter((value) => value !== null);
    const maxExplicitOrder =
      explicitOrders.length > 0 ? Math.max(...explicitOrders) : 0;

    for (const naat of channelNaats) {
      let nextOrder = extractEpisodeOrder(naat.title || "");
      if (nextOrder === null && isLastEpisodeTitle(naat.title || "")) {
        nextOrder = maxExplicitOrder + 1;
      }

      const currentOrder =
        typeof naat.sortOrder === "number" && Number.isFinite(naat.sortOrder)
          ? naat.sortOrder
          : null;

      if (nextOrder !== null && nextOrder !== currentOrder) {
        updates.push({
          id: naat.$id,
          title: naat.title,
          channelName: naat.channelName,
          currentOrder,
          nextOrder,
        });
      }
    }
  }

  console.log(`Found ${updates.length} naats to update\n`);

  for (const [index, update] of updates.entries()) {
    console.log(
      `[${index + 1}/${updates.length}] ${update.nextOrder} <- ${update.title}`,
    );
    await databases.updateDocument(DATABASE_ID, NAATS_COLLECTION_ID, update.id, {
      sortOrder: update.nextOrder,
    });
  }

  console.log("\nDone.");
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
