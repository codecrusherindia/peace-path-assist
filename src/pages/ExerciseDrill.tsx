import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Play, Pause, RotateCcw, CheckCircle2, Focus, Wind, Brain, Heart } from "lucide-react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

type Exercise = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  duration: number; // in seconds
  steps: { instruction: string; duration: number }[];
};

const exercises: Exercise[] = [
  {
    id: "focus",
    icon: Focus,
    title: "5-Minute Focus Drill",
    description: "Improve concentration with simple attention exercises",
    duration: 300,
    steps: [
      { instruction: "Find a comfortable position and close your eyes", duration: 15 },
      { instruction: "Take a deep breath in through your nose", duration: 4 },
      { instruction: "Hold your breath gently", duration: 4 },
      { instruction: "Slowly exhale through your mouth", duration: 6 },
      { instruction: "Focus on your breath - notice the sensation", duration: 30 },
      { instruction: "Count each exhale: 1...", duration: 10 },
      { instruction: "Count: 2...", duration: 10 },
      { instruction: "Count: 3...", duration: 10 },
      { instruction: "Count: 4...", duration: 10 },
      { instruction: "Count: 5...", duration: 10 },
      { instruction: "Count: 6...", duration: 10 },
      { instruction: "Count: 7...", duration: 10 },
      { instruction: "Count: 8...", duration: 10 },
      { instruction: "Count: 9...", duration: 10 },
      { instruction: "Count: 10 - restart from 1", duration: 10 },
      { instruction: "Continue breathing and counting at your own pace", duration: 120 },
      { instruction: "Slowly bring your awareness back to the room", duration: 15 },
      { instruction: "When ready, gently open your eyes", duration: 16 }
    ]
  },
  {
    id: "box",
    icon: Wind,
    title: "Box Breathing",
    description: "Reduce anxiety with controlled breathing",
    duration: 240,
    steps: [
      { instruction: "Get comfortable and relax your shoulders", duration: 10 },
      { instruction: "Breathe IN for 4 seconds...", duration: 4 },
      { instruction: "HOLD your breath for 4 seconds...", duration: 4 },
      { instruction: "Breathe OUT for 4 seconds...", duration: 4 },
      { instruction: "HOLD empty for 4 seconds...", duration: 4 },
      { instruction: "Round 2: Breathe IN...", duration: 4 },
      { instruction: "HOLD...", duration: 4 },
      { instruction: "Breathe OUT...", duration: 4 },
      { instruction: "HOLD empty...", duration: 4 },
      { instruction: "Round 3: Breathe IN...", duration: 4 },
      { instruction: "HOLD...", duration: 4 },
      { instruction: "Breathe OUT...", duration: 4 },
      { instruction: "HOLD empty...", duration: 4 },
      { instruction: "Round 4: Breathe IN...", duration: 4 },
      { instruction: "HOLD...", duration: 4 },
      { instruction: "Breathe OUT...", duration: 4 },
      { instruction: "HOLD empty...", duration: 4 },
      { instruction: "Continue at your own pace for the remaining time", duration: 120 },
      { instruction: "Great job! Return to normal breathing", duration: 20 }
    ]
  },
  {
    id: "grounding",
    icon: Brain,
    title: "5-4-3-2-1 Grounding",
    description: "Stress relief technique using your senses",
    duration: 180,
    steps: [
      { instruction: "Take a deep breath and look around you", duration: 10 },
      { instruction: "Name 5 things you can SEE", duration: 25 },
      { instruction: "Notice the colors, shapes, and details", duration: 10 },
      { instruction: "Name 4 things you can TOUCH", duration: 25 },
      { instruction: "Feel the textures around you", duration: 10 },
      { instruction: "Name 3 things you can HEAR", duration: 25 },
      { instruction: "Listen to the sounds near and far", duration: 10 },
      { instruction: "Name 2 things you can SMELL", duration: 20 },
      { instruction: "Notice any scents in the air", duration: 10 },
      { instruction: "Name 1 thing you can TASTE", duration: 15 },
      { instruction: "Take a final deep breath", duration: 10 },
      { instruction: "Notice how you feel now compared to before", duration: 10 }
    ]
  },
  {
    id: "muscle",
    icon: Heart,
    title: "Progressive Muscle Relaxation",
    description: "Release physical tension systematically",
    duration: 300,
    steps: [
      { instruction: "Lie down or sit comfortably", duration: 15 },
      { instruction: "Close your eyes and take 3 deep breaths", duration: 15 },
      { instruction: "TENSE your feet - curl your toes tightly for 5 seconds", duration: 5 },
      { instruction: "RELEASE and relax your feet completely", duration: 15 },
      { instruction: "TENSE your calves - flex them for 5 seconds", duration: 5 },
      { instruction: "RELEASE and feel the relaxation", duration: 15 },
      { instruction: "TENSE your thighs - squeeze them for 5 seconds", duration: 5 },
      { instruction: "RELEASE and let go", duration: 15 },
      { instruction: "TENSE your stomach - tighten your abs for 5 seconds", duration: 5 },
      { instruction: "RELEASE and breathe deeply", duration: 15 },
      { instruction: "TENSE your hands - make tight fists for 5 seconds", duration: 5 },
      { instruction: "RELEASE and spread your fingers", duration: 15 },
      { instruction: "TENSE your arms - flex your biceps for 5 seconds", duration: 5 },
      { instruction: "RELEASE and let your arms go limp", duration: 15 },
      { instruction: "TENSE your shoulders - raise them to your ears for 5 seconds", duration: 5 },
      { instruction: "RELEASE and drop them down", duration: 15 },
      { instruction: "TENSE your face - scrunch it up for 5 seconds", duration: 5 },
      { instruction: "RELEASE and relax every muscle in your face", duration: 15 },
      { instruction: "Scan your body for any remaining tension", duration: 20 },
      { instruction: "Breathe deeply and enjoy this relaxed state", duration: 60 },
      { instruction: "When ready, slowly open your eyes", duration: 20 }
    ]
  }
];

