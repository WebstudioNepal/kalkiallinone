# Kalkisena — All-in-One App Website

Marketing website for the **Kalkisena** (Kalki All-in-One) app, built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |

## Design Tokens

Colors, radii, and typography are centralized in [`src/styles/tokens.css`](src/styles/tokens.css). Update placeholder values there when syncing from Figma.

**Figma source:** [New-Kalki design file](https://www.figma.com/design/dIYMGqDxYfX40E3JGM8gMt/New-Kalki?node-id=459-3096)

### Token swap workflow

1. Export Figma variables from node `459:3096`
2. Replace values in `src/styles/tokens.css`
3. Replace `public/images/hero-placeholder.svg` with exported assets

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/           # Reusable primitives (Button, Container, Section)
│   ├── layout/       # Header, Footer
│   └── sections/     # Page sections (Hero, Features, CTA)
├── config/site.ts    # Site copy, nav links, feature data
├── lib/cn.ts         # Tailwind class merge utility
└── styles/tokens.css # Design tokens (CSS variables)
```

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **next/font** — Inter (body), Playfair Display (headings)
- **lucide-react** — Icons
