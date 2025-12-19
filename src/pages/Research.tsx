import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Award, BarChart3, BookOpen, ExternalLink, Brain, Sparkles, Clock, Github, ExternalLinkIcon } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Research &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Validation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on proven clinical standards and backed by rigorous scientific research
          </p>
        </div>
      </section>

      {/* PHQ-9 Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Patient Health Questionnaire (PHQ-9)</h2>
                  <p className="text-muted-foreground">
                    The PHQ-9 is a widely validated 9-item assessment tool used to screen for and
                    measure the severity of depression. It has been extensively studied across
                    diverse populations worldwide.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Key Features:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          9 questions based on DSM-IV depression criteria
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Scores range from 0-27, categorizing depression severity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Sensitivity of 88% and specificity of 88% for major depression
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Takes approximately 2-3 minutes to complete</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* GAD-7 Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">
                    Generalized Anxiety Disorder Scale (GAD-7)
                  </h2>
                  <p className="text-muted-foreground">
                    The GAD-7 is a brief, validated measure of anxiety symptoms. It's widely used in
                    clinical practice and research to identify probable cases of generalized anxiety
                    disorder.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Key Features:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>7 questions assessing anxiety over the past 2 weeks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Scores range from 0-21, indicating anxiety severity levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Sensitivity of 89% and specificity of 82% for GAD</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Reliable and validated across multiple languages</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mental Health Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mental Health in India: The Numbers
            </h2>
            <p className="text-lg text-muted-foreground">Understanding the crisis</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold mb-2 text-primary">1 in 7</div>
              <p className="text-muted-foreground">
                Indians affected by mental health disorders
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                (National Mental Health Survey, 2015-16)
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2 text-accent">0.75</div>
              <p className="text-muted-foreground">Psychiatrists per 100,000 population</p>
              <p className="text-xs text-muted-foreground mt-2">
                (WHO Global Health Estimates)
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <div className="text-4xl font-bold mb-2 text-secondary">80%</div>
              <p className="text-muted-foreground">Treatment gap for mental health conditions</p>
              <p className="text-xs text-muted-foreground mt-2">
                (Lancet Commission Report)
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Sources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Research Sources</h2>
            <p className="text-lg text-muted-foreground">
              Our foundation in evidence-based practice
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">
                    Kroenke K, Spitzer RL, Williams JB. (2001)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    "The PHQ-9: validity of a brief depression severity measure" - Journal of
                    General Internal Medicine
                  </p>
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    View Research <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">
                    Spitzer RL, Kroenke K, Williams JB, Löwe B. (2006)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    "A brief measure for assessing generalized anxiety disorder: the GAD-7" -
                    Archives of Internal Medicine
                  </p>
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    View Research <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">National Mental Health Survey (2015-16)</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Comprehensive data on mental health prevalence and treatment gaps in India -
                    Ministry of Health and Family Welfare
                  </p>
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    View Report <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">
                    WHO Global Health Workforce Statistics
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Data on mental health workforce availability and distribution - World Health
                    Organization
                  </p>
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    View Data <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* AI-Powered Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Technology</h2>
            <p className="text-lg text-muted-foreground">
              Cutting-edge AI enhances clinical assessment accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Sentiment Analysis</h3>
                  <p className="text-muted-foreground">
                    Leverages research in natural language processing to accurately detect emotional 
                    tones and distress signals in text responses, even across different Indian languages 
                    and dialects.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-8 w-8 text-success" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Early Detection Efficacy</h3>
                  <p className="text-muted-foreground">
                    Supported by studies demonstrating that early intervention significantly improves 
                    mental health outcomes and prevents condition escalation. Our AI detects patterns 
                    that may indicate emerging concerns.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Validation Statement & Links */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <Award className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Clinically Validated Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our assessment methodology combines evidence-based clinical instruments (PHQ-9 and
              GAD-7) with modern AI sentiment analysis to provide reliable, accurate mental health
              risk screening that meets international standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="rounded-full gap-2" asChild>
                <a href="https://github.com/codecrusherindia/codecrush-mindcare" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </a>
              </Button>
              <Button className="rounded-full gap-2" asChild>
                <a href="/chatbot">
                  <Sparkles className="h-4 w-4" />
                  Try Chatbot Demo
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
