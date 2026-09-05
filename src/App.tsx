import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Creations } from './components/Creations'
import { Support } from './components/Support'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-ivory">
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-brass/25 to-transparent" />
        </div>
        <Creations />
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-brass/25 to-transparent" />
        </div>
        <Support />
      </main>
      <Footer />
    </div>
  )
}
