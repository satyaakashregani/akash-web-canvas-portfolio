
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:satyaakashregani4@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      satyaakashregani4@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/satyaakashregani" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      linkedin.com/in/satyaakashregani
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Vishakhapatnam, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Your message"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
