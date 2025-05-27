import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import Loader from './components/ui/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex flex-col relative">
          <Header />
          <main className="flex-grow">
            <Element name="home\" className="element">
              <Home />
            </Element>
            <Element name="about" className="element">
              <About />
            </Element>
            <Element name="education" className="element">
              <Education />
            </Element>
            <Element name="skills" className="element">
              <Skills />
            </Element>
            <Element name="projects" className="element">
              <Projects />
            </Element>
            <Element name="contact" className="element">
              <Contact />
            </Element>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;