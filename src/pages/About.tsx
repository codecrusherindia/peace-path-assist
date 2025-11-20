import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Target, Users, Lightbulb, Send } from "lucide-react";

const About = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MindCare
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building technology to make mental health screening accessible and affordable for everyone
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary/5 to-background">
            <div className="flex items-start gap-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe mental health screening should be as accessible as checking your
                  temperature. In a country where millions struggle to access mental healthcare due to
                  cost, stigma, and shortage of professionals, we're building a bridge between need and
                  care.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our AI-powered chatbot combines cutting-edge technology with clinically validated
                  assessment methods to provide immediate, affordable mental health risk screening in
                  multiple Indian languages.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">What drives us forward</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility First</h3>
              <p className="text-muted-foreground">
                Mental health support should be available to everyone, regardless of location,
                language, or economic status.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Evidence-Based</h3>
              <p className="text-muted-foreground">
                We build on proven clinical standards and validated research, never compromising on
                scientific rigor.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User Privacy</h3>
              <p className="text-muted-foreground">
                We treat user data with the highest level of security and respect, ensuring complete
                confidentiality.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Roles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Built by a passionate team dedicated to mental health accessibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Product Development</h3>
              <p className="text-sm text-muted-foreground">Design and user experience</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">AI & Engineering</h3>
              <p className="text-sm text-muted-foreground">Machine learning and infrastructure</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Clinical Advisory</h3>
              <p className="text-sm text-muted-foreground">Mental health expertise</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-success/20 to-success/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Business Development</h3>
              <p className="text-sm text-muted-foreground">Partnerships and growth</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Hackathon Purpose */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-secondary/5 to-background">
            <div className="text-center space-y-6">
              <Lightbulb className="h-16 w-16 mx-auto text-secondary" />
              <h2 className="text-3xl font-bold">Built for Impact</h2>
              <p className="text-lg text-muted-foreground">
                This project was developed as part of a hackathon focused on leveraging technology to
                solve real-world healthcare challenges in India. Our goal is to demonstrate how AI can
                be used responsibly to increase access to mental health screening while maintaining
                clinical validity and user privacy.
              </p>
              <p className="text-lg text-muted-foreground">
                We're committed to continuing development beyond the hackathon to create a production-
                ready solution that can make a real difference in people's lives.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions or want to collaborate? We'd love to hear from you.
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="What's this about?" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Tell us more..."
                    rows={6}
                    required
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full rounded-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
