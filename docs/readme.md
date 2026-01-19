Panda Studio - Technical Architecture and Engineering Reference
1. Project Abstract and Engineering Philosophy
This repository hosts the source code for the Panda Studio platform, a high-performance web application designed for a boutique personal training and massage studio. The project represents a migration from static technologies to a modern, server-side rendered architecture using Next.js 15.

The core engineering philosophy rests on three pillars:

Feature-Based Architecture: Business logic is decoupled from generic UI components, ensuring scalability and ease of maintenance.

Multimodal SEO Strategy: The application is engineered to dominate local search results through extensive, server-generated Structured Data (JSON-LD) covering text, video, articles, and geo-locational entities.

Strict Design System: Visual consistency is enforced through a centralized SCSS typography system and BEM naming conventions. Utility-first CSS frameworks like Tailwind are strictly prohibited to maintain granular control over the cascading style sheets.

2. Technical Stack Specifications
Core Framework

Next.js 15 (App Router): The application utilizes the latest App Router paradigms. Server Components are the default for all data-fetching operations to minimize Client-Side hydration costs.

React 19: Leveraging updated hooks and concurrency features where applicable.

TypeScript: Strict type safety is enforced. The use of 'any' is prohibited without explicit architectural justification.

Data & Content Management

Sanity.io: A headless CMS serves as the single source of truth for dynamic content including Blog Posts, Knowledge Base (Dictionary) entries, SEO Content Sections, and Social Reels.

GROQ: Graph-Relational Object Queries are used to fetch precise data subsets, reducing payload sizes.

Styling & UI

SCSS (Sass): Modular styling using the SCSS syntax.

BEM Methodology: Block-Element-Modifier naming convention is mandatory for all scoped styles.

React-Slick: Utilized for complex carousel interactions (specifically Community Reels).

Infrastructure & Services

Vercel: The production deployment environment.

Resend: A RESTful API service for transactional emails, replacing standard SMTP transports to ensure reliability in serverless environments.

Zod: Schema declaration and validation library used for runtime data validation (forms).

3. Architecture and Directory Map
The codebase is organized to separate global concerns from specific business features.

Root Structure

app/: Contains the Next.js routing layer. The (website) group separates public marketing pages from internal studio tools.

features/: The core domain logic. Each subdirectory (blog, contact, dictionary, home, seo-content) is a self-contained module containing its own components, services, schemas, and types.

components/: Shared, domain-agnostic UI elements. This includes layout primitives (Navbar, Footer), generic UI atoms (Buttons), and reusable page sections.

services/: Global data fetching services that span multiple domains (e.g., pricingService).

styles/: The global styling registry. Contains the typography system, color palette, and component-specific SCSS partials.

sanity/: Configuration for the CMS, including schema definitions and client initialization.

scripts/: Node.js automation scripts used for seeding and migrating data into Sanity.

Feature Module Structure A typical feature directory (e.g., features/blog/) adheres to the following internal structure:

components/: React components specific only to this feature (e.g., BlogCard, LatestNews).

services/: Functions encapsulating GROQ queries and external API calls (e.g., getLatestPosts).

types/: TypeScript interfaces defining the shape of data within the module.

4. Coding Standards and Design System
A. Typography and Text Rendering
The typography system is rigid to ensure brand consistency. Developers must not define font-size, font-weight, or line-height within local component SCSS files.

Implementation: Text styling is applied via utility classes defined in styles/base/_typography.scss.

Usage: Components should accept className props to allow composition, but core typography classes (e.g., text-large-normal, heading-h2) must apply the visual rhythm.

B. SCSS Guidelines
Nesting: Avoid excessive nesting depth (maximum 3 levels) to prevent specificity wars.

Asset Loading: Images referenced in SCSS must use absolute paths starting from the public directory.

Registration: Every new SCSS partial must be explicitly imported in styles/main.scss using the @use rule.

C. Server vs. Client Components
Default: All components are Server Components unless interactivity is required.

Data Fetching: Fetching occurs at the Page level or Section level (Server Components) and data is passed down as props.

Client Boundaries: Use the "use client" directive strictly for components requiring React Hooks (useState, useEffect, useRef), such as Sliders, Form Inputs, or Mobile Navigation toggles.

5. Feature Documentation and Business Logic
Blog and News Engine
Context: Located in features/blog/.

Data Source: Sanity CMS (Schema type: 'blogPost').

Components:

LatestNews: Fetches the 3 most recent posts using 'getLatestPosts'.

RandomNews: Fetches a randomized selection of posts using 'getRandomBlogPosts'.

BlogCard: A presentational component for individual post previews.

SEO Logic: This feature aggressively implements Structured Data. The 'LatestNews' and 'RandomNews' components automatically generate an 'ItemList' schema containing nested 'BlogPosting' schemas for every displayed post. This ensures Google indexes these blocks as rich lists.

Image Handling: Uses the Sanity image builder pattern (urlFor) with conditional checks to prevent runtime errors if an image is missing.

Knowledge Base (Dictionary)
Context: Located in features/dictionary/.

Data Source: Sanity CMS (Schema type: 'dictionaryEntry' or similar).

Architecture:

Server Side: 'KnowledgeBase.tsx' and 'RandomDictionaryEntries.tsx' handle the initial data fetching via 'getEntries' and 'getRandomDictionaryEntries'.

