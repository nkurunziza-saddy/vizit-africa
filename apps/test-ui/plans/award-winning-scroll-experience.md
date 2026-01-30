# Award-Winning Scroll Experience Plan

## Design Philosophy: "The Orbital Journey"

Drawing inspiration from **ribbit.dk** (circular navigation), **ironhill.au** (immersive storytelling), and **Awwwards** winners, this redesign transforms the Rwanda tourism site into an **orbital navigation experience** where users journey through content in a circular, immersive flow.

---

## Key Concepts from Award-Winning Sites

### 1. **Orbital Navigation System** (from ribbit.dk)

**Concept:** Content arranged in a circular/orbital pattern around the user

- Sections orbit around a central anchor point
- Scroll rotates the "world" bringing new content into view
- Smooth, continuous motion without jarring transitions

**Implementation for Rwanda:**

```
Central Anchor: "Rwanda" logo/compass
Orbiting Sections:
  - Virunga (position: 0°)
  - Nyungwe (position: 90°)
  - Lake Kivu (position: 180°)
  - Kigali (position: 270°)

Scroll rotates the entire system
Active section scales up and centers
```

### 2. **Depth-Based Horizontal Scroll** (from ironhill.au)

**Concept:** Horizontal scrolling with multiple depth layers

- Background moves slowest (parallax depth 0.2)
- Midground at medium speed (depth 0.5)
- Foreground content at normal speed (depth 1.0)
- Creates feeling of moving THROUGH a space

**Implementation:**

```
Layer 1 (Far): Misty mountains, slow drift
Layer 2 (Mid): Silhouetted trees, medium speed
Layer 3 (Near): Content cards, full speed
Layer 4 (UI): Fixed navigation elements
```

### 3. **Scroll-Triggered Micro-Animations**

**Concept:** Every scroll action triggers delightful micro-interactions

- Text reveals character by character
- Images scale from 0.8 to 1.0 as they enter viewport
- Elements rotate slightly based on scroll velocity
- Cursor/mouse influences element positions subtly

---

## Section-by-Section Architecture

### Section 1: Hero - "The Portal"

**Current:** Static hero with fade-in
**New:** Cinematic portal opening

```
Sequence:
1. Screen starts dark with only compass logo pulsing
2. On first scroll: "portal" opens (circular clip-path expands)
3. Rwanda landscape revealed through expanding circle
4. Title words fly in from orbital positions
5. Subtle camera shake on complete

Scroll Behavior:
- First 10% of scroll: Portal opens
- 10-30%: Content fades in
- 30-100%: Parallax depth begins
```

### Section 2: The Orbit - "Regions Carousel"

**Current:** Vertical stack of region cards
**New:** 3D orbital carousel

```
Layout:
- Central fixed point (compass/anchor)
- 4 region cards positioned in 3D space around center
- Cards rotate on Y-axis as user scrolls
- Active card comes to front, scales 1.2x
- Inactive cards blur and recede

Scroll Mechanics:
- Each 25% of section scroll rotates 90°
- Smooth interpolation between positions
- Cards have depth (translateZ) for 3D feel
- Background image crossfades with rotation

Visual Polish:
- Cards have glassmorphism effect
- Subtle glow on active card
- Connecting lines between cards (constellation)
- Particle trail following rotation
```

### Section 3: Horizontal Journey - "The Path"

**Current:** Grid of journey scenes
**New:** Horizontal scroll with depth layers

```
Structure:
- Fixed viewport height (100vh)
- Horizontal track 400vw wide
- 4 scenes, each 100vw
- Scroll hijacked for horizontal movement

Depth Layers per Scene:
Layer 1: Background image (moves at 0.3x scroll speed)
Layer 2: Atmospheric elements - mist, birds (0.5x speed)
Layer 3: Main content - title, description (1.0x speed)
Layer 4: Foreground elements - leaves, particles (1.2x speed)

Transitions:
- Scenes overlap by 20% for smooth blending
- Color grading shifts between scenes
- Progress indicator shows journey position
```

