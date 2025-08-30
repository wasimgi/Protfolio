import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Globe } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "wasim94@mail.ulsan.ac.kr",
      href: "mailto:wasim94@mail.ulsan.ac.kr",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone/WhatsApp",
      value: "+82-10-3383-8336",
      href: "tel:+821033838336"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ulsan, South Korea"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/wasimgi",
      color: "hover:text-gray-600"
    },
    {
      icon: ExternalLink,
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=Xm66fqEAAAAJ",
      color: "hover:text-blue-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/wasim-zaman-4b52a81a0",
      color: "hover:text-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Let's Connect</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm keen to collaborate on vision for industrial AI, transfer learning, multimodal sensing, and reliable model deployment.
            </p>
          </div>
          
          {/* Availability Banner */}
          <Card className="mb-12 border-2 border-primary/20 shadow-xl" style={{ background: 'var(--gradient-card)' }}>
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Available for Postdoc Positions</h3>
              </div>
              <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500 hover:text-white">
                Starting January 2026
              </Badge>
              <p className="text-lg text-muted-foreground mb-6">
                Open to collaborations in computer vision, transfer learning, and industrial AI applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
                <Button size="lg" variant="outline">
                  <Globe className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <Card className="border-0 shadow-lg" style={{ background: 'var(--gradient-card)' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        method.primary ? 'bg-primary/20' : 'bg-primary/10'
                      }`}>
                        <method.icon className={`h-5 w-5 ${
                          method.primary ? 'text-primary' : 'text-primary/70'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{method.label}</p>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{method.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="border-0 shadow-lg" style={{ background: 'var(--gradient-card)' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Professional Profiles</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          View profile →
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Research Collaboration CTA */}
          <Card className="mt-12 border-0 shadow-lg" style={{ background: 'var(--gradient-card)' }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Research Collaborations</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Interested in collaborating on cutting-edge research in computer vision, transfer learning, or industrial AI? 
                I'm always open to discussing new opportunities and partnerships.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="bg-primary/10 text-primary">Vision for Industrial AI</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary">Transfer Learning</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary">Multimodal Sensing</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary">Model Deployment</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;