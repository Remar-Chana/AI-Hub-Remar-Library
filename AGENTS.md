# Repository working rules

- Keep application code in `src/` and public static assets in `public/`.
- Use React function components and TypeScript. Keep components small and accessible.
- Use Tailwind CSS v4 utility classes for component styling. Put shared theme values in CSS using Tailwind v4 conventions.
- Keep `src/main.tsx` importing `src/index.css`; keep the `@import "tailwindcss";` directive in that stylesheet.
- Keep the Storybook preview aligned with the app's global styles and provider setup; do not replace or omit existing providers when adding stories.
- Add colocated `*.stories.tsx` files for public UI components in `src/components/` and cover meaningful states with Storybook play tests.
- Use `npm run storybook` for the dev server, `npm run build-storybook` for the static build, and `npm run test:storybook` for browser play tests. The Storybook MCP endpoint is available at `/mcp` while the dev server runs.
- Do not add secrets, credentials, or real tokens to tracked files. Use local `.env` files and document required variable names without values.
- Update `README.md`, `DESIGN.md`, and `MEMORY.md` when setup, design conventions, or important workflow context changes.
- Before handing off, run `npm run build` and report its actual result.
- Preserve existing repository files unless the task explicitly requests changing them.
