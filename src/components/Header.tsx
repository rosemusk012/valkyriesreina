const links = [
  { href: '#house', label: 'House' },
  { href: '#finding-sival', label: 'Sival' },
  { href: '#table', label: 'Table' },
  { href: '#creations', label: 'Creations' },
  { href: '#support', label: 'Support' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brass/15 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-[0.18em] text-ivory uppercase transition-colors hover:text-brass"
        >
          Valkyries Reina
        </a>
        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.65rem] font-medium tracking-[0.16em] text-ivory-muted uppercase transition-colors hover:text-brass sm:text-[0.7rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
