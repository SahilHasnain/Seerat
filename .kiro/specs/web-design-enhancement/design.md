# Design Document

## Overview

This design document outlines the technical architecture and implementation approach for enhancing the Naat Platform web application to achieve design parity with the mobile application. The design emphasizes simplicity, consistency, and performance while adapting the mobile-first design patterns to desktop and tablet form factors.

The web application will maintain a clean, YouTube-like interface with dark mode theming, responsive layouts, and rich interactive components. All styling will be managed through Tailwind CSS with theme configuration in globals.css, ensuring maintainability and consistency.

## Architecture

### Technology Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS with @theme directive in globals.css
- **State Management**: React Context API for audio player state
- **Audio Playback**: HTML5 Audio API with custom controls
- **Data Fetching**: Server Components for initial load, Client Components for interactivity
- **Image Optimization**: Next.js Image component with lazy loading
- **Type Safety**: TypeScript with strict mode

### Component Architecture

```
app/
├── layout.tsx (Root layout with audio player provider)
├── page.tsx (Home page - server component)
├── globals.css (Theme configuration)
└── components/
    ├── NaatCard.tsx (Client component)
    ├── NaatGrid.tsx (Client component with infinite scroll)
    ├── SearchBar.tsx (Client component)
    ├── ChannelFilterBar.tsx (Client component)
    ├── SortFilterBar.tsx (Client component)
    ├── Navigation.tsx (Client component)
    ├── MiniPlayer.tsx (Client component)
    ├── FullPlayerModal.tsx (Client component)
    ├── SkeletonLoader.tsx (Client component)
    ├── EmptyState.tsx (Client component)
    └── BackToTopButton.tsx (Client component)
```

### State Management

```typescript
// Audio Player Context
interface AudioPlayerState {
  currentAudio: AudioMetadata | null;
  isPlaying: boolean;
  position: number;
  duration: number;
  volume: number;
  isLoading: boolean;
}

interface AudioPlayerActions {
  loadAndPlay: (audio: AudioMetadata) => Promise<void>;
  togglePlayPause: () => void;
  seek: (position: number) => void;
  setVolume: (volume: number) => void;
  stop: () => void;
}
```

## Components and Interfaces

### 1. Theme Configuration (globals.css)

```css
@import tailwindCss

@theme {
  /* Color Palette */
  --color-neutral-900: #171717;
  --color-neutral-800: #262626;
  --color-neutral-700: #404040;
  --color-neutral-600: #525252;
  --color-neutral-500: #737373;
  --color-neutral-400: #a3a3a3;
  --color-neutral-300: #d4d4d4;

  --color-primary-600: #2563eb;
  --color-accent-primary: #1db954;
  --color-accent-success: #10b981;
  --color-accent-error: #ef4444;
  --color-accent-warning: #f59e0b;

  /* Spacing Scale (4px base) */
  --spacing-1: 0.25rem; /* 4px */
  --spacing-2: 0.5rem; /* 8px */
  --spacing-3: 0.75rem; /* 12px */
  --spacing-4: 1rem; /* 16px */
  --spacing-6: 1.5rem; /* 24px */
  --spacing-8: 2rem; /* 32px */
  --spacing-12: 3rem; /* 48px */
  --spacing-16: 4rem; /* 64px */

  /* Typography */
  --font-size-xs: 0.75rem; /* 12px */
  --font-size-sm: 0.875rem; /* 14px */
  --font-size-base: 1rem; /* 16px */
  --font-size-lg: 1.125rem; /* 18px */
  --font-size-xl: 1.25rem; /* 20px */
  --font-size-2xl: 1.5rem; /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */

  /* Border Radius */
  --radius-lg: 0.5rem; /* 8px */
  --radius-xl: 0.75rem; /* 12px */
  --radius-2xl: 1rem; /* 16px */
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.25);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.4);
  /* Now these can be used in classes like this: bg-primary */
}

/* Base Styles */
body {
  background-color: var(--color-neutral-900);
  color: white;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-neutral-800);
}

::-webkit-scrollbar-thumb {
  background: var(--color-neutral-600);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-neutral-500);
}
```

