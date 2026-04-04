# CLAUDE.md — AI Assistant Guide

This file documents the codebase structure, conventions, and workflows for AI assistants working on this repository.

## Project Overview

A personal portfolio single-page application (SPA) built with React 17 and Create React App. It showcases services, experience, work history, portfolio projects, testimonials, and a contact form.

**Live behavior:** All navigation is scroll-based (no URL routing). Dark mode is toggled globally via Context API.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 17.0.2 | UI framework |
| react-scripts (CRA) | 5.0.0 | Build toolchain |
| framer-motion | 6.2.8 | Scroll/entrance animations |
| react-scroll | 1.8.6 | Smooth in-page scrolling |
| swiper | 8.0.7 | Carousels (Portfolio, Testimonials) |
| @emailjs/browser | 3.4.0 | Contact form email delivery |
| @iconscout/react-unicons | 1.1.6 | SVG icon components |

**Package manager:** Yarn (use `yarn`, not `npm`, to keep `yarn.lock` consistent).

## Repository Structure

```
react31-ZainRk-personal-portfolio/
├── public/
│   ├── index.html          # App shell; Gumela font declared here
│   └── robots.txt
├── src/
│   ├── App.js              # Root component; assembles all sections
│   ├── App.css             # Global CSS variables and button styles
│   ├── Context.js          # ThemeProvider + useReducer dark mode state
│   ├── index.js            # ReactDOM.render entry; wraps app in ThemeProvider
│   ├── fonts/
│   │   └── Gumela Regular.otf
│   ├── img/                # 55+ PNG/JPG image assets imported by components
│   └── components/
│       ├── Navbar/         # Top navigation + dark mode toggle trigger
│       ├── Toggle/         # Dark/light mode switch (Sun/Moon icons)
│       ├── Intro/          # Hero section with animations and social links
│       ├── FloatingDiv/    # Reusable floating badge used in Intro/Services
│       ├── Card/           # Reusable service card (Design / Developer / UI-UX)
│       ├── Services/       # Services section; uses Card and FloatingDiv
│       ├── Experience/     # Stats/achievement counters
│       ├── Works/          # Rotating brand/client logos
│       ├── Portfolio/      # Project grid using Swiper carousel
│       ├── Testimonials/   # Client quotes using Swiper with pagination
│       ├── Contact/        # EmailJS contact form
│       └── Footer/         # Social links and email
```

Each component folder contains exactly two files: `ComponentName.jsx` and `ComponentName.css`.

## Development Commands

```bash
yarn start      # Start dev server at http://localhost:3000
yarn build      # Production build into /build
yarn test       # Run tests (Jest + React Testing Library)
```

Never run `yarn eject` — it is irreversible and removes CRA abstractions.

## Architecture & Key Patterns

### Dark Mode (Context API)

State lives in `src/Context.js`. The reducer handles a single `"toggle"` action.

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

### CSS Design System (`App.css`)

Global CSS custom properties (do not rename without updating all components):
```css
--yellow, --orange, --black, --gray, --blueCard, --purple, --boxShadow, --smboxShadow
```

The primary accent colour is orange (`#FCA61F`). The global `.button` class uses an orange gradient with hover state. Responsive breakpoint is **480px**.

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

In-page navigation uses `Link` from `react-scroll`. Target `to` value must match the `id` of the destination section element:
```jsx
<Link to="contact" smooth={true} spy={true}>
  <button className="button">Hire me</button>
</Link>
```

### Carousels (Swiper)

Portfolio and Testimonials use Swiper v8. Import both the component and required CSS modules at the top of the file.

### Contact Form (EmailJS)

`Contact.jsx` uses `useRef` on the `<form>` element and calls `emailjs.sendForm(...)`. The service ID, template ID, and public key are hardcoded in the file — do not move them to environment variables without testing the build, as CRA requires `REACT_APP_` prefix for env vars.

### Image Assets

Images are imported directly at the top of each component:
```js
import boy from "../../img/boy.png";
```

All assets live in `src/img/`. Do not use `public/` for component images.

## Component Conventions

- **Naming:** PascalCase for component names and their folders.
- **File layout:** One JSX file and one CSS file per component, no index files.
- **Size:** Keep components focused and small (the existing range is 15–97 lines).
- **Props:** Use descriptive prop names; see `Card.jsx` for the `emoji / heading / detail / color` pattern.
- **No TypeScript:** This is a plain JavaScript project. Do not introduce `.ts`/`.tsx` files.
- **No routing library:** There is no `react-router`. Add `react-scroll` `Link` anchors for any new in-page navigation.

## Section Order in `App.js`

```
Navbar → Intro → Services → Experience → Works → Portfolio → Testimonial → Contact → Footer
```

If adding a new section, insert it in a logical position above and add a matching `<section id="...">` anchor for scroll targeting.

## Known Issues to Be Aware Of

- `<spane>` typo in `Services.jsx:29` — should be `<span>`.
- EmailJS credentials are exposed in source; acceptable for a static public portfolio but flag if the project ever moves to a shared or private service.
- Images are not lazy-loaded; large bundles may affect Lighthouse scores.
- No form validation in `Contact.jsx`.

## Git Workflow

- Development branch: `claude/add-claude-documentation-4Nl4E`
- Push with: `git push -u origin <branch-name>`
- Commit messages should be concise and describe *what changed and why*.
