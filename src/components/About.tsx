import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bio */}
            <div className="md:col-span-2">
              <Card className="h-full shadow-lg border-0" style={{ background: 'var(--gradient-card)' }}>
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                    I'm a researcher working at the intersection of <strong>computer vision, signal processing, and deep learning</strong>, with a focus on <strong>intelligent fault diagnosis</strong> and <strong>robust transfer learning</strong>.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                    I build clean, reproducible pipelines and <strong>domain-adaptable models</strong> that generalize across operating conditions and data sources. My goal is to create <strong>reliable, interpretable, and deployable AI</strong> for industrial and healthcare applications.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span>Defense: Nov 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Available: Jan 2026</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0" style={{ background: 'var(--gradient-card)' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-muted-foreground">Ulsan, South Korea</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground text-sm">wasim94@mail.ulsan.ac.kr</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">+82-10-3383-8336</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;