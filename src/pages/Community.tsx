
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  Clock, 
  ThumbsUp, 
  MessageCircle, 
  Plus, 
  Search,
  ChevronRight,
  Trophy,
  Star,
  Share2,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppFooter from '@/components/AppFooter';
import PageHeader from '@/components/PageHeader';

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for discussions
  const discussions = [
    {
      id: 1,
      title: 'How to analyze cryptocurrency market trends?',
      author: 'Sarah Johnson',
      authorAvatar: 'https://i.pravatar.cc/100?img=5',
      createdAt: '2 hours ago',
      tags: ['Beginner', 'Analysis'],
      replies: 15,
      likes: 32,
      preview: 'I\'ve been trying to understand how to analyze market trends effectively. What indicators should I be looking at?'
    },
    {
      id: 2,
      title: 'Best crypto wallets for beginners?',
      author: 'Michael Chen',
      authorAvatar: 'https://i.pravatar.cc/100?img=12',
      createdAt: '5 hours ago',
      tags: ['Wallets', 'Security'],
      replies: 23,
      likes: 41,
      preview: 'I\'m new to crypto and looking for recommendations on secure and user-friendly wallets.'
    },
    {
      id: 3,
      title: 'DeFi yield farming strategies - June 2023',
      author: 'Alex Rodriguez',
      authorAvatar: 'https://i.pravatar.cc/100?img=3',
      createdAt: '1 day ago',
      tags: ['DeFi', 'Advanced'],
      replies: 7,
      likes: 19,
      preview: 'Let\'s discuss current yield farming strategies that are working well in the current market.'
    }
  ];
  
  // Mock data for leaderboard
  const leaderboard = [
    {
      id: 1,
      name: 'Thomas Lee',
      username: 'cryptomaster',
      avatar: 'https://i.pravatar.cc/100?img=1',
      points: 9850,
      rank: 1,
      badges: 15,
      streak: '30 days'
    },
    {
      id: 2,
      name: 'Sophia Chen',
      username: 'sophia_invest',
      avatar: 'https://i.pravatar.cc/100?img=5',
      points: 8720,
      rank: 2,
      badges: 12,
      streak: '25 days'
    },
    {
      id: 3,
      name: 'James Wilson',
      username: 'jwilson',
      avatar: 'https://i.pravatar.cc/100?img=3',
      points: 7650,
      rank: 3,
      badges: 10,
      streak: '14 days'
    },
    {
      id: 4,
      name: 'Elena Martinez',
      username: 'elenabtc',
      avatar: 'https://i.pravatar.cc/100?img=4',
      points: 6540,
      rank: 4,
      badges: 8,
      streak: '21 days'
    },
    {
      id: 5,
      name: 'You',
      username: 'yourname',
      avatar: 'https://i.pravatar.cc/100?img=2', // This would normally be the user's avatar
      points: 2340,
      rank: 28,
      badges: 5,
      streak: '7 days',
      isCurrentUser: true
    }
  ];
  
  // Filter discussions based on search
  const filteredDiscussions = searchQuery.trim() === '' 
    ? discussions 
    : discussions.filter(discussion => 
        discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        discussion.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-20 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[200px] h-[200px] bg-gradient-radial from-indigo-500/10 to-transparent opacity-20 blur-3xl -z-10" />
      
      <PageHeader title="Community" />
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="discussions" className="mb-8">
        <TabsList className="grid grid-cols-2 glass mb-4">
          <TabsTrigger value="discussions" className="flex gap-1 items-center">
            <MessageSquare size={14} />
            Discussions
          </TabsTrigger>
          <TabsTrigger value="leaderboard" className="flex gap-1 items-center">
            <Trophy size={14} />
            Leaderboard
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="discussions" className="animate-fade-in">
          {/* Search & New Post */}
          <div className="flex gap-2 mb-4">
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search discussions..."
                className="glass-card pl-10 border-gray-700 focus:border-fin-green"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-fin-green hover:bg-fin-green-dark text-black rounded-lg">
              <Plus size={18} />
            </Button>
          </div>
          
          {/* Discussion Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-fin-green/20">
            <Button variant="outline" className="glass rounded-full border-fin-green/30 text-fin-green text-xs">
              All
            </Button>
            <Button variant="outline" className="glass rounded-full border-gray-700 hover:border-fin-green/30 text-xs">
              Beginner
            </Button>
            <Button variant="outline" className="glass rounded-full border-gray-700 hover:border-fin-green/30 text-xs">
              Trading
            </Button>
            <Button variant="outline" className="glass rounded-full border-gray-700 hover:border-fin-green/30 text-xs">
              Technical
            </Button>
            <Button variant="outline" className="glass rounded-full border-gray-700 hover:border-fin-green/30 text-xs">
              News
            </Button>
            <Button variant="outline" className="glass rounded-full border-gray-700 hover:border-fin-green/30 text-xs">
              DeFi
            </Button>
          </div>
          
          {/* Discussion List */}
          <div className="space-y-4">
            {filteredDiscussions.length === 0 ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-fin-green/10 flex items-center justify-center">
                  <MessageSquare size={24} className="text-fin-green" />
                </div>
                <h3 className="font-semibold mb-1">No discussions found</h3>
                <p className="text-sm text-gray-400">Try adjusting your search or start a new discussion</p>
                <Button className="mt-4 bg-fin-green hover:bg-fin-green-dark text-black">
                  <Plus size={16} className="mr-1" />
                  New Discussion
                </Button>
              </div>
            ) : (
              filteredDiscussions.map((discussion) => (
                <Card 
                  key={discussion.id} 
                  className="glass-card rounded-xl border-0 hover:border-fin-green/30 transition-all cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <img 
                        src={discussion.authorAvatar} 
                        alt={discussion.author} 
                        className="w-10 h-10 rounded-full object-cover border border-gray-700"
                      />
                      
                      <div className="flex-grow">
                        <h3 className="font-semibold mb-1">{discussion.title}</h3>
                        
                        <div className="flex flex-wrap gap-2 mb-2">
                          {discussion.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="text-[10px] bg-fin-green/10 text-fin-green rounded-full px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-sm text-gray-300 mb-3 line-clamp-2">{discussion.preview}</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <span>{discussion.author}</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <Clock size={12} className="mr-1" />
                              {discussion.createdAt}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center text-gray-400">
                              <ThumbsUp size={14} className="mr-1" />
                              <span className="text-xs">{discussion.likes}</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                              <MessageCircle size={14} className="mr-1" />
                              <span className="text-xs">{discussion.replies}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
            
            {filteredDiscussions.length > 0 && (
              <Button 
                variant="ghost" 
                className="w-full text-fin-green hover:text-fin-green hover:bg-fin-green/10"
              >
                View All Discussions
                <ChevronRight size={16} className="ml-1" />
              </Button>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="leaderboard" className="animate-fade-in">
          {/* Leaderboard Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Trophy size={18} className="text-yellow-500 mr-2" />
              Top Traders
            </h3>
            <Button 
              variant="outline" 
              size="sm" 
              className="h-8 px-3 rounded-lg text-xs border-gray-700 hover:border-fin-green/30"
            >
              <Filter size={14} className="mr-1" />
              Filter
            </Button>
          </div>
          
          {/* Leaderboard Podium - Top 3 */}
          <div className="flex justify-between items-end mb-6">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
              <div className="relative mb-1">
                <img 
                  src={leaderboard[1].avatar} 
                  alt={leaderboard[1].name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-500"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
                  2
                </div>
              </div>
              <span className="text-sm font-medium truncate max-w-[80px]">{leaderboard[1].name}</span>
              <span className="text-xs text-gray-400">{leaderboard[1].points.toLocaleString()} pts</span>
            </div>
            
            {/* 1st Place */}
            <div className="flex flex-col items-center transform scale-110">
              <div className="w-7 h-7 bg-yellow-500/30 rounded-full flex items-center justify-center mb-1">
                <Trophy size={14} className="text-yellow-500" />
              </div>
              <div className="relative mb-1">
                <img 
                  src={leaderboard[0].avatar} 
                  alt={leaderboard[0].name} 
                  className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500 shadow-glow"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center text-xs font-bold text-black">
                  1
                </div>
              </div>
              <span className="text-base font-semibold truncate max-w-[90px]">{leaderboard[0].name}</span>
              <span className="text-xs text-gray-300">{leaderboard[0].points.toLocaleString()} pts</span>
            </div>
            
            {/* 3rd Place */}
            <div className="flex flex-col items-center">
              <div className="relative mb-1">
                <img 
                  src={leaderboard[2].avatar} 
                  alt={leaderboard[2].name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-700"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-700/80 flex items-center justify-center text-xs font-bold">
                  3
                </div>
              </div>
              <span className="text-sm font-medium truncate max-w-[80px]">{leaderboard[2].name}</span>
              <span className="text-xs text-gray-400">{leaderboard[2].points.toLocaleString()} pts</span>
            </div>
          </div>
          
          {/* Leaderboard List */}
          <Card className="glass-card rounded-xl border-0 overflow-hidden mb-4">
            <CardContent className="p-0">
              {leaderboard.slice(3).map((user) => (
                <div 
                  key={user.id}
                  className={`p-3 flex items-center gap-3 ${
                    user.isCurrentUser ? 'bg-fin-green/5 border-l-2 border-fin-green' : 'border-b border-gray-800/30 last:border-0'
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-xs">
                    {user.rank}
                  </div>
                  
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className={`w-10 h-10 rounded-full object-cover ${
                      user.isCurrentUser ? 'border-2 border-fin-green' : 'border border-gray-700'
                    }`}
                  />
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium flex items-center">
                          {user.name}
                          {user.isCurrentUser && (
                            <span className="text-[10px] bg-fin-green/10 text-fin-green rounded-full px-2 py-0.5 ml-2">
                              You
                            </span>
                          )}
                        </h4>
                        <span className="text-xs text-gray-400">@{user.username}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{user.points.toLocaleString()}</div>
                        <div className="flex items-center text-xs text-gray-400">
                          <Star size={10} className="text-fin-green mr-1" />
                          {user.badges} badges
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Your Ranking */}
          <h3 className="text-lg font-semibold mb-3">Your Stats</h3>
          <Card className="glass-card rounded-xl border-0 overflow-hidden mb-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-3xl font-bold text-fin-green shadow-inner-glow">
                  {leaderboard.find(user => user.isCurrentUser)?.rank}
                </div>
                
                <div className="flex-grow">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm text-gray-400">Global Rank</h4>
                      <p className="font-semibold">#{leaderboard.find(user => user.isCurrentUser)?.rank}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">Points</h4>
                      <p className="font-semibold">{leaderboard.find(user => user.isCurrentUser)?.points.toLocaleString()}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">Badges</h4>
                      <p className="font-semibold">{leaderboard.find(user => user.isCurrentUser)?.badges}</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400">Streak</h4>
                      <p className="font-semibold">{leaderboard.find(user => user.isCurrentUser)?.streak}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Invite Friends */}
          <Card className="glass-card rounded-xl border-0 overflow-hidden">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold flex items-center">
                  <Users size={16} className="text-fin-green mr-2" />
                  Invite Friends
                </h4>
                <p className="text-xs text-gray-400 mt-1">Earn 500 points for each referral</p>
              </div>
              <Button className="h-9 bg-fin-green/10 text-fin-green hover:bg-fin-green hover:text-black rounded-lg">
                <Share2 size={14} className="mr-1" />
                Share
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Footer Navigation */}
      <AppFooter />
    </div>
  );
};

export default Community;
