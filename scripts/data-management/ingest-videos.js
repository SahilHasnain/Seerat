#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");

const ROOT_DIR = path.join(__dirname, "..", "..");
const MOBILE_DIR = path.join(ROOT_DIR, "apps", "mobile");
const ENV_CANDIDATES = [
  path.join(MOBILE_DIR, ".env.local"),
  path.join(MOBILE_DIR, ".env"),
];

function loadEnv() {
  const envPath = ENV_CANDIDATES.find((candidate) => fs.existsSync(candidate));
  if (!envPath) {
    throw new Error(
      `No env file found. Expected one of: ${ENV_CANDIDATES.join(", ")}`
    );
  }

  dotenv.config({ path: envPath });
  return envPath;
}

function normalizeEnv() {
  process.env.APPWRITE_FUNCTION_PROJECT_ID =
    process.env.APPWRITE_FUNCTION_PROJECT_ID ||
    process.env.APPWRITE_PROJECT_ID ||
    process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ||
    process.env.PROJECTID;

  process.env.APPWRITE_ENDPOINT =
    process.env.APPWRITE_ENDPOINT ||
    process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ||
    process.env.ENDPOINT;

  process.env.APPWRITE_PROJECT_ID =
    process.env.APPWRITE_PROJECT_ID ||
    process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ||
    process.env.PROJECTID;

  process.env.APPWRITE_DATABASE_ID =
    process.env.APPWRITE_DATABASE_ID ||
    process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID ||
    process.env.EXPO_PUBLIC_DATABASE_ID;

  process.env.APPWRITE_NAATS_COLLECTION_ID =
    process.env.APPWRITE_NAATS_COLLECTION_ID ||
    process.env.EXPO_PUBLIC_APPWRITE_NAATS_COLLECTION_ID ||
    process.env.EXPO_PUBLIC_COLLECTION_ID;

  process.env.APPWRITE_CHANNELS_COLLECTION_ID =
    process.env.APPWRITE_CHANNELS_COLLECTION_ID ||
    process.env.EXPO_PUBLIC_APPWRITE_CHANNELS_COLLECTION_ID ||
    "channels";
}

function createMockContext() {
  return {
    req: {
      bodyJson: {},
      headers: {},
    },
    res: {
      json(data, status = 200) {
        console.log("\nResponse status:", status);
        console.log(JSON.stringify(data, null, 2));
        return data;
      },
      send(text, status = 200) {
        console.log("\nResponse status:", status);
        console.log(text);
        return text;
      },
    },
    log(message) {
      console.log(message);
    },
    error(message) {
      console.error(message);
    },
  };
}

async function main() {
  const envPath = loadEnv();
  normalizeEnv();

  const requiredVars = [
    "APPWRITE_FUNCTION_PROJECT_ID",
    "APPWRITE_API_KEY",
    "APPWRITE_DATABASE_ID",
    "APPWRITE_NAATS_COLLECTION_ID",
    "APPWRITE_CHANNELS_COLLECTION_ID",
    "YOUTUBE_API_KEY",
  ];

  const missingVars = requiredVars.filter((varName) => !process.env[varName]);
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(", ")}`);
  }

  console.log(`Using env file: ${envPath}`);
  console.log(`Project: ${process.env.APPWRITE_FUNCTION_PROJECT_ID}`);
  console.log(`Database: ${process.env.APPWRITE_DATABASE_ID}`);
  console.log(`Naats collection: ${process.env.APPWRITE_NAATS_COLLECTION_ID}`);
  console.log(`Channels collection: ${process.env.APPWRITE_CHANNELS_COLLECTION_ID}`);
  console.log("Running Appwrite ingestion function locally...\n");

  const handlerModule = await import(
    pathToFileUrl(path.join(ROOT_DIR, "functions", "ingest-videos", "src", "main.js"))
  );

  await handlerModule.default(createMockContext());
}

function pathToFileUrl(filePath) {
  const normalized = path.resolve(filePath).replace(/\\/g, "/");
  return `file:///${normalized}`;
}

main().catch((error) => {
  console.error("Local ingestion failed");
  console.error(error.message || error);
  process.exit(1);
});
