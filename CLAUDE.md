# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EB-Services is a React-based website for a translation services company, built with TypeScript, Vite, and Shadcn UI components. The application is deployed on Vercel and uses client-side routing with React Router.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Install dependencies
npm install
```

## Architecture

### Project Structure

The codebase follows a screens-and-sections architecture:

- **src/screens/**: Top-level route components (Home, Services, About, Contact, Blog, Pricing)
- **src/screens/Home/sections/**: Compositional sections for the Home page (HeroSection, ServicesSection, AboutUsSection, ContactSection, etc.)
- **src/components/**: Reusable components
  - **ui/**: Shadcn UI components (button, card, avatar, separator)
  - **LanguageSelector/**: Custom language selector component
- **src/lib/utils.ts**: Utility functions, primarily the `cn()` helper for conditional class merging

### Routing

React Router v6 is configured in [src/App.tsx](src/App.tsx) with client-side routing. Routes:
- `/` - Home
- `/services` - Services
- `/about` - About
- `/contact` - Contact
- `/blog` - Blog
- `/pricing` - Pricing

Vercel rewrites all routes to [index.html](index.html) for SPA routing (configured in [vercel.json](vercel.json)).

### Styling System

- **Tailwind CSS**: Primary styling framework with custom theme configuration
- **CSS Variables**: Theme colors use HSL CSS variables (defined in [tailwind.css](tailwind.css))
- **Brand Color**: Primary blue `#1090cb` used throughout the application
- **Utility Function**: Use `cn()` from [src/lib/utils.ts](src/lib/utils.ts) to merge Tailwind classes with conditional logic

### Shadcn UI Components

The project uses Shadcn UI, which provides accessible component primitives built on Radix UI. Components are located in [src/components/ui/](src/components/ui/) and can be customized via the `buttonVariants` pattern (see [src/components/ui/button.tsx](src/components/ui/button.tsx)).

When adding new Shadcn UI components, they should follow the same pattern:
- Use class-variance-authority for variants
- Export both the component and variants
- Import the `cn()` utility for class merging

### Component Organization

Components follow a barrel export pattern with `index.ts` files for cleaner imports. Sections are self-contained and exported from their respective directories.

### TypeScript Configuration

The project uses strict TypeScript settings:
- Target: ES2020
- Module: ESNext
- Strict mode enabled
- No unused locals/parameters enforcement
- JSX: react-jsx (new JSX transform)

Configuration split across [tsconfig.json](tsconfig.json), [tsconfig.app.json](tsconfig.app.json), and [tsconfig.node.json](tsconfig.node.json).

## Key Development Patterns

### Creating New Sections

When adding sections to the Home page:
1. Create directory: `src/screens/Home/sections/NewSection/`
2. Create component: `NewSection.tsx`
3. Create barrel export: `index.ts`
4. Import and compose in [src/screens/Home/Home.tsx](src/screens/Home/Home.tsx)

### Creating New Routes

1. Create screen component in `src/screens/NewScreen/`
2. Follow the barrel export pattern with `index.ts`
3. Add route to [src/App.tsx](src/App.tsx)

### Styling Components

Use Tailwind utility classes directly in JSX. For conditional classes, use the `cn()` utility:

```typescript
import { cn } from "../../lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />
```

### Static Assets

All images and SVGs are stored in the [public/](public/) directory and referenced with absolute paths (e.g., `/logo.png`).

## Vercel Deployment

The project is configured for Vercel deployment:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- SPA rewrites configured for client-side routing

## Language Support

The [LanguageSelector](src/components/LanguageSelector/LanguageSelector.tsx) component is implemented but currently only supports French (fr) and English (en). Language switching functionality is not fully wired up - `onLanguageChange` handler is a no-op in the current implementation.
