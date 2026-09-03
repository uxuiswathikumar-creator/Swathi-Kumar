# CLAUDE.md --- Swathi Kumar Portfolio Website

## Project Goal

Build a highly polished, editorial-style personal portfolio website for
**Swathi Kumar**, a Product Designer, using **Svelte 5**.

The supplied reference screenshots are the primary visual direction.
Recreate the layout, typography, spacing, hierarchy, image treatment,
and overall personality as closely as possible while making the
implementation responsive and production-ready.

The design language is:

-   Editorial
-   Bold typography
-   Minimal black / off-white palette
-   Strong visual hierarchy
-   Brutalist-inspired but refined
-   Image-led portfolio presentation
-   Generous whitespace
-   Small technical metadata
-   Subtle playful details
-   No unnecessary UI decoration

Do not turn this into a generic portfolio template. Preserve the
distinctive visual identity shown in the reference.

------------------------------------------------------------------------

## Technology Requirements

Use:

-   **Svelte 5**
-   **SvelteKit**
-   TypeScript
-   CSS or Tailwind CSS
-   Svelte 5 runes where reactive state is required
-   Component-based architecture
-   Semantic HTML
-   Responsive CSS
-   Accessible interactions

Prefer simple CSS over adding unnecessary dependencies.

Do NOT use React, Vue, Svelte 4 syntax, or a large animation library
unless absolutely necessary.

For Svelte 5:

-   Use `$state`, `$derived`, `$effect`, and `$props` where appropriate.
-   Prefer standard Svelte event attributes such as `onclick`.
-   Keep components small and reusable.
-   Avoid unnecessary global state.

------------------------------------------------------------------------

# Visual Direction

## Overall Canvas

Desktop reference:

-   Main content is presented as a narrow editorial page centered inside
    the viewport.
-   The outer browser/viewport background is dark charcoal.
-   The portfolio page itself is warm/off-white.
-   The content uses strong black typography.
-   Footer switches to a near-black background with white typography.

Suggested colors:

``` css
--black: #171717;
--white: #f7f7f5;
--paper: #f4f3ef;
--muted: #6e6e6e;
--line: #deddd8;
```

Do not introduce bright accent colors into the main portfolio UI. The
project thumbnails can retain their own original colors.

------------------------------------------------------------------------

# Typography

The typography is one of the most important parts of the design.

The large display headings are extremely bold and condensed.

Use **Anton SC** or the closest available condensed display font for:

-   SWATHI KUMAR
-   MY CREATIVES
-   LET'S TALK MATE
-   Project labels

Use a clean sans-serif for supporting information.

Suggested system:

``` css
--font-display: "Anton SC", "Anton", sans-serif;
--font-body: Inter, Arial, sans-serif;
```

If Anton SC is not available locally, load the chosen web font through
the project's font strategy rather than silently replacing the visual
style with a normal sans-serif.

### Display Typography

Characteristics:

-   Very bold
-   Condensed
-   Uppercase
-   Tight visual rhythm
-   Large scale
-   Slightly compressed line-height

Do not use overly rounded, geometric, or elegant fonts for the display
headings.

------------------------------------------------------------------------

# Page Structure

The page should contain these major sections:

1.  Header
2.  Hero / Introduction
3.  About / Profile section
4.  Creative work gallery
5.  Contact footer

Use separate Svelte components for each major section.

Suggested structure:

``` text
src/
├── lib/
│   ├── components/
│   │   ├── Header.svelte
│   │   ├── Hero.svelte
│   │   ├── About.svelte
│   │   ├── CreativeGrid.svelte
│   │   ├── ProjectCard.svelte
│   │   ├── ContactFooter.svelte
│   │   └── Signature.svelte
│   ├── data/
│   │   └── projects.ts
│   └── assets/
├── routes/
│   └── +page.svelte
└── app.css
```

------------------------------------------------------------------------

# Header

Create a very minimal top navigation.

Left:

-   Small personal mark / initials

Right:

-   Hamburger/menu icon

The header should have generous horizontal padding.

The menu icon is visually understated and should not look like a large
mobile navigation button.

On mobile:

-   Maintain the same minimalist structure.
-   Keep the header compact.
-   Do not introduce a traditional full navigation bar.

