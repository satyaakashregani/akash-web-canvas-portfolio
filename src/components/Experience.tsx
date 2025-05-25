
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Java Full Stack Development Trainee',
      company: 'Aeries Soft Tech Solutions',
      duration: 'November 2024 - May 2025 (7 months)',
      location: 'Visakhapatnam, Andhra Pradesh, India',
      description: 'Currently training in comprehensive Java Full Stack Development, including Spring Boot, React, and database technologies.'
    },
    {
      title: 'Intern',
      company: 'Demy Software Solutions',
      duration: 'December 2023 - April 2024 (5 months)',
      location: 'Visakhapatnam, Andhra Pradesh, India',
      description: 'Gained hands-on experience in software development and worked on various projects to enhance programming skills.'
    },
    {
      title: 'Summer Internship',
      company: 'Digital Word of Mouth',
      duration: 'May 2023 - July 2023 (3 months)',
      location: 'Visakhapatnam, Andhra Pradesh, India',
      description: 'Completed summer internship focusing on digital marketing and web development fundamentals.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-lg border border-border">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <h4 className="text-lg text-primary font-semibold">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
