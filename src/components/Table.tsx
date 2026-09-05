import { useCallback, useState } from 'react'
import { tableFragments, type Fragment } from '../data/fragments'

function pickFragment(exclude?: Fragment): Fragment {
  const pool =
    exclude == null
      ? tableFragments
      : tableFragments.filter((f) => f.label !== exclude.label)
  const choices = pool.length > 0 ? pool : tableFragments
  return choices[Math.floor(Math.random() * choices.length)]!
}

export function Table() {
  const [fragment, setFragment] = useState<Fragment>(() => pickFragment())
  const [fadeKey, setFadeKey] = useState(0)

  const drawAgain = useCallback(() => {
    setFragment((current) => pickFragment(current))
    setFadeKey((k) => k + 1)
  }, [])

  return (
    <section id="table" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[0.65rem] font-medium tracking-[0.3em] text-brass uppercase">
            From the Table
          </p>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">
            A chair is waiting
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ivory-muted sm:text-base">
            Fragments drawn from the house lore — made by Sival. Sit a moment.
            Draw what the table offers.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-brass/25 bg-gradient-to-br from-brass/10 via-ink-soft to-ink-lift p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -bottom-16 size-56 rounded-full bg-brass/10 blur-3xl"
          />

          <div key={fadeKey} className="relative animate-fade-lift">
            <p className="mb-4 text-[0.65rem] font-medium tracking-[0.22em] text-brass uppercase">
              {fragment.label}
            </p>
            <p className="font-display text-2xl leading-snug text-ivory italic sm:text-3xl">
              {fragment.body}
            </p>
          </div>

          <div className="relative mt-10">
            <button
              type="button"
              onClick={drawAgain}
              className="rounded-full border border-brass/40 bg-brass/10 px-5 py-2.5 text-[0.65rem] font-medium tracking-[0.2em] text-brass uppercase transition hover:border-brass/70 hover:bg-brass/20 hover:text-brass-soft"
            >
              Draw again
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