------------------------------------------------------------------------

# Hero Section

The hero is the strongest typographic moment on the page.

Main title:

``` text
SWATHI KUMAR
```

Use a very large condensed black display type.

The name should occupy most of the horizontal width.

The profile photograph is positioned as a small overlapping visual
element around the middle/right portion of the name.

Important:

-   The image overlaps the typography.
-   It should feel intentionally editorial, not like a standard profile
    avatar.
-   Add a subtle paper/card-like frame around the image.
-   Slightly rotate the image/card.
-   Preserve the layered composition.

Below the name:

Left metadata:

``` text
PRODUCT DESIGNER
CRAFTING DIGITAL PRODUCTS
THAT SOLVE REAL
BUSINESS PROBLEMS

CHENNAI, INDIA
AVAILABLE FOR
FULL-TIME / FREELANCE
```

Right metadata:

``` text
PRODUCT DESIGN
UX/UI DESIGN
DESIGN SYSTEMS
FINTECH
```

Keep these details small.

The metadata should visually support the hero rather than compete with
the name.

------------------------------------------------------------------------

# About / Profile Section

Use a warm paper/off-white background.

Create a two-column layout.

### Left

Small section label and short biography.

Suggested content hierarchy:

``` text
HEY! I'M SWATHI KUMAR

I'M A PRODUCT DESIGNER WITH A STRONG FOCUS ON CRAFTING DIGITAL EXPERIENCES THAT FEEL SIMPLE, USEFUL AND THOUGHTFUL.

I WORK ACROSS PRODUCT DESIGN, VISUAL DESIGN AND DESIGN SYSTEMS, WITH A PARTICULAR INTEREST IN FINTECH AND COMPLEX BUSINESS PRODUCTS.

I LIKE TURNING COMPLEX PROBLEMS INTO CLEAR, HUMAN EXPERIENCES.
```

Do not make the body copy large.

Add a small hand-drawn signature beneath the copy.

### Right

Large portrait image.

The image should:

-   Have slightly rounded corners
-   Maintain a clean rectangular crop
-   Sit naturally within the grid
-   Feel editorial rather than corporate

Add a small circular stamp/badge near the top-left of the image if the
asset exists.

The stamp should feel like a portfolio/editorial detail.

------------------------------------------------------------------------

# Creative Work Section

Section heading:

``` text
MY CREATIVES
```

This is the main portfolio gallery.

The heading should be very large, condensed, uppercase, and centered.

Do not make this a conventional equal-card grid.

The reference uses an editorial masonry-like rhythm where project images
have different sizes and positions.

------------------------------------------------------------------------

# Project Data

Create the projects as data instead of hardcoding each card into the
page.

Suggested structure:

``` ts
export type Project = {
  title: string;
  image: string;
  href?: string;
  size?: "large" | "medium" | "small";
  description?: string;
};
```

Initial projects:

1.  Flipopay
2.  Jelly Skin
3.  Ulaa
4.  Design System
5.  My Art Gallery

Project names should be rendered exactly as labels:

``` text
FLIPOPAY
JELLY SKIN
ULAA
DESIGN SYSTEM
MY ART GALLERY
```

------------------------------------------------------------------------

# Project Grid

Desktop layout should visually resemble the supplied screenshot.

Use a two-column editorial composition with intentional vertical
offsets.

The approximate structure is:

``` text
[ Flipopay ]        [ Jelly Skin ]

[ Ulaa       ]      [ Design System ]

[ My Art Gallery ]
```

But do NOT force every item into identical dimensions.

Characteristics:

-   Flipopay: landscape
-   Jelly Skin: larger landscape/portrait-oriented visual
-   Ulaa: square / large
-   Design System: landscape
-   My Art Gallery: portrait/square

Allow the project image itself to define the visual weight.

Use CSS Grid rather than manually positioned absolute elements.

Example conceptual structure:

``` css
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(3rem, 8vw, 8rem);
}
```

Then use controlled transforms/margins for editorial offsets.

Do not create excessive random masonry behavior.

------------------------------------------------------------------------

# Project Cards

Each project card should contain:

1.  Image
2.  Project title underneath

The title is small but bold.

Images should have:

