
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  textClassName?: string;
  withText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  to?: string;
}

const Logo = ({ 
  className, 
  textClassName,
  withText = true, 
  size = 'md',
  to = '/'
}: LogoProps) => {
  const dimensions = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-9 h-9'
  };
  
  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl'
  };
  
  return (
    <Link to={to} className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        "rounded-lg bg-fin-green flex items-center justify-center shadow-glow", 
        dimensions[size]
      )}>
        <span className="font-bold text-black text-sm">F</span>
      </div>
      {withText && (
        <h1 className={cn("font-bold tracking-tight", textSizes[size], textClassName)}>
          FinMastery
        </h1>
      )}
    </Link>
  );
};

export default Logo;
