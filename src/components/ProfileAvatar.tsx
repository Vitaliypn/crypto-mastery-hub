
import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProfileAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  src?: string;
  to?: string;
}

const ProfileAvatar = ({ 
  className,
  size = 'md',
  src,
  to = '/profile'
}: ProfileAvatarProps) => {
  const dimensions = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };
  
  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 24
  };
  
  return (
    <Link 
      to={to}
      className={cn(
        "glass-card rounded-full flex items-center justify-center shadow-md transition-all hover:shadow-glow",
        dimensions[size],
        className
      )}
    >
      {src ? (
        <img 
          src={src} 
          alt="Profile" 
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <User size={iconSizes[size]} className="text-fin-green" />
      )}
    </Link>
  );
};

export default ProfileAvatar;
