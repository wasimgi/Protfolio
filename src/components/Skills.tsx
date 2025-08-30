import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Zap, Database, Settings, BarChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Deep Learning",
      color: "bg-blue-500/10 text-blue-600",
      skills: ["PyTorch", "TensorFlow", "CNNs", "Vision Transformers", "Autoencoders"]
    },
    {
      icon: Code,
      title: "Programming",
      color: "bg-green-500/10 text-green-600", 
      skills: ["Python", "C/C++", "Java", "SQL", "Git"]
    },
    {
      icon: Zap,
      title: "Signal/Image Processing",
      color: "bg-purple-500/10 text-purple-600",
      skills: ["Vibration Analysis", "CWT/STFT", "Denoising", "Feature Engineering", "Time-Frequency"]
    },
    {
      icon: BarChart,
      title: "Vision Models",
      color: "bg-orange-500/10 text-orange-600",
      skills: ["Transfer Learning", "Domain Adaptation", "Multi-Modal", "Few-Shot Learning"]
    },
    {
      icon: Settings,
      title: "MLOps & Tools",
      color: "bg-red-500/10 text-red-600",
      skills: ["HPC Computing", "VS Code", "Anaconda", "Experiment Tracking", "Model Deployment"]
    },
    {
      icon: Database,
      title: "Research Skills",
      color: "bg-indigo-500/10 text-indigo-600",
      skills: ["Reproducible Research", "Academic Writing", "Collaboration", "Data Analysis", "Visualization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for developing intelligent systems, from signal processing to deep learning deployment.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0" style={{ background: 'var(--gradient-card)' }}>
                <CardContent className="p-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="mr-2 mb-2 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {skill}
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

export default Skills;