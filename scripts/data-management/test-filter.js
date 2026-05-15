#!/usr/bin/env node

/**
 * Test script to verify the video filtering logic
 * This simulates the filter without hitting the database
 */

// Baghdadi Sound & Video channel ID
const BAGHDADI_CHANNEL_ID = "UC-pKQ46ZSMkveYV7nKijWmQ";

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

// Test cases
const testCases = [
  // Should KEEP (return false = don't filter)
  {
    title: "Owais Raza Qadri - New Naat 2025",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: false,
    reason: "Has Owais + Raza + Qadri",
  },
  {
    title: "Owais Raza - Beautiful Kalam",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: false,
    reason: "Has Owais + Raza",
  },
  {
    title: "Owais Qadri - Heart Touching Naat",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: false,
    reason: "Has Owais + Qadri",
  },
  {
    title: "Owias Raza Qadri - 2025",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: false,
    reason: "Has Owias (variation) + Raza + Qadri",
  },
  {
    title: "Awais Raza Qadri - New Kalam",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: false,
    reason: "Has Awais (variation) + Raza + Qadri",
  },

  // Should FILTER OUT (return true = filter)
  {
    title: "Balaghal Ula Bi Kamaalihi - Alhaj Sajid Qadri - 2024",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: true,
    reason: "No Owais (has Sajid Qadri)",
  },
  {
    title: "Sohna Aya Te Saj Gae - Syed Furqan Qadri - 2024",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: true,
    reason: "No Owais (has Furqan Qadri)",
  },
  {
    title: "محفــــل ذکــــــــــــر حــــــــبیب ﷺ - PIB Colony - 2025",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: true,
    reason: "No Owais, Raza, or Qadri",
  },
  {
    title: "Salle Ala Nabiena Salle Ala Muhammadin - Jami Raza Qadri - 2024",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: true,
    reason: "No Owais (has Jami Raza Qadri)",
  },
  {
    title: "Allah Ho Allah Ho - Abdullah Qadri - 2024",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: true,
    reason: "No Owais (has Abdullah Qadri)",
  },
  {
    title: "Hafiz Tahir Qadri - New Naat 2024",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: true,
    reason: "No Owais (has Tahir Qadri)",
  },
  {
    title: "Owais - Solo Name",
    channelId: BAGHDADI_CHANNEL_ID,
    expected: true,
    reason: "Has Owais but no Raza or Qadri",
  },

  // Different channel (should never filter)
  {
    title: "Some Random Video",
    channelId: "UCyvdo5fpPSnidSsM-c7F9wg",
    expected: false,
    reason: "Different channel - no filtering",
  },
];

// Run tests
console.log("🧪 Testing Video Filter Logic\n");
console.log("=".repeat(80));

let passed = 0;
let failed = 0;

testCases.forEach((test, index) => {
  const result = shouldFilterVideo(test.channelId, test.title);
  const isCorrect = result === test.expected;

  if (isCorrect) {
    passed++;
    console.log(`✅ Test ${index + 1}: PASS`);
  } else {
    failed++;
    console.log(`❌ Test ${index + 1}: FAIL`);
  }

  console.log(`   Title: "${test.title}"`);
  console.log(`   Expected: ${test.expected ? "FILTER OUT" : "KEEP"}`);
  console.log(`   Got: ${result ? "FILTER OUT" : "KEEP"}`);
  console.log(`   Reason: ${test.reason}`);
  console.log();
});

console.log("=".repeat(80));
console.log(
  `\n📊 Results: ${passed} passed, ${failed} failed out of ${testCases.length} tests\n`,
);

if (failed > 0) {
  console.log("❌ Some tests failed! Please review the filter logic.");
  process.exit(1);
} else {
  console.log("✅ All tests passed! Filter logic is working correctly.");
  process.exit(0);
}
