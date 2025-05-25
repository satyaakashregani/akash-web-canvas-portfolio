
import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    'Stock Market',
    'Mastering C Language - C Programming For Beginners',
    'Participation Certificate for DevFest Vizag 2024',
    'Coding Dungeon Participation Certificate'
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{cert}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
