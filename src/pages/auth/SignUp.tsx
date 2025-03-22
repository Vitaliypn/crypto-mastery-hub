import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Lock, User, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Logo from '@/components/Logo';
import BackButtonHeader from '@/components/BackButtonHeader';
import { Checkbox } from '@/components/ui/checkbox';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      toast.error('Please accept the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Account created successfully!');
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-8 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      
      <BackButtonHeader title="" />

      <div className="flex flex-col items-center justify-center">
        <Logo size="lg" className="mb-8" />
        
        <div className="w-full max-w-sm mx-auto animate-fade-in">
          <h1 className="text-2xl font-bold mb-2 text-center">Create Account</h1>
          <p className="text-gray-400 text-center mb-6 text-sm">Start your crypto learning journey</p>
          
          <form onSubmit={handleSignUp} className="space-y-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="glass-card pl-10 border-gray-700 focus:border-fin-green"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="glass-card pl-10 border-gray-700 focus:border-fin-green"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="glass-card pl-10 border-gray-700 focus:border-fin-green"
                  required
                  minLength={8}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                className="data-[state=checked]:bg-fin-green border-gray-600"
              />
              <Label 
                htmlFor="terms" 
                className="text-sm text-gray-300 leading-tight cursor-pointer"
              >
                I agree to the{' '}
                <Link to="/about" className="text-fin-green hover:underline">
                  Terms & Conditions
                </Link>
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-fin-green hover:bg-fin-green-dark text-black font-medium rounded-xl py-6 shadow-glow transition-all duration-300 group"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-fin-dark text-gray-400">or sign up with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Button variant="outline" className="glass-card rounded-xl border-gray-700 hover:border-gray-500">
              <Mail size={18} className="mr-2" />
              Email
            </Button>
            <Button variant="outline" className="glass-card rounded-xl border-gray-700 hover:border-gray-500">
              <Github size={18} className="mr-2" />
              GitHub
            </Button>
          </div>
          
          <p className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-fin-green hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
