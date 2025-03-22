
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  ChevronRight, 
  Search, 
  Award, 
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Logo from '@/components/Logo';
import ProfileAvatar from '@/components/ProfileAvatar';
import AppFooter from '@/components/AppFooter';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock data
  const courses = [
    {
      id: 1,
      title: 'Crypto Basics',
      progress: 75,
      image: "₿",
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Blockchain 101',
      progress: 40,
      image: "🧱",
      level: 'Beginner'
    }
  ];
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-20 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[200px] h-[200px] bg-gradient-radial from-indigo-500/10 to-transparent opacity-20 blur-3xl -z-10" />
      
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8 animate-fade-in">
        <Logo />
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/search')}
            className="w-10 h-10 glass-card rounded-full flex items-center justify-center shadow-md transition-all hover:shadow-glow mr-1"
          >
            <Search size={18} className="text-gray-300" />
          </button>
          <ProfileAvatar />
        </div>
      </div>

      {/* Welcome Section */}
      <div className="mb-8 animate-fade-in">
        <h2 className="text-2xl font-bold mb-1">Welcome back, Alex!</h2>
        <p className="text-gray-400 text-sm">Continue your crypto journey today</p>
      </div>

      {/* Progress Overview */}
      <div className="mb-8 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">My Courses</h3>
          <button 
            onClick={() => navigate('/courses')}
            className="text-fin-green text-sm flex items-center hover:underline"
          >
            View all
            <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="space-y-3">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="glass-card rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-fin-green/30 transition-all"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <div className="w-12 h-12 rounded-lg glass flex items-center justify-center shadow-inner-glow text-fin-green text-xl font-bold">
                {course.image}
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{course.title}</h4>
                  <span className="text-xs bg-fin-green/10 text-fin-green rounded-full px-2 py-0.5">
                    {course.level}
                  </span>
                </div>
                <div className="mt-1">
                  <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden mt-2">
                    <div 
                      className="h-full bg-fin-green rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[10px] text-gray-400">{course.progress}% complete</span>
                    <span className="text-[10px] text-fin-green">Continue</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-8 animate-fade-in">
        <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <Card 
            className="glass-card rounded-xl border-0 cursor-pointer hover:border-fin-green/30 transition-all"
            onClick={() => navigate('/courses')}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center mb-3 shadow-inner-glow">
                <BookOpen size={18} className="text-fin-green" />
              </div>
              <h4 className="font-medium text-sm">All Courses</h4>
            </CardContent>
          </Card>
          
          <Card 
            className="glass-card rounded-xl border-0 cursor-pointer hover:border-fin-green/30 transition-all"
            onClick={() => navigate('/simulator')}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center mb-3 shadow-inner-glow">
                <TrendingUp size={18} className="text-fin-green" />
              </div>
              <h4 className="font-medium text-sm">Simulator</h4>
            </CardContent>
          </Card>
          
          <Card 
            className="glass-card rounded-xl border-0 cursor-pointer hover:border-fin-green/30 transition-all"
            onClick={() => navigate('/community')}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center mb-3 shadow-inner-glow">
                <Users size={18} className="text-fin-green" />
              </div>
              <h4 className="font-medium text-sm">Community</h4>
            </CardContent>
          </Card>
          
          <Card 
            className="glass-card rounded-xl border-0 cursor-pointer hover:border-fin-green/30 transition-all"
            onClick={() => navigate('/resources')}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center mb-3 shadow-inner-glow">
                <Search size={18} className="text-fin-green" />
              </div>
              <h4 className="font-medium text-sm">Resources</h4>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Market Overview */}
      <div className="mb-8 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Market Overview</h3>
          <button className="text-fin-green text-sm flex items-center hover:underline">
            More
            <ChevronRight size={16} />
          </button>
        </div>
        
        <Card className="glass-card rounded-xl border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4 border-b border-gray-800/50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="text-xl font-bold text-fin-green">₿</div>
                  <div>
                    <h4 className="font-medium">Bitcoin</h4>
                    <span className="text-xs text-gray-400">BTC</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-semibold">$54,245.84</span>
                  <span className="text-xs text-green-400">+5.32%</span>
                </div>
              </div>
              
              <div className="mt-3 h-24 flex items-end justify-between relative">
                <svg viewBox="0 0 200 60" className="w-full h-full text-fin-green/20">
                  <path
                    d="M0,60 L1,55 L2,50 L3,52 L4,45 L5,47 L6,44 L7,42 L8,40 L9,38 L10,35 L11,33 L12,35 L13,30 L14,32 L15,28 L16,30 L17,25 L18,28 L19,22 L20,25 L21,20 L22,18 L23,16 L24,18 L25,15 L26,14 L27,12 L28,10 L29,12 L30,8 L31,10 L32,6 L33,8 L34,4 L35,6 L36,2 L37,5 L38,1 L39,4 L40,2 L41,6 L42,8 L43,6 L44,10 L45,8 L46,12 L47,10 L48,15 L49,12 L50,18 L51,15 L52,20 L53,18 L54,22 L55,20 L56,25 L57,22 L58,28 L59,25 L60,30 L61,28 L62,32 L63,30 L64,35 L65,32 L66,38 L67,35 L68,40 L69,38 L70,42 L71,40 L72,44 L73,42 L74,47 L75,44 L76,49 L77,47 L78,52 L79,50 L80,55 L81,52 L82,58 L83,55 L84,59 L85,57 L86,54 L87,57 L88,52 L89,54 L90,50 L91,52 L92,48 L93,50 L94,45 L95,48 L96,42 L97,45 L98,40 L99,42 L100,38 L101,40 L102,36 L103,38 L104,34 L105,36 L106,30 L107,32 L108,28 L109,30 L110,25 L111,28 L112,22 L113,25 L114,20 L115,22 L116,18 L117,20 L118,15 L119,18 L120,12 L121,15 L122,10 L123,12 L124,8 L125,10 L126,5 L127,8 L128,4 L129,6 L130,2 L131,4 L132,6 L133,4 L134,8 L135,6 L136,12 L137,10 L138,15 L139,12 L140,18 L141,15 L142,22 L143,18 L144,25 L145,22 L146,28 L147,25 L148,32 L149,30 L150,35 L151,32 L152,38 L153,35 L154,42 L155,40 L156,45 L157,42 L158,48 L159,45 L160,52 L161,50 L162,55 L163,52 L164,58 L165,55 L166,59 L167,57 L168,54 L169,56 L170,52 L171,54 L172,50 L173,52 L174,47 L175,50 L176,44 L177,47 L178,42 L179,44 L180,38 L181,40 L182,35 L183,38 L184,32 L185,35 L186,28 L187,30 L188,25 L189,28 L190,22 L191,25 L192,18 L193,20 L194,15 L195,18 L196,12 L197,15 L198,8 L199,10 L200,5"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                  />
                  <path
                    d="M0,60 L1,55 L2,50 L3,52 L4,45 L5,47 L6,44 L7,42 L8,40 L9,38 L10,35 L11,33 L12,35 L13,30 L14,32 L15,28 L16,30 L17,25 L18,28 L19,22 L20,25 L21,20 L22,18 L23,16 L24,18 L25,15 L26,14 L27,12 L28,10 L29,12 L30,8 L31,10 L32,6 L33,8 L34,4 L35,6 L36,2 L37,5 L38,1 L39,4 L40,2 L41,6 L42,8 L43,6 L44,10 L45,8 L46,12 L47,10 L48,15 L49,12 L50,18 L51,15 L52,20 L53,18 L54,22 L55,20 L56,25 L57,22 L58,28 L59,25 L60,30 L61,28 L62,32 L63,30 L64,35 L65,32 L66,38 L67,35 L68,40 L69,38 L70,42 L71,40 L72,44 L73,42 L74,47 L75,44 L76,49 L77,47 L78,52 L79,50 L80,55 L81,52 L82,58 L83,55 L84,59 L85,57 L86,54 L87,57 L88,52 L89,54 L90,50 L91,52 L92,48 L93,50 L94,45 L95,48 L96,42 L97,45 L98,40 L99,42 L100,38 L101,40 L102,36 L103,38 L104,34 L105,36 L106,30 L107,32 L108,28 L109,30 L110,25 L111,28 L112,22 L113,25 L114,20 L115,22 L116,18 L117,20 L118,15 L119,18 L120,12 L121,15 L122,10 L123,12 L124,8 L125,10 L126,5 L127,8 L128,4 L129,6 L130,2 L131,4 L132,6 L133,4 L134,8 L135,6 L136,12 L137,10 L138,15 L139,12 L140,18 L141,15 L142,22 L143,18 L144,25 L145,22 L146,28 L147,25 L148,32 L149,30 L150,35 L151,32 L152,38 L153,35 L154,42 L155,40 L156,45 L157,42 L158,48 L159,45 L160,52 L161,50 L162,55 L163,52 L164,58 L165,55 L166,59 L167,57 L168,54 L169,56 L170,52 L171,54 L172,50 L173,52 L174,47 L175,50 L176,44 L177,47 L178,42 L179,44 L180,38 L181,40 L182,35 L183,38 L184,32 L185,35 L186,28 L187,30 L188,25 L189,28 L190,22 L191,25 L192,18 L193,20 L194,15 L195,18 L196,12 L197,15 L198,8 L199,10 L200,5 V60 H0 Z"
                    fill="url(#gradient)"
                    fillOpacity="0.2"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-gray-500 px-1">
                  <span>May 1</span>
                  <span>May 15</span>
                  <span>May 30</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between p-3">
              <div className="flex items-center gap-2 text-gray-400">
                <BarChart3 size={14} />
                <span className="text-xs">30d change</span>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                className="h-7 px-2 text-xs rounded-lg border-gray-700 hover:bg-fin-green hover:text-black hover:border-fin-green"
              >
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <div className="mb-10 animate-fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Achievements</h3>
          <button 
            onClick={() => navigate('/profile')}
            className="text-fin-green text-sm flex items-center hover:underline"
          >
            All Badges
            <ChevronRight size={16} />
          </button>
        </div>
        
        <Card className="glass-card rounded-xl border-0">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center shadow-inner-glow">
              <Award size={24} className="text-fin-green" />
            </div>
            
            <div className="flex-grow">
              <h4 className="font-semibold">First Step Badge</h4>
              <p className="text-xs text-gray-400">Completed your first lesson</p>
            </div>
            
            <Button 
              className="h-8 w-8 rounded-full p-0 bg-fin-green/10 hover:bg-fin-green hover:text-black text-fin-green" 
              size="sm"
              onClick={() => navigate('/profile')}
            >
              <ArrowRight size={14} />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer Navigation */}
      <AppFooter />
    </div>
  );
};

export default Dashboard;
