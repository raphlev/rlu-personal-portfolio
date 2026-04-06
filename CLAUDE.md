# CLAUDE.md — AI Assistant Guide

This file documents the codebase structure, conventions, and workflows for AI assistants working on this repository.

## Project Overview

A personal portfolio single-page application (SPA) built with React 18 and Create React App. It showcases Raphael Leveque's professional background: PLM architecture expertise, cloud & IoT work, AI development, career timeline, key engagements, skills, testimonials, and a contact form.

**Live behavior:** All navigation is scroll-based (no URL routing). Dark mode is toggled globally via Context API.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18.2.0 | UI framework |
| react-scripts (CRA) | 5.0.0 | Build toolchain |
| framer-motion | 6.2.8 | Scroll/entrance animations |
| react-scroll | 1.8.6 | Smooth in-page scrolling |
| swiper | 8.0.7 | Carousels (Testimonials) |
| @emailjs/browser | 3.4.0 | Contact form email delivery |
| @iconscout/react-unicons | 1.1.6 | SVG icon components |

**Package manager:** Yarn (use `yarn`, not `npm`, to keep `yarn.lock` consistent).

## Repository Structure

```
rlu-personal-portfolio/
├── .env.example            # EmailJS credentials template (REACT_APP_EMAILJS_*)
├── .gitignore
├── CLAUDE.md               # This file
├── README.md
├── package.json
├── yarn.lock
├── public/
│   ├── index.html          # App shell; Gumela font declared here (inline <style>)
│   └── robots.txt
└── src/
    ├── App.js              # Root component; assembles all sections in order
    ├── App.css             # Global CSS variables and button styles
    ├── Context.js          # ThemeProvider + useReducer dark mode state
    ├── index.js            # ReactDOM entry; wraps App in ThemeProvider
    ├── fonts/
    │   └── Gumela Regular.otf
    ├── img/                # PNG/JPG image assets imported by components
    └── components/
        ├── Navbar/         # Top navigation + dark mode toggle trigger
        ├── Toggle/         # Dark/light mode switch (Sun/Moon icons)
        ├── Intro/          # Hero section with animations and social links
        ├── FloatingDiv/    # Reusable floating badge used in Intro
        ├── Card/           # Reusable service card component
        ├── Services/       # Core expertise cards + CV download (resume.pdf here)
        ├── Experience/     # Stats/achievement counters (25+ yrs, 50+ projects)
        ├── About/          # Bio, language badges, education cards
        ├── Works/          # Industry clients grid (6 categories)
        ├── Portfolio/      # Key engagements grid (5 cards)
        ├── Timeline/       # Vertical career history (7 entries)
        ├── Skills/         # Skill groups + certifications
        ├── Testimonials/   # Client quotes using Swiper with pagination
        ├── Contact/        # EmailJS contact form with validation
        └── Footer/         # Social links and email
```

Each component folder contains exactly two files: `ComponentName.jsx` and `ComponentName.css`, except `Services/` which also contains `resume.pdf`.

## Development Commands

```bash
yarn start      # Start dev server at http://localhost:3000
yarn build      # Production build into /build
yarn test       # Run tests (Jest + React Testing Library)
```

Never run `yarn eject` — it is irreversible and removes CRA abstractions.

## Architecture & Key Patterns

### Dark Mode (Context API)

State lives in `src/Context.js`. The reducer handles a single `"toggle"` action. Initial state is `{ darkMode: false }`.

```js
// Reading theme in any component
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

// Toggling
theme.dispatch({ type: "toggle" });
```

Dark mode is applied via conditional inline styles:
```jsx
style={{ color: darkMode ? "white" : "" }}
```

The root `App` element uses:
```jsx
style={{
  background: darkMode ? "#111" : "",
  color: darkMode ? "white" : "",
}}
```

### CSS Design System (`App.css`)

Global CSS custom properties (do not rename without updating all components):
```css
--yellow: #F5C32C
--orange: #2563EB        /* primary accent — named "orange" but is blue */
--black: #242D49
--gray: #788097
--blueCard: #E8F0FE
--purple: rgb(210 225 255)
--boxShadow: 0px 19px 60px rgb(0 0 0 / 8%)
--orangeCard: rgba(37, 99, 235, 0.15)
--smboxShadow: -79px 51px 60px rgba(0, 0, 0, 0.08)
```

> **Important:** Despite being named `--orange`, the primary accent is **blue** (`#2563EB`). This naming is a historical artifact — do not change the variable name, update call sites instead.

