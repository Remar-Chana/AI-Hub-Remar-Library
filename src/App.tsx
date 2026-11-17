function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">React + TypeScript + Vite</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Tailwind CSS <span className="text-cyan-400">v4</span></h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">A small starter screen demonstrating responsive layout, spacing, typography, color, borders, and hover utilities.</p>
        <section className="mt-12 grid gap-5 md:grid-cols-3" aria-label="Utility class examples">
          {[
            { title: 'Layout', text: 'Grid, flex, max-width, and responsive breakpoints.' },
            { title: 'Typography', text: 'Font size, weight, tracking, and line height.' },
            { title: 'Interaction', text: 'Hover, focus, and transition utilities.' },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-500">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </section>
        <a className="mt-9 inline-flex rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">Tailwind CSS docs</a>
      </div>
    </main>
  )
}

export default App
