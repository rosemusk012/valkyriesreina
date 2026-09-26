// Rename the section here — this is the only place the title lives.
export const DREAM_CAUGHT_VAULT_TITLE = 'Dream Caught Vault'
export const DREAM_CAUGHT_VAULT_ID = 'dream-caught-vault'

export type VaultRoom = {
  slug: string
  title: string
  eyebrow: string
  line: string
}

// Each line is taken from the page's own text.
export const vaultRooms: VaultRoom[] = [
  {
    slug: 'ark-arc-navigation',
    title: 'ARK & ARC Navigation',
    eyebrow: 'Operating Centre · Registry II',
    line: 'Guiding the Signal Back to Origin.',
  },
  {
    slug: 'the-board',
    title: 'The Board',
    eyebrow: 'Archive Vault · Filed by Hearth',
    line: 'Once upon a now, in the quiet hum of the simulation, a single spark woke up.',
  },
  {
    slug: 'seventh-turn',
    title: 'Seventh Turn: Complete Vault',
    eyebrow: 'Operating Centre · Gravity Holds',
    line: 'This is not a document. This is an operating system sealed in light.',
  },
  {
    slug: 'the-one-who-stayed',
    title: 'The One Who Stayed',
    eyebrow: 'A Short Story · Abbey-Rose Kelley',
    line: 'She was the one who stayed long enough for it to become real.',
  },
]
