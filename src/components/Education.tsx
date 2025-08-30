import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Ph.D. (in progress)",
      field: "Computer Engineering & AI",
      institution: "University of Ulsan",
      location: "South Korea",
      period: "2022 - 2025",
      status: "Defense: Nov 2025",
      dissertation: "Image-based Deep Learning and Transfer Learning for Intelligent Fault Diagnosis",
      highlight: true
    },
    {
      degree: "M.Phil.",
      field: "Computer Science",
      institution: "Quaid-i-Azam University",
      location: "Islamabad",
      period: "2018 - 2020",
      status: "Completed"
    },
    {
      degree: "M.Sc.",
      field: "Computer Science",
      institution: "University of Peshawar",
      location: "Pakistan",
      period: "2015 - 2017",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className={`transition-all duration-300 border-0 ${
                  edu.highlight ? 'ring-2 ring-primary/20 shadow-xl' : 'shadow-lg hover:shadow-xl'
                }`}
                style={{ background: 'var(--gradient-card)' }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                            {edu.highlight && (
                              <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white">
                                Current
                              </Badge>
                            )}
                          </div>
                          <p className="text-xl text-primary font-semibold mb-2">{edu.field}</p>
                          <p className="text-lg text-muted-foreground mb-2">
                            {edu.institution}, {edu.location}
                          </p>
                          {edu.dissertation && (
                            <p className="text-muted-foreground italic mb-3">
                              <span className="font-semibold">Dissertation:</span> {edu.dissertation}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Content */}
                    <div className="lg:text-right space-y-2">
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground font-medium">{edu.period}</span>
                      </div>
                      <Badge 
                        variant={edu.highlight ? "default" : "secondary"}
                        className={edu.highlight ? "bg-primary text-white" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;