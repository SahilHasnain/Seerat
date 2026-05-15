#!/usr/bin/env node

/**
 * Test script to verify the video filtering logic against real YouTube data
 * This fetches videos from YouTube API but doesn't touch the database
 */

require("dotenv").config({ path: "apps/mobile/.env.appwrite" });

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const BAGHDADI_CHANNEL_ID = "UC-pKQ46ZSMkveYV7nKijWmQ";

if (!YOUTUBE_API_KEY) {
  console.error("❌ Missing YOUTUBE_API_KEY in environment variables");
  process.exit(1);
}

/**
 * Check if a video should be filtered out based on channel and title rules
 * @param {string} channelId - The YouTube channel ID
 * @param {string} title - The video title
 * @returns {boolean} - true if video should be filtered out (excluded)
 */
function shouldFilterVideo(channelId, title) {
  // Check if this is the Baghdadi channel
  if (channelId !== BAGHDADI_CHANNEL_ID) {
    return false; // Don't filter videos from other channels
  }

  // For Baghdadi channel, only include videos with Owais Raza/Qadri in title
  const titleLower = title.toLowerCase();

  // Common spelling variations for "Owais"
  const owaisVariations = [
    "owais",
    "owias",
    "owes",
    "owaiz",
    "awais",
    "awaiz",
    "uwais",
    "uwaiz",
  ];

  // Check if title contains "Owais" (any variation)
  const hasOwais = owaisVariations.some((owais) => titleLower.includes(owais));

  // Check if title contains "Raza" (exact, no variations)
  const hasRaza = titleLower.includes("raza");

  // Check if title contains "Qadri" (exact, no variations)
  const hasQadri = titleLower.includes("qadri");

  // Must match one of these patterns:
  // 1. Owais + Raza
  // 2. Owais + Qadri
  // 3. Owais + Raza + Qadri
  const isOwaisVideo = hasOwais && (hasRaza || hasQadri);

  // Filter out (return true) if it does NOT match the pattern
  return !isOwaisVideo;
}

async function fetchYouTubeVideos(channelId, maxResults = 100) {
  const baseUrl = "https://www.googleapis.com/youtube/v3";

  try {
    console.log(`\n📺 Fetching videos from YouTube for channel: ${channelId}`);

    // First, get the uploads playlist ID and channel name
    const channelResponse = await fetch(
      `${baseUrl}/channels?part=contentDetails,snippet&id=${channelId}&key=${YOUTUBE_API_KEY}`,
    );

    if (!channelResponse.ok) {
      throw new Error(
        `YouTube API error: ${channelResponse.status} ${channelResponse.statusText}`,
      );
    }

    const channelData = await channelResponse.json();

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error(`Channel not found: ${channelId}`);
    }

    const channelName = channelData.items[0].snippet.title;
    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    console.log(`   Channel: ${channelName}`);
    console.log(`   Fetching up to ${maxResults} videos...`);

    // Fetch videos from the uploads playlist
    const allVideoItems = [];
    let pageToken = null;
    const perPage = 50;

    while (allVideoItems.length < maxResults) {
      let playlistUrl = `${baseUrl}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${perPage}&key=${YOUTUBE_API_KEY}`;

      if (pageToken) {
        playlistUrl += `&pageToken=${pageToken}`;
      }

      const playlistResponse = await fetch(playlistUrl);

      if (!playlistResponse.ok) {
        throw new Error(
          `YouTube API error: ${playlistResponse.status} ${playlistResponse.statusText}`,
        );
      }

      const playlistData = await playlistResponse.json();

      if (!playlistData.items || playlistData.items.length === 0) {
        break;
      }

      allVideoItems.push(...playlistData.items);

      pageToken = playlistData.nextPageToken;
      if (!pageToken) break;
    }

    const limitedVideoItems = allVideoItems.slice(0, maxResults);
    console.log(`   ✅ Fetched ${limitedVideoItems.length} videos\n`);

    return {
      channelId,
      channelName,
      videos: limitedVideoItems.map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
      })),
    };
  } catch (error) {
    throw new Error(`Failed to fetch YouTube videos: ${error.message}`);
  }
}

async function testFilter() {
  console.log("🧪 Testing Video Filter Against Real YouTube Data\n");
  console.log("=".repeat(80));

  try {
    // Fetch videos from Baghdadi channel (fetch more to find non-Owais videos)
    const channelData = await fetchYouTubeVideos(BAGHDADI_CHANNEL_ID, 500);

    let keptCount = 0;
    let filteredCount = 0;

    const keptVideos = [];
    const filteredVideos = [];

    console.log("\n📊 Processing videos...\n");

    channelData.videos.forEach((video) => {
      const shouldFilter = shouldFilterVideo(
        channelData.channelId,
        video.title,
      );

      if (shouldFilter) {
        filteredCount++;
        filteredVideos.push(video);
      } else {
        keptCount++;
        keptVideos.push(video);
      }
    });

    // Print summary
    console.log("=".repeat(80));
    console.log("\n📈 SUMMARY:");
    console.log(`   Total videos fetched: ${channelData.videos.length}`);
    console.log(`   ✅ Videos to KEEP: ${keptCount}`);
    console.log(`   🚫 Videos to FILTER OUT: ${filteredCount}`);

    // Show sample of kept videos
    console.log("\n✅ SAMPLE OF KEPT VIDEOS (first 10):");
    console.log("-".repeat(80));
    keptVideos.slice(0, 10).forEach((video, index) => {
      console.log(`${index + 1}. ${video.title}`);
    });

    // Show sample of filtered videos
    console.log("\n🚫 SAMPLE OF FILTERED VIDEOS (first 10):");
    console.log("-".repeat(80));
    filteredVideos.slice(0, 10).forEach((video, index) => {
      console.log(`${index + 1}. ${video.title}`);
    });

    // Show all filtered videos if there are few
    if (filteredCount > 0 && filteredCount <= 20) {
      console.log("\n🚫 ALL FILTERED VIDEOS:");
      console.log("-".repeat(80));
      filteredVideos.forEach((video, index) => {
        console.log(`${index + 1}. ${video.title}`);
      });
    }

    console.log("\n" + "=".repeat(80));
    console.log("\n✅ Test complete! Review the results above.");
    console.log(
      "\nIf the filtered videos look correct (non-Owais naats), the filter is working!",
    );
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    process.exit(1);
  }
}

testFilter();
