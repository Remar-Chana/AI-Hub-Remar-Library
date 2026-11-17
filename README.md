# React + TypeScript + Vite + Tailwind CSS v4

Starter project created with Vite's `react-ts` template. Tailwind CSS v4 is integrated through its Vite plugin, and the home page demonstrates responsive utility classes.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Build and preview

```bash
npm run build
npm run preview
```

## Storybook

```bash
npm run storybook
npm run build-storybook
npm run test:storybook
```

Storybook renders the app's global styles and exposes its MCP endpoint at `/mcp` while the dev server is running. MSW is configured for network-backed stories; add handlers only for requests used by a story.

## Main files

- `src/App.tsx` — demo page
- `src/index.css` — Tailwind import and global base styles
- `vite.config.ts` — React and Tailwind Vite plugins
- `.storybook/` — Storybook config, shared preview, and MCP/MSW setup
- `src/components/ui/*.stories.tsx` — component stories and play tests
- `DESIGN.md` — starter design tokens
- `AGENTS.md` — repository working rules
- `MEMORY.md` — project context and workflow notes

## shadcn/ui

- Config: `components.json` (style `base-nova`); import alias `@/*` → `src/*`.
- Add components with `npx shadcn@latest add <name>`; they land in `src/components/ui/`.
- Included: `Button` (`src/components/ui/button.tsx`), `cn` helper (`src/lib/utils.ts`).
