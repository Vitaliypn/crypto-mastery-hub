
import React from 'react';
import { Home, BookOpen, HelpCircle, Users, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const AppFooter = () => {
  const location = useLocation();
  
  const navigationItems = [
    {
      title: 'Home',
      icon: Home,
      path: '/dashboard',
    },
    {
      title: 'Courses',
      icon: BookOpen,
      path: '/courses',
    },
    {
      title: 'Resources',
      icon: HelpCircle,
      path: '/resources',
    },
    {
      title: 'Community',
      icon: Users,
      path: '/community',
    },
    {
      title: 'Profile',
      icon: User,
      path: '/profile',
    },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 glass-card border-t border-gray-800/50 py-2 px-4 bg-fin-darker/90 backdrop-blur-lg">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.title}
              to={item.path}
              className={cn(
                "flex flex-col items-center py-1 px-3 transition-colors",
                isActive ? "text-fin-green" : "text-gray-400 hover:text-gray-200"
              )}
            >
              <item.icon size={20} className={cn(isActive && "animate-pulse-slow")} />
              <span className="text-[10px] mt-1">{item.title}</span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-fin-green mt-1" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AppFooter;
