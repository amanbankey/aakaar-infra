# Aakaar Infra — Real Estate Builder & Construction Company Website

Premium, production-ready React.js + Vite + Tailwind CSS website for Aakaar Infra, built in Khandwa, Madhya Pradesh.

## Tech Stack
- React.js + Vite
- Tailwind CSS v4
- Framer Motion (scroll reveals, page transitions)
- GSAP (mouse-move parallax)
- AOS (scroll animations)
- React Router DOM (routing)
- Lucide React (icons only)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Folder Structure

```
src/
  components/
    layout/       Header, Footer, Layout, WhatsAppButton
    ui/           Button, Cards, SectionHeading, PageHero
    sections/     Page-specific sections (home, about, services, projects, contact)
    SEO.jsx       Per-page meta tag manager
  pages/          Home, About, Services, Projects, Contact
  constants/      Business info, nav links, services, projects, testimonials
  animations/     Framer Motion variants
  hooks/          useScrollPosition, useCountUp
  index.css       Tailwind theme tokens and global styles
```

## Notes
- All construction and project images use royalty-free Unsplash placeholders — replace with real photography before going live.
- The logo is not yet included; swap the text logo in `Header.jsx` and `Footer.jsx` once the logo file is provided.
- The Google Map embed in `constants/business.js` (`mapEmbedSrc`) uses a text-based query; replace with the exact Google Maps embed link for pixel-accurate positioning.