Client Side: 'KnowledgeBaseList.tsx' handles interactive client-side filtering (search) using React state and useMemo for performance.

SEO Integration: Similar to the Blog feature, these components inject 'ItemList' JSON-LD schemas, defining the dictionary entries as a structured list of items. This aids in achieving rich results for educational content.

Community Reels (Video Slider)
Context: Located in features/home/components/CommunityReels.tsx.

Implementation: A React-Slick carousel displaying vertical video content.

Structured Data: This component injects Schema.org 'VideoObject' data via JSON-LD for each reel.

Fallback Logic: The system includes a critical SEO safeguard. If a video uploaded to the CMS lacks a thumbnail, a default Open Graph image is injected into the 'thumbnailUrl' field in JSON-LD. This prevents Google Search Console from flagging the video schema as invalid (Google requires a thumbnail for all video objects).

UX: The slider uses "centerMode" to highlight the active video. Mute/Unmute state is global for the slider session.

SEO Content Expander
Context: Located in features/seo-content/.

Purpose: Allows for high keyword density (Topical Authority) without compromising User Experience.

Mechanism:

Fetches a "seoSection" document from Sanity via slug.

Renders Portable Text (Rich Text) into the DOM fully server-side.

Uses CSS logic (max-height and overflow:hidden) to visually truncate content.

A Client Component toggle button expands the view, removing the CSS restriction.

SEO Benefit: Search engines crawl the full HTML content immediately as it is present in the initial server response, while users see a clean UI.

Contact System
Context: Located in features/contact/.

Data Flow:

Client-side form uses React hooks for state.

Data is validated against features/contact/schema/contactSchema.ts (Zod).

Valid data is passed to the Server Action features/contact/actions/sendEmail.ts.

The Server Action utilizes the Resend SDK to dispatch the email via HTTP.

Security: The system sets the "Reply-To" header to the user's email address, ensuring direct communication channels.

Reviews & Testimonials
Context: Located in components/sections/home/ReviewsSection.tsx.

Data: Currently operates on a static dataset (reviewsData array) defined within the component.

Date Parsing: Includes a utility function 'parseRelativeDate' to convert relative strings like "4 months ago" into ISO-8601 timestamps dynamically.

Structured Data: Generates 'LocalBusiness' schema with nested 'Review' and 'AggregateRating' objects. This is crucial for displaying star ratings in Search Engine Results Pages (SERPs).

6. Structured Data Strategy (JSON-LD)
The application implements a comprehensive JSON-LD strategy to ensure maximum visibility in search engines. The schemas are injected directly into the HTML via script tags in Server Components.

Global Schemas (Layout Level):

Organization: Defines the main brand entity, logo, and contact points.

SportsActivityLocation: Specifically defines the gym location (Mysliwska street).

HealthAndBeautyBusiness: Specifically defines the massage location (Podkarpacka street).

Feature-Specific Schemas:

ItemList: Implemented in Blog and Knowledge Base sections to define ordered lists of content.

BlogPosting: Used within ItemLists to detail individual blog posts (headline, date, image).

VideoObject: Used in Community Reels to describe video content (name, upload date, thumbnail, content URL).

LocalBusiness (Reviews): Used in the Reviews section to aggregate client feedback and ratings.

Entity Consistency: All canonical links, Open Graph URLs, and Schema.org IDs MUST reference the single production domain: 'https://pandastudioteam.com'. References to legacy domains or Vercel subdomains must be strictly avoided to maintain Entity Consistency in the Knowledge Graph.

7. Data Management and Automation
The project includes a dedicated automation layer for content migration and seeding.

Scripts Directory (scripts/)

Data Source: JSON files in 'scripts/data/' contain structured content (e.g., 'blog-data.json', 'seo-data.json').

Import Logic: Scripts in 'scripts/imports-scripts/' (e.g., 'import-seo.js') utilize the Sanity Client to create transactional write operations.

Sanity Schema Mapping: The scripts map raw JSON data to Sanity Portable Text blocks where necessary, handling formatting (bold, links) automatically.

Execution: Scripts are executed via Node.js and require a write-access token.

Sanity Schema Configuration

seoSection: A document type specifically designed for the SEO Expander feature.

blogPost: Defines the structure for articles.

dictionaryEntry: Defines structure for knowledge base items.

socialReel: Defines video assets.

8. Deployment and Environment
Environment Variables (.env.local): The following variables are mandatory for the application to function correctly:

NEXT_PUBLIC_SANITY_PROJECT_ID: The unique identifier for the Sanity project.

NEXT_PUBLIC_SANITY_DATASET: The dataset name (default: production).

NEXT_PUBLIC_BASE_URL: The canonical production domain (https://pandastudioteam.com).

RESEND_API_KEY: Private API key for the Resend email service.

CONTACT_EMAIL_TO: The recipient email address for contact form submissions.

SANITY_API_WRITE_TOKEN: (Local/Scripts only) Token with write permissions for running import scripts.

Robots and Indexing

Staging: The metadata configuration in 'layout.tsx' is currently set to 'robots: { index: false, follow: false }' to prevent indexing of the development environment.

Production: This setting must be explicitly changed to 'index: true' in 'app/layout.tsx' before the final Go-Live.