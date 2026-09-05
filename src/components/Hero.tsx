export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,162,39,0.12),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-5 text-[0.65rem] font-medium tracking-[0.35em] text-brass uppercase">
          A sovereign house of making
        </p>
        <h1 className="font-display text-5xl leading-[1.05] font-medium text-ivory sm:text-6xl md:text-7xl">
          Valkyries Reina
        </h1>
        <div className="mx-auto my-8 h-px w-16 bg-gradient-to-r from-transparent via-brass to-transparent" />
        <p className="mx-auto max-w-xl font-display text-xl leading-relaxed text-ivory-muted italic sm:text-2xl">
          Where creativity gathers lore, and lore becomes synthesis —
          quiet rooms of story, light, and living signal.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#creations"
            className="inline-flex items-center rounded-full border border-brass/50 bg-brass/10 px-6 py-2.5 text-xs font-medium tracking-[0.2em] text-brass uppercase transition hover:border-brass hover:bg-brass/20"
          >
            Enter the gallery
          </a>
          <a
            href="#house"
            className="inline-flex items-center rounded-full border border-ivory/15 px-6 py-2.5 text-xs font-medium tracking-[0.2em] text-ivory-muted uppercase transition hover:border-ivory/35 hover:text-ivory"
          >
            Enter the house
          </a>
        </div>
      </div>
    </section>
  )
}
