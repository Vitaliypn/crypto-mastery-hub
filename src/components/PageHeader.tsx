
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
  className?: string;
  rightContent?: React.ReactNode;
}

const PageHeader = ({ 
  title, 
  showBackButton = true, 
  className,
  rightContent
}: PageHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <div className={cn("flex justify-between items-center mb-6", className)}>
      <div className="flex items-center gap-2">
        {showBackButton && (
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
        )}
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
      </div>
      {rightContent}
    </div>
  );
};

export default PageHeader;
