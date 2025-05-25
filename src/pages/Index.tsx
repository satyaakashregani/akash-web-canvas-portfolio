
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Index;
