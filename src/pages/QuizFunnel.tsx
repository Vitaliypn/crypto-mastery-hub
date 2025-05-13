
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { UserCircle, Users, Clock, DollarSign, Activity, Award, Brain } from 'lucide-react';
import Logo from '@/components/Logo';
import QuizCard from '@/components/quiz/QuizCard';
import ResultsCard from '@/components/quiz/ResultsCard';
import { toast } from "sonner";

// Define all quiz steps
const quizSteps = [
  {
    id: 1,
    title: "Select Your Gender",
    type: "single-choice",
    options: ["Male", "Female", "Prefer not to say"]
  },
  {
    id: 2,
    title: "Select Your Age",
    type: "single-choice",
    options: ["Under 24", "25-34", "35-44", "45+"]
  },
  {
    id: 3,
    title: "More than 800,000 people have started their crypto journey with us.",
    type: "social-proof",
  },
  {
    id: 4,
    title: "What is your main goal?",
    type: "single-choice",
    options: ["Build crypto wealth", "Escape fiat system", "Passive income from DeFi", "Early retirement through crypto", "Be my own boss", "Financial independence"]
  },
  {
    id: 5,
    title: "What income source are you most familiar with?",
    type: "single-choice",
    options: ["Full-time job", "Freelancing", "Passive income", "Crypto trading/investing", "Other"]
  },
  {
    id: 6,
    title: "How do you feel about your current financial situation?",
    type: "single-choice",
    options: ["I'm comfortable", "I'd like more stability", "I'm struggling", "Too reliant on paycheck"]
  },
  {
    id: 7,
    title: "What is your crypto experience level?",
    type: "single-choice",
    options: ["Total beginner", "Dabbled in Bitcoin/Ethereum", "Traded a few tokens", "Experienced investor"]
  },
  {
    id: 8,
    title: "What's your ideal annual income from crypto?",
    type: "single-choice",
    options: ["$5,000-$20,000", "$20,000-$50,000", "$50,000+"]
  },
  {
    id: 9,
    title: "What frustrates you about the crypto space?",
    type: "multiple-choice",
    options: ["Too volatile", "Scams/rug pulls", "Confusing tools & wallets", "Lack of guidance", "Technical knowledge barrier"]
  },
  {
    id: 10,
    title: "Are you satisfied with your current income?",
    type: "single-choice",
    options: ["Very satisfied", "Somewhat satisfied", "Not satisfied"]
  },
  {
    id: 11,
    title: "Is money a barrier to your freedom or lifestyle goals?",
    type: "single-choice",
    options: ["Always", "Often", "Sometimes", "Never"]
  },
  {
    id: 12,
    title: "What would you prioritize if you had extra income?",
    type: "single-choice",
    options: ["Buying Bitcoin", "Yield farming / DeFi", "NFT investing", "Paying off debt", "Building safety net"]
  },
  {
    id: 13,
    title: "How confident are you about your financial future?",
    type: "single-choice",
    options: ["Very confident", "Somewhat confident", "Not confident"]
  },
  {
    id: 14,
    title: "Do you want to retire early through crypto?",
    type: "single-choice",
    options: ["Yes, that's the plan", "Haven't thought about it", "I'm already retired"]
  },
  {
    id: 15,
    title: "Is it easy for you to save fiat money?",
    type: "single-choice",
    options: ["Yes", "No — I only save in crypto", "I find it hard to save at all"]
  },
  {
    id: 16,
    title: "Have you ever explored crypto income strategies?",
    type: "single-choice",
    options: ["Yes, staking/yield", "Yes, trading", "Heard about them but unsure", "Not yet"]
  },
  {
    id: 17,
    title: "Would you like to learn how to grow wealth with crypto?",
    type: "single-choice",
    options: ["Yes", "No", "Maybe"]
  },
  {
    id: 18,
    title: "Rate your crypto investment knowledge",
    type: "single-choice",
    options: ["Expert", "Intermediate", "Beginner", "Total novice"]
  },
  {
    id: 19,
    title: "Choose your crypto interests",
    type: "multiple-choice",
    options: ["DeFi", "NFTs", "Crypto trading", "Passive income strategies", "Web3 projects", "Long-term investing", "DAOs"]
  },
  {
    id: 20,
    title: "What's your biggest motivation?",
    type: "single-choice",
    options: ["Buy a house", "Achieve financial freedom", "Travel full-time", "Build a crypto fund", "Escape traditional work", "Other"]
  },
];

