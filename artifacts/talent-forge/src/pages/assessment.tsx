import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, HelpCircle, CheckCircle2, ChevronRight, BrainCircuit } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const questions = [
  {
    id: 1,
    text: "In a typical operational amplifier (op-amp) circuit, what is the primary purpose of negative feedback?",
    options: [
      "To increase the overall voltage gain of the circuit",
      "To stabilize the gain and increase the bandwidth",
      "To convert the op-amp into an oscillator",
      "To decrease the input impedance of the amplifier"
    ],
    correct: 1
  },
  {
    id: 2,
    text: "When designing an embedded system, which communication protocol is typically best suited for high-speed, short-distance data transfer between a microcontroller and an SD card?",
    options: [
      "I2C (Inter-Integrated Circuit)",
      "UART (Universal Asynchronous Receiver-Transmitter)",
      "SPI (Serial Peripheral Interface)",
      "CAN (Controller Area Network)"
    ],
    correct: 2
  },
  {
    id: 3,
    text: "In digital signal processing, what is the consequence of sampling a continuous-time signal at a rate lower than the Nyquist rate?",
    options: [
      "Quantization noise increases significantly",
      "Aliasing occurs, causing high frequencies to masquerade as low frequencies",
      "The signal amplitude is attenuated by half",
      "The phase response of the signal becomes perfectly linear"
    ],
    correct: 1
  }
];

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timerId = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft, showResults]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswers({ ...answers, [currentQuestion]: selectedOption });
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1] !== undefined ? answers[currentQuestion + 1] : null);
    } else {
      // Calculate score
      let newScore = 0;
      questions.forEach((q, index) => {
        if (answers[index] === q.correct) newScore += 33.33;
      });
      if (selectedOption === questions[questions.length - 1].correct) newScore += 33.34;
      
      setScore(Math.round(newScore));
      setShowResults(true);
    }
  };

  const toggleReview = () => {
    const newMarked = new Set(markedForReview);
    if (newMarked.has(currentQuestion)) {
      newMarked.delete(currentQuestion);
    } else {
      newMarked.add(currentQuestion);
    }
    setMarkedForReview(newMarked);
  };

  const q = questions[currentQuestion];
  const progressPercent = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background pt-20 flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <div className="w-full md:w-64 bg-zinc-50 border-r border-zinc-200 p-6 flex flex-col hidden md:flex h-[calc(100vh-80px)] sticky top-20">
        <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-6">Assessment</h3>
        
        <div className="flex items-center gap-3 mb-8 p-3 bg-blue-50/70 rounded-lg border border-zinc-200">
          <Clock className="text-amber-500 w-5 h-5" />
          <span className="text-zinc-900 font-mono text-lg">{formatTime(timeLeft)}</span>
        </div>

        <div className="mb-4 text-sm font-medium text-zinc-600 flex justify-between">
          <span>Progress</span>
          <span>{currentQuestion + 1}/{questions.length}</span>
        </div>
        <div className="w-full h-2 bg-zinc-100 rounded-full mb-8">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <h4 className="text-sm font-medium text-zinc-500 mb-4">Questions</h4>
        <div className="grid grid-cols-4 gap-2">
          {questions.map((_, i) => {
            let statusClass = "bg-zinc-100 text-zinc-500 border-zinc-200";
            if (i === currentQuestion) statusClass = "bg-blue-700 text-white border-blue-500";
            else if (answers[i] !== undefined) statusClass = "bg-green-500/20 text-green-400 border-green-500/50";
            
            if (markedForReview.has(i) && i !== currentQuestion) {
              statusClass += " border-amber-500 border-2";
            }

            return (
              <button 
                key={i}
                onClick={() => {
                  setCurrentQuestion(i);
                  setSelectedOption(answers[i] !== undefined ? answers[i] : null);
                }}
                className={`w-10 h-10 rounded-md border flex items-center justify-center text-sm font-medium transition-colors ${statusClass}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12 max-w-4xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <span className="text-blue-700 font-medium bg-blue-50 px-3 py-1 rounded-full text-sm border border-blue-200">
            Core Electronics & Communication
          </span>
          <Button variant="ghost" className="text-zinc-500 hover:text-zinc-900" onClick={() => {}}>
            <HelpCircle className="w-4 h-4 mr-2" />
            Report Issue
          </Button>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-relaxed">
            <span className="text-zinc-500 mr-4">{currentQuestion + 1}.</span>
            {q.text}
          </h2>
        </div>

        <div className="space-y-4 mb-12">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelectedOption(i)}
              className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group
                ${selectedOption === i 
                  ? 'bg-blue-50 border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.15)]' 
                  : 'bg-blue-50/70 border-zinc-200 hover:border-slate-500 hover:bg-zinc-100'
                }
              `}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                ${selectedOption === i ? 'border-blue-400' : 'border-slate-500 group-hover:border-slate-400'}
              `}>
                {selectedOption === i && <div className="w-3 h-3 rounded-full bg-blue-500" />}
              </div>
              <span className={`text-lg ${selectedOption === i ? 'text-zinc-900' : 'text-zinc-600 group-hover:text-zinc-700'}`}>
                {opt}
              </span>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-zinc-200">
          <Button 
            variant="outline" 
            className={`border-zinc-200 ${markedForReview.has(currentQuestion) ? 'text-amber-500 border-amber-500/50 hover:bg-amber-500/10' : 'text-zinc-600'}`}
            onClick={toggleReview}
          >
            {markedForReview.has(currentQuestion) ? 'Unmark Review' : 'Mark for Review'}
          </Button>
          
          <div className="flex gap-4">
            <Button variant="ghost" className="text-amber-500 hover:text-amber-400 hover:bg-amber-500/10">
              <BrainCircuit className="w-4 h-4 mr-2" />
              AI Hint
            </Button>
            <Button 
              className="btn-gradient px-8"
              onClick={handleNext}
              disabled={selectedOption === null}
            >
              {currentQuestion === questions.length - 1 ? 'Submit Assessment' : 'Next Question'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results Modal */}
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="bg-zinc-50 border-zinc-200 sm:max-w-md text-center p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-zinc-900 text-center mb-2">Assessment Complete!</DialogTitle>
            <DialogDescription className="text-zinc-500 text-center">
              Your TFES (Talent Forge Expertise Score) has been updated.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-8 flex justify-center">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#1E293B" strokeWidth="8" />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke={score > 70 ? "#22C55E" : "#38BDF8"} 
                  strokeWidth="8"
                  strokeDasharray={`${(score / 100) * 283} 283`}
                  className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-zinc-900">{score}</span>
                <span className="text-xs text-zinc-500 font-medium tracking-wide">/ 100</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50/70 p-4 rounded-lg mb-6 text-left">
            <h4 className="text-zinc-900 font-medium mb-2 flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-4 h-4" /> 
              Skills Verified:
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-zinc-200 rounded text-xs text-zinc-600">Circuit Theory</span>
              <span className="px-2 py-1 bg-zinc-200 rounded text-xs text-zinc-600">Signal Processing</span>
              <span className="px-2 py-1 bg-zinc-200 rounded text-xs text-zinc-600">Embedded Systems</span>
            </div>
          </div>

          <Button 
            className="w-full btn-gradient"
            onClick={() => window.location.href = '/dashboard/student'}
          >
            Go to Dashboard
          </Button>
        </DialogContent>
      </Dialog>

    </div>
  );
}
