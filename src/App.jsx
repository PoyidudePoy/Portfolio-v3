import { useState, useEffect } from "react";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import HighlightedWork from "./components/HighlightedWork";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false); // for desktop NAV
  const [isContactOpen, setIsContactOpen] = useState(false) //useState for contacts


  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY >= 200); // triggers desktop NAV when website is scrolled
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-beige text--gray-800">
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <DesktopNav isNavVisible={isNavVisible} onContactClick={() => setIsContactOpen(true)} />

      <header className="h-auto">
        <div className="fixed w-full h-6 bg-vintage md:h-8"></div>
        <div className="fixed z-50">
          <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} 
           onContactClick={() => {
              setIsNavOpen(false); 
              setIsContactOpen(true); 
            }} 
          
          />
        </div>
      </header>

      <Hero onContactClick={() => setIsContactOpen(true)} />
      <HighlightedWork />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
