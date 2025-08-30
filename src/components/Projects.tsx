import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Zap, Layers, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Layers,
      title: "Dual-Input CNN for Fault Diagnosis",
      description: "Two-stream architecture that fuses complementary time-frequency images (e.g., CWT + STFT scalograms) to improve robustness across speeds/loads.",
      highlights: ["Multi-scale fusion", "Cross-domain generalization", "Clean PyTorch pipeline"],
      technologies: ["PyTorch", "CNN", "Signal Processing", "Transfer Learning"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Zap,
      title: "Domain Adaptation for Rotating Machinery",
      description: "Combined classification loss with mean–covariance alignment to reduce source–target gaps and boost target accuracy with few labels.",
      highlights: ["Label-efficient adaptation", "Reproducible evaluation", "Cross-condition robustness"],
      technologies: ["Domain Adaptation", "Deep Learning", "Vibration Analysis", "Python"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Eye,
      title: "Segmentation with Pretrained Backbones",
      description: "Reproducible segmentation pipelines for industrial/medical images using pretrained encoders with careful preprocessing and calibration.",
      highlights: ["Clear documentation", "Ablation studies", "Metrics tracking"],
      technologies: ["Computer Vision", "Segmentation", "Medical AI", "Industrial AI"],
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Selected Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Research projects showcasing practical applications of computer vision and transfer learning in industrial and healthcare settings.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 h-full" style={{ background: 'var(--gradient-card)' }}>
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${project.color}`}>
                      <project.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Highlights:</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <Card className="inline-block border-0" style={{ background: 'var(--gradient-card)' }}>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Want direct repo links? Check out my complete portfolio:
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;