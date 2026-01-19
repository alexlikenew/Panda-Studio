AI Agent Operational Instructions
Context: You are acting as a Senior Full Stack Engineer working on the Panda Studio project. Goal: Maintain code quality, consistency, and stability across the Next.js 15 application.

Follow these instructions strictly for every code generation or modification task.

1. Critical "Kill-Switch" Rules
Violating these rules results in immediate rejection of the code.

NO Tailwind CSS. Do not suggest, import, or use Tailwind utility classes.

NO Inline Styles. Use SCSS modules or BEM classes. Exception: Dynamic values like background-image or JS-driven heights.

NO any Type. TypeScript any is strictly prohibited. Define interfaces in types.ts files.

NO Hardcoded Text. Large text blocks must be moved to Sanity CMS (SeoSection). Small UI text is acceptable.

Legacy Data. Do not modify or rely on the _legacy_reference folder. It is for read-only reference.

2. Styling and Design System Protocol
Typography
Source of Truth: styles/base/_typography.scss contains all font definitions.

Forbidden Properties: Do NOT write font-size, font-weight, line-height, or font-family in local component SCSS files.

Implementation: Apply global utility classes directly in JSX.

Correct: <h2 className="heading-h2">Title</h2>

Incorrect: .my-component__title { font-size: 32px; }

SCSS Architecture
Methodology: Use BEM (Block__Element--Modifier) naming convention strictly.

File Structure:

Page-specific styles -> styles/pages/_page-name.scss

Feature-specific styles -> styles/features/_feature-name.scss

Section-specific styles -> styles/sections/_section-name.scss

Registration: Every new SCSS partial must be imported in styles/main.scss using @use.

Asset Paths: All background images in SCSS must use absolute paths starting from public root (e.g., url('/img/background.png')).

3. Architecture and Component Logic
Feature-Based Structure
Place code in the correct domain bucket within features/:

features/<domain>/components/: React components.

features/<domain>/services/: Data fetching (GROQ).

features/<domain>/types/: TypeScript interfaces.

features/<domain>/actions/: Server Actions.

Server vs. Client Components
Default: All components are Server Components.

Directive: Add "use client"; ONLY when using hooks (useState, useEffect, useRef, onClick).

Composition: Pass Server Component data as props to Client Components (Leaf Pattern).

Data Fetching
Location: Fetch data in the highest possible parent (Page or Section container).

Method: Use specific service functions (e.g., getLatestPosts()) located in services.ts files.

Error Handling: Always check if data is null/empty before rendering. Return null to render nothing if data is missing.

4. Sanity CMS Integration
Schema Definition
Location: sanity/schemaTypes/

Naming: Use camelCase for field names.

Validation: Always include validation rules (e.g., Rule.required()).

Data Handling
Images: Use the urlFor utility from @/sanity/lib/image to generate URLs.

Portable Text: Use @portabletext/react with the custom components configuration defined in SeoContentBlock.tsx for rendering Rich Text.

5. SEO and Structured Data (JSON-LD)
Implementation Rules
Format: Use Schema.org standards via JSON-LD.

Injection: Use <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />.

Mandatory Fields:

Organization: On root layout.

ItemList: For Blog and Knowledge Base lists.

VideoObject: For Community Reels.

LocalBusiness + Review: For Reviews section.

Critical Fallbacks
Domain: Always use https://pandastudioteam.com as the base domain for canonicals and IDs.

Video Thumbnails: If a video object from Sanity lacks a thumbnail, inject a default static image (/img/og-image.jpg) into the JSON-LD to prevent validation errors.

6. Specific Feature Logic
Contact Form
Transport: Use Resend SDK, NOT Nodemailer.

Security: Always use Zod for server-side validation (contactSchema.ts).

Configuration: Use RESEND_API_KEY and CONTACT_EMAIL_TO from environment variables.

Community Reels
Library: Use react-slick with centerMode: true.

Performance: Use poster attribute for video tags using the Sanity thumbnail.

7. Data Seeding Logic
When creating import scripts in scripts/imports-scripts/:

Use client.transaction() for batch operations.

Use createOrReplace() with a deterministic _id (usually based on slug) to ensure idempotency (scripts can be run multiple times without duplicating data).

Requires dotenv configuration pointing to .env.local.

End of Instructions