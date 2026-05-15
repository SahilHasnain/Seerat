# For You Feed - Visual Guide

## User Flow

```
┌─────────────────────────────────────────┐
│         User Opens App                  │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│   Default: "For You" ✨ Feed            │
│   (Smart personalized recommendations)  │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│   Algorithm Checks:                     │
│   • Session cache (valid for 1 hour?)   │
│   • If yes → Use cached order           │
│   • If no → Generate new order          │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│   Generate New Order:                   │
│   1. Fetch 100 recent naats             │
│   2. Get watch history (last 100)       │
│   3. Score each naat                    │
│   4. Apply weighted shuffle             │
│   5. Cache result                       │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│   User Sees Personalized Feed:          │
│   • Mix of new & popular                │
│   • Different channels                  │
│   • Mostly unwatched content            │
│   • Some surprises                      │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│   User Plays a Naat                     │
│   → Automatically tracked in history    │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│   Next Visit (or Pull-to-Refresh):      │
│   • New order generated                 │
│   • Watched naats deprioritized         │
│   • Fresh recommendations               │
└─────────────────────────────────────────┘
```

## Algorithm Scoring

```
For each naat, calculate:

┌──────────────────────────────────────────────┐
│  TOTAL SCORE = Weighted Sum of:             │
├──────────────────────────────────────────────┤
│                                              │
│  Recency Score (25%)                         │
│  ├─ Newer = Higher                           │
│  └─ Exponential decay over time             │
│                                              │
│  Engagement Score (30%)                      │
│  ├─ More views = Higher                      │
│  └─ Normalized by max views                 │
│                                              │
│  Diversity Score (20%)                       │
│  ├─ Less frequent channel = Higher           │
│  └─ Penalizes repeated channels             │
│                                              │
│  Unseen Score (15%)                          │
│  ├─ Not in watch history = 1.0              │
│  └─ In watch history = 0.0                  │
│                                              │
│  Random Score (10%)                          │
│  └─ Pure randomness for discovery           │
│                                              │
└──────────────────────────────────────────────┘

Then apply weighted shuffle:
Higher scored items more likely to appear first
```

## Example Scoring

```
Naat A: Uploaded yesterday, 10K views, Channel X, Unwatched
├─ Recency:    0.97 × 0.25 = 0.24
├─ Engagement: 0.80 × 0.30 = 0.24
├─ Diversity:  0.90 × 0.20 = 0.18
├─ Unseen:     1.00 × 0.15 = 0.15
└─ Random:     0.65 × 0.10 = 0.07
                    TOTAL = 0.88 ⭐⭐⭐

Naat B: Uploaded 30 days ago, 50K views, Channel X, Watched
├─ Recency:    0.50 × 0.25 = 0.13
├─ Engagement: 1.00 × 0.30 = 0.30
├─ Diversity:  0.74 × 0.20 = 0.15  (Channel X seen recently)
├─ Unseen:     0.00 × 0.15 = 0.00  (Already watched!)
└─ Random:     0.42 × 0.10 = 0.04
                    TOTAL = 0.62 ⭐⭐

Naat C: Uploaded 60 days ago, 2K views, Channel Y, Unwatched
├─ Recency:    0.25 × 0.25 = 0.06
├─ Engagement: 0.16 × 0.30 = 0.05
├─ Diversity:  1.00 × 0.20 = 0.20  (Channel Y not seen)
├─ Unseen:     1.00 × 0.15 = 0.15
└─ Random:     0.88 × 0.10 = 0.09
                    TOTAL = 0.55 ⭐

Result: Naat A most likely first, then B, then C
But randomness ensures variety!
```

## Filter Bar UI

```
┌────────────────────────────────────────────────┐
│  [✨ For You] [🆕 Latest] [🔥 Popular] [📅 Oldest] │
│   ▲ Selected                                   │
└────────────────────────────────────────────────┘

Default: "For You" ✨
- Smart algorithm
- Personalized
- Changes each visit

Other filters still available:
- Latest: Chronological (newest first)
- Popular: By view count
- Oldest: Chronological (oldest first)
```

## Session Caching

```
Visit 1 (10:00 AM)
├─ Generate order: [A, C, B, D, E, ...]
├─ Cache for 1 hour
└─ User scrolls, sees consistent order

Visit 2 (10:30 AM) - Same session
├─ Load from cache: [A, C, B, D, E, ...]
└─ Same order, smooth experience

Visit 3 (11:30 AM) - Cache expired
├─ Generate NEW order: [D, A, E, C, B, ...]
├─ Cache for 1 hour
└─ Fresh recommendations!

Pull-to-Refresh (anytime)
├─ Clear cache immediately
├─ Generate NEW order
└─ Fresh content now!
```

