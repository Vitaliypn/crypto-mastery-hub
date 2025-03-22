
import React from 'react';
import { 
  Globe, 
  Mail, 
  Phone, 
  Twitter, 
  Facebook, 
  Instagram,
  Shield,
  Users,
  Target,
  BookOpen,
  AlertTriangle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BackButtonHeader from '@/components/BackButtonHeader';
import Logo from '@/components/Logo';
import AnimatedLink from '@/components/AnimatedLink';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Former Wall Street trader with 15+ years of experience in traditional and cryptocurrency markets.',
      avatar: 'https://i.pravatar.cc/100?img=5'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Chief Content Officer',
      bio: 'Blockchain researcher and educator with a passion for making complex concepts accessible.',
      avatar: 'https://i.pravatar.cc/100?img=12'
    },
    {
      id: 3,
      name: 'Alex Rodriguez',
      role: 'Technical Director',
      bio: 'Software engineer specializing in blockchain technology and secure trading platforms.',
      avatar: 'https://i.pravatar.cc/100?img=3'
    }
  ];
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-8 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      
      <BackButtonHeader title="About FinMastery" />
      
      {/* Logo and Intro */}
      <div className="flex flex-col items-center justify-center mb-8">
        <Logo size="lg" className="mb-4" />
        
        <p className="text-center text-gray-300 text-sm mb-4">
          FinMastery is a comprehensive platform dedicated to cryptocurrency education,
          empowering users to navigate the complex world of digital assets with confidence.
        </p>
      </div>
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="mission" className="mb-8">
        <TabsList className="grid grid-cols-3 glass mb-4">
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="legal">Legal</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mission" className="animate-fade-in space-y-6">
          {/* Our Mission */}
          <Card className="glass-card rounded-xl border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center shadow-inner-glow">
                  <Target size={20} className="text-fin-green" />
                </div>
                <h3 className="text-lg font-semibold">Our Mission</h3>
              </div>
              
              <p className="text-sm text-gray-300 mb-3">
                Our mission is to democratize access to cryptocurrency knowledge and empower individuals 
                to participate confidently in the digital economy, regardless of their background or experience level.
              </p>
              
              <p className="text-sm text-gray-300">
                We believe that education is the key to responsible adoption of this transformative technology,
                and we're committed to providing accessible, accurate, and practical learning resources.
              </p>
            </CardContent>
          </Card>
          
          {/* Our Values */}
          <Card className="glass-card rounded-xl border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center shadow-inner-glow">
                  <BookOpen size={20} className="text-fin-green" />
                </div>
                <h3 className="text-lg font-semibold">Our Values</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Accessibility</h4>
                  <p className="text-sm text-gray-300">
                    We make complex financial concepts easy to understand for everyone, 
                    regardless of their prior knowledge or experience.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Integrity</h4>
                  <p className="text-sm text-gray-300">
                    We're committed to providing unbiased, accurate information that helps users 
                    make informed decisions about their financial future.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Innovation</h4>
                  <p className="text-sm text-gray-300">
                    We continuously update our content and platform to reflect the latest 
                    developments in the rapidly evolving cryptocurrency landscape.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Partners */}
          <Card className="glass-card rounded-xl border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center shadow-inner-glow">
                  <Users size={20} className="text-fin-green" />
                </div>
                <h3 className="text-lg font-semibold">Our Partners</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg glass flex items-center justify-center mb-2">
                    <span className="text-2xl">₿</span>
                  </div>
                  <span className="text-xs text-center">Bitcoin Association</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg glass flex items-center justify-center mb-2">
                    <span className="text-2xl">Ξ</span>
                  </div>
                  <span className="text-xs text-center">Ethereum Foundation</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg glass flex items-center justify-center mb-2">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <span className="text-xs text-center">Crypto Education Alliance</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team" className="animate-fade-in">
          {/* Team Members */}
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-semibold mb-3">Our Leadership Team</h3>
            
            {teamMembers.map((member) => (
              <Card key={member.id} className="glass-card rounded-xl border-0">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-fin-green/20"
                    />
                    
                    <div>
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-xs text-fin-green mb-2">{member.role}</p>
                      <p className="text-sm text-gray-300">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Join Our Team */}
          <Card className="glass-card rounded-xl border-0 mb-6">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold mb-2">Join Our Team</h3>
              <p className="text-sm text-gray-300 mb-4">
                We're always looking for passionate individuals to join our mission of making crypto education accessible to everyone.
              </p>
              <Button className="bg-fin-green hover:bg-fin-green-dark text-black">
                View Open Positions
              </Button>
            </CardContent>
          </Card>
          
          {/* Advisors */}
          <h3 className="text-lg font-semibold mb-3">Our Advisors</h3>
          <Card className="glass-card rounded-xl border-0">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://i.pravatar.cc/100?img=4" 
                    alt="Advisor" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Dr. Elena Martinez</h4>
                    <p className="text-xs text-gray-400">Economist & Blockchain Researcher</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <img 
                    src="https://i.pravatar.cc/100?img=7" 
                    alt="Advisor" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">James Wilson</h4>
                    <p className="text-xs text-gray-400">Crypto Investment Strategist</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <img 
                    src="https://i.pravatar.cc/100?img=9" 
                    alt="Advisor" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Sophia Lee</h4>
                    <p className="text-xs text-gray-400">Compliance & Regulatory Expert</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="legal" className="animate-fade-in space-y-4">
          {/* Privacy Policy */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-fin-green" />
                <h3 className="text-lg font-semibold">Privacy Policy</h3>
              </div>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <ChevronDown size={18} />
              </Button>
            </div>
            
            <Card className="glass-card rounded-xl border-0">
              <CardContent className="p-4">
                <p className="text-sm text-gray-300 mb-3">
                  FinMastery is committed to protecting your privacy and ensuring the security of your personal information.
                  Our Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm">Information We Collect</h4>
                    <p className="text-xs text-gray-400">
                      We collect information you provide directly to us, such as when you create an account,
                      subscribe to our service, or contact us for support.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm">How We Use Your Information</h4>
                    <p className="text-xs text-gray-400">
                      We use your information to provide, maintain, and improve our services,
                      as well as to communicate with you about your account and our platform.
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="link" 
                  className="text-fin-green p-0 h-auto mt-2 text-sm"
                >
                  Read Full Privacy Policy
                  <ExternalLink size={12} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Terms of Service */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-fin-green" />
                <h3 className="text-lg font-semibold">Terms of Service</h3>
              </div>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <ChevronDown size={18} />
              </Button>
            </div>
            
            <Card className="glass-card rounded-xl border-0">
              <CardContent className="p-4">
                <p className="text-sm text-gray-300 mb-3">
                  By using FinMastery, you agree to comply with and be bound by the following terms and conditions.
                  Please review these terms carefully before using our platform.
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm">User Accounts</h4>
                    <p className="text-xs text-gray-400">
                      You are responsible for maintaining the confidentiality of your account credentials
                      and for all activities that occur under your account.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm">Educational Content</h4>
                    <p className="text-xs text-gray-400">
                      Our content is provided for educational purposes only and should not be construed as financial advice.
                      Always conduct your own research before making investment decisions.
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="link" 
                  className="text-fin-green p-0 h-auto mt-2 text-sm"
                >
                  Read Full Terms of Service
                  <ExternalLink size={12} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Disclaimer */}
          <Card className="glass-card rounded-xl border-0 border-l-4 border-l-yellow-500 mt-6">
            <CardContent className="p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={16} className="text-yellow-500" />
              </div>
              <div>
                <h4 className="font-medium">Disclaimer</h4>
                <p className="text-xs text-gray-300 mt-1 mb-2">
                  The information provided on FinMastery is for educational purposes only and should not be considered financial advice.
                  Cryptocurrency investments are volatile and risky. Always conduct your own research before making investment decisions.
                </p>
                <p className="text-xs text-gray-400">
                  FinMastery is not responsible for any losses or gains resulting from your use of our platform or the information provided.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Contact Information */}
      <Card className="glass-card rounded-xl border-0 mb-6">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-fin-green" />
              <span className="text-sm">support@finmastery.com</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-fin-green" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Globe size={18} className="text-fin-green" />
              <span className="text-sm">www.finmastery.com</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-gray-800/50">
            <Button variant="ghost" className="h-10 w-10 rounded-full p-0 text-gray-400 hover:text-white">
              <Twitter size={18} />
            </Button>
            <Button variant="ghost" className="h-10 w-10 rounded-full p-0 text-gray-400 hover:text-white">
              <Facebook size={18} />
            </Button>
            <Button variant="ghost" className="h-10 w-10 rounded-full p-0 text-gray-400 hover:text-white">
              <Instagram size={18} />
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Footer */}
      <div className="flex justify-around text-xs text-gray-500 mt-8 pt-4 border-t border-gray-800/50">
        <AnimatedLink href="#" className="hover:text-gray-300">About</AnimatedLink>
        <AnimatedLink href="#" className="hover:text-gray-300">Privacy</AnimatedLink>
        <AnimatedLink href="#" className="hover:text-gray-300">Terms</AnimatedLink>
      </div>
      
      <div className="text-center text-xs text-gray-600 mt-4">
        <p>© 2023 FinMastery. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
