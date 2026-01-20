Panda Studio Team - High-Performance Digital Platform
=====================================================

**Role:** Sole Lead Engineer and Architect 

**Live Application:** <https://pandastudioteam.com> 

**Primary Stack:** Next.js 15, TypeScript, Sanity Headless CMS, SCSS (BEM), Vitest, Playwright.

Project Abstract and Engineering Philosophy
-------------------------------------------

This repository contains the source code for a commercial web platform engineered for Panda Studio Team, a premium personal training and massage studio.

The project was conceptualized and built not merely as a website, but as a digital growth engine. The engineering goal was to migrate the client from a generic, low-performance solution to a highly optimized, server-side rendered application capable of dominating local SEO rankings and converting traffic into bookings.

**Key Technical Achievements:**

-   **Performance:** Achieved near-perfect Core Web Vitals scores by leveraging Next.js Server Components (RSC) to minimize client-side JavaScript execution.

-   **Scalability:** Implemented a strict Feature-Based Architecture to decouple business logic from UI presentation, ensuring maintainability as the application grows.

-   **Reliability:** Integrated a dual-layer testing strategy (Unit and End-to-End) to guarantee stability in business-critical paths such as booking inquiries.

-   **Multimodal SEO:** Engineered a system that programmatically injects complex JSON-LD Structured Data, enabling search engines to index text, video, and geo-locational entities effectively.

* * * * *

Technical Stack Specifications
------------------------------

**Core Framework and Language**

-   **Next.js 15 (App Router):** Selected for its robust Server-Side Rendering capabilities and the ability to define granular caching strategies via the Fetch API.

-   **TypeScript:** Strict static typing is enforced throughout the entire codebase to prevent runtime errors and serve as self-documenting code for future maintainers.

-   **React 19:** Utilizes the latest concurrency features and Hooks.

**Data and Content Management**

-   **Sanity.io:** Integrated as a Headless CMS to provide the client with full autonomy over content updates without requiring developer intervention.

-   **GROQ:** Graph-Relational Object Queries are used to fetch precise data subsets, reducing network payload sizes.

-   **Zod:** Used for runtime schema validation on both the client (form feedback) and server (API payload integrity).

**Styling and Design System**

-   **SCSS Modules:** Chosen over utility-first frameworks to maintain strict separation of concerns and enforce a custom Design System.

-   **BEM Methodology:** Block-Element-Modifier naming convention is mandatory to prevent style leakage and ensure component reusability.

**Infrastructure and Quality Assurance**

-   **Vercel:** Production deployment environment optimized for Next.js.

-   **Resend:** HTTP-based email infrastructure used for reliable transactional messaging, replacing legacy SMTP transports.

-   **Vitest:** Unit testing framework used for logic verification (e.g., Zod schemas).

-   **Playwright:** End-to-End automation tool used to simulate real user journeys and verify critical flows.

* * * * *

Architecture: Feature-Based Design
----------------------------------

To avoid the scalability issues common in layer-based architectures (where code is split by technical role like components/services), this project utilizes a Feature-Based Architecture. The codebase is organized by Business Domain.

**Directory Map:**

-   **app/**: Contains the Next.js routing layer, global layouts, and route handlers.

-   **features/**: The core domain logic. Each subdirectory is a self-contained module.

-   **components/**: Shared, domain-agnostic UI elements (Atoms, Molecules) and generic page sections.

-   **styles/**: Centralized Design System containing typography definitions, color variables, and global mixins.

-   **sanity/**: Configuration for the CMS, including data schemas and client initialization.

-   **scripts/**: Node.js automation scripts used for data migration and seeding.

**Anatomy of a Feature Module:** Each folder within the `features/` directory (e.g., `features/contact/`) adheres to a strict internal structure:

-   **components/**: React components specific only to this feature (e.g., ContactForm).

-   **actions/**: Server Actions handling data mutations and external API calls (e.g., sendEmail).

-   **services/**: Data fetching logic and GROQ query encapsulations.

-   **schema/**: Zod validation schemas shared between client and server.

-   **types/**: TypeScript interfaces defining the shape of the domain data.

-   ****tests**/**: Colocated unit tests specific to the feature's logic.