### 2. NaatCard Component

**Purpose**: Display individual naat with thumbnail, metadata, and interactive states

**Props Interface**:

```typescript
interface NaatCardProps {
  naat: {
    $id: string;
    title: string;
    thumbnailUrl: string;
    duration: number;
    uploadDate: string;
    channelName: string;
    channelId: string;
    views: number;
    audioId?: string;
    youtubeId: string;
  };
  onPlay: (naatId: string) => void;
}
```

**Visual Design**:

- Container: `rounded-2xl bg-neutral-800 shadow-lg overflow-hidden`
- Thumbnail: 16:9 aspect ratio with `object-cover`
- Duration badge: Bottom-right, `bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg`
- Play icon: Centered overlay, 56x56px, `bg-black/30 rounded-full`
- Content padding: `p-4`
- Title: `text-base font-bold text-white line-clamp-2`
- Channel: `text-sm font-semibold text-neutral-300` with 👤 icon
- Metadata: `text-xs text-neutral-400` with 📅 and 👁️ icons
- Hover state: `opacity-90 transition-opacity duration-150`

**Behavior**:

- Click anywhere on card to play naat
- Show skeleton loader while thumbnail loads
- Display fallback UI (🎵 icon + "No Thumbnail") on image error
- Lazy load images using Next.js Image component

### 3. NaatGrid Component

**Purpose**: Responsive grid container with infinite scroll

**Props Interface**:

```typescript
interface NaatGridProps {
  initialNaats: Naat[];
  channelId?: string | null;
  sortOption: SortOption;
  searchQuery?: string;
}
```

**Layout Breakpoints**:

- Mobile (<768px): 1 column, `px-4 gap-4`
- Tablet (768-1024px): 2 columns, `px-6 gap-6`
- Desktop (1024-1280px): 3 columns, `px-8 gap-6`
- Large Desktop (>1280px): 4 columns, `px-8 gap-6`

**Grid Classes**:

```css
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
```

**Infinite Scroll**:

- Use Intersection Observer API
- Trigger load when user scrolls within 500px of bottom
- Load 20 naats per batch
- Show loading spinner at bottom during fetch

### 4. Audio Player System

#### MiniPlayer Component

**Purpose**: Persistent bottom bar showing current playback

**Visual Design**:

- Position: Fixed bottom, `z-50`, height 72px
- Background: `bg-neutral-800 border-t border-neutral-700`
- Progress bar: Top edge, 2px height, `bg-neutral-700` track, `bg-accent-primary` fill
- Layout: Flex row with thumbnail (56x56px), text content, controls
- Thumbnail: `rounded-lg overflow-hidden`
- Title: `text-sm font-semibold text-white line-clamp-1`
- Channel: `text-xs text-neutral-400 line-clamp-1`
- Play/Pause button: `w-10 h-10 rounded-full bg-neutral-700`
- Close button: `w-10 h-10`

**Behavior**:

- Slide up animation when audio loads (spring animation, 300ms)
- Click anywhere to expand to full player
- Click play/pause to toggle playback
- Click close to stop and hide player
- Update progress bar in real-time (every 100ms)

#### FullPlayerModal Component

**Purpose**: Expanded player with full controls

**Visual Design**:

- Overlay: `fixed inset-0 bg-black/90 z-50`
- Container: Centered, max-width 480px, `bg-neutral-800 rounded-2xl p-8`
- Thumbnail: 320x320px, `rounded-xl shadow-lg`
- Title: `text-2xl font-bold text-white text-center`
- Channel: `text-lg text-neutral-300 text-center`
- Progress slider: Custom styled range input
- Time display: `text-sm text-neutral-400` (current / total)
- Controls: Large buttons (48x48px) for previous, play/pause, next
- Volume slider: Vertical or horizontal based on space
- Close button: Top-right corner