const ExerciseDrill = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const exerciseId = searchParams.get("id") || "focus";
  const exercise = exercises.find(e => e.id === exerciseId) || exercises[0];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepTimeRemaining, setStepTimeRemaining] = useState(exercise.steps[0].duration);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalDuration = exercise.steps.reduce((acc, step) => acc + step.duration, 0);
  const progress = (totalElapsed / totalDuration) * 100;

  useEffect(() => {
    // Reset when exercise changes
    setIsPlaying(false);
    setCurrentStepIndex(0);
    setStepTimeRemaining(exercise.steps[0].duration);
    setTotalElapsed(0);
    setIsComplete(false);
  }, [exerciseId]);

  useEffect(() => {
    if (isPlaying && !isComplete) {
      intervalRef.current = setInterval(() => {
        setStepTimeRemaining(prev => {
          if (prev <= 1) {
            // Move to next step
            setCurrentStepIndex(prevIndex => {
              const nextIndex = prevIndex + 1;
              if (nextIndex >= exercise.steps.length) {
                setIsComplete(true);
                setIsPlaying(false);
                return prevIndex;
              }
              setStepTimeRemaining(exercise.steps[nextIndex].duration);
              return nextIndex;
            });
            return 0;
          }
          return prev - 1;
        });
        setTotalElapsed(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isComplete, exercise.steps]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
    setStepTimeRemaining(exercise.steps[0].duration);
    setTotalElapsed(0);
    setIsComplete(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const ExerciseIcon = exercise.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/chatbot")}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Assessment
          </Button>

          {/* Exercise Selection */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {exercises.map((ex) => (
              <Button
                key={ex.id}
                variant={exerciseId === ex.id ? "default" : "outline"}
                size="sm"
                onClick={() => navigate(`/exercise?id=${ex.id}`)}
                className="gap-2"
              >
                <ex.icon className="h-4 w-4" />
                {ex.title.split(' ')[0]}
              </Button>
            ))}
          </div>

          {/* Main Exercise Card */}
          <Card className="p-8 text-center space-y-8">
            <div className="space-y-4">
              <div className="bg-accent/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
                <ExerciseIcon className="h-12 w-12 text-accent" />
              </div>
              <h1 className="text-2xl font-bold">{exercise.title}</h1>
              <p className="text-muted-foreground">{exercise.description}</p>
              <Badge variant="secondary">{formatTime(totalDuration)} total</Badge>
            </div>

            {/* Timer Display */}
            <div className="space-y-4">
              <div className="text-6xl font-mono font-bold text-primary">
                {formatTime(stepTimeRemaining)}
              </div>
              <Progress value={progress} className="h-3" />
              <p className="text-sm text-muted-foreground">
                {formatTime(totalElapsed)} / {formatTime(totalDuration)}
              </p>
            </div>

            {/* Current Instruction */}
            {!isComplete ? (
              <Card className="p-6 bg-accent/5 border-accent/20">
                <p className="text-lg font-medium">
                  {exercise.steps[currentStepIndex].instruction}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Step {currentStepIndex + 1} of {exercise.steps.length}
                </p>
              </Card>
            ) : (
              <Card className="p-6 bg-success/10 border-success/20">
                <div className="flex items-center justify-center gap-2 text-success">
                  <CheckCircle2 className="h-6 w-6" />
                  <p className="text-lg font-medium">Exercise Complete!</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Great job! You've completed the {exercise.title}.
                </p>
              </Card>
            )}

            {/* Controls */}
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={handleReset}
                className="gap-2"
              >
                <RotateCcw className="h-5 w-5" />
                Reset
              </Button>
              <Button
                size="lg"
                onClick={handlePlayPause}
                className="gap-2 min-w-[140px]"
                disabled={isComplete}
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-5 w-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    {totalElapsed > 0 ? 'Resume' : 'Start'}
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Tips */}
          <Card className="mt-6 p-6 bg-muted/50">
            <h3 className="font-semibold mb-3">Tips for best results:</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Find a quiet, comfortable space</li>
              <li>• Turn off notifications on your devices</li>
              <li>• Practice daily for maximum benefit</li>
              <li>• Don't worry if your mind wanders - gently bring it back</li>
            </ul>
          </Card>

          {/* Sign In Prompt */}
          <Card className="mt-6 p-6 bg-primary/5 text-center">
            <p className="text-muted-foreground mb-4">
              Sign in to track your wellness journey and save your progress
            </p>
            <Link to="/auth">
              <Button variant="outline">Sign In / Create Account</Button>
            </Link>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExerciseDrill;
