# Copilot Coding Agent Instructions

## Repository Summary

This is the **Kartal İmalat** corporate website for Kartal Bombe & Basınçlı Kaplar A.Ş, a Turkish manufacturer of expansion tanks and hydrophore tanks. The site is a static pre-rendered multi-language (Turkish/English/Russian) marketing website built with modern web technologies.

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Runtime | Node.js | 22.x |
| Package Manager | Yarn | 4.12.0 (Berry) |
| Framework | Vike (SSR/SSG) | 0.4.x |
| UI Library | React | 19.x |
| Build Tool | Vite | 7.x |
| Styling | Tailwind CSS | 4.x |
| UI Components | shadcn/ui | Latest |
| Language | TypeScript | 5.x |

---

## Build and Development Commands

**Always run `yarn install` before any other command after cloning or pulling changes.**

### Install Dependencies
```bash
yarn install
```

### Development Server
```bash
yarn dev
```
- Starts development server at `http://localhost:3000` (or next available port)
- Hot module replacement enabled
- Typical startup time: ~300ms

### Production Build
```bash
yarn build
```
- Builds both client and server bundles
- Pre-renders all pages for all locales (Turkish, English, Russian)
- Outputs to `dist/client/` and `dist/server/`
- Typical build time: ~1-2 seconds

### Preview Production Build
```bash
yarn preview
```
- Runs `yarn build` then serves the production build locally

### Add shadcn/ui Components
```bash
yarn shadcn add <component-name>
```
Example: `yarn shadcn add button`

### Type Checking
```bash
npx tsc --noEmit
```
**Note:** The project has some TypeScript errors in `pages/+Head.tsx` and `pages/+onPrerenderStart.ts` related to Vike types. These do NOT block the build but should be addressed when modifying those files.

---

## Project Architecture

### Directory Structure

```
/
├── assets/               # Static assets (images, PDFs, certificates)
├── components/           # Reusable React components
│   ├── Header.tsx        # Site navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Link.tsx          # Locale-aware link component (ALWAYS USE THIS)
│   ├── HeroSection.tsx   # Homepage hero slider
│   ├── ProductsSection.tsx
│   └── BrandSection.tsx
├── data/                 # JSON data files
│   └── team.json         # Team member data
├── lib/
│   └── utils.ts          # Utility functions (cn() for className merging)
├── locales/              # Internationalization system
│   ├── index.ts          # Barrel exports
│   ├── locales.ts        # Locale definitions (tr, en)
│   ├── translations.ts   # All translation strings
│   ├── translate.ts      # Translation function
│   └── extractLocale.ts  # URL locale extraction
├── pages/                # Vike file-system routing pages
│   ├── +config.ts        # Global Vike config (prerender, favicon)
│   ├── +Head.tsx         # HTML <head> component
│   ├── +Layout.tsx       # Root layout component
│   ├── +onBeforeRoute.ts # Locale extraction middleware
│   ├── +onPrerenderStart.ts # Multi-locale prerendering
│   ├── tailwind.css      # Tailwind CSS entry + CSS variables
│   ├── Layout.css        # Additional global styles
│   ├── index/            # Homepage (/)
│   ├── kurumsal/         # About page (/kurumsal, /en/about-us)
│   ├── products/         # Products overview
│   ├── urunler/          # Product detail pages
│   ├── iletisim/         # Contact page (/iletisim, /en/contact)
│   ├── certificates/     # Certificates page
│   └── ...
├── renderer/
│   └── LocaleText.tsx    # Locale-aware text component
├── components.json       # shadcn/ui configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── vike.d.ts             # Vike type declarations
```

### Key Files

| File | Purpose |
|------|---------|
| `pages/+config.ts` | Global Vike settings (prerender: true, favicon) |
| `pages/+Layout.tsx` | Root layout with Header and Footer |
| `pages/+onBeforeRoute.ts` | Extracts locale from URL pathname |
| `pages/+onPrerenderStart.ts` | Generates all locale variants for SSG |
| `locales/translations.ts` | **All translatable strings must be added here** |
| `components/Link.tsx` | **Always use this for internal links** |
| `lib/utils.ts` | Contains `cn()` for Tailwind class merging |

---

## Critical Patterns

### Internationalization (i18n)
- **Supported locales:** `tr` (default), `en`, `ru`
- **Default locale URL:** `/kurumsal` (no prefix)
- **English locale URL:** `/en/about-us`
- **Russian locale URL:** `/ru/about-us`
- **Always add translations to `locales/translations.ts`**
- **Use `<LocaleText>` component for translated UI text**
- **Use `translate(text, locale)` function for programmatic translation**
- **Language metadata is defined in `components/Header.tsx` in the `languages` object**

### Internal Links
**Never use raw `<a>` tags for internal navigation.** Always use:
```tsx
import { Link } from "@/components/Link";

<Link href="/kurumsal">Kurumsal</Link>
```
The `Link` component handles locale prefixing and URL translation automatically.

### Adding New Pages
1. Create folder in `pages/` matching the URL path
2. Add `+Page.tsx` with the page component
3. Add `+config.ts` with title and description
4. Add URL translations to `locales/translations.ts` if route differs between locales
5. Add any UI text translations to `locales/translations.ts`

### Styling
- Use Tailwind CSS classes directly
- Use `cn()` from `@/lib/utils` for conditional classes
- CSS variables defined in `pages/tailwind.css`
- shadcn/ui components imported from `@/components/ui/`

---

## Path Aliases

The project uses `@/` as an alias to the project root:
```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

---

## Validation Checklist

Before submitting changes, verify:

1. **Build passes:** `yarn build` completes without errors
2. **Dev server works:** `yarn dev` starts successfully
3. **New translations added:** Any new UI text is in `locales/translations.ts`
4. **Links use Link component:** No raw `<a>` for internal navigation
5. **Images imported correctly:** Use `import img from "@/assets/..."` syntax

---

## Known Issues

- TypeScript errors exist in `pages/+Head.tsx` and `pages/+onPrerenderStart.ts` related to Vike types. The build still succeeds.
- No ESLint or Prettier configuration exists; follow existing code style.
- No CI/CD pipeline configured; validation is manual via `yarn build`.

---

## Notes

Trust these instructions. Only perform additional exploration if:
- A file mentioned here is not found
- A command fails unexpectedly
- The task requires understanding code not covered above

**Important:** If a user requests changes that conflict with these instructions (e.g., changing the tech stack, build commands, project structure, or coding patterns), make the requested changes AND update this `.github/copilot-instructions.md` file to reflect the new state of the repository.
