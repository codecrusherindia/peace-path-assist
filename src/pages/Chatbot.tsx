import { useState, useRef, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Send, Languages, AlertCircle, CheckCircle2, AlertTriangle, 
  User, Dumbbell, Brain, Heart, Focus, Wind, Mic, Volume2, VolumeX, Loader2 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, Language } from "@/data/translations";
import { useNavigate } from "react-router-dom";

type Message = {
  role: "bot" | "user";
  content: string;
};

type RiskLevel = "low" | "moderate" | "high" | null;

const getVoiceLangCode = (lang: Language): string => {
  switch (lang) {
    case "Hindi": return "hi-IN";
    case "Marathi": return "mr-IN";
    case "Bengali": return "bn-IN";
    case "Telugu": return "te-IN";
    case "Tamil": return "ta-IN";
    default: return "en-IN";
  }
};

const Chatbot = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const t = translations[language].chatbot;
  const questions = translations[language].questions;
  const totalQuestions = questions.length;
  const languagesList: Language[] = ["English", "Hindi", "Marathi", "Bengali", "Telugu", "Tamil"];

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [progress, setProgress] = useState(0);
  const [riskLevel, setRiskLevel] = useState<RiskLevel>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [showNextSteps, setShowNextSteps] = useState(false);
  const [selectedAction, setSelectedAction] = useState<"expert" | "exercises" | null>(null);
  
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false); 
  const [isListening, setIsListening] = useState(false); 
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // --- UPDATED: HANDLE SEND ---
  // Now accepts an optional argument 'manualText' for voice input
  const handleSend = (manualText?: string | any) => {
    // If manualText is a string (from voice), use it. 
    // Otherwise (from button click event), use the 'input' state.
    const textToSend = typeof manualText === "string" ? manualText : input;

    if (!textToSend.trim()) return;

    window.speechSynthesis.cancel(); 
    
    // Use 'textToSend' instead of 'input'
    const userMessage: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const isStarting = currentQuestionIndex === -1;

    if (isStarting) {
      setTimeout(() => {
        setCurrentQuestionIndex(0);
        setProgress(5);
        setMessages((prev) => [
          ...prev, 
          { role: "bot", content: `${t.startResponse}\n\n${questions[0]}\n\n${t.optionsInfo}` }
        ]);
      }, 800);
    } else if (currentQuestionIndex >= 0 && currentQuestionIndex < totalQuestions - 1) {
      const nextIndex = currentQuestionIndex + 1;
      const newProgress = Math.round(((nextIndex + 1) / totalQuestions) * 100);
      
      setTimeout(() => {
        setCurrentQuestionIndex(nextIndex);
        setProgress(newProgress);
        setMessages((prev) => [
          ...prev, 
          { role: "bot", content: questions[nextIndex] }
        ]);
      }, 600);
    } else if (currentQuestionIndex === totalQuestions - 1) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", content: t.analyzing }]);
        
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

  const speakText = (text: string) => {
    if (!isVoiceEnabled) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getVoiceLangCode(language);
    utterance.rate = 0.9; 
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  // --- UPDATED: SPEECH RECOGNITION ---
  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Your browser does not support voice input. Please use Google Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = getVoiceLangCode(language);
    recognition.interimResults = true; // Essential for preventing timeouts
    recognition.maxAlternatives = 1;

    setIsListening(true);

    recognition.onstart = () => console.log("Mic started");
    recognition.onspeechend = () => console.log("Speech stopped");

    recognition.onresult = (event: any) => {
      let finalTranscript = "";
      
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }

      if (finalTranscript) {
        // Stop listening
        recognition.stop();
        setIsListening(false);
        
        // DIRECTLY SEND THE MESSAGE
        handleSend(finalTranscript);
      }
    };

    recognition.onerror = (event: any) => {
      if (event.error === 'no-speech') {
        setIsListening(false);
        return; 
      }
      console.error("Speech Error:", event.error);
      setIsListening(false);
    };

    try {
      recognition.start();
    } catch (err) {
      console.error("Recognition start error:", err);
      setIsListening(false);
    }
  };

  // --- EFFECTS ---

  useEffect(() => {
    setMessages([
      { role: "bot", content: `${t.welcome}\n\n${t.startPrompt}` },
    ]);
    if (currentQuestionIndex === -1) setInput("");
    window.speechSynthesis.cancel(); 
  }, [language, t.welcome, t.startPrompt]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.role === "bot") {
      speakText(lastMessage.content);
    }
  }, [messages, isVoiceEnabled]);

  const calculateRiskLevel = (totalScore: number): RiskLevel => {
    if (totalScore <= 9) return "low";
    if (totalScore <= 19) return "moderate";
    return "high";
  };

  const getRiskBadge = () => {
    switch (riskLevel) {
      case "low": return <Badge className="bg-success text-success-foreground text-lg px-4 py-2"><CheckCircle2 className="mr-2 h-5 w-5" />{t.lowRisk}</Badge>;
      case "moderate": return <Badge className="bg-warning text-warning-foreground text-lg px-4 py-2"><AlertTriangle className="mr-2 h-5 w-5" />{t.modRisk}</Badge>;
      case "high": return <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2"><AlertCircle className="mr-2 h-5 w-5" />{t.highRisk}</Badge>;
      default: return null;
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
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                  className={isVoiceEnabled ? "text-primary border-primary" : "text-muted-foreground"}
                  title={isVoiceEnabled ? "Mute Voice" : "Enable Voice"}
                >
                  {isVoiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Button>

                <div className="relative">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as Language)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  >
                    {languagesList.map((lang) => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Languages className="h-4 w-4" />
                    {language}
                  </Button>
                </div>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Chat Container */}
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
                    <p className="text-muted-foreground max-w-lg mx-auto">{riskLevel === "low" ? t.lowDesc : riskLevel === "moderate" ? t.modDesc : t.highDesc}</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-center">{t.nextSteps}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-primary/20 hover:border-primary" onClick={() => navigate("/experts")}>
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center"><User className="h-8 w-8 text-primary" /></div>
                          <h4 className="font-semibold">{t.connectExpert}</h4>
                          <Badge variant="secondary" className="mt-2">Recommended</Badge>
                        </div>
                      </Card>
                      {(riskLevel === "low" || riskLevel === "moderate") && (
                        <Card className="p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-accent/20 hover:border-accent" onClick={() => navigate("/exercise")}>
                          <div className="flex flex-col items-center text-center space-y-3">
                            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center"><Dumbbell className="h-8 w-8 text-accent" /></div>
                            <h4 className="font-semibold">{t.wellness}</h4>
                            <Badge variant="outline" className="mt-2">Self-Help</Badge>
                          </div>
                        </Card>
                      )}
                    </div>
                  </div>
                </Card>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Button 
                  variant={isListening ? "destructive" : "outline"} 
                  size="icon"
                  className={`rounded-full flex-shrink-0 ${isListening ? "animate-pulse" : ""}`}
                  onClick={startListening}
                  disabled={riskLevel !== null}
                  title="Speak Answer"
                >
                  {isListening ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mic className="h-4 w-4" />}
                </Button>

                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()} 
                  placeholder={isListening ? "Listening..." : t.typeResponse}
                  className="flex-1"
                  disabled={riskLevel !== null}
                />
                
                {/* Note: We pass handleSend directly. The event object passed by onClick is handled safely inside. */}
                <Button 
                  onClick={handleSend} 
                  disabled={!input.trim() || riskLevel !== null} 
                  className="rounded-full"
                >
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