``` css
object-fit: cover;
display: block;
```

Avoid excessive border radius.

The reference uses mostly clean rectangular imagery.

### Hover

On desktop:

-   Slight image scale, around `1.02`
-   Very subtle movement
-   Smooth transition
-   Optional small arrow/cursor indicator

Do not create flashy 3D effects.

The project image should remain the visual focus.

------------------------------------------------------------------------

# Image Assets

Use the supplied portfolio images wherever available.

Do not generate fake screenshots if real assets are available.

Create an organized asset structure:

``` text
static/
├── images/
│   ├── profile.jpg
│   ├── about.jpg
│   ├── flipopay.jpg
│   ├── jelly-skin.jpg
│   ├── ulaa.jpg
│   ├── design-system.jpg
│   └── art-gallery.jpg
```

If an asset is unavailable, use a clearly named placeholder path so it
can be replaced later.

Do not embed huge base64 images directly inside Svelte components.

------------------------------------------------------------------------

# Contact Footer

The footer is a large near-black section.

Background:

``` css
#171717
```

Heading:

``` text
LET'S TALK MATE
```

Typography:

-   Huge
-   White
-   Condensed
-   Uppercase
-   Centered

Below the heading:

-   Handwritten signature

Bottom-left:

``` text
SK-© 2026
```

Bottom-right:

Social icons for:

-   Instagram
-   LinkedIn
-   Dribbble / portfolio platform

Use accessible links.

Do not use huge colorful social buttons.

Icons should be small, monochrome, and understated.

------------------------------------------------------------------------

# Responsive Design

The website must be responsive, not simply scaled down.

## Desktop

At widths above approximately `1024px`:

-   Two-column creative grid
-   Large hero typography
-   About section uses two columns
-   Profile image overlaps the hero title
-   Generous whitespace
-   Footer remains spacious

## Tablet

Between approximately `768px` and `1024px`:

-   Reduce display heading size
-   Maintain two-column project grid if space allows
-   Reduce section spacing
-   Keep image overlap but reduce its size

## Mobile

Below `768px`:

Hero:

-   Stack metadata naturally
-   Reduce title size while keeping it dominant
-   Profile image becomes smaller
-   Preserve overlap where possible, but never allow text to become
    unreadable

About:

-   Switch to one column
-   Text first
-   Image second

Projects:

-   One column
-   Maintain intentional vertical rhythm
-   Images should remain large enough to be visually impactful

Footer:

-   Center the main heading
-   Stack or simplify social links
-   Keep footer height comfortable

Never allow horizontal overflow.

------------------------------------------------------------------------

# Spacing System

Use a consistent spacing scale.

Suggested values:

``` css
--space-xs: 0.5rem;
--space-sm: 1rem;
--space-md: 2rem;
--space-lg: 4rem;
--space-xl: 7rem;
--space-2xl: 10rem;
```

Use responsive `clamp()` for major typography and section spacing.

Example:

``` css
font-size: clamp(4rem, 12vw, 11rem);
```

Do not hardcode one desktop pixel size everywhere.

------------------------------------------------------------------------

# Animation & Interaction

The reference is visually strong without requiring heavy animation.

Implement tasteful micro-interactions:

### Page Load

-   Fade in the header
-   Hero typography slightly rises into position
-   Profile image fades/slides into place

### Scroll

Optional:

-   Subtle reveal animation for About section
-   Project cards reveal as they enter the viewport

### Hover

Project cards:

-   Image scales very slightly
-   Label shifts a few pixels
-   Cursor/arrow can appear

Footer social icons:

-   Small translate/scale interaction

Keep all animations fast and restrained.

Suggested timing:

``` css
transition: transform 300ms ease, opacity 300ms ease;
```

Respect:

``` css
@media (prefers-reduced-motion: reduce)
```

and disable non-essential animations for users who prefer reduced
motion.

------------------------------------------------------------------------

# Cursor

A custom cursor is optional.

If implemented:

-   Keep it extremely subtle.
-   Do not use a huge animated circle.
-   It should enhance the editorial feel rather than distract from the
    portfolio.

Do not implement a custom cursor on touch devices.

------------------------------------------------------------------------

# Scroll Behavior

