
import React from 'react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skills = [
    { name: 'Java', level: 85 },
    { name: 'Spring Boot', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'JavaScript', level: 80 },
    { name: 'Database Management', level: 75 },
    { name: 'Full-Stack Development', level: 85 },
    { name: 'HTML/CSS', level: 90 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
