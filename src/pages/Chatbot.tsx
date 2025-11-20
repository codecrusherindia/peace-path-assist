import { useState, useRef, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Send, Languages, Download, AlertCircle, CheckCircle2, AlertTriangle } from "lucide-react";

type Message = {
  role: "bot" | "user";
  content: string;
};

type RiskLevel = "low" | "moderate" | "high" | null;

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hi! I'm here to help you understand how you've been feeling. This is a brief mental health check-in. Would you like to start?",
    },
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("English");
  const [progress, setProgress] = useState(0);
  const [riskLevel, setRiskLevel] = useState<RiskLevel>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate progress
    setProgress((prev) => Math.min(prev + 10, 100));

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
        "How often have you felt little interest or pleasure in doing things?",
        "Thank you for sharing. How would you rate your sleep quality?",
        "Have you been feeling nervous, anxious, or on edge?",
        "Let me process your responses...",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const botMessage: Message = { role: "bot", content: randomResponse };
      setMessages((prev) => [...prev, botMessage]);

      // Simulate completion
      if (messages.length > 8) {
        setTimeout(() => {
          setRiskLevel("moderate");
          setProgress(100);
        }, 1500);
      }
    }, 1000);
  };

  const getRiskBadge = () => {
    switch (riskLevel) {
      case "low":
        return (
          <Badge className="bg-success text-success-foreground text-lg px-4 py-2">
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Low Risk
          </Badge>
        );
      case "moderate":
        return (
          <Badge className="bg-warning text-warning-foreground text-lg px-4 py-2">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Moderate Risk
          </Badge>
        );
      case "high":
        return (
          <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2">
            <AlertCircle className="mr-2 h-5 w-5" />
            High Risk
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Mental Health Assessment</h1>
              <Button variant="outline" size="sm" className="gap-2">
                <Languages className="h-4 w-4" />
                {language}
              </Button>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Progress: {Math.round(progress)}% Complete
            </p>
          </div>

          {/* Chat Container */}
          <Card className="h-[600px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}

              {/* Risk Level Result */}
              {riskLevel && (
                <Card className="p-6 space-y-4 bg-gradient-to-br from-muted/50 to-background">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold">Assessment Complete</h2>
                    <div className="flex justify-center">{getRiskBadge()}</div>
                    
                    {riskLevel === "moderate" && (
                      <div className="space-y-3 text-left max-w-lg mx-auto">
                        <p className="text-muted-foreground">
                          Your responses indicate moderate emotional distress. This is a common experience,
                          and there are steps you can take to feel better.
                        </p>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Recommended Next Steps:</h3>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            <li>Consider speaking with a mental health professional</li>
                            <li>Reach out to trusted friends or family members</li>
                            <li>Practice self-care activities daily</li>
                            <li>Monitor your feelings over the next few weeks</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    <Button className="rounded-full gap-2">
                      <Download className="h-4 w-4" />
                      Download Report (PDF)
                    </Button>
                  </div>
                </Card>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your response..."
                  className="flex-1"
                  disabled={riskLevel !== null}
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || riskLevel !== null}
                  className="rounded-full"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Your responses are private and used only for this assessment
              </p>
            </div>
          </Card>

          {/* Info Card */}
          <Card className="mt-6 p-6 bg-accent/5 border-accent/20">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 text-accent flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold">About This Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  This chatbot uses clinically validated questionnaires (PHQ-9 for depression and GAD-7
                  for anxiety) combined with sentiment analysis to provide an initial risk assessment.
                  This is not a diagnosis and should not replace professional medical advice.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chatbot;