## Watch History Impact

```
Initial State (No history)
┌─────────────────────────────────────┐
│  All naats have equal "unseen" bonus│
│  Algorithm focuses on recency +     │
│  engagement + diversity             │
└─────────────────────────────────────┘

After Watching 5 Naats
┌─────────────────────────────────────┐
│  Watched: [A, B, C, D, E]           │
│  These get 0 points for "unseen"    │
│  Less likely to appear first        │
│  But can still appear (other factors)│
└─────────────────────────────────────┘

After Watching 50 Naats
┌─────────────────────────────────────┐
│  Watched: [A, B, C, ..., Z, ...]    │
│  Large pool of "seen" content       │
│  Algorithm strongly favors new      │
│  Great content discovery!           │
└─────────────────────────────────────┘
```

## Performance Flow

```
User Action: Open App
     │
     ▼
Check Session Cache (Fast - AsyncStorage)
     │
     ├─ Cache Hit (< 1 hour old)
     │  └─> Return cached order (Instant!)
     │
     └─ Cache Miss
        │
        ▼
   Fetch 100 Naats (Network call)
        │
        ▼
   Get Watch History (Fast - AsyncStorage)
        │
        ▼
   Run Algorithm (Fast - in-memory)
   ├─ Score each naat
   └─ Weighted shuffle
        │
        ▼
   Cache Result (Fast - AsyncStorage)
        │
        ▼
   Return Ordered Naats
        │
        ▼
   Display to User (Smooth!)
```

## Comparison: Before vs After

### Before (Simple Random)

```
Visit 1: [A, B, C, D, E]
Visit 2: [E, A, D, B, C]  ← Completely random
Visit 3: [B, E, A, C, D]  ← No intelligence

Problems:
❌ No learning from behavior
❌ Can show same content repeatedly
❌ No freshness priority
❌ No channel diversity
❌ Jarring reordering mid-session
```

### After (Smart Algorithm)

```
Visit 1: [New1, Popular1, New2, Diverse1, ...]
         ↑ Fresh  ↑ Engaging  ↑ Fresh  ↑ Variety

Visit 2 (same session): Same order ✓
Visit 3 (new session): [New3, Diverse2, Popular2, ...]
                        ↑ Different but still smart

Benefits:
✅ Learns from watch history
✅ Prioritizes unwatched content
✅ Balances new & popular
✅ Ensures channel diversity
✅ Consistent during session
✅ Fresh on each visit
```

## Weight Tuning Guide

Want to adjust the algorithm? Edit `services/forYouAlgorithm.ts`:

```typescript
const WEIGHTS = {
  RECENCY: 0.25, // ↑ More new content
  ENGAGEMENT: 0.3, // ↑ More popular content
  DIVERSITY: 0.2, // ↑ More channel variety
  UNSEEN: 0.15, // ↑ More unwatched content
  RANDOM: 0.1, // ↑ More surprises
};

// Example: Prioritize freshness
const WEIGHTS = {
  RECENCY: 0.4, // Increased!
  ENGAGEMENT: 0.2, // Decreased
  DIVERSITY: 0.2,
  UNSEEN: 0.15,
  RANDOM: 0.05,
};

// Example: Prioritize popular content
const WEIGHTS = {
  RECENCY: 0.15,
  ENGAGEMENT: 0.45, // Increased!
  DIVERSITY: 0.15,
  UNSEEN: 0.15,
  RANDOM: 0.1,
};
```

## Monitoring Dashboard (Future)

```
┌─────────────────────────────────────────┐
│  For You Feed Analytics                 │
├─────────────────────────────────────────┤
│                                         │
│  Engagement Rate:  ████████░░ 82%      │
│  (vs Latest:       ██████░░░░ 65%)     │
│                                         │
│  Avg Session Time: 12.5 min            │
│  (vs Latest:       8.3 min)            │
│                                         │
│  Content Diversity: ████████░ 8.2/10   │
│  (Unique channels per session)         │
│                                         │
│  Return Rate:      ████████░░ 78%      │
│  (Users coming back next day)          │
│                                         │
└─────────────────────────────────────────┘
```

---

**The Result**: A smart, personalized feed that learns from user behavior and provides fresh, engaging content on every visit! 🎉
