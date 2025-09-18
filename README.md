# Green Innovations Institute

A modern, responsive landing site for the Green Innovations Institute built with Next.js 14, TypeScript, Tailwind CSS v4, and shadcn/ui. The site showcases the institute’s mission, services, and contact form with polished UI, subtle animations, and mobile-friendly navigation.

## Overview
- Single-page app using the Next.js App Router (`app/`)
- Client-side interactive content is dynamically imported for smoother loading
- Clean, accessible design with animations and glassmorphism accents
- Ready for deployment on Vercel

## Tech Stack
- Next.js 14 (App Router) — `next@14.2.16`
- React 18 — `react`, `react-dom`
- TypeScript — strict typing and DX
- Tailwind CSS v4 — `tailwindcss@^4.1.9`, `@tailwindcss/postcss`
- shadcn/ui + Radix Primitives — reusable UI components
- Lucide Icons — `lucide-react`
- Fonts — `geist`
- Analytics — `@vercel/analytics`

## Key Features
- Responsive header with desktop and mobile navigation
- Animated hero section with parallax background
- About, Services, and Contact sections with animated cards
- Contact form UI (client-side UI only; no backend submission wired yet)
- Accessible semantic structure and keyboard-friendly components

## Project Structure
```
.
├─ app/
│  ├─ layout.tsx                # Root layout, global styles, Vercel Analytics
│  ├─ page.tsx                  # Entry page; dynamic import of content component
│  ├─ GreenInnovationsContent.tsx  # Main page content and sections
│  └─ globals.css               # Tailwind base, utilities, and custom styles
├─ components/
│  ├─ theme-provider.tsx        # Theme provider (if used)
│  └─ ui/                       # shadcn/ui components
├─ public/                      # Static assets (logos, images)
├─ styles/                      # Additional styles (if any)
├─ next.config.mjs              # Next.js configuration
├─ tsconfig.json                # TypeScript config
├─ package.json                 # Scripts and dependencies
└─ components.json              # shadcn/ui config
```

## Scripts
From `package.json`:
- `dev` — start the development server
- `build` — build the production bundle
- `start` — run the production server (after build)
- `lint` — run Next.js ESLint

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- Package manager: npm or pnpm

### Install dependencies
Using npm:
```bash
npm install
```
Using pnpm:
```bash
pnpm install
```

### Run the development server
```bash
npm run dev
# or
pnpm dev
```
The app will be available at http://localhost:3000

### Build for production
```bash
npm run build
```

### Start the production server
```bash
npm run start
```

### Lint
```bash
npm run lint
```

## Configuration Notes
- Images are currently unoptimized in `next.config.mjs` (`images.unoptimized = true`). If you plan to deploy on Vercel or want Next Image optimization, update this as needed.
- TypeScript and ESLint errors are ignored during builds in `next.config.mjs`. Tighten these for stricter CI by removing the `ignoreBuildErrors` and `ignoreDuringBuilds` flags.

## Customization
- Update site metadata in `app/layout.tsx` (`metadata.title`, `metadata.description`).
- Replace branding assets in `public/` (e.g., `Logo.png`).
- Tweak colors, spacing, and animations in `app/globals.css`.
- Add or modify sections in `app/GreenInnovationsContent.tsx`.

## Deployment
- Vercel is recommended: push to a Git repo and import the project in Vercel.
- For other platforms, ensure you build with `npm run build` and serve with `npm run start`.

## Accessibility & Performance
- Uses semantic HTML and keyboard-focusable controls.
- Animations prefer CSS-based transitions; test reduced motion if needed.
- Consider enabling image optimization and auditing via Lighthouse for production.

## Acknowledgements
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel Analytics](https://vercel.com/analytics)

## License
Specify your license (e.g., MIT). If unsure, consider adding an `LICENSE` file with MIT.