**Behavior**:

- Fade in/out animation (200ms)
- Click outside to close
- Keyboard controls: Space (play/pause), Arrow keys (seek), Esc (close)
- Draggable progress slider
- Volume control with mute toggle

### 5. Search and Filter Components

#### SearchBar Component

**Visual Design**:

- Container: `rounded-xl bg-neutral-800 border border-neutral-700 px-4 py-3.5`
- Icon: 🔍 or SVG search icon, `text-neutral-400`
- Input: `bg-transparent text-white placeholder-neutral-500 outline-none`
- Clear button: Appears when text entered, `text-neutral-400 hover:text-white`

**Behavior**:

- Debounce input (300ms) before triggering search
- Show clear button when query exists
- Focus state: `ring-2 ring-primary-600`

#### ChannelFilterBar Component

**Visual Design**:

- Container: Horizontal scroll, `flex gap-2 px-4 py-3 bg-neutral-800 border-b border-neutral-700`
- Chip: `px-4 py-2 rounded-full text-sm font-medium transition-colors`
- Active chip: `bg-primary-600 text-white`
- Inactive chip: `bg-neutral-700 text-neutral-300 hover:bg-neutral-600`

**Behavior**:

- Horizontal scroll with hidden scrollbar
- Click to select channel
- "All Channels" option to clear filter

#### SortFilterBar Component

**Visual Design**:

- Container: `flex gap-2 px-4 py-3 bg-neutral-800`
- Button: `px-4 py-2 rounded-lg text-sm font-medium transition-colors`
- Active: `bg-neutral-700 text-white`
- Inactive: `text-neutral-400 hover:text-white hover:bg-neutral-700`

**Options**:

- For You (personalized algorithm)
- Latest (newest first)
- Most Viewed (popularity)
- Oldest (oldest first)

### 6. Navigation Component

**Visual Design**:

- Container: `bg-neutral-800 border-b border-neutral-700 h-16`
- Logo: `text-xl font-bold text-white`
- Links: `text-neutral-300 hover:text-white px-3 py-2 rounded-lg hover:bg-neutral-700`
- Active link: `text-white bg-neutral-700`

**Desktop Layout (>1024px)**:

- Horizontal nav with inline links
- Logo left, links center, search icon right

**Mobile Layout (<1024px)**:

- Hamburger menu icon
- Slide-in drawer from left
- Full-height overlay

### 7. Skeleton Loader Component

**Visual Design**:

- Match NaatCard dimensions exactly
- Thumbnail: `aspect-video bg-neutral-800 rounded-t-2xl`
- Content: `p-4 bg-neutral-800 rounded-b-2xl`
- Lines: `bg-neutral-700 rounded h-4` with varying widths
- Animation: Pulse effect using CSS animation

```css
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.skeleton {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### 8. Empty State Component

**Visual Design**:

- Container: `flex flex-col items-center justify-center py-20 px-4`
- Icon: `text-7xl mb-4` (emoji or SVG)
- Message: `text-lg text-neutral-400 text-center leading-relaxed max-w-sm`
- Action button (optional): `mt-6 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700`

**Variants**:

- No content: 🎵 "No naats available yet. Check back soon!"
- No search results: 🔍 "No naats found matching your search."
- Network error: ⚠️ "Unable to connect. Please check your internet connection." + Retry button

### 9. Back to Top Button

**Visual Design**:

- Position: Fixed bottom-right, `z-40`
- Button: `w-12 h-12 rounded-full bg-neutral-700 shadow-lg`
- Icon: ↑ arrow, `text-white text-xl`
- Hover: `bg-neutral-600`

**Behavior**:

- Show when scrolled >500px from top
- Fade in/out animation (200ms)
- Smooth scroll to top on click (800ms duration)

## Data Models

### Naat Interface

```typescript
interface Naat {
  $id: string;
  title: string;
  thumbnailUrl: string;
  duration: number; // seconds
  uploadDate: string; // ISO 8601
  channelName: string;
  channelId: string;
  views: number;
  audioId?: string;
  youtubeId: string;
  videoUrl: string;
}
```

### AudioMetadata Interface

```typescript
interface AudioMetadata {
  audioUrl: string;
  title: string;
  channelName: string;
  thumbnailUrl: string;
  audioId?: string;
  youtubeId: string;
  isLocalFile?: boolean;
}
```

### SortOption Type

```typescript
type SortOption = "forYou" | "latest" | "mostViewed" | "oldest";
```

### Channel Interface

```typescript
interface Channel {
  $id: string;
  name: string;
  thumbnailUrl?: string;
}
```

## Error Handling

### Image Loading Errors

```typescript
const [imageError, setImageError] = useState(false);

