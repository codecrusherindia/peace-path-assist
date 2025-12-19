import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Code, Play, CheckCircle, Copy } from "lucide-react";

const ApiDemo = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const sampleCode = `fetch('https://api.mindcare.in/v1/assess', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    responses: [2, 1, 3, 0, 2, 1, 2, 0, 1],
    assessment_type: 'PHQ9'
  })
})`;

  const sampleResponse = {
    status: "success",
    assessment_id: "asmnt_7x9k2m4n",
    score: 12,
    severity: "moderate",
    risk_level: "medium",
    recommendation: "Consider professional consultation",
    timestamp: new Date().toISOString()
  };

  const runDemo = () => {
    setLoading(true);
    setResponse(null);
    setTimeout(() => {
      setResponse(JSON.stringify(sampleResponse, null, 2));
      setLoading(false);
    }, 1500);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              API <span className="text-accent">Demo</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrate mental health assessments into your app with our simple REST API
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold">Request</h3>
                </div>
                <Button variant="ghost" size="sm" onClick={copyCode}>
                  {copied ? <CheckCircle className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{sampleCode}</code>
              </pre>
              <Button 
                className="w-full mt-4" 
                onClick={runDemo}
                disabled={loading}
              >
                <Play className="h-4 w-4 mr-2" />
                {loading ? "Processing..." : "Run Demo Request"}
              </Button>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-success" />
                <h3 className="font-semibold">Response</h3>
              </div>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto min-h-[200px]">
                <code>
                  {loading ? "// Awaiting response..." : response || "// Click 'Run Demo Request' to see response"}
                </code>
              </pre>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Pricing Tiers</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <h4 className="font-semibold mb-2">Starter</h4>
                <p className="text-3xl font-bold text-primary mb-2">₹5</p>
                <p className="text-sm text-muted-foreground mb-4">per API call</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Up to 1,000 calls/month</li>
                  <li>Basic support</li>
                  <li>PHQ-9 & GAD-7</li>
                </ul>
              </Card>
              <Card className="p-6 text-center border-primary">
                <h4 className="font-semibold mb-2">Growth</h4>
                <p className="text-3xl font-bold text-primary mb-2">₹3</p>
                <p className="text-sm text-muted-foreground mb-4">per API call</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Up to 10,000 calls/month</li>
                  <li>Priority support</li>
                  <li>All assessments</li>
                </ul>
              </Card>
              <Card className="p-6 text-center">
                <h4 className="font-semibold mb-2">Enterprise</h4>
                <p className="text-3xl font-bold text-primary mb-2">Custom</p>
                <p className="text-sm text-muted-foreground mb-4">volume pricing</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Unlimited calls</li>
                  <li>Dedicated support</li>
                  <li>Custom integrations</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApiDemo;
