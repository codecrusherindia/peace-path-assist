import { useState, useRef, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Send, Languages, Download, AlertCircle, CheckCircle2, AlertTriangle, User, Dumbbell, Brain, Heart, Focus, Wind, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext"; // Import Context
import { translations } from "@/data/translations"; // Import Data

type Message = {
  role: "bot" | "user";
  content: string;
};

type RiskLevel = "low" | "moderate" | "high" | null;

const wellnessExercises = [
  { id: "focus", icon: Focus, title: "5-Minute Focus", description: "Improve concentration" },
  { id: "box", icon: Wind, title: "Box Breathing", description: "Reduce anxiety" },
  { id: "grounding", icon: Brain, title: "Grounding", description: "5-4-3-2-1 technique" },
  { id: "muscle", icon: Heart, title: "Muscle Relaxation", description: "Release tension" }
];

const Chatbot = () => {
  const { language } = useLanguage();
  const t = translations[language].chatbot;
  const questions = translations[language].questions;

  const [messages, setMessages] = useState<Message[]>([]);
  
  // Reset chat when language changes
  useEffect(() => {
    setMessages([
      {
        role: "bot",
        content: `${t.welcome}\n\n${t.startPrompt}`,
      },
    ]);
    setCurrentQuestionIndex(-1);
    setProgress(0);
    setRiskLevel(null);
    setShowNextSteps(false);
  }, [language, t.welcome, t.startPrompt]);

  const [input, setInput] = useState("");
  const [progress, setProgress] = useState(0);
  const [riskLevel, setRiskLevel] = useState<RiskLevel>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [showNextSteps, setShowNextSteps] = useState(false);
  const [selectedAction, setSelectedAction] = useState<"expert" | "exercises" | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const totalQuestions = questions.length;

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const calculateRiskLevel = (totalScore: number): RiskLevel => {
    if (totalScore <= 9) return "low";
    if (totalScore <= 19) return "moderate";
    return "high";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const lowerInput = input.toLowerCase();
    // Rudimentary multi-language check for "start" or "yes"
    const isStarting = currentQuestionIndex === -1 && 
      (lowerInput.length > 0); // Start on any input for simplicity in multi-lang

    if (isStarting) {
      setTimeout(() => {
        setCurrentQuestionIndex(0);
        setProgress(5);
        const botMessage: Message = { 
          role: "bot", 
          content: `${t.startResponse}\n\n${questions[0]}\n\n${t.optionsInfo}`
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 800);
    } else if (currentQuestionIndex >= 0 && currentQuestionIndex < totalQuestions - 1) {
      const nextIndex = currentQuestionIndex + 1;
      const newProgress = Math.round(((nextIndex + 1) / totalQuestions) * 100);
      
      setTimeout(() => {
        setCurrentQuestionIndex(nextIndex);
        setProgress(newProgress);
        const botMessage: Message = { 
          role: "bot", 
          content: questions[nextIndex]
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 600);
    } else if (currentQuestionIndex === totalQuestions - 1) {
      setTimeout(() => {
        const processingMessage: Message = { 
          role: "bot", 
          content: t.analyzing
        };
        setMessages((prev) => [...prev, processingMessage]);
        
        setTimeout(() => {
          const simulatedScore = Math.floor(Math.random() * 25) + 5;
          const risk = calculateRiskLevel(simulatedScore);
          setRiskLevel(risk);
          setProgress(100);
          setShowNextSteps(true);
        }, 2000);
      }, 600);
    }
  };

  const getRiskBadge = () => {
    switch (riskLevel) {
      case "low":
        return <Badge className="bg-success text-success-foreground text-lg px-4 py-2"><CheckCircle2 className="mr-2 h-5 w-5" />{t.lowRisk}</Badge>;
      case "moderate":
        return <Badge className="bg-warning text-warning-foreground text-lg px-4 py-2"><AlertTriangle className="mr-2 h-5 w-5" />{t.modRisk}</Badge>;
      case "high":
        return <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2"><AlertCircle className="mr-2 h-5 w-5" />{t.highRisk}</Badge>;
      default:
        return null;
    }
  };

  const getRiskDescription = () => {
    switch (riskLevel) {
      case "low": return t.lowDesc;
      case "moderate": return t.modDesc;
      case "high": return t.highDesc;
      default: return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{t.title}</h1>
              {/* Display only button, logic moved to navbar/context */}
              <Button variant="outline" size="sm" className="gap-2 pointer-events-none opacity-80">
                <Languages className="h-4 w-4" />
                {language}
              </Button>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground">
              {t.progress}: {Math.round(progress)}% 
              {currentQuestionIndex >= 0 && currentQuestionIndex < totalQuestions && (
                <span className="ml-2">({t.question} {currentQuestionIndex + 1} / {totalQuestions})</span>
              )}
            </p>
          </div>

          <Card className="h-[600px] flex flex-col">
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}

              {riskLevel && showNextSteps && !selectedAction && (
                <Card className="p-6 space-y-6 bg-gradient-to-br from-muted/50 to-background">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold">{t.complete}</h2>
                    <div className="flex justify-center">{getRiskBadge()}</div>
                    <p className="text-muted-foreground max-w-lg mx-auto">{getRiskDescription()}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-center">{t.nextSteps}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-primary/20 hover:border-primary" onClick={() => setSelectedAction("expert")}>
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                            <User className="h-8 w-8 text-primary" />
                          </div>
                          <h4 className="font-semibold">{t.connectExpert}</h4>
                          <p className="text-sm text-muted-foreground">{t.expertDesc}</p>
                        </div>
                      </Card>

                      {(riskLevel === "low" || riskLevel === "moderate") && (
                        <Card className="p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-accent/20 hover:border-accent" onClick={() => setSelectedAction("exercises")}>
                          <div className="flex flex-col items-center text-center space-y-3">
                            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center">
                              <Dumbbell className="h-8 w-8 text-accent" />
                            </div>
                            <h4 className="font-semibold">{t.wellness}</h4>
                            <p className="text-sm text-muted-foreground">{t.wellnessDesc}</p>
                          </div>
                        </Card>
                      )}
                    </div>
                  </div>
                </Card>
              )}
              {/* Additional views (expert/exercises) can be translated similarly using 't' keys */}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSend()} placeholder={t.typeResponse} className="flex-1" disabled={riskLevel !== null} />
                <Button onClick={handleSend} disabled={!input.trim() || riskLevel !== null} className="rounded-full">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">{t.privacy}</p>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chatbot;
