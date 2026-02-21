# Giray Şengönül — Portfolio Site

> **Live URL:** [giraysengonul.cv](https://giraysengonul.cv)
> **GitHub Pages:** `giraysengonul.github.io`

A fully custom, professional dark-theme portfolio site for a Data Analyst, Data Scientist, and former iOS Developer. Rebuilt from scratch with modern CSS design patterns, animation systems, and a clean modular architecture.

---

## Project Structure

```
portfolio.github.io/
│
├── index.html                  ← Main portfolio page (rebuilt)
├── CNAME                       ← Custom domain: giraysengonul.cv
├── LICENSE
├── README.md                   ← This file
│
├── assets/                     ← All static image assets
│   ├── profile-pic.png
│   ├── arrow.png
│   ├── checkmark.png
│   ├── education.png
│   ├── email.png
│   ├── experience.png
│   ├── github.png
│   ├── linkedin.png
│   └── rocket-lunch.png        ← Favicon
│
├── css/                        ← Modular CSS (new)
│   ├── variables.css           ← Design tokens (colors, fonts, spacing, etc.)
│   ├── base.css                ← Reset, typography, loader, cursor, utilities
│   ├── animations.css          ← All @keyframe animations
│   ├── components.css          ← Buttons, section headers, cards, badges
│   ├── sections.css            ← Section-specific styles (nav, hero, about, etc.)
│   ├── responsive.css          ← Media queries (1280, 1024, 768, 480px)
│   └── project-page.css        ← Styles for project detail pages
│
├── js/                         ← Modular JavaScript (new)
│   ├── main.js                 ← Core functionality + certificate data & rendering
│   └── animations.js           ← Scroll reveal, typing effect, counters, skill bars
│
├── pages/                      ← Project detail pages (new, redesigned)
│   ├── tableau.html
│   ├── powerbi.html
│   ├── pandas.html
│   ├── sql.html
│   ├── excel.html
│   └── python.html
│
├── projects.js                 ← Project data array + loadProjects() function (root)
└── certificates.js             ← Old certificates file (unused by new HTML, kept)
```

---

## Design System

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#050d1a` | Page background |
| `--bg-secondary` | `#0a1628` | Footer, alternate sections |
| `--bg-glass` | `rgba(255,255,255,0.07)` | Card backgrounds |
| `--color-primary` | `#667eea` | Indigo — primary brand |
| `--color-secondary` | `#764ba2` | Purple — gradient pair |
| `--color-accent` | `#00d2ff` | Cyan — highlights |
| `--gradient-primary` | `indigo → purple` | Buttons, bars, accents |
| `--gradient-text` | `indigo → cyan` | Gradient text |
| `--text-primary` | `#f8fafc` | Headings |
| `--text-secondary` | `#cbd5e1` | Body text |
| `--text-muted` | `#64748b` | Subtitles, labels |

### Typography
- **Headings:** Space Grotesk (700–800 weight)
- **Body:** Inter (300–600 weight)
- Both loaded from Google Fonts

---

## Animations

| Animation | Description | Implementation |
|---|---|---|
| Loading screen | Branded initials + progress bar | CSS keyframes |
| Custom cursor | Dot + lagged ring | JS `requestAnimationFrame` |
| Animated orbs | Floating gradient blobs in hero | CSS keyframes (`orbMove1-3`) |
| Grid overlay | Subtle grid pattern with mask | CSS background-image |
| Typing effect | Role titles cycle with typewriter | `js/animations.js` |
| Scroll reveal | Elements fade+slide in on scroll | Intersection Observer |
| Stat counters | Numbers count up when visible | Intersection Observer |
| Skill bars | Animated width fill | Intersection Observer |
| Hero image rings | Rotating dashed rings | CSS `ringRotate` keyframes |
| Floating badges | Data Analyst / iOS badges float | CSS `badgeFloat` keyframes |
| Certificate carousel | Infinite horizontal scroll | CSS `slideInfinite` (pauses on hover) |
| Navbar scroll effect | Glassmorphism on scroll | JS scroll listener |

---

## Sections

| Section | Content |
|---|---|
| **Hero** | Profile image, name, typing role, CTA buttons, animated stats (43+ projects, 20+ certs, 6 years exp.) |
| **About** | 3 glassmorphism cards: Experience, Education, Bio |
| **Projects** | 8 category cards linking to detail pages or external (App Store, Udemy) |
| **Skills** | 2-column layout with animated progress bars for Data Analytics and iOS dev |
| **Certificates** | Infinite auto-scrolling carousel — 19 professional certs |
| **Contact** | 3 contact cards: Email, LinkedIn, GitHub |
| **Footer** | Logo, nav links, social icons, copyright |

---

## Project Detail Pages (`pages/`)

Each page (`tableau.html`, `powerbi.html`, `pandas.html`, `sql.html`, `excel.html`, `python.html`):

- Inherits the full dark theme CSS
- Loads `../projects.js` (root data file — unchanged)
- Calls `loadProjects('<category>')` on window load
- Has all required DOM IDs: `projectsWrapper`, `popup`, `overlay`, `popupTitle`, `popupDescription`, `popupList`, `popupLink`
- Navigation with back button to `../index.html#projects`

---

## Key Files

| File | Role |
|---|---|
| `projects.js` | Source of truth for all project data (43 projects). Also contains `loadProjects()`, `openPopup()`, `closePopup()` |
| `js/main.js` | Certificates data array, rendering, cursor, navbar, mobile menu, back-to-top, smooth scroll |
| `js/animations.js` | Scroll reveal (Intersection Observer), typing effect, stat counters, skill bar animations |
| `css/variables.css` | All design tokens — edit here to retheme the entire site |
| `css/sections.css` | Largest CSS file — all section-specific layout and styling |

---

## How to Update Content

### Add a new project
Edit `projects.js` in the root — add a new object to the `projects` array with the appropriate `category` field (`tableau`, `powerbi`, `pandas`, `sql`, `excel`, or `python`).

### Add a certificate
Edit `js/main.js` — add a new object to the `portfolioCerts` array near the top of the file.

### Change colors/fonts
Edit `css/variables.css` — all design tokens are defined as CSS custom properties.

### Add a new skill
In `index.html`, add a new `.skill-item` block inside the relevant `.skills-column` with the `data-width` attribute for animation.

---

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations, `backdrop-filter`
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts** — Space Grotesk + Inter
- **GitHub Pages** — Hosting
- **Custom Domain** — `giraysengonul.cv` via CNAME

---

## Browser Support

- Chrome 90+ / Edge 90+ (full support)
- Firefox 87+ (full support)
- Safari 14+ (full support)
- Custom cursor disabled on touch devices automatically

---

---

## Changelog

### February 2026 — v1.2
- **Hero image rings fully visible:** The decorative rings around the profile photo were being clipped on the right side by the hero section's `overflow: hidden`. Fixed by adding `margin-right: 5rem` to `.hero-image-wrapper`, giving ring-3 (the outermost, 480px) 10px of clearance from the section edge.
- **`iOS Developer` badge fully visible:** `badge-ios` moved from `right: -60px` to `right: -10px` so it no longer extends past the section's clipping boundary.
- **Profile image raised:** Added `margin-top: -3rem` to `.hero-image-wrapper` to lift the image slightly higher within the hero section.
- **Decorative rings centered on image:** The `.hero-image-ring` `top` value was `50%` which centered rings at the midpoint of the wrapper box (including `padding-top: 80px`), placing them 40px above the actual image center. Fixed by changing to `top: calc(50% + var(--nav-height) / 2)` so rings align precisely on the photo.
- **CSS changes:**
  - `css/sections.css` — `.hero-image-wrapper` gained `margin-right: 5rem` and `margin-top: -3rem`. `.badge-ios` changed to `right: -10px`. `.hero-image-ring` `top` changed to `calc(50% + var(--nav-height) / 2)`.
  - `css/responsive.css` — `margin-right: 0` and `margin-top: 0` added to `.hero-image-wrapper` in the 1024px breakpoint so the column/centered tablet layout is unaffected.

### February 2026 — v1.1
- **"Data Scientist" badge added:** A third floating badge now appears around the profile photo (top-left), alongside the existing "Data Analyst" (bottom-left) and "iOS Developer" (top-right) badges. The three badges form a triangular arrangement around the image. Each badge has its own floating animation with a staggered delay.
- **`alt` attribute updated:** Profile image alt text now reads `Data Analyst, Data Scientist & iOS Developer`.
- **Hero layout:** Side-by-side layout preserved — text content on the left, profile photo on the right.
- **CSS changes:**
  - `css/sections.css` — `.badge-ds` position added (`top: 80px; left: -70px`). Existing `.badge-data` (bottom-left) and `.badge-ios` (top-right) positions unchanged.
  - `css/animations.css` — `.badge-ds` animation added (badgeFloat1, 5.5s, 0.8s delay).
  - `css/responsive.css` — 1024px breakpoint hero overrides: collapses to column/centered on tablet with `order: -1` on image wrapper so photo appears above text.

### February 2026 — v1.0
- Full portfolio site rebuilt from scratch with dark theme, glassmorphism, animations, modular CSS/JS architecture.

---

*Last updated: February 2026*
