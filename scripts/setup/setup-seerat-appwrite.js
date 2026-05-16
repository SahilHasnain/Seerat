const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const sdk = require("node-appwrite");

const { Client, Databases, Storage, Permission, Role, IndexType } = sdk;

const MOBILE_DIR = path.join(__dirname, "..", "..", "apps", "mobile");
const ENV_CANDIDATES = [
  path.join(MOBILE_DIR, ".env.local"),
  path.join(MOBILE_DIR, ".env"),
];

const DATABASE_ID = "seerat";
const DATABASE_NAME = "Seerat";
const SEERAT_COLLECTION_ID = "seerat";
const CHANNELS_COLLECTION_ID = "channels";
const AUDIO_BUCKET_ID = "audio-files";
const LEGACY_RESOURCE_IDS = ["shifa-shareef", "shamail-e-tirmizi"];

function loadEnvironment() {
  const envPath = ENV_CANDIDATES.find((candidate) => fs.existsSync(candidate));
  if (!envPath) {
    throw new Error(
      `No env file found. Expected one of: ${ENV_CANDIDATES.join(", ")}`
    );
  }

  dotenv.config({ path: envPath });

  return {
    envPath,
    endpoint:
      process.env.APPWRITE_ENDPOINT ||
      process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ||
      process.env.ENDPOINT ||
      "",
    projectId:
      process.env.APPWRITE_PROJECT_ID ||
      process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ||
      process.env.PROJECTID ||
      "",
    apiKey:
      process.env.APPWRITE_API_KEY ||
      process.env.APPWRITE_SECRET_KEY ||
      process.env.API_KEY ||
      "",
  };
}

function validateConfig(config) {
  const missing = [];
  if (!config.endpoint) missing.push("APPWRITE_ENDPOINT or ENDPOINT");
  if (!config.projectId) missing.push("APPWRITE_PROJECT_ID or PROJECTID");
  if (!config.apiKey) {
    missing.push("APPWRITE_API_KEY / APPWRITE_SECRET_KEY / API_KEY");
  }

  if (missing.length > 0) {
    throw new Error(`Missing required env values: ${missing.join(", ")}`);
  }
}

function createClients(config) {
  const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setKey(config.apiKey);

  return {
    databases: new Databases(client),
    storage: new Storage(client),
  };
}

async function ensureDatabase(databases) {
  try {
    await databases.get(DATABASE_ID);
    console.log(`Database '${DATABASE_ID}' already exists`);
    return;
  } catch (error) {
    if (error.code !== 404) throw error;
  }

  await databases.create(DATABASE_ID, DATABASE_NAME);
  console.log(`Created database '${DATABASE_ID}'`);
}

async function ensureCollection(databases, collectionId, name, permissions) {
  try {
    await databases.getCollection(DATABASE_ID, collectionId);
    console.log(`Collection '${collectionId}' already exists`);
    return;
  } catch (error) {
    if (error.code !== 404) throw error;
  }

  await databases.createCollection(
    DATABASE_ID,
    collectionId,
    name,
    permissions,
    false
  );
  console.log(`Created collection '${collectionId}'`);
}

