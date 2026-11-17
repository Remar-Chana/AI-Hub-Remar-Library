import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from '@/components/ui/button'

const variants = ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const
const sizes = ['xs', 'sm', 'default', 'lg'] as const

createRoot(document.getElementById('root')!).render(
  <main className="mx-auto max-w-3xl space-y-8 p-10">
    <h1 className="text-2xl font-semibold">Button preview</h1>
    {sizes.map((s) => (
      <section key={s} className="space-y-3">
        <h2 className="text-sm text-muted-foreground">size: {s}</h2>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => <Button key={v} variant={v} size={s}>{v}</Button>)}
          <Button size={s} disabled>disabled</Button>
        </div>
      </section>
    ))}
  </main>
)
