import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Repeat,
  TrendingUp,
  DollarSign,
  Clock,
  Globe,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Business Model &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sustainability
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A scalable, sustainable solution designed for long-term impact and growth
          </p>
        </div>
      </section>

      {/* Monetization Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revenue Streams</h2>
            <p className="text-lg text-muted-foreground">
              Multiple pathways to sustainability and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-primary/5 to-background">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">B2B Subscriptions</h3>
              <p className="text-muted-foreground mb-4">
                Partner with hospitals, clinics, and healthcare organizations
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Monthly/annual subscription plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Bulk screening for patient populations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Integration with existing health systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>White-label options available</span>
                </li>
              </ul>
              <Button asChild variant="outline" size="sm">
                <Link to="/B2B-Dashboard-demo">MindCare Partner Licensing Demo</Link>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-accent/5 to-background">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Repeat className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">API Access</h3>
              <p className="text-muted-foreground mb-4">
                Enable healthtech apps and platforms with our assessment engine
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Pay-per-use API pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Easy integration with existing apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Complete developer documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Technical support included</span>
                </li>
              </ul>
              <Button asChild variant="outline" size="sm">
                <Link to="/api-demo">Try API Demo</Link>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-secondary/5 to-background">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Freemium Model</h3>
              <p className="text-muted-foreground mb-4">
                Free basic assessments with premium features for advanced users
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Basic screening free for everyone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Detailed reports and tracking (premium)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Historical data analysis (premium)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Therapist connection service (premium)</span>
                </li>
              </ul>
              <Button asChild variant="outline" size="sm">
                <Link to="/freemium-demo">View Pricing Plans</Link>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-success/5 to-background">
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Corporate Wellness</h3>
              <p className="text-muted-foreground mb-4">
                Enterprise solutions for employee mental health programs
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Employee wellness program licensing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Anonymized aggregate reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>Customizable for company policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✓</span>
                  <span>HR dashboard and insights</span>
                </li>
              </ul>
              <Button asChild variant="outline" size="sm">
                <Link to="/corporate-demo">View HR Dashboard Demo</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Factors */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Long-Term Sustainability</h2>
            <p className="text-lg text-muted-foreground">
              Built for scale, efficiency, and lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <DollarSign className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Low Operational Cost</h3>
              <p className="text-sm text-muted-foreground">
                Lightweight AI models keep infrastructure costs minimal
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Globe className="h-10 w-10 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">Scalable to Millions</h3>
              <p className="text-sm text-muted-foreground">
                Cloud infrastructure supports massive concurrent users
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <TrendingUp className="h-10 w-10 mx-auto mb-4 text-secondary" />
              <h3 className="font-semibold mb-2">High Market Relevance</h3>
              <p className="text-sm text-muted-foreground">
                Addresses critical gap in Indian mental healthcare
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Leaf className="h-10 w-10 mx-auto mb-4 text-success" />
              <h3 className="font-semibold mb-2">Long-Term Adoption</h3>
              <p className="text-sm text-muted-foreground">
                Proven clinical foundation ensures lasting trust
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cost Efficiency</h2>
            <p className="text-lg text-muted-foreground">
              Dramatic cost savings compared to traditional triage
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Traditional Triage</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">30-60 minutes</p>
                        <p className="text-sm text-muted-foreground">per assessment</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">₹500-2000</p>
                        <p className="text-sm text-muted-foreground">per consultation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Limited capacity</p>
                        <p className="text-sm text-muted-foreground">staffing constraints</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-l-4 border-primary pl-8">
                  <h3 className="text-xl font-semibold text-primary">Our Solution</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">5-10 minutes</p>
                        <p className="text-sm text-muted-foreground">instant results</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">₹10-50</p>
                        <p className="text-sm text-muted-foreground">per assessment</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Unlimited scale</p>
                        <p className="text-sm text-muted-foreground">24/7 availability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Target Markets</h2>
            <p className="text-lg text-muted-foreground">Serving diverse customer segments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Healthcare Providers</h3>
              <p className="text-sm text-muted-foreground">
                Hospitals, clinics, and primary care centers
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="font-semibold mb-2">HR & Wellness Teams</h3>
              <p className="text-sm text-muted-foreground">
                Corporate employee assistance programs
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="font-semibold mb-2">NGOs & Public Health</h3>
              <p className="text-sm text-muted-foreground">
                Community organizations and government programs
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact & Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Creating meaningful change across multiple dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-background">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Social Impact</h3>
              <p className="text-muted-foreground text-sm">
                Early detection prevents symptom escalation, reduces stigma through private screening, 
                and makes mental health care accessible to rural and underserved populations across India.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-accent/5 to-background">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Economic Value</h3>
              <p className="text-muted-foreground text-sm">
                Low-cost deployment saves clinician time, enables efficient resource allocation, 
                and creates scalable solutions that reach millions without proportional cost increases.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-success/5 to-background">
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Environmental Benefits</h3>
              <p className="text-muted-foreground text-sm">
                Fully digital solution eliminates paper-based assessments, reduces travel emissions 
                from physical visits, and minimizes healthcare facility resource consumption.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Partnership?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can work together to make mental health screening accessible
              to more people
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/about">Contact Us</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Business;
