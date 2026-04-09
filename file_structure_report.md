# Asia Tech Roofing - File Structure & Purpose Report

This report provides a comprehensive overview of the purpose and function of every significant coding file in the Asia Tech Roofing project. The application is built using **Next.js 15+**, **TypeScript**, and **Tailwind CSS v4**.

---

## 1. Core Application Files
These files form the backbone of the application's structure and styling.

- **`app/layout.tsx`**: The main entry point for the layout. It defines the shared UI (like fonts, scripts, and context providers) that wraps every page. It also sets up the global SEO configuration and viewport settings.
- **`app/page.tsx`**: The homepage of the website. It serves as the primary landing page, showcasing the hero section, featured services, projects, and trust signals (reviews).
- **`app/globals.css`**: Contains global CSS styles, Tailwind CSS imports, and custom utility classes. This is where the core design system tokens (colors, typography, spacing) are defined.
- **`app/metadata.ts`**: (If present) Centralized metadata management for the entire application to ensure consistent branding and SEO across all routes.

---

## 2. Pages & Routing
The site uses the Next.js App Router for hierarchical and dynamic routing. Most pages are focused on SEO for specific services in Singapore.

### Main Information Pages
- **`app/about/page.tsx`**: Provides history and details about Asia Tech Roofing, its mission, and team.
- **`app/contact/page.tsx`**: Contains the contact form and business information (phone, email, map, and WhatsApp link).
- **`app/projects/page.tsx`**: A gallery page that showcases completed roofing and waterproofing projects, often using a masonry or grid layout.
- **`app/ratings/page.tsx`**: A dedicated page for customer reviews and ratings, likely integrating with Google Reviews.
- **`app/services/page.tsx`**: A landing page summarizing all services (Roofing, Waterproofing, Structural).

### Service-Specific SEO Pages
These pages are optimized for specific search terms to capture local traffic:
- **`app/roof-repair-singapore/page.tsx`**
- **`app/waterproofing-singapore/page.tsx`**
- **`app/hdb-roof-repair/page.tsx`**
- **`app/commercial-roofing-singapore/page.tsx`**
- **`app/roof-leak-repair-singapore/page.tsx`**

### Nested Service Pages
- **`app/services/roof-repair/page.tsx`**: Detailed breakdown of roofing repair methods.
- **`app/services/leak-repair/page.tsx`**: Focused on leak detection and remediation.
- **`app/services/waterproofing/page.tsx`**: Detailed info on membrane and chemical waterproofing.
- **`app/services/structural-works/page.tsx`**: Covers roof structural reinforcement and metal works.

### Blog System
- **`app/blog/page.tsx`**: The main blog listing page showing all articles.
- **`app/blog/[slug]/page.tsx`**: A dynamic route that generates individual blog post pages based on the article's slug.

---

## 3. Reusable Components (`components/`)
These modular components are used across different pages to maintain consistency.

- **`Navbar.tsx`**: The main navigation header, including mobile-responsive menu and CTA buttons.
- **`Footer.tsx`**: Site footer with navigation links, contact details, and social icons.
- **`CTABanner.tsx`**: A "Call to Action" section used globally to encourage user inquiries.
- **`PageHero.tsx`**: A reusable hero header for sub-pages that displays titles and background images uniformly.
- **`FloatingCTA.tsx`**: A sticky/floating button (typically for WhatsApp or Phone) to provide quick access to contact.
- **`Reveal.tsx`**: A wrapper component for scroll animations (using Framer Motion or similar) to make the page feel dynamic.
- **`ReviewsGrid.tsx`**: A component that fetches and displays Google Reviews in a grid.
- **`ReviewsSkeleton.tsx`**: A loading state placeholder for the ReviewsGrid to improve perceived performance.
- **`RelatedLinks.tsx`**: Used at the bottom of pages to suggest other relevant services or blog posts.

---

## 4. Utilities & Data (`lib/`)
- **`lib/blog.ts`**: The "database" of the site. It contains the array of blog post objects (title, excerpt, content, image) and functions to retrieve them. This allows the blog to function without a separate CMS.

---

## 5. API Routes (`app/api/`)
- **`app/api/reviews/route.ts`**: Server-side logic to fetch reviews from the Google Places API securely (hiding the API Key from the client).

---

## 6. SEO & Static Assets
- **`app/sitemap.ts`**: Dynamically generates the `sitemap.xml` for Google indexing.
- **`app/robots.ts`**: Configures `robots.txt` to guide search engine crawlers.
- **`public/`**: Stores static assets like logos (`asialogo.png`), icons, and SVG files used in the UI.

---

## 7. Configuration Files
- **`package.json`**: Lists all project dependencies, scripts, and metadata.
- **`next.config.ts`**: Next.js specific settings (e.g., image optimization domains, redirects).
- **`tsconfig.json`**: TypeScript configuration for the project.
- **`postcss.config.mjs` & `tailwind.config.ts`**: (Or CSS equivalent) Configuration for Tailwind CSS and CSS processing.
- **`eslint.config.mjs`**: Rules for maintaining code quality and catching errors during development.
