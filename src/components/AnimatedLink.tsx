
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  isActive?: boolean;
}

const AnimatedLink = ({ 
  href, 
  children, 
  className, 
  activeClassName,
  isActive = false,
  ...props 
}: AnimatedLinkProps) => {
  return (
    <a 
      href={href}
      className={cn(
        "relative inline-block transition-colors duration-300 hover:text-fin-green",
        isActive && activeClassName,
        className
      )}
      {...props}
    >
      {children}
      <span className={cn(
        "absolute bottom-0 left-0 w-0 h-0.5 bg-fin-green transition-all duration-300 group-hover:w-full",
        isActive ? "w-full" : "w-0"
      )} />
    </a>
  );
};

export default AnimatedLink;
