Panda Studio Team - Digital Growth Platform
===========================================

Project Background & Authorship
-------------------------------

This repository contains the source code for a custom-built web platform developed for **Panda Studio Team**, a premium personal training and massage studio in Rzeszów.

**Sole Architecture & Development** This entire project was designed, engineered, and deployed by me. It demonstrates the ability to execute a complex, full-stack commercial application from concept to production without the overhead of a large team.

The goal was to move the client away from generic, low-performance templates to a bespoke, high-performance application that acts as their primary sales and operational engine.

**Live Application:** <https://pandastudioteam.com/>

* * * * *

Strategic Focus: SEO & Local Domination
---------------------------------------

A primary requirement for this project was to secure a dominant position in local search results (Rzeszów area). As the sole engineer, I implemented a rigorous, code-first SEO strategy that goes far beyond standard meta tags.

**My SEO Implementation Includes:**

1.  **Global JSON-LD Structured Data:** I engineered a dynamic schema injection system that links the `Organization` with two distinct `LocalBusiness` entities (Gym & Massage), allowing Google to correctly index disparate services under one brand.

2.  **Semantic Architecture:** The entire DOM is structured semantically (`article`, `section`, `aside`) to ensure maximum readability for crawlers.

3.  **Programmatic Metadata:** Every page, including dynamic blog posts and glossary terms, generates unique, keyword-optimized metadata via the Next.js Metadata API.

4.  **Performance as a Ranking Factor:** By utilizing Next.js Server Components and advanced image optimization, the site achieves high Core Web Vitals scores, directly influencing ranking potential.

* * * * *

Architecture: Feature-First Approach
------------------------------------

To ensure the project remains maintainable for the client in the long run, I rejected the standard layer-based structure in favor of a **Feature-Based Architecture**.

I organized the codebase by business domain rather than technical function. This means that as the sole developer, I could build, test, and deploy features like the "Blog" or "Booking System" independently, ensuring code isolation and scalability.

**Key Modules I Developed:**

-   **features/blog/** - A complete content engine connecting to Sanity CMS.

-   **features/contact/** - A secure, server-side validated booking inquiry system.

-   **features/dictionary/** - A custom "Knowledge Base" module to build topical authority.

-   **features/faq/** - A context-aware system that injects specific questions based on the user's current URL.

* * * * *

Technology Stack & Rationale
----------------------------

I selected a modern, type-safe stack to guarantee stability for the client and a superior Developer Experience (DX) for maintenance.

**Core Framework**

-   **Next.js 15 (App Router):** Chosen for its robust Server-Side Rendering (SSR) capabilities, which are critical for the SEO goals I set for this project.

-   **TypeScript:** I enforced strict static typing throughout the entire application to prevent runtime errors and ensure business logic integrity.

**Data & Content**

-   **Sanity.io:** I integrated this Headless CMS to give the client full autonomy over their content without needing to contact me for text changes.

-   **TanStack Query:** Used for intelligent server-state management and caching.

-   **Supabase:** Implemented for reliable backend services.

**UI & UX**

-   **Custom SCSS Modules:** I designed a "Dark Premium" aesthetic from scratch, using SCSS modules to avoid class name collisions and ensure a pixel-perfect implementation of the design vision.

-   **Zod & React Hook Form:** Implemented for rock-solid form validation on both client and server sides.

* * * * *

Project Status
--------------

This is a live, commercial product currently driving revenue for Panda Studio Team. While the code reflects my personal engineering standards and architectural decisions, the application is proprietary to the business.

**Designed & Developed by:** [alexlikenew]