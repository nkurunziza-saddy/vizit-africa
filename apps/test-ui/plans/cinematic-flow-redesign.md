# Cinematic Tourism Flow - Landing Page Redesign

## Problem Analysis

The current page has **too many competing scroll effects** that don't serve the tourism narrative:

- Circular journey is abstract and confusing
- Too many animation types (cards, arcs, horizontal, floating) without purpose
- No clear story arc for the traveler

## New Cinematic Structure

### Narrative Arc: "The Journey of Discovery"

```
1. AWAKEN (Hero) → 2. IMMERSE (Parallax Forest) → 3. DISCOVER (Card Deck) →
4. EXPERIENCE (Horizontal Journey) → 5. CHOOSE (Featured Listings) → 6. TRUST (Testimonials) → 7. COMMIT (CTA)
```

---

## Section-by-Section Breakdown

### 1. HERO - "The Call"

**Purpose:** Immediate emotional hook
**Duration:** 100vh
**Animation:**

- Full-bleed video or cinematic image
- Text fades in with dramatic timing
- Single CTA button
- Floating leaves (subtle, ambient)
- **NO parallax** - keep it clean and focused

**Content:**

- Headline: "Rwanda Waits For You"
- Sub: "A journey that changes everything"
- CTA: "Begin Your Story"

---

### 2. IMMERSE - "Enter the Forest"

**Purpose:** Transition from real world to Rwanda
**Duration:** 150vh (pinned)
**Animation:**

- Multi-layer parallax forest (5 depths)
- Trees "grow" as you scroll
- Mist clears revealing the path
- Text: "Leave the ordinary behind"

**Why:** Sets the stage, creates atmosphere without overwhelming

---

### 3. DISCOVER - "The Regions"

**Purpose:** Introduce the 4 key destinations
**Duration:** 400vh (pinned, card deck)
**Animation:**

- **Card Deck ONLY** - cards slide over each other
- Each card: Full region reveal
- Progress indicator (leaf vine growing)
- No other competing animations

**Cards:**

1. Virunga - "Where Giants Roam"
2. Nyungwe - "Ancient Canopies"
3. Lake Kivu - "Waters of Peace"
4. Kigali - "Heart of Rwanda"

**Why:** Card deck is the strongest for storytelling - each region gets full attention

---

### 4. EXPERIENCE - "The Journey Through"

**Purpose:** Show the transition between landscapes
**Duration:** 400vh (horizontal scroll)
**Animation:**

- Horizontal scroll section
- 4 scenes blending into each other
- Parallax backgrounds at different speeds
- Text reveals per scene

**Scenes:**

1. Misty forest path (ground level)
2. Ascending through bamboo
3. Mountain vista
4. Lakeside sunset

**Why:** Horizontal break creates visual interest, simulates actual travel

---

### 5. CHOOSE - "Your Adventure"

**Purpose:** Convert interest to action
**Duration:** 100vh
**Animation:**

- Grid of featured listings
- Subtle hover effects only
- Clean, scannable layout
- **NO scroll animations** - let users focus

**Why:** This is the decision point - remove distractions

---

### 6. TRUST - "Traveler Stories"

**Purpose:** Social proof
**Duration:** 100vh
**Animation:**

- Testimonial cards
- Auto-rotating or manual
- Subtle fade transitions

**Why:** Builds confidence before final CTA

---

### 7. COMMIT - "Begin Today"

**Purpose:** Final conversion
**Duration:** 100vh
**Animation:**

- Cinematic background image
- Bold headline
- Single prominent CTA
- Urgency element (optional)

**Content:**

- "Your story starts with a single step"
- CTA: "Book Your Journey"

---

## Components to REMOVE

1. **CircularJourney** - Abstract, doesn't add value
2. **ArcContent** - Confusing, competes with card deck
3. **StackedDiscoveryCards** - Replaced by CardDeck
4. **FlyingBirds** - Distracting
5. **FloatingElements** in most sections - keep only in Hero

## Components to KEEP/ENHANCE

1. **ForestParallax** - Use in IMMERSE section only
2. **CardDeck** - Use in DISCOVER section
3. **HorizontalJourney** - Use in EXPERIENCE section
4. **FloatingElements** - Hero only, very subtle

## Technical Decisions

### Scroll Behavior

- Pin sections for cinematic moments (Immerse, Discover, Experience)
- Free scroll for decision sections (Choose, Trust, Commit)
- Total page height: ~1250vh

### Animation Philosophy

- **Purpose-driven:** Every animation serves the narrative
- **Rest points:** Free-scroll sections let users breathe
- **Progressive disclosure:** Information reveals as user commits scroll
- **No decoration:** Remove anything that doesn't advance the story

### Performance

- Maximum 3 pinned sections
- Lazy load images outside viewport
- Use `will-change` sparingly
- Test on mobile - horizontal scroll needs touch support

## Implementation Priority

1. Remove CircularJourney and ArcContent from page
2. Reorder sections to match narrative
3. Enhance CardDeck with better region content
4. Polish HorizontalJourney transitions
5. Simplify Choose/Trust/Commit sections
6. Add section transition effects (fade through mist)
