import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Eye, Cog, Layers, Zap } from "lucide-react";

const ResearchInterests = () => {
  const interests = [
    {
      icon: Cog,
      title: "Intelligent Fault Diagnosis",
      description: "Bearings, gearboxes, pumps, machining systems",
      topics: ["Vibration Analysis", "Acoustic Emission", "Predictive Maintenance"]
    },
    {
      icon: Eye,
      title: "Image-based Signal Representation",
      description: "Converting signals to visual representations for deep learning",
      topics: ["CWT", "STFT", "Spectrograms", "Time-Frequency Analysis"]
    },
    {
      icon: Layers,
      title: "Transfer Learning & Domain Adaptation",
      description: "Robust models under distribution shift",
      topics: ["Cross-Domain", "Few-Shot Learning", "Distribution Alignment"]
    },
    {
      icon: Brain,
      title: "Multimodal Fusion",
      description: "Combining signals, images, and metadata",
      topics: ["Feature Fusion", "Multi-Stream CNNs", "Sensor Integration"]
    },
    {
      icon: Zap,
      title: "Efficient & Interpretable AI",
      description: "Deployable solutions with uncertainty quantification",
      topics: ["Explainability", "Edge Deployment", "Uncertainty", "Model Compression"]
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Research Interests</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My research focuses on developing intelligent systems that can understand, adapt, and make reliable decisions across different domains and operating conditions.
            </p>
          </div>
          
          {/* Research Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden" style={{ background: 'var(--gradient-card)' }}>
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <interest.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {interest.description}
                  </p>
                  
                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {interest.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-white">
                        {topic}
                      </Badge>
                    ))}
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

export default ResearchInterests;