async function waitForAttribute(databases, collectionId, attributeKey) {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const collection = await databases.getCollection(DATABASE_ID, collectionId);
    const attribute = collection.attributes.find((item) => item.key === attributeKey);

    if (attribute?.status === "available") {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  throw new Error(
    `Attribute '${attributeKey}' in collection '${collectionId}' did not become available in time`
  );
}

async function ensureAttribute(databases, collectionId, key, create) {
  try {
    await create();
    console.log(`Created attribute '${collectionId}.${key}'`);
    await waitForAttribute(databases, collectionId, key);
  } catch (error) {
    if (error.code === 409) {
      console.log(`Attribute '${collectionId}.${key}' already exists`);
      return;
    }

    throw error;
  }
}

async function ensureIndex(
  databases,
  collectionId,
  key,
  type,
  attributes,
  orders = []
) {
  try {
    await databases.createIndex(
      DATABASE_ID,
      collectionId,
      key,
      type,
      attributes,
      orders
    );
    console.log(`Created index '${collectionId}.${key}'`);
  } catch (error) {
    if (error.code === 409) {
      console.log(`Index '${collectionId}.${key}' already exists`);
      return;
    }

    throw error;
  }
}

async function ensureSeeratSchema(databases) {
  await ensureCollection(databases, SEERAT_COLLECTION_ID, "Seerat", [
    Permission.read(Role.any()),
  ]);

  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "title", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "title",
      500,
      true
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "videoUrl", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "videoUrl",
      1000,
      true
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "thumbnailUrl", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "thumbnailUrl",
      1000,
      true
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "sortOrder", () =>
    databases.createIntegerAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "sortOrder",
      false,
      0
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "duration", () =>
    databases.createIntegerAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "duration",
      true,
      0
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "uploadDate", () =>
    databases.createDatetimeAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "uploadDate",
      true
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "channelName", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "channelName",
      200,
      true
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "channelId", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "channelId",
      100,
      true
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "youtubeId", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "youtubeId",
      50,
      true
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "audioId", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "audioId",
      255,
      false
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "cutAudio", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "cutAudio",
      255,
      false
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "cutDuration", () =>
    databases.createIntegerAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "cutDuration",
      false,
      0
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "cutSegments", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "cutSegments",
      50000,
      false
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "cutStatus", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "cutStatus",
      32,
      false
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "exclude", () =>
    databases.createBooleanAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "exclude",
      false
    )
  );
  await ensureAttribute(databases, SEERAT_COLLECTION_ID, "views", () =>
    databases.createIntegerAttribute(
      DATABASE_ID,
      SEERAT_COLLECTION_ID,
      "views",
      true,
      0
    )
  );

  await ensureIndex(
    databases,
    SEERAT_COLLECTION_ID,
    "title_search",
    IndexType.Fulltext,
    ["title"]
  );
  await ensureIndex(
    databases,
    SEERAT_COLLECTION_ID,
    "youtubeId_unique",
    IndexType.Unique,
    ["youtubeId"]
  );
  await ensureIndex(
    databases,
    SEERAT_COLLECTION_ID,
    "uploadDate_desc",
    IndexType.Key,
    ["uploadDate"],
    ["DESC"]
  );
  await ensureIndex(
    databases,
    SEERAT_COLLECTION_ID,
    "uploadDate_asc",
    IndexType.Key,
    ["uploadDate"],
    ["ASC"]
  );
  await ensureIndex(
    databases,
    SEERAT_COLLECTION_ID,
    "sortOrder_asc",
    IndexType.Key,
    ["sortOrder"],
    ["ASC"]
  );
  await ensureIndex(
    databases,
    SEERAT_COLLECTION_ID,
    "views_desc",
    IndexType.Key,
    ["views"],
    ["DESC"]
  );
  await ensureIndex(
    databases,
    SEERAT_COLLECTION_ID,
    "channelId_index",
    IndexType.Key,
    ["channelId"]
  );
}

async function ensureChannelsSchema(databases) {
  await ensureCollection(databases, CHANNELS_COLLECTION_ID, "Channels", [
    Permission.read(Role.any()),
  ]);

  await ensureAttribute(databases, CHANNELS_COLLECTION_ID, "channelId", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      CHANNELS_COLLECTION_ID,
      "channelId",
      255,
      true
    )
  );
  await ensureAttribute(databases, CHANNELS_COLLECTION_ID, "channelName", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      CHANNELS_COLLECTION_ID,
      "channelName",
      255,
      true
    )
  );
  await ensureAttribute(databases, CHANNELS_COLLECTION_ID, "modeName", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      CHANNELS_COLLECTION_ID,
      "modeName",
      100,
      false
    )
  );
  await ensureAttribute(databases, CHANNELS_COLLECTION_ID, "modeOrder", () =>
    databases.createIntegerAttribute(
      DATABASE_ID,
      CHANNELS_COLLECTION_ID,
      "modeOrder",
      false,
      0
    )
  );
  await ensureAttribute(databases, CHANNELS_COLLECTION_ID, "type", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      CHANNELS_COLLECTION_ID,
      "type",
      20,
      false,
      "channel"
    )
  );
  await ensureAttribute(databases, CHANNELS_COLLECTION_ID, "playlistId", () =>
    databases.createStringAttribute(
      DATABASE_ID,
      CHANNELS_COLLECTION_ID,
      "playlistId",
      255,
      false
    )
  );
  await ensureAttribute(databases, CHANNELS_COLLECTION_ID, "naatCount", () =>
    databases.createIntegerAttribute(
      DATABASE_ID,
      CHANNELS_COLLECTION_ID,
      "naatCount",
      false,
      0,
      undefined,
      0
    )
  );
  await ensureAttribute(databases, CHANNELS_COLLECTION_ID, "lastUpdated", () =>
    databases.createDatetimeAttribute(
      DATABASE_ID,
      CHANNELS_COLLECTION_ID,
      "lastUpdated",
      false
    )
  );
  await ensureAttribute(databases, CHANNELS_COLLECTION_ID, "isOfficial", () =>
    databases.createBooleanAttribute(
      DATABASE_ID,
      CHANNELS_COLLECTION_ID,
      "isOfficial",
      true
    )
  );
  await ensureAttribute(databases, CHANNELS_COLLECTION_ID, "isOther", () =>
    databases.createBooleanAttribute(
      DATABASE_ID,
      CHANNELS_COLLECTION_ID,
      "isOther",
      true
    )
  );

  await ensureIndex(
    databases,
    CHANNELS_COLLECTION_ID,
    "modeOrder_asc",
    IndexType.Key,
    ["modeOrder"],
    ["ASC"]
  );
  await ensureIndex(
    databases,
    CHANNELS_COLLECTION_ID,
    "channelId_unique",
    IndexType.Unique,
    ["channelId"]
  );
  await ensureIndex(
    databases,
    CHANNELS_COLLECTION_ID,
    "channelName_index",
    IndexType.Key,
    ["channelName"],
    ["ASC"]
  );
}

