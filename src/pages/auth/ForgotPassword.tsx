
import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Logo from '@/components/Logo';
import BackButtonHeader from '@/components/BackButtonHeader';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success('Reset link sent to your email!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-8 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      
      <BackButtonHeader title="Reset Password" />

      <div className="flex flex-col items-center justify-center mt-8">
        <Logo size="lg" className="mb-8" />
        
        <div className="w-full max-w-sm mx-auto animate-fade-in">
          {!isSubmitted ? (
            <>
              <p className="text-gray-400 text-center mb-6 text-sm">
                Enter your email address and we'll send you a link to reset your password
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
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
                
                <Button 
                  type="submit" 
                  className="w-full bg-fin-green hover:bg-fin-green-dark text-black font-medium rounded-xl py-6 shadow-glow transition-all duration-300 group"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-fin-green/20 flex items-center justify-center">
                <Mail size={32} className="text-fin-green" />
              </div>
              <h2 className="text-xl font-bold mb-2">Check Your Email</h2>
              <p className="text-gray-400 mb-6">
                We've sent a password reset link to <span className="text-white">{email}</span>
              </p>
              <p className="text-sm text-gray-500">
                Didn't receive the email? Check your spam folder or try again.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