### Section 4: Featured Listings - "Floating Cards"

**Current:** Static grid
**New:** Floating card constellation

```
Layout:
- Cards positioned in 3D space with varying Z-depths
- Scroll moves "camera" through the card field
- Cards rotate slightly toward center as they approach
- Mouse movement creates parallax within the field

Animation:
- Cards float with sine wave motion (different phases)
- Hover: Card comes to front, scales up, others recede
- Scroll velocity affects float amplitude
- Connecting lines show relationships
```

### Section 5: Testimonials - "Voices in the Mist"

**Current:** Grid of testimonial cards
**New:** Immersive quote reveal

```
Concept:
- Full-screen atmospheric background
- Quotes fade in/out like whispers
- Typography as art - large, dramatic
- Author photos circular, orbiting quotes

Scroll Behavior:
- Each scroll segment reveals new quote
- Previous quote drifts up and fades
- Background subtly shifts color
- Ambient particles react to scroll
```

### Section 6: Final CTA - "The Leap"

**Current:** Static CTA section
**New:** Dramatic call-to-action with build-up

```
Sequence:
1. Screen narrows (letterbox effect)
2. Heartbeat sound visualization (pulsing elements)
3. "Your Story Begins Now" types out
4. CTA button pulses with "heartbeat"
5. Click triggers "leap" animation (zoom into button)

Scroll Trigger:
- 0-50%: Build tension (letterbox, darkening)
- 50-80%: Reveal text and CTA
- 80-100%: Intensify pulse, add urgency
```

---

## Technical Implementation Strategy

### 1. GSAP ScrollTrigger Setup

```typescript
// Master timeline for entire page
const masterTL = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    snap: {
      snapTo: 1 / 6, // Snap to each section
      duration: 0.5,
      ease: "power2.inOut",
    },
  },
});
```

### 2. Orbital Rotation System

```typescript
// Rotate orbital container based on scroll
const rotateOrbit = (progress: number) => {
  const rotation = progress * 360; // Full rotation
  gsap.to(orbitContainer, {
    rotationY: rotation,
    duration: 0.3,
    ease: "power2.out",
  });

  // Update active section based on rotation
  const activeIndex = Math.floor((progress * 4) % 4);
  updateActiveSection(activeIndex);
};
```

### 3. Horizontal Scroll with Pinning

```typescript
// Pin section and scroll horizontally
ScrollTrigger.create({
  trigger: horizontalSection,
  start: "top top",
  end: () => `+=${trackWidth}`,
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    // Move track horizontally
    gsap.to(track, {
      x: -self.progress * trackWidth,
      duration: 0.1,
    });

    // Parallax layers at different speeds
    layers.forEach((layer, i) => {
      const speed = 0.2 + i * 0.3;
      gsap.to(layer, {
        x: -self.progress * trackWidth * speed,
        duration: 0.1,
      });
    });
  },
});
```

### 4. 3D Card Constellation

```typescript
// Position cards in 3D space
const positionCards = () => {
  cards.forEach((card, i) => {
    const angle = (i / cards.length) * Math.PI * 2;
    const radius = 300;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    gsap.set(card, {
      x,
      z,
      rotationY: -angle * (180 / Math.PI),
      transformPerspective: 1000,
    });
  });
};
```

### 5. Scroll Velocity Effects

```typescript
// Add velocity-based effects
let lastScrollTop = 0;
let velocity = 0;

window.addEventListener("scroll", () => {
  const st = window.pageYOffset;
  velocity = st - lastScrollTop;
  lastScrollTop = st;

  // Apply velocity to elements
  gsap.to(".floating-element", {
    skewX: velocity * 0.1,
    duration: 0.3,
  });
});
```

---

## Visual Effects Library

### 1. **Atmospheric Particles**

- Floating dust/pollen in light beams
- Fireflies in forest sections
- Birds flying across horizon
- Mist layers with parallax

### 2. **Light Effects**

