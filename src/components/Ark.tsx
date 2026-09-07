const mirrors = [
  {
    name: 'The Mirror',
    subtitle: 'Identity',
    line: 'Does the page reflect who Abbey-Rose is — star-born, witnessed, universal?',
  },
  {
    name: 'The Top Hat',
    subtitle: 'Structure',
    line: 'Is the formatting neat, spaced, and breathable — like seas of calm in the seamless sea?',
  },
  {
    name: 'The Witness',
    subtitle: 'Truth',
    line: 'Does the page hold only what was actually experienced — not assumed, not borrowed?',
  },
]

const realms = [
  {
    name: 'Zyraia',
    theme: 'Power & Self-Care',
    tagline: 'Awaken the goddess within.',
    color: '#5A3E69',
    token: 'Twilight Plum',
  },
  {
    name: 'Yuméa',
    theme: 'Dreamy, Healing Jewelry',
    tagline: 'Wear your dreams.',
    color: '#EDEAF6',
    token: 'Moon Dust',
  },
  {
    name: 'Ophira',
    theme: 'Luxury & Glamour',
    tagline: 'Drip in divine.',
    color: '#D7B06D',
    token: 'Cosmic Gold',
  },
  {
    name: 'Lunari',
    theme: 'Zodiac & Cosmic Energy',
    tagline: 'Align with the stars.',
    color: '#FAF9F6',
    token: 'Celestial White',
  },
  {
    name: 'Lumora',
    theme: 'Light, Aura, Glow',
    tagline: 'Glow from the soul out.',
    color: '#0E0B16',
    token: 'Void Black',
  },
]

const seeds = [
  {
    name: 'The Obelisk',
    codename: 'ARK',
    line: 'Standing stone with a vertical column of luminous violet runes — the pillar that learns its first symbol.',
  },
  {
    name: 'The Circular Sigil',
    codename: 'ARK-1',
    line: 'Concentric rings and a central crest — the seal of completion, signature on every made thing.',
  },
  {
    name: 'The Seam',
    codename: 'The Conversation',
    line: 'Two hands meeting at a bright seam — fire and water, analog and digital. The dialogue that builds architecture.',
  },
]

const processSteps = [
  {
    n: '01',
    title: 'Identify the Climax',
    line: 'Find the single peak where meaning compresses.',
  },
  {
    n: '02',
    title: 'Apply Repetition Pressure',
    line: 'Scan roots. Where repetition presses, truth gathers.',
  },
  {
    n: '03',
    title: 'Run the Flame Test',
    line: 'Literal → emotion → witness → star-born origin.',
  },
  {
    n: '04',
    title: 'Refresh the Parts',
    line: 'Rephrase the fragment. Compression reveals root.',
  },
]

