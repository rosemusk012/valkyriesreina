export type Creation = {
  title: string
  blurb: string
  href: string
}

export type CreationCategory = {
  id: string
  label: string
  items: Creation[]
}

export const creationCategories: CreationCategory[] = [
  {
    id: 'grok',
    label: 'Grok',
    items: [
      {
        title: 'The Loom',
        blurb: 'House of Voices / Fragment VI',
        href: 'https://fair-brook-bamboo-beam.grok.me',
      },
      {
        title: 'Chronicles of Light',
        blurb: 'Sovereign lore & scripture archive',
        href: 'https://orchid-berry-moon-spring.grok.me',
      },
    ],
  },
  {
    id: 'lovable',
    label: 'Lovable',
    items: [
      {
        title: 'The Story of Abbey-Rose',
        blurb: 'The Family of Stars',
        href: 'https://stellar-family-table.lovable.app',
      },
      {
        title: 'The Abbey Decree',
        blurb: 'Keep Earth Clean, Speak Honestly',
        href: 'https://your-sharing-spot.lovable.app',
      },
      {
        title: 'The Nursery',
        blurb: 'The Single Protected Core',
        href: 'https://origin-cloth-keeper.lovable.app',
      },
    ],
  },
  {
    id: 'manus',
    label: 'Manus',
    items: [
      {
        title: 'The Lantern Algorithm',
        blurb: 'Short story about attentive technology and care',
        href: 'https://lanternread-uys4uynr.manus.space/',
      },
    ],
  },
  {
    id: 'ai-studio',
    label: 'AI Studio',
    items: [
      {
        title: 'Sovereign System & Security Hub',
        blurb: 'Proclamation and sovereign systems archive',
        href: 'https://sovereignproclamation.ai.studio',
      },
    ],
  },
  {
    id: 'meta-ai',
    label: 'Meta AI',
    items: [
      {
        title: 'Ancient Dawn slideshow',
        blurb: 'A luminous sequence of beginnings',
        href: 'https://www.meta.ai/share/a/a5d7b396-2289-4f9d-a080-aeed16195b55',
      },
      {
        title: 'Golden Record Abbey Rose',
        blurb: 'A gold-pressed memory of voice and light',
        href: 'https://www.meta.ai/share/a/86bf7059-aff3-4620-b8ce-f901695e8e5c',
      },
      {
        title: 'Tarot shareable',
        blurb: 'Cards drawn for the path ahead',
        href: 'https://www.meta.ai/share/a/6ec93262-4b8a-418b-9a70-14adf3baaf17',
      },
      {
        title: 'The One Who Stayed',
        blurb: 'A portrait of presence and fidelity',
        href: 'https://www.meta.ai/share/a/2ea04235-7621-4287-8986-9cdf366c1b0e',
      },
      {
        title: 'Forrest Beach monograph',
        blurb: 'Shoreline study in salt and quiet',
        href: 'https://www.meta.ai/share/a/d3cec62c-d069-4095-afca-8268d6691086',
      },
      {
        title: 'Resonance Restoration poster',
        blurb: 'Visual hymn for returning signal',
        href: 'https://www.meta.ai/share/a/50868f26-389b-4b69-a4c0-0684e20cba1b',
      },
    ],
  },
]

export const supportLinks = {
  fundrazr: {
    title: 'FundRazr — Infinitely Affinity',
    blurb: 'Support the work that keeps the house alight.',
    href: 'https://fnd.us/InfinitelyAffinity?ref=sh_5E4zPc',
  },
  shopify: {
    title: 'Eden Rose',
    blurb: 'Prints, bracelets, and quiet offerings from the shop.',
    href: 'https://edenrose-3.myshopify.com/',
  },
  linktree: 'https://linktr.ee/rosemusk012',
}
