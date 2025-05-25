
import React from 'react';

const Skills = () => {
  const skills = [
    'Java',
    'Spring Boot',
    'React',
    'Python',
    'JavaScript',
    'C Programming',
    'Database Management',
    'Full-Stack Development',
    'HTML/CSS',
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
