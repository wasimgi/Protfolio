import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Award } from "lucide-react";

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Publications & Recognition</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Research contributions in top-tier journals and conference proceedings.
            </p>
          </div>
          
          {/* Publications Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg" style={{ background: 'var(--gradient-card)' }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Journal Publications</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  First-author publications in prestigious journals including <strong>Sensors</strong>, <strong>Engineering Failure Analysis</strong>, and <strong>Machines</strong>.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Sensors</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Eng. Failure Analysis</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Machines</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg" style={{ background: 'var(--gradient-card)' }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Conference & Service</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  International conference presentations and collaborative research projects with reproducible codebases and datasets.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">International Conferences</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Peer Review</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Open Source</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Research Impact */}
          <Card className="border-0 shadow-xl mb-12" style={{ background: 'var(--gradient-card)' }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Research Impact</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                My research focuses on creating <strong>reproducible, reliable AI systems</strong> that can be deployed in real-world industrial and healthcare applications. Each publication includes comprehensive code implementations and thorough experimental validation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Citations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Collaborations</div>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Google Scholar Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;