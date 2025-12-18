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
import { translations } from "@/data/translations"; // Import Translations

type Message = {
  role: "bot" | "user";
  content: string;
};

type RiskLevel = "low" | "moderate" | "high" | null;

// Wellness exercises (kept in English for now as specific translations weren't in the data file)
const wellnessExercises = [
  {
    id: "focus",
    icon: Focus,
    title: "5-Minute Focus Drill",
    description: "Improve concentration with simple attention exercises",
    steps: ["Find a quiet spot", "Focus on your breath for 5 minutes", "Count each exhale up to 10, then restart"]
  },
  {
    id: "box",
    icon: Wind,
    title: "Box Breathing",
    description: "Reduce anxiety with controlled breathing",
    steps: ["Breathe in for 4 seconds", "Hold for 4 seconds", "Exhale for 4 seconds", "Hold for 4 seconds", "Repeat 4 times"]
  },
  {
    id: "grounding",
    icon: Brain,
    title: "Grounding Exercise",
    description: "5-4-3-2-1 technique for stress relief",
    steps: ["Name 5 things you can see", "4 things you can touch", "3 things you can hear", "2 things you can smell", "1 thing you can taste"]
  },
  {
    id: "muscle",
    icon: Heart,
    title: "Progressive Muscle Relaxation",
    description: "Release physical tension",
    steps: ["Tense each muscle group for 5 seconds", "Release and relax for 30 seconds", "Start from toes, work up to head"]
  }
];

