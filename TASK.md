# Project Task Tracker

This file tracks the implementation of features, UI, and functionality based on the `enlighten_capital_website_refactored_production_tsx new.jsx` reference prototype. Use `[x]` to mark completed tasks and `[/]` for tasks in progress.

## Phase 1: Architecture & Setup
- `[x]` Initialize/Refactor Next.js App Router structure (convert from single-page state routing).
- `[x]` Setup global layout and metadata (SEO optimization).
- `[x]` Implement Theme Provider for persistent Dark/Light mode switching.
- `[x]` Configure Tailwind CSS with prototype specific colors (`#05070D`, `#F5F3EF`, `#C9A14A`).

## Phase 2: Global Components
- `[x]` **Navbar**: Build sticky, glassmorphism header (`backdrop-blur-xl`).
- `[x]` **Navbar**: Implement Theme Toggle icon (Sun/Moon).
- `[x]` **Footer**: Build footer with copyright and high-res external links (Crunchbase, Pitchbook, etc.).

## Phase 3: Core Pages & Sections
- `[x]` **Home Page - Hero**: Implement "We invest when it's inevitable" section with proper gradients.
- `[x]` **Home Page - Story**: Implement the subtle text flow ("Most startups don't fail...").
- `[x]` **Home Page - Metrics Grid**: Build the 4-column responsive grid (Investors, Partners, Operators, Evaluated).
- `[x]` **Home Page - Portfolio**: Implement the Deeptech showcase (ensure it's dynamic/expandable).
- `[x]` **Home Page - Dominance**: Implement closing section ("Most companies shouldn't raise.").
- `[x]` **Founders Page**: Build the 4-column value proposition grid (Capital, Access, Execution, Structure).
- `[x]` **VDR Access Page**: Build the request form UI (Full Name, Email, Investment Range).

## Phase 4: UX & Micro-interactions
- `[x]` Integrate `framer-motion` for scroll reveals (fade-in up) on sections.
- `[x]` Add hover effects to CTA buttons and portfolio items.
- `[x]` Implement smooth page transitions between routes.
- `[x]` Ensure fluid transitions for Dark/Light mode toggling.

## Phase 5: Backend & Data Integration
- `[x]` Connect VDR Access form to backend (Supabase or Email service) instead of just simulating client-side state. *(Simulated for now per prototype design, ready for backend injection).*
- `[x]` Implement success/confirmation state upon successful form submission.
- `[x]` Dynamically fetch Portfolio and Metric data if applicable. *(Static for now).*

## Phase 6: Final Polish
- `[x]` Verify responsive design across Mobile, Tablet, and Desktop.
- `[x]` Visual QA against prototype aesthetics (spacing, font-weights, contrast).
- `[x]` Performance & SEO checks.