async function deleteCollectionIfExists(databases, collectionId) {
  try {
    await databases.getCollection(DATABASE_ID, collectionId);
  } catch (error) {
    if (error.code === 404) {
      return;
    }

    throw error;
  }

  await databases.deleteCollection(DATABASE_ID, collectionId);
  console.log(`Deleted collection '${collectionId}'`);
}

async function deleteBucketIfExists(storage, bucketId) {
  try {
    await storage.getBucket(bucketId);
  } catch (error) {
    if (error.code === 404) {
      return;
    }

    throw error;
  }

  await storage.deleteBucket(bucketId);
  console.log(`Deleted bucket '${bucketId}'`);
}

async function ensureAudioBucket(storage) {
  try {
    const bucket = await storage.getBucket(AUDIO_BUCKET_ID);
    console.log(`Bucket '${AUDIO_BUCKET_ID}' already exists`);

    const desiredExtensions = ["m4a", "mp4", "mpeg", "mp3", "aac"];
    const currentExtensions = bucket.allowedFileExtensions || [];
    const needsUpdate =
      desiredExtensions.length !== currentExtensions.length ||
      desiredExtensions.some((ext) => !currentExtensions.includes(ext));

    if (needsUpdate) {
      await storage.updateBucket(
        AUDIO_BUCKET_ID,
        bucket.name,
        bucket.$permissions,
        bucket.fileSecurity,
        bucket.enabled,
        bucket.maximumFileSize,
        desiredExtensions,
        bucket.compression,
        bucket.encryption,
        bucket.antivirus
      );
      console.log(`Updated bucket '${AUDIO_BUCKET_ID}' allowed extensions`);
    }

    return;
  } catch (error) {
    if (error.code !== 404) {
      throw error;
    }
  }

  await storage.createBucket(
    AUDIO_BUCKET_ID,
    "Audio Files",
    [
      Permission.read(Role.any()),
      Permission.create(Role.users()),
      Permission.update(Role.users()),
      Permission.delete(Role.users()),
    ],
    false,
    true,
    100 * 1024 * 1024,
    ["m4a", "mp4", "mpeg", "mp3", "aac"],
    "none",
    false,
    true
  );
  console.log(`Created bucket '${AUDIO_BUCKET_ID}'`);
}

function upsertEnvVar(envContent, key, value) {
  const pattern = new RegExp(`^${key}=.*$`, "m");
  if (pattern.test(envContent)) {
    return envContent.replace(pattern, `${key}=${value}`);
  }

  const suffix = envContent.endsWith("\n") ? "" : "\n";
  return `${envContent}${suffix}${key}=${value}\n`;
}

function removeEnvVar(envContent, key) {
  return envContent.replace(new RegExp(`^${key}=.*(?:\\r?\\n)?`, "gm"), "");
}

