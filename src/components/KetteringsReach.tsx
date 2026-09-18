export function KetteringsReach() {
  return (
    <section id="ketterings-reach" className="relative overflow-hidden bg-[#0d0b09] text-[#e9e1d2]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(196,77,42,.18), transparent 55%), radial-gradient(circle at 90% 80%, rgba(108,140,168,.12), transparent 55%), radial-gradient(circle at 10% 90%, rgba(212,167,84,.10), transparent 60%)' }}
      />
      <div className="relative mx-auto max-w-[1120px] px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#9a9386]">
              # built ugly on purpose. leave it that way.
            </p>
            <h2 className="mt-8 font-display text-[58px] font-light leading-[0.9] tracking-[-0.03em] text-[#f5efe3] sm:text-[84px]">
              Kettering's
              <br />
              Reach <span className="text-[0.55em] italic text-[#c4b8a3]">v2</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#a8a092]">
              <span>worldbuilding bible // draft</span>
              <span className="text-[#c44d2a]">● astrelle : violet rose</span>
              <span>abbey-rose / 2024—</span>
            </div>
          </div>
          <div className="max-w-[260px] font-mono text-xs leading-[1.7] text-[#c7beb0] lg:text-right">
            A devlog bible. Not a wiki.
            <br />
            <span className="text-[#9a9386]">Notes left broken so the world stays honest.</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div className="space-y-24 sm:space-y-32">
            <section>
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#c44d2a]">01 / THE WELL</span>
                <div className="h-px max-w-[120px] flex-1 bg-[#e9e1d2]/10" />
              </div>
              <h3 className="font-display text-[38px] leading-[0.95] sm:text-[52px]">The Cracked Well</h3>
              <div className="mt-8 space-y-6">
                <p className="border-l border-[#c44d2a]/30 pl-5 font-display text-lg italic leading-[1.5] text-[#d8cfbd] sm:pl-7 sm:text-xl">
                  It was never meant to hold water. It was meant to listen.
                </p>
                <div className="space-y-5 font-mono text-[13px] leading-[1.9] text-[#b8b0a2]">
                  <p><span className="text-[#e9e1d2]">attempt #1 — 1884, quarrymen:</span> Dug 22ft, hit shale that sang. Stopped.</p>
                  <p className="opacity-80"><span className="text-[#a8a092]">attempt #2 — 1912, the Kettering boys:</span> Widened it with dynamite. Crack runs N-S now, not E-W. No one noted why.</p>
                  <p className="opacity-70"><span className="text-[#8e8880]">attempt #3 — 1968, municipal:</span> Capped it, poured concrete. Concrete never set. Still damp to touch.</p>
                  <p className="opacity-60 line-through decoration-[#c44d2a]/50">attempt #4 — 1983, my father: tried to fill it in. regret.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
                  <p className="font-display text-[17px] leading-[1.7] text-[#e9e1d2]/90">
                    Kids lie on their bellies at the lip and drop a stone.<br />
                    You count. One — two — three —<br />
                    <span className="italic text-[#c7beb0]">The echo comes back wrong.</span> Too early for the depth, too late for the walls.
                    <br /><br />
                    <span className="font-mono text-xs text-[#9a9386]">How deep is it really?<br />Deeper on Tuesdays. Deeper when you're alone.<br />Violet says it breathes.</span>
                  </p>
                  <div className="rounded-sm border border-[#e9e1d2]/10 bg-[#12100e]/80 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#c44d2a]">// field note</p>
                    <p className="mt-3 font-mono text-[11px] leading-[1.8] text-[#b8b0a2]">
                      Don't measure. If you measure it, it notices you're measuring and changes.
                      <br /><br /><span className="text-[#e9e1d2]">leave rope coiled nearby. never straight.</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#6c8ca8]">02 / THE MOONS</span>
                <div className="h-px max-w-[120px] flex-1 bg-[#e9e1d2]/10" />
              </div>
              <h3 className="font-display text-[38px] leading-[0.95] sm:text-[52px]">
                The Two Moons<br /><span className="italic text-[#c4b8a3]">That Don't Line Up</span>
              </h3>
              <div className="mt-8 space-y-8">
                <p className="max-w-[60ch] font-display text-[17px] leading-[1.7]">There's only one moon in the sky. On the ground, there are two shadows.</p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em]">Moon A — The One That Fits</p>
                    <p className="mt-1 font-display text-sm italic leading-[1.6] text-[#b8b0a2]">Shadow almost right. You could set a clock to it if you didn't care about seconds.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6c8ca8]">Moon B — The Late One</p>
                    <p className="mt-1 font-display text-sm italic leading-[1.6] text-[#8aa0b3]">3.7 seconds behind. Always. Not orbit — hesitation. Like it remembers something.</p>
                  </div>
                </div>
                <div className="rounded-sm border border-[#e9e1d2]/10 bg-[#0f1113] p-5 font-mono text-[10px] leading-[1.7] text-[#9aa9b8]">
                  at noon your shadow argues with itself.<br />
                  one leg forward, one leg deciding.<br /><br />
                  farmers tell time by which shadow they trust:<br />
                  <span className="text-[#e9e1d2]">Moon A = for planting</span><br />
                  <span className="text-[#6c8ca8]">Moon B = for leaving</span>
                </div>
                <p className="border-l border-[#6c8ca8]/20 pl-4 font-mono text-xs leading-[1.8] text-[#9a9386]">
                  Bug or lore? Both. Keep both. If you fix the delay, you lose the whole reason Violet looks over her shoulder when she walks at dusk — she's checking which shadow followed.
                </p>
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#d4a754]">03 / THE GROUND</span>
                <div className="h-px max-w-[120px] flex-1 bg-[#e9e1d2]/10" />
              </div>
              <h3 className="font-display text-[38px] leading-[0.95] sm:text-[52px]">The Ground That<br />Doesn't Add Up</h3>
              <div className="mt-8 space-y-6">
                <p className="font-display text-lg leading-[1.6]">Nothing flat in Kettering's Reach. Not a field, not a floorboard, not a table left alone for a season.</p>
                <div className="space-y-4 font-mono text-[13px] leading-[1.9] text-[#b8b0a2]">
                  <p>Surveyors quit. Said the math drifts. Put a level down, it says level. Walk ten feet, put it down again, now it's 2° off. Come back, it's level again but the other way.</p>
                  <p className="text-[#d8cfbd]">The ground is always compensating. Like it heard you wanted flat and felt bad about it.</p>
                </div>
                <div className="relative rounded-sm border border-[#e9e1d2]/10 bg-[#14120f] p-6 sm:p-7">
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4a754]">// why Violet walks the way she does</p>
                  <p className="font-display text-base leading-[1.7]">
                    She doesn't glide. Girls in other stories glide.<br /><br />
                    Violet plants. Toe, ball, heel — micro-correction each step. Knees soft. It's not grace, it's <span className="underline decoration-[#d4a754]/40 underline-offset-4">negotiation</span>. The Reach moves under her and she answers it without thinking.
                    <br /><br /><span className="font-mono text-xs text-[#a8a092]">Steady, not graceful. Steady is harder. Steady means you're listening.</span>
                  </p>
                </div>
                <p className="font-mono text-[11px] leading-[1.8] text-[#7a756d]">render note: uneven floor collision = intentional. do not smooth terrain mesh. add ankle IK, not flatten.</p>
              </div>
            </section>

            <div className="border-t border-[#e9e1d2]/10 pt-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9a9386]">end of v2 bible — keep ugly — abbey-rose</p>
              <p className="mt-3 max-w-[50ch] font-display text-[13px] italic text-[#7a756d]">If someone tries to clean this up, show them this page and tell them the dirt is load-bearing.</p>
            </div>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-12 lg:self-start">
            <div className="overflow-hidden rounded-sm border border-[#e9e1d2]/15 bg-[#161310]/90">
              <div className="flex items-center justify-between border-b border-[#e9e1d2]/10 px-5 py-4">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em]">Violet Rose</h3>
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c44d2a]" />
              </div>
              <div className="space-y-5 p-5">
                <p className="font-display text-xs uppercase tracking-[0.08em] text-[#9a9386]">how she moves in this world</p>
                <ul className="space-y-4">
                  {[
                    ['Weight','Low center. She crouches to listen. Never perches.'],
                    ['Hands','Always one hand trailing — wall, fence, well lip. Ground truth.'],
                    ['Shadow','Checks B-shadow before crossing road. 3.7s habit.'],
                    ['Pace','Slower uphill because hill is deciding if it is uphill.'],
                    ['Stillness','When she stops, it\'s complete. World continues without her for a sec.'],
                  ].map(([k,v]) => (
                    <li key={k} className="flex gap-3">
                      <span className="font-mono text-[10px] text-[#c44d2a]">↳</span>
                      <span><b className="font-mono text-[11px] uppercase tracking-[0.08em]">{k}: </b><span className="font-display text-[13px] leading-[1.5] text-[#b8b0a2]">{v}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-sm border border-[#d4a754]/20 bg-[#1a1813]/80 p-5">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d4a754]">Rules to NOT fix</h3>
              <div className="mt-5 space-y-4 font-mono text-[11px] leading-[1.7] text-[#c7beb0]">
                {[
                  'Don\'t level the ground. The wobble is the point.',
                  'Don\'t sync the moons. Late shadow stays late.',
                  'Don\'t measure the well. Leave depth = variable.',
                  'Don\'t make Violet graceful. Make her steady.',
                  'Don\'t clean the texture. Dirt = memory.',
                ].map(rule => <p key={rule} className="flex gap-2"><span className="text-[#d4a754]">×</span><span>{rule}</span></p>)}
              </div>
              <p className="mt-4 border-t border-[#d4a754]/15 pt-3 font-mono text-[10px] italic text-[#8a847b]">If it feels broken but feels true, ship it.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
