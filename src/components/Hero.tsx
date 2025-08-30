import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.9) 0%, hsl(var(--primary) / 0.7) 100%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Availability Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            Available for Postdoc: January 2026
          </Badge>
          
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Wasim Zaman
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium">
            Ph.D. Candidate in AI & Computer Engineering
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-white/80">
            University of Ulsan (UIAI Lab), South Korea
          </p>
          
          {/* Research Focus */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Intelligent Fault Diagnosis", "Transfer Learning", "Image Processing"].map((topic) => (
              <Badge key={topic} variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                {topic}
              </Badge>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://scholar.google.com/citations?user=Xm66fqEAAAAJ" className="text-white/70 hover:text-white transition-colors">
              <ExternalLink className="h-6 w-6" />
            </a>
            <a href="https://github.com/wasimgi" className="text-white/70 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/wasim-zaman-4b52a81a0" className="text-white/70 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;