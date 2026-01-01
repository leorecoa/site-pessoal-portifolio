
import React, { Suspense } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative min-h-screen cursor-none">
      {/* Visual Infrastructure */}
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />

      {/* Page Sections */}
      <main>
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-white/20 uppercase tracking-widest text-xs font-display">Carregando experiência...</div>}>
          <Hero />
          <About />
          <Experience />
          <Process />
          <Projects />
          <TechStack />
          <Contact />
        </Suspense>
      </main>

      {/* Page Footer Visual */}
      <footer className="py-12 text-center text-white/10 text-[10px] uppercase font-medium tracking-widest font-display">
        Inspirado no Figma • Implementado em Código • Leandro Jesse 2024
      </footer>
    </div>
  );
}

export default App;
