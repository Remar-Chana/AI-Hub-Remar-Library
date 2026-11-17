# Project memory

## Context

- This repository contains an existing uSpec component library and a React + TypeScript + Vite demo app at the repository root.
- The app uses Tailwind CSS v4 through `@tailwindcss/vite`.
- The initial demo in `src/App.tsx` is a simple responsive utility-class showcase.

## Workflow

- Install dependencies with `npm install`.
- Start local development with `npm run dev`.
- Verify production compilation with `npm run build`.
- Preview the production output with `npm run preview`.
- Run Storybook with `npm run storybook`, build it with `npm run build-storybook`, and run browser play tests with `npm run test:storybook`.
- Keep credentials out of the repository; `.env*` files are ignored except `.env.example`.

## Existing content

- `components/`, `references/`, and the uSpec configuration/assets predate this app and should be preserved when changing the starter project.

## shadcn

- shadcn initialized (`components.json`); `@` alias is configured in `tsconfig.json`, `tsconfig.app.json`, and `vite.config.ts`. TypeScript 7 rejects `baseUrl`, so only `paths` is used.
- The shadcn MCP tools were not connected in-session; components were added via the `shadcn` CLI instead. Root `components/` (uSpec output) is separate from `src/components/`.

## Storybook

- Storybook uses React + Vite; `.storybook/preview.tsx` imports the app's global stylesheet and loads MSW for network-backed stories.
- `@storybook/addon-mcp` exposes the Storybook MCP endpoint at `/mcp` while the dev server is running. `@storybook/addon-vitest` runs story play functions in Chromium.
- Public UI components live in `src/components/`; colocate their stories as `*.stories.tsx`.