Use smooth scrolling where appropriate.

Anchor navigation should account for the fixed/sticky header if one is
implemented.

Do not use scroll-jacking.

------------------------------------------------------------------------

# Accessibility

The website must be accessible.

Requirements:

-   Semantic `<header>`, `<main>`, `<section>`, `<footer>`
-   Proper heading hierarchy
-   Meaningful `alt` text
-   Keyboard-accessible links
-   Visible focus states
-   Sufficient text contrast
-   Reduced-motion support
-   No interaction that depends only on hover
-   Images must not contain essential text without an accessible
    alternative

------------------------------------------------------------------------

# Performance

Prioritize fast loading.

Use:

-   Optimized image dimensions
-   Modern image formats where possible
-   Lazy loading for below-the-fold images
-   `loading="eager"` only for the hero image if necessary
-   Avoid unnecessary JavaScript
-   Avoid heavy animation libraries
-   Keep the first page lightweight

Do not add libraries just to solve simple CSS problems.

------------------------------------------------------------------------

# Component Principles

Keep components reusable but do not over-componentize.

Good:

``` text
Header.svelte
Hero.svelte
About.svelte
CreativeGrid.svelte
ProjectCard.svelte
ContactFooter.svelte
```

Avoid creating components for trivial single `<div>` wrappers.

Project content should live in a data file.

------------------------------------------------------------------------

# Svelte 5 Guidelines

Use Svelte 5 syntax.

Example:

``` svelte
<script lang="ts">
  let isMenuOpen = $state(false);

  let { title = "Project" } = $props<{
    title?: string;
  }>();
</script>
```

For derived values:

``` svelte
<script lang="ts">
  let projects = $state([]);
  let projectCount = $derived(projects.length);
</script>
```

Do not write the project using legacy Svelte 4 patterns when an
equivalent Svelte 5 approach is appropriate.

------------------------------------------------------------------------

# Code Quality

Before finishing:

-   Run TypeScript checks
-   Run Svelte checks
-   Run production build
-   Fix all warnings that affect functionality
-   Test at desktop, tablet, and mobile widths
-   Check for horizontal overflow
-   Check keyboard navigation
-   Check reduced-motion behavior

The implementation should be clean enough that another
designer/developer can easily replace project images and text later.

------------------------------------------------------------------------

# Important Design Rules

## DO

-   Match the reference composition closely
-   Preserve the oversized condensed typography
-   Use generous whitespace
-   Keep colors minimal
-   Let portfolio imagery provide color
-   Use editorial offsets
-   Make the page feel personal and designed
-   Keep metadata tiny
-   Use subtle interactions
-   Make responsive behavior intentional

## DO NOT

-   Turn it into a generic SaaS portfolio
-   Add gradients to the main UI unless the reference requires them
-   Add glassmorphism
-   Add excessive shadows
-   Use rounded cards everywhere
-   Add large navigation menus
-   Add unnecessary badges
-   Use excessive animations
-   Use stock photos when supplied assets exist
-   Replace the display font with a normal sans-serif
-   Create a generic 3-column card grid
-   Overuse JavaScript

------------------------------------------------------------------------

# Content

Use the following initial identity:

**Name:** Swathi Kumar

**Role:** Product Designer

**Location:** Chennai, India

**Focus:**

-   Product Design
-   UX/UI Design
-   Design Systems
-   Fintech

**Portfolio projects:**

-   Flipopay
-   Jelly Skin
-   Ulaa
-   Design System
-   My Art Gallery

Footer CTA:

``` text
LET'S TALK MATE
```

------------------------------------------------------------------------

# Final Implementation Standard

The final website should feel like a designer-made portfolio rather than
a developer-made template.

The visual priority is:

1.  Typography
2.  Composition
3.  Photography / project imagery
4.  Whitespace
5.  Editorial rhythm
6.  Subtle motion
7.  Functional interaction

When making implementation decisions, always compare the result against
the supplied reference screenshots.

If there is a conflict between a generic best-practice portfolio pattern
and the visual direction in the reference, prioritize the reference
while maintaining accessibility, responsiveness, and performance.

Build the page with real, maintainable Svelte 5 components rather than a
single massive component.

The final result should look intentional at every breakpoint.
