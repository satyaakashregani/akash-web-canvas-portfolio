
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Education</h2>
          
          <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor of Technology - BTech
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-2">
                  Computer Science
                </h4>
                <p className="text-lg text-muted-foreground">
                  Nadimpalli Satyanarayana Raju Institute of Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