<Image
  src={thumbnailUrl}
  alt={title}
  onError={() => setImageError(true)}
  fallback={<FallbackUI />}
/>
```

### Audio Loading Errors

```typescript
try {
  await loadAndPlay(audioMetadata);
} catch (error) {
  console.error("Audio load failed:", error);
  toast.error("Failed to load audio. Please try again.");
}
```

### API Errors

```typescript
try {
  const naats = await appwriteService.getNaats(limit, offset, sort);
  return naats;
} catch (error) {
  console.error("API error:", error);
  return { error: "Failed to load naats", naats: [] };
}
```

### Network Errors

- Display empty state with retry button
- Cache last successful response
- Implement exponential backoff for retries

## Testing Strategy

### Unit Tests

**Components to Test**:

- NaatCard: Rendering, click handlers, image error handling
- SearchBar: Input debouncing, clear functionality
- FilterBars: Selection state, click handlers
- EmptyState: Different variants, action button
- SkeletonLoader: Animation, correct dimensions

**Test Framework**: Jest + React Testing Library

**Example Test**:

```typescript
describe('NaatCard', () => {
  it('should display naat metadata correctly', () => {
    render(<NaatCard naat={mockNaat} onPlay={jest.fn()} />);
    expect(screen.getByText(mockNaat.title)).toBeInTheDocument();
    expect(screen.getByText(mockNaat.channelName)).toBeInTheDocument();
  });

  it('should call onPlay when clicked', () => {
    const onPlay = jest.fn();
    render(<NaatCard naat={mockNaat} onPlay={onPlay} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onPlay).toHaveBeenCalledWith(mockNaat.$id);
  });
});
```

### Integration Tests

**Scenarios to Test**:

- Search and filter interaction
- Audio player state management
- Infinite scroll loading
- Navigation between pages with persistent player

### E2E Tests

**Critical Paths**:

- Browse naats → Play audio → Navigate pages (player persists)
- Search naats → Filter by channel → Sort results
- Mobile responsive behavior
- Keyboard navigation

**Test Framework**: Playwright

### Accessibility Tests

**Tools**: axe-core, WAVE

**Checks**:

- Color contrast ratios
- ARIA labels and roles
- Keyboard navigation
- Screen reader compatibility
- Focus management

### Performance Tests

**Metrics to Monitor**:

- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.5s
- Cumulative Layout Shift (CLS) < 0.1

**Tools**: Lighthouse, WebPageTest

## Performance Optimizations

### Image Optimization

```typescript
<Image
  src={thumbnailUrl}
  alt={title}
  width={400}
  height={225}
  loading="lazy"
  placeholder="blur"
  blurDataURL={generateBlurDataURL()}
/>
```

### Code Splitting

- Dynamic imports for heavy components (FullPlayerModal)
- Route-based code splitting (Next.js automatic)
- Lazy load audio player context only when needed

### Caching Strategy

```typescript
// API Response Cache
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCachedData(key: string) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}
```

### Debouncing and Throttling

```typescript
// Search input debouncing
const debouncedSearch = useMemo(
  () =>
    debounce((query: string) => {
      performSearch(query);
    }, 300),
  [],
);

