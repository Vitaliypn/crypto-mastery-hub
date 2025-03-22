
import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  Award, 
  Bell, 
  LogOut, 
  Shield, 
  Globe, 
  Moon, 
  ChevronRight,
  Camera,
  Calendar,
  Mail,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppFooter from '@/components/AppFooter';
import PageHeader from '@/components/PageHeader';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

const UserProfile = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.success(`${!darkMode ? 'Dark' : 'Light'} mode enabled`);
  };
  
  // Toggle notifications
  const toggleNotifications = () => {
    setNotifications(!notifications);
    toast.success(`Notifications ${!notifications ? 'enabled' : 'disabled'}`);
  };
  
  // Mock user data
  const user = {
    name: 'Alex Johnson',
    username: 'alexj',
    email: 'alex.johnson@example.com',
    joinDate: 'Joined May 2023',
    avatar: 'https://i.pravatar.cc/150?img=2',
    completedCourses: 3,
    totalCourses: 15,
    achievements: [
      {
        id: 1,
        title: 'First Step',
        description: 'Completed your first lesson',
        icon: '🥇',
        date: '3 weeks ago'
      },
      {
        id: 2,
        title: 'Quick Learner',
        description: 'Completed 5 lessons in one day',
        icon: '🚀',
        date: '2 weeks ago'
      },
      {
        id: 3,
        title: 'Consistency',
        description: 'Logged in for 7 consecutive days',
        icon: '📅',
        date: '1 week ago'
      },
      {
        id: 4,
        title: 'Quiz Master',
        description: 'Got 100% on 3 quizzes in a row',
        icon: '🧠',
        date: '5 days ago'
      }
    ],
    badges: [
      { id: 1, name: 'Beginner Trader', icon: '👶', acquired: true },
      { id: 2, name: 'Intermediate Trader', icon: '👨‍💼', acquired: true },
      { id: 3, name: 'Advanced Trader', icon: '🧙‍♂️', acquired: false },
      { id: 4, name: 'Crypto Enthusiast', icon: '₿', acquired: true },
      { id: 5, name: 'Market Analyst', icon: '📊', acquired: false },
      { id: 6, name: 'Diamond Hands', icon: '💎', acquired: false }
    ]
  };
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-20 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      
      <PageHeader title="Profile" />
      
      {/* User Profile Card */}
      <Card className="glass-card rounded-xl border-0 mb-6">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-20 h-20 rounded-full object-cover border-2 border-fin-green/20"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-fin-green/90 flex items-center justify-center text-black hover:bg-fin-green transition-colors">
                <Camera size={14} />
              </button>
            </div>
            
            <div className="flex-grow">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-gray-400">@{user.username}</p>
              <div className="flex items-center text-gray-400 text-sm mt-1">
                <Calendar size={14} className="mr-1" />
                <span>{user.joinDate}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Mail size={16} className="text-fin-green mr-2" />
                <span className="text-sm">{user.email}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 px-2 text-fin-green hover:text-fin-green hover:bg-fin-green/10"
              >
                Edit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Progress Overview */}
      <Card className="glass-card rounded-xl border-0 mb-6">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Learning Progress</h3>
          
          <div className="mb-2 flex justify-between items-center">
            <span className="text-sm text-gray-300">Course Completion</span>
            <span className="text-sm font-medium">{user.completedCourses}/{user.totalCourses}</span>
          </div>
          
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-fin-green rounded-full"
              style={{ width: `${(user.completedCourses / user.totalCourses) * 100}%` }}
            />
          </div>
          
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="glass rounded-lg p-2">
              <div className="text-lg font-bold text-fin-green mb-1">{user.completedCourses}</div>
              <span className="text-xs text-gray-400">Courses</span>
            </div>
            <div className="glass rounded-lg p-2">
              <div className="text-lg font-bold text-fin-green mb-1">{user.achievements.length}</div>
              <span className="text-xs text-gray-400">Achievements</span>
            </div>
            <div className="glass rounded-lg p-2">
              <div className="text-lg font-bold text-fin-green mb-1">
                {user.badges.filter(badge => badge.acquired).length}
              </div>
              <span className="text-xs text-gray-400">Badges</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="achievements" className="mb-8">
        <TabsList className="grid grid-cols-2 glass mb-4">
          <TabsTrigger value="achievements" className="flex gap-1 items-center">
            <Award size={14} />
            Achievements
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex gap-1 items-center">
            <Settings size={14} />
            Settings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="achievements" className="animate-fade-in space-y-6">
          {/* Recent Achievements */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Recent Achievements</h3>
            
            <div className="space-y-3">
              {user.achievements.map((achievement) => (
                <Card key={achievement.id} className="glass-card rounded-xl border-0">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl shadow-inner-glow">
                      {achievement.icon}
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-xs text-gray-400">{achievement.description}</p>
                      <span className="text-[10px] text-gray-500 mt-1">{achievement.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Badges */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Badges</h3>
            
            <Card className="glass-card rounded-xl border-0">
              <CardContent className="p-4">
                <div className="grid grid-cols-3 gap-4">
                  {user.badges.map((badge) => (
                    <div key={badge.id} className="flex flex-col items-center">
                      <div className={`w-14 h-14 rounded-full glass flex items-center justify-center text-2xl mb-2 ${
                        badge.acquired ? 'shadow-inner-glow' : 'opacity-40'
                      }`}>
                        {badge.icon}
                      </div>
                      <span className={`text-xs text-center ${
                        badge.acquired ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {badge.name}
                      </span>
                      {!badge.acquired && (
                        <span className="text-[10px] text-fin-green">Locked</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Button 
              variant="ghost" 
              className="w-full text-fin-green hover:text-fin-green hover:bg-fin-green/10 mt-4"
            >
              View All Badges
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="animate-fade-in space-y-4">
          {/* App Settings */}
          <Card className="glass-card rounded-xl border-0">
            <CardContent className="p-0">
              <h3 className="font-semibold p-4 border-b border-gray-800/50">App Settings</h3>
              
              <div className="flex items-center justify-between p-4 border-b border-gray-800/30">
                <div className="flex items-center gap-3">
                  <Moon size={18} className="text-fin-green" />
                  <span>Dark Mode</span>
                </div>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={toggleDarkMode}
                  className="data-[state=checked]:bg-fin-green"
                />
              </div>
              
              <div className="flex items-center justify-between p-4 border-b border-gray-800/30">
                <div className="flex items-center gap-3">
                  <Bell size={18} className="text-fin-green" />
                  <span>Notifications</span>
                </div>
                <Switch 
                  checked={notifications} 
                  onCheckedChange={toggleNotifications}
                  className="data-[state=checked]:bg-fin-green"
                />
              </div>
              
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-fin-green" />
                  <span>Language</span>
                </div>
                <Button 
                  variant="ghost" 
                  className="flex items-center text-gray-400"
                >
                  English
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Security Settings */}
          <Card className="glass-card rounded-xl border-0">
            <CardContent className="p-0">
              <h3 className="font-semibold p-4 border-b border-gray-800/50">Security</h3>
              
              <div className="p-4 border-b border-gray-800/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield size={18} className="text-fin-green" />
                  <span>Change Password</span>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </div>
              
              <div className="p-4 border-b border-gray-800/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User size={18} className="text-fin-green" />
                  <span>Two-Factor Authentication</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-7 px-3 rounded-lg text-xs border-fin-green/30 text-fin-green"
                >
                  Enable
                </Button>
              </div>
              
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle size={18} className="text-yellow-500" />
                  <span>Privacy Settings</span>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </div>
            </CardContent>
          </Card>
          
          {/* Account Actions */}
          <Card className="glass-card rounded-xl border-0 mt-6">
            <CardContent className="p-0">
              <div className="p-4 flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
                <span>Delete Account</span>
                <AlertTriangle size={16} className="text-red-400" />
              </div>
              
              <div className="p-4 border-t border-gray-800/30 flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
                <div className="flex items-center gap-2 text-red-400">
                  <LogOut size={18} />
                  <span>Logout</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-6 text-xs text-gray-500">
            <p>FinMastery v1.0.0</p>
            <p className="mt-1">© 2023 FinMastery. All rights reserved.</p>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Footer Navigation */}
      <AppFooter />
    </div>
  );
};

export default UserProfile;
