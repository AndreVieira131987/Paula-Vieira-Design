import './styles/globals.css'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { Pillars } from './components/sections/Pillars'
import { Showcase } from './components/sections/Showcase'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'

export default function App() {
  return (
    <div className="grain-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <Showcase />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  )
}