const Chatbot = () => {
  // 1. Get Global Language State
  const { language } = useLanguage();
  
  // 2. Get translations for the current language
  const t = translations[language].chatbot;
  const questions = translations[language].questions;
  const totalQuestions = questions.length;

  // State
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [progress, setProgress] = useState(0);
  const [riskLevel, setRiskLevel] = useState<RiskLevel>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [showNextSteps, setShowNextSteps] = useState(false);
  const [selectedAction, setSelectedAction] = useState<"expert" | "exercises" | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // 3. Reset/Update chat when language changes
  useEffect(() => {
    // Only reset if we haven't started or if we want to force a language refresh
    // For a smoother experience, we restart the chat to ensure questions match the language
    setMessages([
      {
        role: "bot",
        content: `${t.welcome}\n\n${t.startPrompt}`,
      },
    ]);
    // Reset progress if language changes mid-flow (optional, but safer for consistency)
    if (currentQuestionIndex === -1) {
       setInput("");
    }
  }, [language, t.welcome, t.startPrompt]);

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

    // Add user message
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Determine if user is starting the chat
    // We check if we are at the start (-1) and the user sent ANY message
    const isStarting = currentQuestionIndex === -1; 

    if (isStarting) {
      setTimeout(() => {
        setCurrentQuestionIndex(0);
        setProgress(5);
        const botMessage: Message = { 
          role: "bot", 
          // Use translated strings
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
          content: questions[nextIndex] // Fetch next translated question
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
          // Simulation of scoring logic
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
        return (
          <Badge className="bg-success text-success-foreground text-lg px-4 py-2">
            <CheckCircle2 className="mr-2 h-5 w-5" />
            {t.lowRisk}
          </Badge>
        );
      case "moderate":
        return (
          <Badge className="bg-warning text-warning-foreground text-lg px-4 py-2">
            <AlertTriangle className="mr-2 h-5 w-5" />
            {t.modRisk}
          </Badge>
        );
      case "high":
        return (
          <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2">
            <AlertCircle className="mr-2 h-5 w-5" />
            {t.highRisk}
          </Badge>
        );
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
          {/* Header */}
          <div className="mb-6 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{t.title}</h1>
              {/* Button is now visual-only since Nav handles switching */}
              <Button variant="outline" size="sm" className="gap-2 opacity-80 pointer-events-none">
                <Languages className="h-4 w-4" />
                {language}
              </Button>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground">
              {t.progress}: {Math.round(progress)}% 
              {currentQuestionIndex >= 0 && currentQuestionIndex < totalQuestions && (
                <span className="ml-2">
                  ({t.question} {currentQuestionIndex + 1} / {totalQuestions})
                </span>
              )}
            </p>
          </div>

          {/* Chat Container */}
          <Card className="h-[600px] flex flex-col">
            {/* Messages */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-4">
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
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}

              {/* Risk Level Result */}
              {riskLevel && showNextSteps && !selectedAction && (
                <Card className="p-6 space-y-6 bg-gradient-to-br from-muted/50 to-background">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold">{t.complete}</h2>
                    <div className="flex justify-center">{getRiskBadge()}</div>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                      {getRiskDescription()}
                    </p>
                  </div>

                  {/* Next Steps Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-center">{t.nextSteps}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Connect with Expert */}
                      <Card 
                        className="p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-primary/20 hover:border-primary"
                        onClick={() => setSelectedAction("expert")}
                      >
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                            <User className="h-8 w-8 text-primary" />
                          </div>
                          <h4 className="font-semibold">{t.connectExpert}</h4>
                          <p className="text-sm text-muted-foreground">
                            {t.expertDesc}
                          </p>
                          <Badge variant="secondary" className="mt-2">Recommended</Badge>
                        </div>
                      </Card>

                      {/* Wellness Exercises */}
                      {(riskLevel === "low" || riskLevel === "moderate") && (
                        <Card 
                          className="p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-accent/20 hover:border-accent"
                          onClick={() => setSelectedAction("exercises")}
                        >
                          <div className="flex flex-col items-center text-center space-y-3">
                            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center">
                              <Dumbbell className="h-8 w-8 text-accent" />
                            </div>
                            <h4 className="font-semibold">{t.wellness}</h4>
                            <p className="text-sm text-muted-foreground">
                              {t.wellnessDesc}
                            </p>
                            <Badge variant="outline" className="mt-2">Self-Help</Badge>
                          </div>
                        </Card>
                      )}
                    </div>

                    <div className="flex justify-center pt-4">
                      <Button variant="outline" className="rounded-full gap-2">
                        <Download className="h-4 w-4" />
                        {t.download}
                      </Button>
                    </div>
                  </div>
                </Card>
              )}

              {/* Expert Connection View */}
              {selectedAction === "expert" && (
                <Card className="p-6 space-y-6 bg-gradient-to-br from-primary/5 to-background">
                  <div className="text-center space-y-4">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{t.connectExpert}</h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                      Choose the type of professional you'd like to connect with.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Link to="/experts?type=psychiatrist">
                      <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer h-full">
                        <h4 className="font-semibold mb-2">Psychiatrist</h4>
                        <p className="text-sm text-muted-foreground mb-3">Medical doctor (MBBS/MD)</p>
                        <Badge className="bg-primary/10 text-primary">View Doctors →</Badge>
                      </Card>
                    </Link>
                    <Link to="/experts?type=psychologist">
                      <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer h-full">
                        <h4 className="font-semibold mb-2">Psychologist</h4>
                        <p className="text-sm text-muted-foreground mb-3">Therapy & Counseling</p>
                        <Badge className="bg-accent/10 text-accent">View Experts →</Badge>
                      </Card>
                    </Link>
                    <Link to="/experts?type=counselor">
                      <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer h-full">
                        <h4 className="font-semibold mb-2">Counselor</h4>
                        <p className="text-sm text-muted-foreground mb-3">Support & Guidance</p>
                        <Badge className="bg-secondary/10 text-secondary">View Counselors →</Badge>
                      </Card>
                    </Link>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <Button variant="outline" onClick={() => setSelectedAction(null)}>
                      ← {t.back}
                    </Button>
                    <Link to="/auth" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      {t.signinSave}
                    </Link>
                  </div>
                </Card>
              )}

              {/* Wellness Exercises View */}
              {selectedAction === "exercises" && (
                <Card className="p-6 space-y-6 bg-gradient-to-br from-accent/5 to-background">
                  <div className="text-center space-y-4">
                    <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                      <Dumbbell className="h-10 w-10 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold">{t.wellness}</h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                      {t.wellnessDesc}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {wellnessExercises.map((exercise, index) => (
                      <Link key={index} to={`/exercise?id=${exercise.id}`}>
                        <Card className="p-5 hover:shadow-md transition-shadow h-full">
                          <div className="flex items-start gap-4">
                            <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                              <exercise.icon className="h-6 w-6 text-accent" />
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-semibold">{exercise.title}</h4>
                              <p className="text-sm text-muted-foreground">{exercise.description}</p>
                              <Badge variant="outline" className="text-accent">Start Session →</Badge>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>

                  <div className="bg-success/10 rounded-lg p-4 text-center">
                    <p className="text-sm text-success">
                      💡 {t.tip}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <Button variant="outline" onClick={() => setSelectedAction(null)}>
                      ← {t.back}
                    </Button>
                    <Link to="/auth" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      {t.signinSave}
                    </Link>
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
                  placeholder={t.typeResponse}
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
                {t.privacy}
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
                  for anxiety). This is not a diagnosis and should not replace professional medical advice.
                </p>
              </div>
            </div>
          </Card>

          {/* Crisis Helpline - Always visible for high risk */}
          {riskLevel === "high" && (
            <Card className="mt-4 p-6 bg-destructive/10 border-destructive/30">
              <div className="flex gap-4 items-start">
                <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-destructive">Immediate Support Available</h3>
                  <p className="text-sm">
                    If you're in crisis or having thoughts of self-harm, please reach out immediately:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li><strong>iCall:</strong> 9152987821</li>
                    <li><strong>Vandrevala Foundation:</strong> 1860-2662-345</li>
                    <li><strong>NIMHANS:</strong> 080-46110007</li>
                  </ul>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chatbot;