- God rays through trees
- Lens flares on bright sections
- Vignette darkening at edges
- Glow effects on active elements

### 3. **Typography Animations**

- Character-by-character reveals
- Text that follows scroll path
- 3D extruded text for titles
- Blur-to-focus transitions

### 4. **Transition Effects**

- Circular iris wipes
- Pixelated dissolves
- Ripple transitions
- Page curl effects

---

## Performance Optimizations

### 1. **Layer Management**

```typescript
// Use will-change sparingly
const activateLayer = (element: HTMLElement) => {
  element.style.willChange = "transform";
};

const deactivateLayer = (element: HTMLElement) => {
  element.style.willChange = "auto";
};
```

### 2. **Intersection Observer for Animations**

```typescript
// Only animate when visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});
```

### 3. **Hardware Acceleration**

```typescript
// Force GPU acceleration for smooth animations
element.style.transform = "translateZ(0)";
element.style.backfaceVisibility = "hidden";
```

### 4. **Reduced Motion Support**

```typescript
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (prefersReducedMotion) {
  // Disable complex animations
  gsap.globalTimeline.timeScale(0);
}
```

---

## Component Architecture

### 1. **OrbitalContainer**

```typescript
interface OrbitalContainerProps {
  centerElement: React.ReactNode;
  orbitingElements: Array<{
    id: string;
    content: React.ReactNode;
    angle: number;
    distance: number;
  }>;
  rotationSpeed: number;
}
```

### 2. **ParallaxLayer**

```typescript
interface ParallaxLayerProps {
  speed: number; // 0.1 to 2.0
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
}
```

### 3. **ScrollReveal**

```typescript
interface ScrollRevealProps {
  trigger: "enter" | "center" | "leave";
  animation: "fade" | "slide" | "scale" | "rotate";
  duration: number;
  delay?: number;
  children: React.ReactNode;
}
```

### 4. **FloatingCard**

```typescript
interface FloatingCardProps {
  depth: number; // Z-position
  floatAmplitude: number;
  floatSpeed: number;
  children: React.ReactNode;
}
```

---

## Implementation Phases

### Phase 1: Core Infrastructure

- [ ] Set up GSAP ScrollTrigger with snap points
- [ ] Create orbital container component
- [ ] Implement horizontal scroll section
- [ ] Add parallax layer system

### Phase 2: Section Redesigns

- [ ] Redesign Hero with portal effect
- [ ] Build orbital regions carousel
- [ ] Create horizontal journey section
- [ ] Implement floating listings cards

### Phase 3: Polish & Effects

- [ ] Add atmospheric particles
- [ ] Implement typography animations
- [ ] Create transition effects
- [ ] Add velocity-based interactions

### Phase 4: Optimization

- [ ] Performance audit
- [ ] Mobile responsiveness
- [ ] Reduced motion support
- [ ] Browser compatibility

---

## Success Metrics

### User Engagement

- Time on page > 3 minutes
- Scroll depth > 90%
- Section completion rate > 80%

### Performance

- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- 60fps during scroll animations

### Delight

- "Wow" moments per session > 5
- Return visitor rate > 40%
- Social sharing of specific sections

---

## Inspiration References

### Sites to Study

1. **ribbit.dk** - Orbital navigation, circular scroll
2. **ironhill.au** - Horizontal scroll, depth layers
3. **locomotive.ca** - Smooth scroll, parallax
4. **buzzworthystudio.com** - Typography animations
5. **cappen.com** - Page transitions, effects

### Code Resources

- GSAP ScrollTrigger documentation
- Three.js for 3D elements (optional)
- Lottie for complex animations
- CSS Houdini for custom effects

---

## Next Steps

1. **Review this plan** and prioritize features
2. **Create prototype** of orbital navigation
3. **Test performance** on target devices
4. **Iterate** based on user feedback
5. **Polish** micro-interactions and transitions

This plan transforms the site from a standard scrolling experience into an immersive orbital journey that will leave users in awe.
