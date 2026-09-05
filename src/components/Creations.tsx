import { creationCategories } from '../data/creations'

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 shrink-0 opacity-60 transition group-hover:opacity-100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 12 12 4M7 4h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Creations() {
  return (
    <section id="creations" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[0.65rem] font-medium tracking-[0.3em] text-brass uppercase">
            Gallery
          </p>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">Creations</h2>
          <p className="mt-4 text-sm leading-relaxed text-ivory-muted sm:text-base">
            Works of lore, story, and image — gathered by house and medium.
          </p>
        </div>

        <div className="space-y-14">
          {creationCategories.map((category) => (
            <div key={category.id}>
              <div className="mb-5 flex items-baseline gap-4">
                <h3 className="font-display text-2xl text-brass-soft sm:text-3xl">
                  {category.label}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-brass/30 to-transparent" />
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col justify-between rounded-xl border border-ivory/10 bg-ink-soft/80 p-5 transition hover:border-brass/40 hover:bg-ink-lift"
                    >
                      <div>
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <h4 className="font-display text-xl leading-snug text-ivory transition group-hover:text-brass-soft">
                            {item.title}
                          </h4>
                          <span className="mt-1.5 text-brass">
                            <ExternalIcon />
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-ivory-muted">
                          {item.blurb}
                        </p>
                      </div>
                      <span className="mt-4 text-[0.65rem] tracking-[0.18em] text-brass/70 uppercase transition group-hover:text-brass">
                        Open →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
