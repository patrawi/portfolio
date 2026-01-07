# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with SvelteKit 2.0, featuring smooth animations, a contact form with email functionality, and project showcase. The site uses file-based routing with TypeScript and Tailwind CSS.

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Type checking with svelte-check
npm run check:watch  # Type checking in watch mode
npm run lint         # Run ESLint and Prettier checks
npm run format       # Format code with Prettier
```

## Architecture

### Routing Structure
- File-based routing in `src/routes/`
- `+layout.svelte` - Root layout with Header/Footer and scroll tracking
- `+page.svelte` - Home page (renders Main component)
- `about/+page.svelte` - About page (also contains contact form server action)
- `projects/+page.svelte` - Projects showcase page
- `blog/+page.svelte` - Blog page

### Component Organization
- `src/components/` - Reusable Svelte components (Header, Main, Contact, Footer, etc.)
- `src/lib/` - Utilities, types, and animation functions
- `src/lib/data/` - JSON data for projects and work experience

### Key Technical Details

**Custom Transitions**: The project uses custom Svelte transitions defined in `src/lib/`:
- `typeIn` - Typing animation for text (requires single text node child)
- `slideScale` - Slide and scale transition
- `tilt` - Tilt effect for interactive elements

**Email Functionality**:
- Server action for contact form is in `src/routes/about/+page.server.ts`
- Uses Nodemailer with Gmail SMTP
- Requires `GOOGLE_EMAIL` and `GOOGLE_EMAIL_PASSWORD` in private env vars
- The Contact component submits to this action (note: form action attribute needs to be set to `/about`)

**Type Safety**:
- TypeScript interfaces in `src/lib/types.ts`: `IWorkExperience`, `IProjectCard`
- All components use `lang="ts"` for TypeScript support

**Styling**:
- Tailwind CSS for utility-first styling
- Custom scrollbar configuration in `tailwind.config.js`
- PostCSS configured for Tailwind processing
- Global styles in `src/app.css`

**Image Handling**:
- Uses `@sveltejs/enhanced-img` for optimized images
- Images referenced from static paths or data files

## Environment Variables

For email functionality to work, the following private environment variables must be set:
- `GOOGLE_EMAIL` - Gmail address for sending
- `GOOGLE_EMAIL_PASSWORD` - Gmail app password (not account password)

## Component Patterns

- Svelte 4 syntax with `<script lang="ts">` blocks
- Reactive declarations using `$:` syntax
- Props passed with TypeScript typing
- Form handling with server actions pattern
- Transitions applied with `in:` and `out:` directives or `use:` directives

## Known Issue

The Contact component (`src/components/Contact.svelte`) uses `event.currentTarget.action` for form submission but doesn't have the `action` attribute set on the form. The server action exists at `/about` route, so the form should have `action="/about"` attribute to properly submit to the server action.
