# Implementation Plan — Aarushi Infotech Website (Phase 1)

A premium, professional software company website for Aarushi Infotech in Vapi, Gujarat, specializing in Tally-based solutions, business software, and web technologies.

This plan focuses on **Phase 1: Home / Landing Page** and scaffolding the project structure.

## User Review Required

> [!IMPORTANT]
> The color palette and logo assets are strictly predefined:
> - **Primary Text / Headings / Navbar Bg**: Dark Navy `#093c5d`
> - **Cards & Section Accents**: Steel Blue `#3b7597`
> - **Borders & Highlights**: Light Cyan `#6fd1d7`
> - **CTA & Hover Glow**: Mint Green `#5df8d8`
> - **Logo Accent & Highlights**: Golden Amber `#D4A017`
> - **Background Theme**: Light/White (strictly no dark backgrounds for the body).
> We will pair **Syne** (Google Font) for headings and **Plus Jakarta Sans** (Google Font) for body text to give a highly modern, professional, yet characterful appearance.
> 
> **Project Directory**: `C:\Users\Admin\Desktop\AI_website_Row Data`

## Proposed Changes

 we will scaffold the React + Vite project in `C:\Users\Admin\Desktop\AI_website_Row Data`. We will recommend the user to open this folder as their active workspace after scaffolding.

### Dependencies
We need the following packages:
- `react-router-dom` for routing
- `gsap` for animations
- `lenis` for smooth momentum scrolling
- `lucide-react` for modern, clean icons
- `postcss` and `tailwindcss` / `autoprefixer` for styling

### Project File Structure

We will create and fill the following files:

#### [NEW] [tailwind.config.js](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/tailwind.config.js)
Tailwind configuration containing our custom color scheme (`navy`, `steelblue`, `lightcyan`, `mint`, `amber`), and typography (`font-heading`, `font-body`).

#### [NEW] [vite.config.js](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/vite.config.js)
Standard Vite React configuration.

#### [NEW] [postcss.config.js](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/postcss.config.js)
PostCSS configuration for Tailwind.

#### [NEW] [src/styles/globals.css](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/styles/globals.css)
Global stylesheet importing Tailwind directives, importing Google Fonts (Syne and Plus Jakarta Sans), and setting up basic styles like custom cursor styles and background mesh details.

#### [NEW] [src/hooks/useLenis.js](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/hooks/useLenis.js)
A custom React hook that instantiates `lenis` smooth scrolling and connects it with GSAP's `ScrollTrigger` ticker.

#### [NEW] [src/components/Cursor.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/components/Cursor.jsx)
A custom cursor component displaying a subtle glowing dot that follows the mouse with smooth lag and enlarges/changes color when hovering over interactive elements.

#### [NEW] [src/components/Navbar.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/components/Navbar.jsx)
Sticky, responsive navigation bar with a solid transition on scroll, featuring the Aarushi Infotech logo, navigation links, and a magnetic Mint Green CTA button ("Get a Quote").

#### [NEW] [src/components/Hero.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/components/Hero.jsx)
Hero section featuring GSAP word-reveal text animations, primary/secondary CTA buttons, a background mesh gradient, and a floating/parallax abstract technology visual on the right.

#### [NEW] [src/components/Services.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/components/Services.jsx)
Services section showcasing the 6 specific services in a responsive card grid with hover lift and glow effects.

#### [NEW] [src/components/Stats.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/components/Stats.jsx)
Stats showcase utilizing GSAP ScrollTrigger to animate numbers (Projects, Clients, Years, Tech) when they enter the viewport.

#### [NEW] [src/components/WhyUs.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/components/WhyUs.jsx)
"Why Choose Us" section listing USP items with a scroll-triggered stagger fade-in animation.

#### [NEW] [src/components/Footer.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/components/Footer.jsx)
Clean, professional footer in Dark Navy background featuring site structure, quick links, contact info for Vapi, Gujarat, and social links.

#### [NEW] [src/pages/Home.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/pages/Home.jsx)
Home page assembly bringing together the Hero, Services, Stats, and WhyUs components.

#### [NEW] [src/pages/ServicesPage.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/pages/ServicesPage.jsx)
Shell page for detailed services info (routing structure support).

#### [NEW] [src/pages/Portfolio.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/pages/Portfolio.jsx)
Shell page for projects and case studies.

#### [NEW] [src/pages/About.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/pages/About.jsx)
Shell page for company history and profile.

#### [NEW] [src/pages/Contact.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/pages/Contact.jsx)
Shell page for the full contact details and map.

#### [NEW] [src/pages/Blog.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/pages/Blog.jsx)
Shell page for Aarushi Infotech articles.

#### [NEW] [src/App.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/App.jsx)
Main App component setting up React Router routes, calling the custom `useLenis` hook, and embedding `Cursor.jsx`, `Navbar.jsx`, and `Footer.jsx` globally.

#### [NEW] [src/main.jsx](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/src/main.jsx)
React app mount point.

#### [NEW] [index.html](file:///C:/Users/Admin/Desktop/AI_website_Row_Data/index.html)
Vite HTML entry point with correct title tags and SEO metadata.

## Verification Plan

### Automated Checks & Builds
- Run local compilation tests by running `npm run build` inside the project to verify that the TypeScript/JSX compiling passes without errors.
- Start the development server using `npm run dev` to verify active routing, layouts, and responsiveness.

### Manual Verification
- Verify the GSAP staggered animations run cleanly on page load.
- Ensure Lenis smooth scrolling behaves as intended without stuttering.
- Check custom cursor alignment and color changes when hovering on buttons or links.
- Confirm sticky navigation bar changes color upon scrolling.
