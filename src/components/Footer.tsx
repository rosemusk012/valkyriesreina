import { supportLinks } from '../data/creations'

export function Footer() {
  return (
    <footer id="about" className="scroll-mt-20 border-t border-brass/15 px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl text-ivory">About</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ivory-muted sm:text-base">
              Valkyries Reina is a brand of sovereign creativity — stories, archives,
              and visual rites woven across platforms. Calm over noise. Lore over
              spectacle. Synthesis as devotion.
            </p>
          </div>
          <div className="sm:text-right">
            <p className="mb-3 text-[0.65rem] font-medium tracking-[0.25em] text-brass uppercase">
              Elsewhere
            </p>
            <a
              href={supportLinks.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-xl text-ivory transition hover:text-brass"
            >
              Linktree
              <span aria-hidden="true" className="text-sm text-brass">
                ↗
              </span>
            </a>
            <p className="mt-2 text-sm text-ivory-muted">linktr.ee/rosemusk012</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-display text-lg tracking-wide text-ivory-muted">
            Valkyries Reina
          </p>
          <p className="text-xs tracking-wide text-ivory-muted/70">
            © {new Date().getFullYear()} · Made with quiet intent
          </p>
        </div>
      </div>
    </footer>
  )
}