The global `.button` class uses a blue gradient (`#3b82f6 → #1d4ed8`) with a blue box-shadow. On hover it inverts to white background with a blue border. The app background in light mode is `#f5f7fa`. Responsive breakpoint is **480px**.

### Animations (Framer Motion)

Scroll-triggered animations use `whileInView` with `initial`:
```jsx
<motion.div
  initial={{ left: "-36%" }}
  whileInView={{ left: "-24%" }}
  transition={{ duration: 2, type: "spring" }}
/>
```

### Smooth Scrolling (react-scroll)

In-page navigation uses `Link` from `react-scroll`. The `to` value must match the `id` of the destination section element:
```jsx
<Link to="contact" smooth={true} spy={true}>
  <button className="button">Hire me</button>
</Link>
```

Navbar links target: `home`, `expertise`, `about`, `engagements`, `career`, `skills`, `contact`.

### Carousels (Swiper)

Testimonials use Swiper v8. Import both the component and required CSS modules at the top of the file.

### Contact Form (EmailJS)

`Contact.jsx` uses `useRef` on the `<form>` element and calls `emailjs.sendForm(...)`. Credentials are loaded from environment variables with the `REACT_APP_` prefix (CRA requirement). A `.env.example` template is provided — copy it to `.env` and fill in real values locally.

```
REACT_APP_EMAILJS_SERVICE_ID=...
REACT_APP_EMAILJS_TEMPLATE_ID=...
REACT_APP_EMAILJS_PUBLIC_KEY=...
```

The form validates name, email (regex), and message before submitting. It shows a success message on send and an error message on failure.

### Image Assets

Images are imported directly at the top of each component:
```js
import boy from "../../img/boy.png";
```

All assets live in `src/img/`. Do not use `public/` for component images.

## Section Order in `App.js`

```
Navbar → Intro → Services → Experience → About → Works → Portfolio → Timeline → Skills → Testimonial → Contact → Footer
```

Each section corresponds to a `<section id="...">` anchor for scroll targeting. If adding a new section, insert it in a logical position and add a matching anchor and Navbar link.

## Component Reference

| Component | Section id | Description |
|-----------|-----------|-------------|
| `Navbar` | — | Navigation bar with dark mode toggle; links use react-scroll |
| `Toggle` | — | Sun/Moon switch; dispatches `"toggle"` to theme context |
| `Intro` | `home` | Hero with name, bio, "currently upskilling" badge, social icons, Framer Motion floats |
| `FloatingDiv` | — | Reusable badge: `img` + `text1` + `text2` props |
| `Card` | — | Service card: `emoji`, `heading`, `detail`, `color` props |
| `Services` | `expertise` | 3 service cards (PLM, Cloud/IoT, AI Dev) + CV download |
| `Experience` | — | 3 stat counters (25+ yrs, 50+ projects, 10+ industries) |
| `About` | `about` | Bio paragraphs, language badges, education cards |
| `Works` | — | 2-col grid of 6 industry categories with named clients |
| `Portfolio` | `engagements` | 5 key engagement cards (2×2 grid + 1 full-width) |
| `Timeline` | `career` | Vertical 7-entry career history with subsections |
| `Skills` | `skills` | 5 skill group cards + 4 certifications + LinkedIn assessments |
| `Testimonial` | — | Swiper carousel of 4 client/colleague quotes |
| `Contact` | `contact` | Validated EmailJS contact form |
| `Footer` | — | Social links (LinkedIn, Instagram, Facebook, GitHub) |

## Component Conventions

- **Naming:** PascalCase for component names and their folders.
- **File layout:** One JSX file and one CSS file per component, no index files.
- **Size:** Components range from ~15 to ~200 lines; Timeline and Skills are intentionally larger due to data volume.
- **Props:** Use descriptive prop names; see `Card.jsx` for the `emoji / heading / detail / color` pattern.
- **No TypeScript:** Plain JavaScript project. Do not introduce `.ts`/`.tsx` files.
- **No routing library:** There is no `react-router`. Use `react-scroll` `Link` anchors for any in-page navigation.

## Known Issues

- `<spane>` typo in `Services.jsx:29` — should be `<span>`.
- The CSS variable `--orange` is actually blue (`#2563EB`) — naming is a historical artifact, do not rename.
- Images are not lazy-loaded; large bundles may affect Lighthouse scores.
- `FloatingDiv.css` has a comment noting dark mode styling is incomplete.
- `Toggle.css` contains a legacy comment (`pehly delete krna hy`) on an unused `left` property.

## Git Workflow

- Development branch: `claude/add-claude-documentation-UYFru`
- Push with: `git push -u origin <branch-name>`
- Commit messages should be concise and describe *what changed and why*.