function updateEnvFile(envPath) {
  let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";

  const values = {
    APPWRITE_ENDPOINT:
      process.env.APPWRITE_ENDPOINT ||
      process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ||
      process.env.ENDPOINT,
    EXPO_PUBLIC_APPWRITE_ENDPOINT:
      process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ||
      process.env.APPWRITE_ENDPOINT ||
      process.env.ENDPOINT,
    APPWRITE_PROJECT_ID:
      process.env.APPWRITE_PROJECT_ID ||
      process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ||
      process.env.PROJECTID,
    EXPO_PUBLIC_APPWRITE_PROJECT_ID:
      process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ||
      process.env.APPWRITE_PROJECT_ID ||
      process.env.PROJECTID,
    APPWRITE_API_KEY:
      process.env.APPWRITE_API_KEY ||
      process.env.APPWRITE_SECRET_KEY ||
      process.env.API_KEY,
    APPWRITE_DATABASE_ID: DATABASE_ID,
    EXPO_PUBLIC_APPWRITE_DATABASE_ID: DATABASE_ID,
    APPWRITE_SEERAT_DATABASE_ID: DATABASE_ID,
    APPWRITE_CHANNELS_COLLECTION_ID: CHANNELS_COLLECTION_ID,
    EXPO_PUBLIC_APPWRITE_CHANNELS_COLLECTION_ID: CHANNELS_COLLECTION_ID,
    APPWRITE_SEERAT_COLLECTION_ID: SEERAT_COLLECTION_ID,
    EXPO_PUBLIC_APPWRITE_SEERAT_COLLECTION_ID: SEERAT_COLLECTION_ID,
    APPWRITE_NAATS_COLLECTION_ID: SEERAT_COLLECTION_ID,
    EXPO_PUBLIC_APPWRITE_NAATS_COLLECTION_ID: SEERAT_COLLECTION_ID,
    APPWRITE_AUDIO_BUCKET_ID: AUDIO_BUCKET_ID,
    EXPO_PUBLIC_APPWRITE_AUDIO_BUCKET_ID: AUDIO_BUCKET_ID,
  };

  for (const [key, value] of Object.entries(values)) {
    if (value) {
      envContent = upsertEnvVar(envContent, key, value);
    }
  }

  const obsoleteKeys = [
    "APPWRITE_SHIFA_SHAREEF_COLLECTION_ID",
    "EXPO_PUBLIC_APPWRITE_SHIFA_SHAREEF_COLLECTION_ID",
    "APPWRITE_SHIFA_SHAREEF_BUCKET_ID",
    "EXPO_PUBLIC_APPWRITE_SHIFA_SHAREEF_BUCKET_ID",
    "APPWRITE_SHAMAIL_E_TIRMIZI_COLLECTION_ID",
    "EXPO_PUBLIC_APPWRITE_SHAMAIL_E_TIRMIZI_COLLECTION_ID",
    "APPWRITE_SHAMAIL_E_TIRMIZI_BUCKET_ID",
    "EXPO_PUBLIC_APPWRITE_SHAMAIL_E_TIRMIZI_BUCKET_ID",
    "APPWRITE_SEERAT_BUCKET_ID",
    "EXPO_PUBLIC_APPWRITE_SEERAT_BUCKET_ID",
  ];

  for (const key of obsoleteKeys) {
    envContent = removeEnvVar(envContent, key);
  }

  fs.writeFileSync(envPath, envContent.trimEnd() + "\n");
  console.log(`Updated env file: ${envPath}`);
}

async function main() {
  const config = loadEnvironment();
  validateConfig(config);

  console.log(`Using env file: ${config.envPath}`);
  console.log(`Endpoint: ${config.endpoint}`);
  console.log(`Project: ${config.projectId}`);

  const { databases, storage } = createClients(config);

  await ensureDatabase(databases);
  await ensureSeeratSchema(databases);
  await ensureChannelsSchema(databases);
  await ensureAudioBucket(storage);

  for (const id of LEGACY_RESOURCE_IDS) {
    await deleteCollectionIfExists(databases, id);
  }

  for (const id of LEGACY_RESOURCE_IDS) {
    await deleteBucketIfExists(storage, id);
  }
  await deleteBucketIfExists(storage, "seerat");

  updateEnvFile(config.envPath);

  console.log("");
  console.log("Provisioning complete");
  console.log(`Database: ${DATABASE_ID}`);
  console.log(`Collections: ${CHANNELS_COLLECTION_ID}, ${SEERAT_COLLECTION_ID}`);
  console.log(`Bucket: ${AUDIO_BUCKET_ID}`);
}

main().catch((error) => {
  console.error("Provisioning failed");
  console.error(error.message || error);
  process.exit(1);
});
