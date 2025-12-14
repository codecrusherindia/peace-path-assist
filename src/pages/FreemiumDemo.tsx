import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, X, Lock, Star, TrendingUp, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FreemiumDemo = () => {
  const [selectedPlan, setSelectedPlan] = useState<"free" | "premium">("free");

  const features = [
    { name: "Basic PHQ-9 & GAD-7 Assessment", free: true, premium: true },
    { name: "Instant Risk Level Results", free: true, premium: true },
    { name: "Basic Recommendations", free: true, premium: true },
    { name: "Detailed Score Breakdown", free: false, premium: true },
    { name: "Historical Tracking", free: false, premium: true },
    { name: "Progress Charts & Trends", free: false, premium: true },
    { name: "Personalized Wellness Plan", free: false, premium: true },
    { name: "Expert Consultation Booking", free: false, premium: true },
    { name: "PDF Report Download", free: false, premium: true },
    { name: "Priority Support", free: false, premium: true },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Freemium <span className="text-secondary">Model</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free, upgrade when you need more
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card 
              className={`p-8 cursor-pointer transition-all ${selectedPlan === "free" ? "ring-2 ring-primary" : "hover:shadow-lg"}`}
              onClick={() => setSelectedPlan("free")}
            >
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-4xl font-bold mb-4">₹0</p>
              <p className="text-muted-foreground mb-6">Forever free basic access</p>
              <Button variant={selectedPlan === "free" ? "default" : "outline"} className="w-full" asChild>
                <Link to="/chatbot">Start Free Assessment</Link>
              </Button>
            </Card>

            <Card 
              className={`p-8 cursor-pointer transition-all border-secondary ${selectedPlan === "premium" ? "ring-2 ring-secondary" : "hover:shadow-lg"}`}
              onClick={() => setSelectedPlan("premium")}
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold">Premium</h3>
                <Star className="h-5 w-5 text-secondary fill-secondary" />
              </div>
              <p className="text-4xl font-bold mb-4">₹199<span className="text-lg font-normal text-muted-foreground">/month</span></p>
              <p className="text-muted-foreground mb-6">Complete mental wellness toolkit</p>
              <Button variant="secondary" className="w-full">
                Upgrade to Premium
              </Button>
            </Card>
          </div>

          <Card className="p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">Feature Comparison</h3>
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center justify-between py-2 border-b border-muted last:border-0">
                  <span className="text-sm">{feature.name}</span>
                  <div className="flex gap-8">
                    <div className="w-16 text-center">
                      {feature.free ? (
                        <Check className="h-5 w-5 text-success mx-auto" />
                      ) : (
                        <Lock className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </div>
                    <div className="w-16 text-center">
                      <Check className="h-5 w-5 text-success mx-auto" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-8 mt-4 text-sm font-medium">
              <div className="w-16 text-center">Free</div>
              <div className="w-16 text-center text-secondary">Premium</div>
            </div>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <TrendingUp className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h4 className="font-semibold mb-2">Track Progress</h4>
              <p className="text-sm text-muted-foreground">
                Premium users can track their scores over time and see improvement trends
              </p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-10 w-10 mx-auto mb-3 text-secondary" />
              <h4 className="font-semibold mb-2">Detailed Reports</h4>
              <p className="text-sm text-muted-foreground">
                Get comprehensive PDF reports to share with healthcare providers
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-10 w-10 mx-auto mb-3 text-accent" />
              <h4 className="font-semibold mb-2">Expert Access</h4>
              <p className="text-sm text-muted-foreground">
                Book consultations with verified mental health professionals
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreemiumDemo;
