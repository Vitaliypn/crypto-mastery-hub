
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, User } from 'lucide-react';
import AnimatedLink from '@/components/AnimatedLink';

const Index = () => {
  // Refs for animation elements
  const heroRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Handler for intersection observer animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section refs
    [
      heroRef,
      coursesRef,
      buttonsRef,
      testimonialRef,
      achievementsRef,
      communityRef,
      faqRef
    ].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-8 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[200px] h-[200px] bg-gradient-radial from-indigo-500/10 to-transparent opacity-20 blur-3xl -z-10" />
      
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8 animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-fin-green flex items-center justify-center shadow-glow">
            <span className="font-bold text-black text-sm">F</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">FinMastery</h1>
        </div>
        <div className="h-10 w-10 glass-card rounded-full flex items-center justify-center shadow-md transition-all hover:shadow-glow">
          <User size={18} className="text-fin-green" />
        </div>
      </div>

      {/* Hero Section */}
      <div ref={heroRef} className="text-center mb-12 opacity-0">
        <span className="inline-block text-xs font-medium py-1 px-3 rounded-full mb-3 glass">
          <span className="text-fin-green">New</span> to crypto?
        </span>
        <h2 className="text-3xl font-bold mb-3 tracking-tight leading-tight">Start Your <span className="text-fin-green">Crypto</span> Journey Today!</h2>
        <p className="mb-6 text-sm text-gray-400 max-w-xs mx-auto">
          Master cryptocurrency trading with our beginner-friendly courses
        </p>
        <Button className="bg-fin-green hover:bg-fin-green-dark text-black font-medium rounded-xl px-6 py-6 shadow-glow transition-all duration-300 group button-hover-effect">
          Get Started
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Featured Courses */}
      <div ref={coursesRef} className="mb-12 opacity-0">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Featured Courses</h3>
          <span className="text-fin-green text-sm cursor-pointer hover:underline">View all</span>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-fin-green/20">
          <Card className="min-w-[200px] glass-card rounded-xl border-0">
            <CardContent className="p-5">
              <div className="w-12 h-12 rounded-lg glass flex items-center justify-center mb-4 shadow-inner-glow animate-pulse-slow">
                <div className="text-fin-green text-xl font-bold">₿</div>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-white">Crypto Basics</h4>
                <p className="text-xs text-gray-400">Learn the fundamentals of cryptocurrency</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <div className="flex text-fin-green">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                  <span className="text-[10px] text-gray-400 ml-1">5.0</span>
                </div>
                <span className="text-xs bg-fin-green/10 text-fin-green rounded-full px-2 py-0.5">
                  Beginner
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="min-w-[200px] glass-card rounded-xl border-0">
            <CardContent className="p-5">
              <div className="w-12 h-12 rounded-lg glass flex items-center justify-center mb-4 shadow-inner-glow animate-pulse-slow">
                <div className="text-fin-green text-xl font-bold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17.5H14M7 9.5H17M8 13.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <rect x="4" y="4.5" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-white">Blockchain 101</h4>
                <p className="text-xs text-gray-400">Understanding blockchain technology</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <div className="flex text-fin-green">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} />
                  </div>
                  <span className="text-[10px] text-gray-400 ml-1">4.8</span>
                </div>
                <span className="text-xs bg-fin-green/10 text-fin-green rounded-full px-2 py-0.5">
                  Beginner
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="min-w-[200px] glass-card rounded-xl border-0">
            <CardContent className="p-5">
              <div className="w-12 h-12 rounded-lg glass flex items-center justify-center mb-4 shadow-inner-glow animate-pulse-slow">
                <div className="text-fin-green text-xl font-bold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L5 9M5 9L9 13L19 3M5 9V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-white">Trading Strategies</h4>
                <p className="text-xs text-gray-400">Advanced patterns and techniques</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <div className="flex text-fin-green">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} />
                  </div>
                  <span className="text-[10px] text-gray-400 ml-1">4.7</span>
                </div>
                <span className="text-xs bg-fin-green/10 text-fin-green rounded-full px-2 py-0.5">
                  Advanced
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Access Buttons */}
      <div ref={buttonsRef} className="flex flex-col gap-3 mb-12 opacity-0">
        <Button variant="outline" className="glass-card rounded-xl justify-between text-left font-normal h-auto py-4 group transition-all hover:border-fin-green/30 border-gray-800/50">
          <div className="flex flex-col items-start">
            <span className="text-white font-medium">Explore Courses</span>
            <span className="text-xs text-gray-400">Browse all available courses</span>
          </div>
          <ArrowRight size={16} className="text-fin-green group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <Button variant="outline" className="glass-card rounded-xl justify-between text-left font-normal h-auto py-4 group transition-all hover:border-fin-green/30 border-gray-800/50">
          <div className="flex flex-col items-start">
            <span className="text-white font-medium">Virtual Trading Simulator</span>
            <span className="text-xs text-gray-400">Practice trading with virtual money</span>
          </div>
          <div className="bg-fin-green/10 rounded-full p-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-fin-green">
              <path d="M2 12H5M5 12L9 16M5 12L9 8M22 12H19M19 12L15 16M19 12L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Button>
        
        <Button variant="outline" className="glass-card rounded-xl justify-between text-left font-normal h-auto py-4 group transition-all hover:border-fin-green/30 border-gray-800/50">
          <div className="flex flex-col items-start">
            <span className="text-white font-medium">Crypto Glossary</span>
            <span className="text-xs text-gray-400">Detailed terms and definitions</span>
          </div>
          <div className="bg-fin-green/10 rounded-full p-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-fin-green">
              <path d="M12 6.5V12M12 16.5V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </Button>
      </div>

      {/* User Testimonials */}
      <div ref={testimonialRef} className="mb-12 opacity-0">
        <h3 className="mb-4 text-lg font-semibold">What Our Users Say</h3>
        <Card className="glass-card rounded-xl border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-1">
                <div className="w-4/5 h-full bg-gradient-to-r from-fin-green/30 to-transparent"></div>
              </div>
              
              <div className="p-5 flex gap-4">
                <div className="relative">
                  <div className="rounded-full w-12 h-12 overflow-hidden ring-2 ring-fin-green/20 shadow-glow">
                    <img
                      src="https://i.pravatar.cc/100?img=5"
                      alt="User"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-fin-green text-[8px] text-black font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
                    <span>+</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white">Sarah K.</h4>
                    <span className="text-[10px] text-gray-400">2 days ago</span>
                  </div>
                  
                  <div className="flex text-fin-green mb-2 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-300 italic">
                    "FinMastery made crypto trading accessible and less intimidating for me. Great platform!"
                  </p>
                  
                  <div className="flex gap-2 mt-3">
                    <span className="text-[10px] bg-fin-green/10 text-fin-green rounded-full px-2 py-0.5">
                      Beginner
                    </span>
                    <span className="text-[10px] bg-gray-700/60 text-gray-400 rounded-full px-2 py-0.5">
                      Verified User
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements & Rewards */}
      <div ref={achievementsRef} className="mb-12 opacity-0">
        <h3 className="mb-4 text-lg font-semibold">Earn As You Learn</h3>
        <div className="glass-card rounded-xl p-5 border-0">
          <div className="flex justify-around text-center gap-2">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-2 shadow-inner-glow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-fin-green">
                  <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 14L7 21H17L12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-xs text-gray-300 font-medium">Beginner Badge</p>
              <p className="text-[10px] text-gray-500">10+ Hours</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-2 shadow-inner-glow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-fin-green">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-xs text-gray-300 font-medium">Course Certificate</p>
              <p className="text-[10px] text-gray-500">Complete Course</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-2 shadow-inner-glow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-fin-green">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-xs text-gray-300 font-medium">Pro Trader</p>
              <p className="text-[10px] text-gray-500">All Courses</p>
            </div>
          </div>
          
          <div className="mt-5 pt-4 border-t border-gray-800/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center shadow-inner-glow text-fin-green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14V17M12 10V17M16 7V17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white font-medium">Your Progress</p>
                  <p className="text-[10px] text-gray-400">3 badges earned</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-8 px-3 rounded-lg text-xs border-gray-700 hover:bg-fin-green hover:text-black hover:border-fin-green transition-colors">
                View All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Community Callout */}
      <div ref={communityRef} className="text-center mb-12 opacity-0">
        <h3 className="mb-3 text-lg font-semibold">Join Our Community</h3>
        <p className="text-sm text-gray-400 mb-4 max-w-xs mx-auto">Connect with fellow traders and learn together</p>
        <Button className="bg-fin-green/10 hover:bg-fin-green hover:text-black text-fin-green rounded-xl px-6 py-5 shadow transition-all duration-300 button-hover-effect">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Join Discussion
        </Button>
        
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-fin-dark overflow-hidden">
              <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-fin-dark overflow-hidden">
              <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-fin-dark overflow-hidden">
              <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="text-xs text-gray-400">
            <span className="text-fin-green">500+</span> active members
          </span>
        </div>
      </div>

      {/* FAQs & Support */}
      <div ref={faqRef} className="flex flex-col gap-3 mb-8 opacity-0">
        <Button variant="outline" className="glass-card rounded-xl justify-between text-left font-normal h-auto py-4 group transition-all hover:border-fin-green/30 border-gray-800/50">
          <div className="flex flex-col items-start">
            <span className="text-white font-medium">Frequently Asked Questions</span>
            <span className="text-xs text-gray-400">Get answers to common questions</span>
          </div>
          <ArrowRight size={16} className="text-fin-green group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <Button variant="outline" className="glass-card rounded-xl justify-between text-left font-normal h-auto py-4 group transition-all hover:border-fin-green/30 border-gray-800/50">
          <div className="flex flex-col items-start">
            <span className="text-white font-medium">Contact Support</span>
            <span className="text-xs text-gray-400">We're here to help you</span>
          </div>
          <ArrowRight size={16} className="text-fin-green group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Footer */}
      <div className="flex justify-around text-xs text-gray-500 mt-16 pt-4 border-t border-gray-800/50 animate-fade-in">
        <AnimatedLink href="#" className="hover:text-gray-300">About</AnimatedLink>
        <AnimatedLink href="#" className="hover:text-gray-300">Privacy</AnimatedLink>
        <AnimatedLink href="#" className="hover:text-gray-300">Terms</AnimatedLink>
      </div>
    </div>
  );
};

export default Index;
