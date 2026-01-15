# Project: Panda Studio - Migration & Architecture Documentation

## 1. Project Overview
**Goal:** Migrate an existing static HTML/SCSS website to **Next.js 15 (App Router)** while preserving the exact design, CSS structure, and SEO value.
**Business Context:** Local training studio (service-based). SEO and stability are higher priorities than high-tech experiments.
**Current State:**
- The legacy site source code is located in `_legacy_reference/`.
- The new Next.js app is initialized.
- Global Layout (Navbar/Footer) and Assets (SCSS/Images) are already migrated.

## 2. Tech Stack & Constraints (Strict)
* **Framework:** Next.js 15 (App Router) + TypeScript.
* **Hosting:** Self-hosted VPS (Hostinger) running Node.js.
    * *Constraint:* Do NOT use Vercel-specific features (Edge Functions, Vercel Image Optimization).
    * *Config:* `output: 'standalone'` is required in `next.config.ts`.
* **Styling:** SCSS (Legacy).
    * We import legacy `.scss` files globally.
    * **NO Tailwind** for the migrated layout (preserve legacy class names 1:1).
    * New components (features) may use CSS Modules if needed, but legacy migration must stick to global SCSS.
* **CMS:** Sanity.io (Headless CMS).
    * Used for: Blog Posts (`/blog`) and Knowledge Base (`/baza-wiedzy`).
    * Supabase is REMOVED from the stack.
* **Database:** None (Sanity handles content).

## 3. Architecture Rules
1.  **Source of Truth:** The `_legacy_reference/` folder contains the HTML structure we must replicate.
2.  **Asset Handling:**
    * Images: Moved to `public/img/`. Paths in SCSS must be absolute (`url('/img/...')`).
    * Fonts: Moved to `public/fonts/`.
3.  **Component Strategy:**
    * **Atomic Design:** Break down large HTML files (like `index.html`) into semantic sections (e.g., `components/sections/Hero.tsx`, `components/sections/About.tsx`).
    * **Server Components:** Default to Server Components. Use `'use client'` only for interactive parts (Mobile Menu, Sliders, Modals).
4.  **SEO Doctrine:**
    * Clean URLs (e.g., `/oferta` instead of `/oferta.html`).
    * Semantic HTML (`<section>`, `<h1>`, etc.) must be preserved from the legacy code.

## 4. Current Progress Status
- [x] Next.js Environment Setup (SCSS, Sanity).
- [x] Assets Migration (Images & Fonts moved to `public`).
- [x] SCSS Migration (Paths fixed, global import in `layout.tsx`).
- [x] Global Layout (Navbar & Footer components extracted and implemented).
- [ ] **CURRENT TASK:** Migrating Homepage content (slicing `index.html` into sections).
- [ ] Interactive Features (Burger Menu, Modals) - *Pending JavaScript implementation*.
- [ ] Subpages Migration (Cennik, Kontakt, etc.).
- [ ] Blog Integration (Sanity).

## 5. File Structure Overview (Target Architecture)
```text
.
├── _legacy_reference/       # OLD SITE SOURCE
├── app/                     # Next.js App Router (Pages & Layouts)
├── widgets/                 # Independent UI blocks (Navbar, Footer, Sidebar)
├── components/              # Shared UI atoms/molecules (Buttons, Inputs)
│   └── sections/            # Landing Page Sections (Hero, About, etc.)
├── features/                # Business logic slices
├── entities/                # Domain models
├── types/                   # Global TypeScript definitions
├── public/                  # Static assets
├── styles/                  # SCSS files
└── sanity/                  # CMS Logic