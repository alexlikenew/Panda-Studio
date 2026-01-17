Przygotowałem globalny plik README.md, który służy jako "Source of Truth" (źródło prawdy) dla każdego nowego agenta AI rozpoczynającego pracę nad projektem Panda Studio. Dokument ten definiuje architekturę, standardy kodowania oraz strukturę plików, eliminując statusy zadań, aby był uniwersalny na każdym etapie prac.

Project: Panda Studio - Architecture & Engineering Guide
1. Core Mission
Objective: Migration of a high-end fitness & massage studio website from static HTML/SCSS to Next.js 15 (App Router). Focus: Premium UI/UX aesthetic, SEO excellence (Core Web Vitals), and long-term maintainability through a centralized Design System.

2. Technical Stack
Framework: Next.js 15 (App Router) + TypeScript.

Styling: SCSS (Modular) + Global Typography System.

Strict Rule: No Tailwind CSS.

CMS: Sanity.io (Headless CMS) for Blog, Knowledge Base, and Social Reels.

Slider Engine: react-slick (Slick Carousel) for Community sections.

Deployment: Self-hosted VPS (Hostinger) using output: 'standalone' mode.

3. Strict Coding Standards
A. Typography System (The Source of Truth)
All text styling is controlled via styles/base/_typography.scss.

NEVER use font-size, font-weight, or line-height directly in component SCSS files.

ALWAYS use utility classes in TSX components (e.g., className="heading-h1" or className="text-medium-bold").

B. SCSS Guidelines
BEM Methodology: Follow block__element--modifier naming convention.

Absolute Paths: Asset paths in SCSS must be absolute: url('/img/filename.webp').

Global Imports: All feature and page styles must be registered in styles/main.scss.

C. Component Architecture
Server vs. Client: Use Server Components by default for fetching Sanity data. Use 'use client' strictly for interactive blocks like sliders, forms, or mobile menus.

Vertical Content: Social Reels and community videos must use the poster attribute with a Sanity image to prevent layout shifts and ensure immediate visual feedback.

4. Directory Map (Actual)
Plaintext
.
├── app/                     # App Router
│   ├── (website)/           # Main marketing site (Home, Blog, Dictionary)
│   └── api/                 # Sanity & Webhook handlers
├── features/                # Domain-driven logic slices
│   ├── home/                # Homepage-specific features (Reels, CTA)
│   ├── blog/                # Blog post logic
│   └── dictionary/          # Knowledge base logic
├── components/              # Shared UI library
│   ├── layout/              # Nav, Footer, Mobile Menu
│   ├── ui/                  # Buttons, Inputs, Cards
│   └── sections/            # Reusable page blocks
├── styles/                  # SCSS Architecture
│   ├── base/                # Colors, Typography, Variables
│   ├── components/          # Shared UI styles
│   ├── features/            # Feature-specific styles (e.g., community-reels)
│   └── pages/               # High-level page layouts
├── sanity/                  # CMS schemas and client config
└── public/                  # Static assets (img/, fonts/)
5. Key Feature: Community Reels
Implementation: react-slick slider in features/home/components/.

Logic: Active center slide plays video; inactive slides are clickable thumbnails.

Stability: Utilizes focusOnSelect: true and centerMode: true. Navigation should use slideToLoop(index).

6. SEO & Performance Requirements
Images: Use Next/Image with proper sizes attribute for optimization.

Schema.org: Every dynamic section (Blog, Reels) must inject JSON-LD metadata for rich search results.

Semantic HTML: Ensure correct use of <section>, <article>, and heading hierarchy (H1-H6).