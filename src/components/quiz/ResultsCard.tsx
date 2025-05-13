
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Mail } from 'lucide-react';

interface QuizScore {
  motivation: number;
  knowledge: number;
  incomeFit: number;
  riskAppetite: number;
}

interface ResultsCardProps {
  scores: QuizScore;
  onSubmit: (email: string) => void;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ scores, onSubmit }) => {
  const [email, setEmail] = useState('');
  
  const handleSubmitEmail = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return;
    }
    onSubmit(email);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <h2 className="text-2xl font-bold mb-2">Your Crypto Readiness Profile</h2>
      <p className="text-muted-foreground mb-8">Based on your answers, we've created your personalized profile</p>
      
      <div className="space-y-6 mb-8">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Motivation</span>
            <span>{scores.motivation}%</span>
          </div>
          <Progress value={scores.motivation} className="h-2 bg-fin-card" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Knowledge</span>
            <span>{scores.knowledge}%</span>
          </div>
          <Progress value={scores.knowledge} className="h-2 bg-fin-card" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Income Fit</span>
            <span>{scores.incomeFit}%</span>
          </div>
          <Progress value={scores.incomeFit} className="h-2 bg-fin-card" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Risk Appetite</span>
            <span>{scores.riskAppetite}%</span>
          </div>
          <Progress value={scores.riskAppetite} className="h-2 bg-fin-card" />
        </div>
      </div>
      
      <div className="bg-fin-card rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold mb-3">Get Your Personalized Crypto Wealth Plan</h3>
        <p className="text-muted-foreground mb-4">Enter your email to receive your full personalized plan and exclusive resources.</p>
        
        <div className="flex flex-col space-y-3">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              type="email" 
              placeholder="Your email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button 
            onClick={handleSubmitEmail} 
            className="w-full bg-fin-green hover:bg-fin-green-dark text-white"
            disabled={!email || !/\S+@\S+\.\S+/.test(email)}
          >
            Get My Plan
          </Button>
        </div>
      </div>
      
      <div className="text-xs text-muted-foreground">
        By submitting, you agree to our Terms of Service and Privacy Policy.
      </div>
    </motion.div>
  );
};

export default ResultsCard;