// Icons for each step
const stepIcons = [
  <UserCircle size={60} />,
  <Clock size={60} />,
  <Users size={60} />,
  <Award size={60} />,
  <DollarSign size={60} />,
  <Activity size={60} />,
  <Brain size={60} />,
  <DollarSign size={60} />,
  <Award size={60} />,
  <Activity size={60} />,
  <DollarSign size={60} />,
  <Award size={60} />,
  <Activity size={60} />,
  <Clock size={60} />,
  <DollarSign size={60} />,
  <Brain size={60} />,
  <Award size={60} />,
  <Brain size={60} />,
  <Award size={60} />,
  <Award size={60} />,
];

const QuizFunnel = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<{ [key: number]: string | string[] }>({});
  const [showResults, setShowResults] = useState(false);
  
  const navigate = useNavigate();
  
  // Calculate progress percentage
  const progress = (currentStep / quizSteps.length) * 100;
  
  const handleSingleChoice = (option: string) => {
    setAnswers({ ...answers, [currentStep]: option });
    if (currentStep < quizSteps.length) {
      setTimeout(() => setCurrentStep(currentStep + 1), 400);
    } else {
      setShowResults(true);
    }
  };
  
  const handleMultipleChoice = (option: string) => {
    const currentSelections = answers[currentStep] as string[] || [];
    
    if (currentSelections.includes(option)) {
      setAnswers({
        ...answers,
        [currentStep]: currentSelections.filter(item => item !== option)
      });
    } else {
      setAnswers({
        ...answers,
        [currentStep]: [...currentSelections, option]
      });
    }
  };
  
  const handleMultipleSubmit = () => {
    if (!answers[currentStep] || (answers[currentStep] as string[]).length === 0) {
      return; // Don't proceed if no selection
    }
    
    if (currentStep < quizSteps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handleContinue = () => {
    if (currentStep < quizSteps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handleSubmitEmail = (email: string) => {
    // Here you would typically send the data to your backend
    console.log("Quiz answers:", answers);
    console.log("User email:", email);
    
    // Show a toast notification
    toast.success("Your personalized plan has been sent to your email!");
    
    // Navigate to dashboard or success page
    setTimeout(() => {
      navigate('/dashboard', { state: { fromQuiz: true, quizResults: calculateQuizResults() } });
    }, 1500);
  };
  
  const calculateQuizResults = () => {
    // Calculate profile scores based on answers
    // This is a simplified example - you would implement real scoring logic
    const scores = {
      motivation: Math.floor(Math.random() * 41) + 60, // 60-100 range for demo
      knowledge: Math.floor(Math.random() * 61) + 30, // 30-90 range for demo
      incomeFit: Math.floor(Math.random() * 51) + 40, // 40-90 range for demo
      riskAppetite: Math.floor(Math.random() * 71) + 30, // 30-100 range for demo
    };
    
    return scores;
  };
  
  const getCurrentQuestion = () => {
    return quizSteps[currentStep - 1];
  };
  
  return (
    <div className="min-h-screen bg-fin-dark text-white flex flex-col">
      <header className="px-4 py-6 flex justify-center">
        <Logo size="md" />
      </header>
      
      <main className="px-4 py-2 flex-1 flex flex-col">
        {!showResults && (
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1.5">
              <span>Question {currentStep} of {quizSteps.length}</span>
              <span>{Math.floor(progress)}%</span>
            </div>
            <Progress value={progress} className="h-1.5 bg-fin-card" />
          </div>
        )}
        
        <div className="max-w-md mx-auto w-full bg-fin-darker glass-card rounded-xl p-6 shadow-md">
          {showResults ? (
            <ResultsCard 
              scores={calculateQuizResults()} 
              onSubmit={handleSubmitEmail}
            />
          ) : (
            <QuizCard 
              icon={stepIcons[currentStep - 1]}
              title={getCurrentQuestion().title}
              type={getCurrentQuestion().type as any}
              options={getCurrentQuestion().options}
              selectedOptions={answers[currentStep] || []}
              onSingleChoice={handleSingleChoice}
              onMultipleChoice={handleMultipleChoice}
              onMultipleSubmit={handleMultipleSubmit}
              onContinue={handleContinue}
            />
          )}
        </div>
      </main>
      
      <footer className="mt-auto px-4 py-6 text-center text-xs text-muted-foreground">
        © 2025 FinMastery. All rights reserved.
      </footer>
    </div>
  );
};

export default QuizFunnel;
