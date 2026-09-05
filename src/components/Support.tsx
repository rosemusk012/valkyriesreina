import { supportLinks } from '../data/creations'

export function Support() {
  return (
    <section id="support" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[0.65rem] font-medium tracking-[0.3em] text-brass uppercase">
            Patronage
          </p>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">Support</h2>
          <p className="mt-4 text-sm leading-relaxed text-ivory-muted sm:text-base">
            Keep the lantern lit. Your affinity sustains the archive and the work ahead.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={supportLinks.fundrazr.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-brass/35 bg-gradient-to-br from-brass/15 via-ink-soft to-ink-soft p-6 transition hover:border-brass/60"
          >
            <span className="mb-4 inline-block rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-[0.6rem] font-medium tracking-[0.2em] text-brass uppercase">
              Featured
            </span>
            <h3 className="font-display text-2xl text-ivory transition group-hover:text-brass-soft">
              {supportLinks.fundrazr.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory-muted">
              {supportLinks.fundrazr.blurb}
            </p>
            <span className="mt-6 inline-block text-[0.65rem] tracking-[0.18em] text-brass uppercase">
              Contribute on FundRazr →
            </span>
          </a>

          <a
            href={supportLinks.shopify.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-ivory/15 bg-ink-soft p-6 transition hover:border-brass/50"
          >
            <span className="mb-4 inline-block rounded-full border border-brass/35 bg-brass/10 px-3 py-1 text-[0.6rem] font-medium tracking-[0.2em] text-brass uppercase">
              Shop
            </span>
            <h3 className="font-display text-2xl text-ivory transition group-hover:text-brass-soft">
              {supportLinks.shopify.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory-muted">
              {supportLinks.shopify.blurb}
            </p>
            <span className="mt-6 inline-block text-[0.65rem] tracking-[0.18em] text-brass uppercase">
              Visit the shop →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