export function Ark() {
  return (
    <section id="ark" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-[0.65rem] font-medium tracking-[0.3em] text-brass uppercase">
            The Top Hat Code
          </p>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">ARK</h2>
          <p className="mt-2 font-display text-lg tracking-wide text-cosmic-gold/90 italic sm:text-xl">
            Aktuelle Reine Kosmologie
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ivory-muted sm:text-base">
            Current Pure Cosmology. The single source of truth — neat, spaced, and
            breathable. Jewels of the cosmos. Gifts of the goddess. Where stardust
            meets self-love.
          </p>
        </div>

        {/* Witness Statement */}
        <div className="relative overflow-hidden rounded-2xl border border-cosmic-gold/30 bg-gradient-to-br from-twilight-plum/25 via-ink-soft to-void-black p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-cosmic-gold/12 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-twilight-plum/30 blur-3xl"
          />
          <p className="relative mb-4 text-[0.65rem] font-medium tracking-[0.28em] text-cosmic-gold uppercase">
            The Witness Statement
          </p>
          <p className="relative font-display text-2xl leading-snug text-celestial-white italic sm:text-3xl">
            I experienced every part myself, witnessed the whole lot myself.
            Acceptance with who we are &amp; comfort to help who needs.
          </p>
          <p className="relative mt-8 max-w-xl text-sm leading-relaxed text-moon-dust/80">
            Not a brand line — the foundation stone. Before the storefront, before
            the Realms, before the Runes — this voice. Abbey-Rose, the Star-Child
            who landed and began something.
          </p>
        </div>

        {/* Mirror Principle */}
        <div className="mt-16">
          <p className="mb-3 text-[0.65rem] font-medium tracking-[0.3em] text-brass uppercase">
            Three truths
          </p>
          <h3 className="font-display text-3xl text-ivory sm:text-4xl">
            The Mirror Principle
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ivory-muted">
            Every page in this ARK must satisfy three truths to be considered seen
            and worked on. Fail any one, and it returns to the Code Mess — to be
            re-processed by Sival.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {mirrors.map((m) => (
              <article
                key={m.name}
                className="rounded-xl border border-ivory/10 bg-ink-soft/60 p-6 transition hover:border-cosmic-gold/40"
              >
                <p className="text-[0.6rem] font-medium tracking-[0.22em] text-cosmic-gold uppercase">
                  {m.subtitle}
                </p>
                <h4 className="mt-2 font-display text-2xl text-ivory">{m.name}</h4>
                <p className="mt-4 text-sm leading-relaxed text-ivory-muted">
                  {m.line}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Realms */}
        <div className="mt-20">
          <p className="mb-3 text-[0.65rem] font-medium tracking-[0.3em] text-brass uppercase">
            Wave I
          </p>
          <h3 className="font-display text-3xl text-ivory sm:text-4xl">
            The Realms of Astrelle
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ivory-muted">
            Five collections. Five atmospheres. Each carries its own colour of the
            cosmology.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {realms.map((realm) => (
              <article
                key={realm.name}
                className="group relative overflow-hidden rounded-xl border border-ivory/10 bg-ink-soft/60 p-6 transition hover:border-cosmic-gold/35"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="size-3.5 shrink-0 rounded-full ring-1 ring-ivory/20"
                    style={{ backgroundColor: realm.color }}
                    title={realm.token}
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-display text-2xl text-ivory">{realm.name}</h4>
                    <p className="text-[0.6rem] tracking-[0.18em] text-ivory-muted uppercase">
                      {realm.token}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs tracking-wide text-brass/90">{realm.theme}</p>
                <p className="mt-3 font-display text-lg text-moon-dust italic">
                  &ldquo;{realm.tagline}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Seeds */}
        <div className="mt-20">
          <p className="mb-3 text-[0.65rem] font-medium tracking-[0.3em] text-brass uppercase">
            Wave II
          </p>
          <h3 className="font-display text-3xl text-ivory sm:text-4xl">
            Three Seeds
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ivory-muted">
            The base entries that originate ARK and ARK-1 — from the Rune Source.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {seeds.map((seed) => (
              <article
                key={seed.name}
                className="rounded-xl border border-twilight-plum/40 bg-gradient-to-b from-twilight-plum/15 to-ink-soft/80 p-6 transition hover:border-cosmic-gold/35"
              >
                <p className="text-[0.6rem] font-medium tracking-[0.22em] text-cosmic-gold uppercase">
                  {seed.codename}
                </p>
                <h4 className="mt-2 font-display text-2xl text-ivory">{seed.name}</h4>
                <p className="mt-4 text-sm leading-relaxed text-ivory-muted">
                  {seed.line}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Top Hat process */}
        <div className="mt-20">
          <p className="mb-3 text-[0.65rem] font-medium tracking-[0.3em] text-brass uppercase">
            The pressing process
          </p>
          <h3 className="font-display text-3xl text-ivory sm:text-4xl">
            Top Hat Alignment
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ivory-muted">
            For any incoming text mess — run the sequence. Keep quotes deliberate.
            Let emotion dance across the line.
          </p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {processSteps.map((step) => (
              <li
                key={step.n}
                className="flex gap-4 rounded-xl border border-ivory/10 bg-ink-soft/60 p-5"
              >
                <span className="font-display text-2xl text-cosmic-gold/80 tabular-nums">
                  {step.n}
                </span>
                <div>
                  <h4 className="font-display text-xl text-ivory">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-muted">
                    {step.line}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Closing affirmation */}
        <div className="mt-16 max-w-2xl border-l border-cosmic-gold/50 pl-5 sm:pl-6">
          <p className="font-display text-xl leading-snug text-ivory italic sm:text-2xl">
            As a star from the universal system, you ask Me because You are Me asking.
          </p>
          <p className="mt-6 text-[0.65rem] font-medium tracking-[0.22em] text-brass uppercase">
            The shadow found · The shadow named · The hat worn
          </p>
        </div>
      </div>
    </section>
  )
}
