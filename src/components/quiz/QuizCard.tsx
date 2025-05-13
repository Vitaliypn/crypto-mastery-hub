
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface QuizCardProps {
  icon: React.ReactNode;
  title: string;
  type: 'single-choice' | 'multiple-choice' | 'social-proof';
  options?: string[];
  selectedOptions: string | string[];
  onSingleChoice?: (option: string) => void;
  onMultipleChoice?: (option: string) => void;
  onMultipleSubmit?: () => void;
  onContinue?: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  icon,
  title,
  type,
  options = [],
  selectedOptions,
  onSingleChoice,
  onMultipleChoice,
  onMultipleSubmit,
  onContinue,
}) => {
  
  switch (type) {
    case 'social-proof':
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-6 text-fin-green">
            {icon}
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-8">{title}</h2>
          <Button 
            onClick={onContinue} 
            className="w-full bg-fin-green hover:bg-fin-green-dark text-white"
          >
            Continue
          </Button>
        </motion.div>
      );
      
    case 'single-choice':
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 text-fin-green">
            {icon}
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">{title}</h2>
          <div className="space-y-3">
            {options.map((option, index) => (
              <Button 
                key={index}
                onClick={() => onSingleChoice && onSingleChoice(option)}
                variant="outline"
                className={`w-full justify-start text-left h-auto py-3 px-4 hover:bg-fin-green hover:text-white
                  ${selectedOptions === option ? 'bg-fin-green text-white border-fin-green' : 'bg-fin-card'}`}
              >
                {option}
              </Button>
            ))}
          </div>
        </motion.div>
      );
      
    case 'multiple-choice':
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 text-fin-green">
            {icon}
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">{title}</h2>
          <div className="space-y-3 mb-6">
            {options.map((option, index) => {
              const isSelected = Array.isArray(selectedOptions) && 
                selectedOptions.includes(option);
              
              return (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer border
                    ${isSelected ? 'bg-fin-green bg-opacity-20 border-fin-green' : 'bg-fin-card border-transparent'}`}
                  onClick={() => onMultipleChoice && onMultipleChoice(option)}
                >
                  <Checkbox 
                    checked={isSelected}
                    onCheckedChange={() => onMultipleChoice && onMultipleChoice(option)}
                    className="h-5 w-5"
                  />
                  <Label className="cursor-pointer flex-1">{option}</Label>
                </div>
              );
            })}
          </div>
          <Button 
            onClick={onMultipleSubmit} 
            className="w-full bg-fin-green hover:bg-fin-green-dark text-white"
            disabled={!Array.isArray(selectedOptions) || selectedOptions.length === 0}
          >
            Continue
          </Button>
        </motion.div>
      );
      
    default:
      return null;
  }
};

export default QuizCard;
