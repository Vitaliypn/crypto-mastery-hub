import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Lock, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Logo from '@/components/Logo';
import BackButtonHeader from '@/components/BackButtonHeader';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Successfully logged in!');
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
          <h1 className="text-2xl font-bold mb-2 text-center">Welcome Back</h1>
          <p className="text-gray-400 text-center mb-6 text-sm">Log in to continue your trading journey</p>
          
          <form onSubmit={handleLogin} className="space-y-4 mb-6">
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
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-fin-green text-xs hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="glass-card pl-10 border-gray-700 focus:border-fin-green"
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-fin-green hover:bg-fin-green-dark text-black font-medium rounded-xl py-6 shadow-glow transition-all duration-300 group"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-fin-dark text-gray-400">or continue with</span>
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
            Don't have an account?{' '}
            <Link to="/signup" className="text-fin-green hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