// Scroll event throttling
const throttledScroll = useMemo(
  () =>
    throttle(() => {
      checkScrollPosition();
    }, 100),
  [],
);
```

### Virtual Scrolling

For very long lists (>100 items), consider implementing virtual scrolling using `react-window` or `react-virtual`.

## Responsive Design Patterns

### Mobile-First Approach

Start with mobile styles, then add breakpoints for larger screens:

```css
/* Mobile (default) */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Touch vs Mouse Interactions

```typescript
// Detect touch device
const isTouchDevice = 'ontouchstart' in window;

// Adjust hover effects
className={`
  ${isTouchDevice ? 'active:opacity-90' : 'hover:opacity-90'}
`}
```

### Responsive Typography

```css
/* Mobile */
.title {
  font-size: 1rem;
}

/* Tablet+ */
@media (min-width: 768px) {
  .title {
    font-size: 1.125rem;
  }
}

/* Desktop+ */
@media (min-width: 1024px) {
  .title {
    font-size: 1.25rem;
  }
}
```

## Accessibility Considerations

### Keyboard Navigation

- Tab order follows visual flow
- Focus indicators visible on all interactive elements
- Skip to main content link
- Keyboard shortcuts documented and accessible

### Screen Reader Support

```typescript
<button
  aria-label={`Play ${title} by ${channelName}`}
  aria-pressed={isPlaying}
>
  {isPlaying ? 'Pause' : 'Play'}
</button>

<div role="region" aria-label="Audio player">
  <MiniPlayer />
</div>
```

### Color Contrast

All text meets WCAG AA standards:

- White on neutral-900: 15.3:1 (AAA)
- Neutral-300 on neutral-900: 7.2:1 (AAA)
- Neutral-400 on neutral-900: 5.1:1 (AA)
- Primary-600 on neutral-900: 4.8:1 (AA)

### Focus Management

```typescript
// Trap focus in modal
useEffect(() => {
  if (isOpen) {
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    firstElement?.focus();

    // Handle Tab key
    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }
}, [isOpen]);
```

## Browser Compatibility

### Target Browsers

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+
- Chrome Android 90+

### Polyfills

- Intersection Observer (for older browsers)
- CSS Grid (fallback to flexbox if needed)

### Progressive Enhancement

- Core functionality works without JavaScript
- Enhanced features layer on top
- Graceful degradation for unsupported features

## Deployment Considerations

### Environment Variables

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-project-id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your-database-id
NEXT_PUBLIC_APPWRITE_COLLECTION_ID=your-collection-id
```

### Build Optimization

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ["cloud.appwrite.io"],
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};
```

### CDN Configuration

- Serve static assets from CDN
- Cache images with long TTL
- Use edge caching for API responses

## Migration Strategy

### Phase 1: Foundation (Week 1)

- Set up theme in globals.css
- Update layout with dark mode
- Create base component structure

### Phase 2: Core Components (Week 2)

- Implement enhanced NaatCard
- Build responsive grid
- Add skeleton loaders and empty states

### Phase 3: Interactivity (Week 3)

- Implement search and filters
- Add navigation enhancements
- Build audio player (mini + full)

### Phase 4: Polish (Week 4)

- Performance optimization
- Accessibility audit and fixes
- Cross-browser testing
- Documentation

## Success Metrics

### Performance

- Lighthouse score: 90+ (desktop), 80+ (mobile)
- FCP < 1.5s
- LCP < 2.5s
- CLS < 0.1

### Accessibility

- WCAG AA compliance: 100%
- Keyboard navigation: All features accessible
- Screen reader compatibility: Verified with NVDA/JAWS

### User Experience

- Bounce rate: < 40%
- Average session duration: > 5 minutes
- Pages per session: > 3

### Technical

- Zero console errors in production
- API error rate: < 1%
- Image load success rate: > 99%
