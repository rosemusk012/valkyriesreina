import {
  DREAM_CAUGHT_VAULT_ID,
  DREAM_CAUGHT_VAULT_TITLE,
  vaultRooms,
} from '../data/dreamCaughtVault'

export function DreamCaughtVault() {
  return (
    <section id={DREAM_CAUGHT_VAULT_ID} className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[0.65rem] font-medium tracking-[0.3em] text-brass uppercase">
            Archive Rooms
          </p>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">
            {DREAM_CAUGHT_VAULT_TITLE}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ivory-muted sm:text-base">
            Registries, stories, and sealed vaults from the Dream Caught Operating
            Centre — each one a room of its own.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {vaultRooms.map((room) => (
            <li key={room.slug}>
              <a
                href={`${import.meta.env.BASE_URL}rooms/${room.slug}.html`}
                className="group flex h-full flex-col justify-between rounded-xl border border-ivory/10 bg-ink-soft/80 p-6 transition hover:border-brass/40 hover:bg-ink-lift"
              >
                <div>
                  <p className="mb-3 text-[0.6rem] font-medium tracking-[0.22em] text-brass/80 uppercase">
                    {room.eyebrow}
                  </p>
                  <h3 className="font-display text-2xl leading-snug text-ivory transition group-hover:text-brass-soft">
                    {room.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory-muted">
                    {room.line}
                  </p>
                </div>
                <span className="mt-5 text-[0.65rem] tracking-[0.18em] text-brass/70 uppercase transition group-hover:text-brass">
                  Enter the room →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
