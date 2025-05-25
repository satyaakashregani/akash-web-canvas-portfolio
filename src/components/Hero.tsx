
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">SR</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Satya Akash <span className="text-primary">Regani</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Java Full Stack Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Currently Training: Java Full Stack Development | Frontend & Backend Enthusiast
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/satyaakashregani" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
