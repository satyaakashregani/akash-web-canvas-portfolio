
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">About Me</h2>
          <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm currently focused on mastering Java, Spring Boot, React, and databases. 
              I enjoy turning ideas into functional web applications and continuously improving my coding skills.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Eager to grow, collaborate, and contribute to meaningful projects. Based in 
              Vishakhapatnam, Andhra Pradesh, India.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Languages</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>English (Professional Working)</li>
                  <li>Hindi (Limited Working)</li>
                  <li>Telugu (Native or Bilingual)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Focus Areas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Java & Spring Boot</li>
                  <li>React Development</li>
                  <li>Database Management</li>
                  <li>Full Stack Applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
