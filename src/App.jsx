import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <CTA />
        <footer className="border-t border-white/10 py-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} fortitudo group. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
