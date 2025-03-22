
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BackButtonHeaderProps {
  title: string;
  onBack?: () => void;
  className?: string;
  rightContent?: React.ReactNode;
}

const BackButtonHeader = ({ 
  title, 
  onBack, 
  className,
  rightContent
}: BackButtonHeaderProps) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };
  
  return (
    <div className={cn("flex justify-between items-center mb-6", className)}>
      <div className="flex items-center gap-3">
        <button 
          onClick={handleBack}
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
      </div>
      {rightContent}
    </div>
  );
};

export default BackButtonHeader;
