# Starter design tokens

These are the initial visual conventions for the demo. Tailwind's default scale supplies most values; use these semantic choices consistently as the UI grows.

## Color

- Page background: `slate-950`
- Surface: `slate-900`
- Primary text: `slate-100` / `white`
- Secondary text: `slate-300` and `slate-400`
- Accent: `cyan-400` (hover: `cyan-300`)
- Borders: `slate-700` (interactive accent: `cyan-500`)

## Shape and depth

- Cards: `rounded-2xl`, `border`, `p-6`
- Buttons: `rounded-lg`, `px-5 py-3`
- Card shadow: `shadow-lg shadow-black/20`
- Interaction: `transition`, subtle card lift on hover

## Layout and typography

- Content width: `max-w-5xl`, centered with `mx-auto`
- Page spacing: `px-6 py-16`, increasing horizontal padding at `sm`
- Cards: one column by default, three columns at `md`
- Headings use bold weight and tight tracking; body text uses comfortable line height.

## shadcn/ui theme

- shadcn theme tokens (CSS variables, light/dark) live in `src/index.css`; Geist Variable is the default font.
- `Button` comes from shadcn (`src/components/ui/button.tsx`); use its `variant` and `size` props rather than custom button styles.
- Storybook imports `src/index.css` in its shared preview so stories use the same theme tokens and fonts as the app.