* * * * *

Key Features and Implementation Details
---------------------------------------

**1\. Dynamic SEO Content Engine (`features/seo-content`)**

-   **Problem:** High-ranking pages require extensive text content, which often degrades User Experience.

-   **Solution:** Created a "SeoSection" document type in Sanity. The frontend fetches this Rich Text and renders it fully into the DOM for crawlers but uses CSS logic (max-height with overflow:hidden) to visually truncate it for users. A toggle button expands the view.

-   **Tech:** Portable Text serialization, Server Components.

**2\. Community Reels System (`features/home`)**

-   **Problem:** Video content helps conversion but negatively impacts Core Web Vitals if not optimized.

-   **Solution:** Built a custom React-Slick slider that handles vertical video assets. The implementation includes a critical fallback mechanism: if a video lacks a thumbnail, a default Open Graph image is injected into the JSON-LD schema to prevent Google Search Console validation errors.

-   **Tech:** React-Slick, JSON-LD VideoObject.

**3\. Secure Contact System (`features/contact`)**

-   **Problem:** Public forms are prone to spam and SMTP blocking on serverless environments.

-   **Solution:** Replaced standard Nodemailer transport with the Resend SDK (HTTP API). Implemented rigorous server-side validation using Zod before any external API call is made. The system dynamically sets the "Reply-To" header to the user's email, ensuring direct communication channels.

-   **Tech:** Server Actions, Resend SDK, Zod.

**4\. Interlinked Knowledge Base (`features/dictionary` & `features/blog`)**

-   **Problem:** Building Topical Authority requires dense internal linking.

-   **Solution:** Architected a Dictionary module that defines industry terms. These entries are programmatically linked to related Blog posts, creating a semantic web of content that signals expertise to search engines.

-   **Tech:** Sanity References, ItemList Schema.

* * * * *

Data Management and Automation
------------------------------

To streamline development and ensure data consistency across environments, custom automation scripts were engineered.

**Seeding Scripts (`scripts/imports-scripts/`)** These Node.js scripts allow for the idempotent seeding of critical data into the CMS.

-   **Mechanism:** The scripts read from local JSON sources (`scripts/data/`) and use the Sanity Client transaction API to execute `createOrReplace` operations.

-   **Usage:** This ensures that structural content (like Pricing Tables or SEO configurations) can be version-controlled in Git and deployed to the CMS deterministically.

* * * * *

Multimodal SEO Strategy
-----------------------

The project implements a "Code-First" SEO strategy designed to dominate local search results through structured data.

**Structured Data Injection:** The application programmatically injects complex JSON-LD schemas into the head of the document.

-   **Organization:** Defines the brand entity.

-   **LocalBusiness:** Specifically defines the physical locations (Gym and Massage Studio) as distinct entities with their own addresses and opening hours.

-   **VideoObject:** indexes the video reels with required metadata (thumbnail, upload date).

-   **BreadcrumbList:** Generates navigation paths for deep links.

**Entity Consistency:** All canonical tags, Open Graph URLs, and Schema IDs are strictly enforced to point to the production domain (`pandastudioteam.com`), preventing duplicate content issues and solidifying the Knowledge Graph entry.

* * * * *

Quality Assurance Strategy
--------------------------

**Unit Testing (Vitest)** Focuses on the purity of business logic and data validation.

-   **Scope:** Verifies that Zod schemas correctly accept valid data and reject invalid inputs (e.g., malformed emails). Checks that utility functions return expected outputs.

**End-to-End Testing (Playwright)** Focuses on critical user journeys and application stability.

-   **Scope:** "Smoke Tests" verify that the application builds and renders the homepage correctly. Functional tests verify the navigation flow between modules (Home -> Blog -> Contact) and ensure that the contact form provides visual feedback upon validation errors.

* * * * *

**Designed and Engineered by [alexlikenew]** A demonstration of full-cycle product engineering: from architectural planning and backend integration to frontend performance optimization and business-focused testing.