import { useState, useEffect } from 'react'
import DesktopNav from './components/DesktopNav'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import HighlightedWork from './components/HighlightedWork'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-beige text--gray-800">
      <DesktopNav isNavVisible={isNavVisible} />

      <header className="h-auto">
        <div className="fixed w-full h-6 bg-vintage md:h-8"></div>
        <div className="fixed z-50"></div>
      </header>

      <header className="h-auto">
        <div className="fixed w-full h-6 bg-vintage md:h-8"></div>
        <div className="fixed z-50">
          <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
      </header>

      <Hero />
      <HighlightedWork />
      <Projects />
      <Footer />
    </div>
  )
}

export default App