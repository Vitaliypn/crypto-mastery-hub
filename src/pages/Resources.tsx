
import React, { useState } from 'react';
import { 
  Search, 
  Book, 
  HelpCircle, 
  ChevronRight, 
  ChevronDown,
  ExternalLink,
  Calculator,
  Download,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppFooter from '@/components/AppFooter';
import PageHeader from '@/components/PageHeader';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedGlossaryItems, setExpandedGlossaryItems] = useState<number[]>([]);
  const [expandedFaqItems, setExpandedFaqItems] = useState<number[]>([]);
  
  // Toggle glossary item expansion
  const toggleGlossaryItem = (id: number) => {
    if (expandedGlossaryItems.includes(id)) {
      setExpandedGlossaryItems(expandedGlossaryItems.filter(item => item !== id));
    } else {
      setExpandedGlossaryItems([...expandedGlossaryItems, id]);
    }
  };
  
  // Toggle FAQ item expansion
  const toggleFaqItem = (id: number) => {
    if (expandedFaqItems.includes(id)) {
      setExpandedFaqItems(expandedFaqItems.filter(item => item !== id));
    } else {
      setExpandedFaqItems([...expandedFaqItems, id]);
    }
  };
  
  // Mock glossary data
  const glossaryItems = [
    {
      id: 1,
      term: 'Blockchain',
      definition: 'A distributed digital ledger that records transactions across many computers in a way that ensures security, transparency, and decentralization.',
      category: 'technology'
    },
    {
      id: 2,
      term: 'Bitcoin',
      definition: 'The first and most well-known cryptocurrency, created in 2009 by an anonymous person or group known as Satoshi Nakamoto.',
      category: 'cryptocurrency'
    },
    {
      id: 3,
      term: 'DeFi (Decentralized Finance)',
      definition: 'Financial services and applications built on blockchain technology that operate without centralized intermediaries like banks.',
      category: 'finance'
    },
    {
      id: 4,
      term: 'Smart Contract',
      definition: 'Self-executing contracts with the terms directly written into code, automatically enforcing agreements when predetermined conditions are met.',
      category: 'technology'
    },
    {
      id: 5,
      term: 'NFT (Non-Fungible Token)',
      definition: 'A unique digital asset that represents ownership of a specific item or piece of content, such as art, music, or collectibles.',
      category: 'digital assets'
    },
    {
      id: 6,
      term: 'Yield Farming',
      definition: 'The practice of staking or lending crypto assets to generate returns or rewards in the form of additional cryptocurrency.',
      category: 'finance'
    }
  ];
  
  // Mock FAQ data
  const faqItems = [
    {
      id: 1,
      question: 'How do I start investing in cryptocurrency?',
      answer: 'To start investing in cryptocurrency, you should: 1) Research and understand the basics, 2) Choose a reputable exchange, 3) Create and secure your wallet, 4) Start with small investments, and 5) Diversify your portfolio.',
      category: 'beginner'
    },
    {
      id: 2,
      question: 'What is the difference between a hot wallet and a cold wallet?',
      answer: 'A hot wallet is connected to the internet (like mobile and web wallets) making it more convenient but less secure. A cold wallet is kept offline (like hardware wallets and paper wallets) offering greater security but less convenience for frequent transactions.',
      category: 'security'
    },
    {
      id: 3,
      question: 'How are cryptocurrency transactions taxed?',
      answer: 'Cryptocurrency taxation varies by country, but generally, cryptocurrencies are treated as property for tax purposes. This means you may be subject to capital gains tax when you sell, trade, or use cryptocurrency. It\'s important to keep detailed records of all transactions and consult with a tax professional.',
      category: 'finance'
    },
    {
      id: 4,
      question: 'What is a blockchain fork?',
      answer: 'A blockchain fork is a split in the blockchain network. Soft forks are backward-compatible updates to the protocol. Hard forks are more significant changes that create a permanent divergence, resulting in two separate blockchains with a shared history up to the fork point.',
      category: 'technical'
    }
  ];
  
  // Mock tools data
  const tools = [
    {
      id: 1,
      title: 'Crypto Calculator',
      description: 'Convert between different cryptocurrencies and fiat currencies',
      icon: Calculator
    },
    {
      id: 2,
      title: 'Market Calendar',
      description: 'Track important events and announcements in the crypto space',
      icon: Calendar
    },
    {
      id: 3,
      title: 'Tax Reporting Tool',
      description: 'Generate tax reports for your cryptocurrency transactions',
      icon: Download
    }
  ];
  
  // Filter glossary items based on search
  const filteredGlossaryItems = searchQuery.trim() === '' 
    ? glossaryItems 
    : glossaryItems.filter(item => 
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.definition.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
  // Filter FAQ items based on search
  const filteredFaqItems = searchQuery.trim() === '' 
    ? faqItems 
    : faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-20 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      
      <PageHeader title="Resources" />
      
      {/* Search */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search resources..."
          className="glass-card pl-10 border-gray-700 focus:border-fin-green"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Card 
          className="glass-card rounded-xl border-0 cursor-pointer hover:border-fin-green/30 transition-all"
        >
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-3 shadow-inner-glow">
              <Book size={20} className="text-fin-green" />
            </div>
            <h4 className="font-medium text-sm">Glossary</h4>
            <p className="text-xs text-gray-400 mt-1">Crypto terminology</p>
          </CardContent>
        </Card>
        
        <Card 
          className="glass-card rounded-xl border-0 cursor-pointer hover:border-fin-green/30 transition-all"
        >
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-3 shadow-inner-glow">
              <HelpCircle size={20} className="text-fin-green" />
            </div>
            <h4 className="font-medium text-sm">FAQs</h4>
            <p className="text-xs text-gray-400 mt-1">Common questions</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="glossary" className="mb-8">
        <TabsList className="grid grid-cols-3 glass mb-4">
          <TabsTrigger value="glossary">Glossary</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>
        
        <TabsContent value="glossary" className="animate-fade-in">
          <div className="space-y-3">
            {filteredGlossaryItems.length === 0 ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-fin-green/10 flex items-center justify-center">
                  <Book size={24} className="text-fin-green" />
                </div>
                <h3 className="font-semibold mb-1">No terms found</h3>
                <p className="text-sm text-gray-400">Try searching for a different term</p>
              </div>
            ) : (
              filteredGlossaryItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="glass-card rounded-xl border-0 overflow-hidden"
                >
                  <div 
                    className="p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleGlossaryItem(item.id)}
                  >
                    <div>
                      <h3 className="font-semibold">{item.term}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-fin-green/10 text-fin-green">
                        {item.category}
                      </span>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={`text-gray-400 transition-transform ${
                        expandedGlossaryItems.includes(item.id) ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  {expandedGlossaryItems.includes(item.id) && (
                    <div className="px-4 pb-4 pt-1 border-t border-gray-800/30">
                      <p className="text-sm text-gray-300">{item.definition}</p>
                    </div>
                  )}
                </Card>
              ))
            )}
          </div>
          
          {searchQuery.trim() === '' && filteredGlossaryItems.length > 0 && (
            <Button 
              variant="ghost" 
              className="w-full text-fin-green hover:text-fin-green hover:bg-fin-green/10 mt-4"
            >
              View All Terms
              <ChevronRight size={16} className="ml-1" />
            </Button>
          )}
        </TabsContent>
        
        <TabsContent value="faqs" className="animate-fade-in">
          <div className="space-y-3">
            {filteredFaqItems.length === 0 ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-fin-green/10 flex items-center justify-center">
                  <HelpCircle size={24} className="text-fin-green" />
                </div>
                <h3 className="font-semibold mb-1">No FAQs found</h3>
                <p className="text-sm text-gray-400">Try searching for a different question</p>
              </div>
            ) : (
              filteredFaqItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="glass-card rounded-xl border-0 overflow-hidden"
                >
                  <div 
                    className="p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFaqItem(item.id)}
                  >
                    <h3 className="font-semibold pr-6">{item.question}</h3>
                    <ChevronDown 
                      size={20} 
                      className={`text-gray-400 transition-transform flex-shrink-0 ${
                        expandedFaqItems.includes(item.id) ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  {expandedFaqItems.includes(item.id) && (
                    <div className="px-4 pb-4 pt-1 border-t border-gray-800/30">
                      <p className="text-sm text-gray-300">{item.answer}</p>
                      <div className="flex items-center mt-3 text-xs text-gray-400">
                        <span className="bg-gray-700/50 rounded-full px-2 py-0.5">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  )}
                </Card>
              ))
            )}
          </div>
          
          {searchQuery.trim() === '' && filteredFaqItems.length > 0 && (
            <Button 
              variant="ghost" 
              className="w-full text-fin-green hover:text-fin-green hover:bg-fin-green/10 mt-4"
            >
              View All FAQs
              <ChevronRight size={16} className="ml-1" />
            </Button>
          )}
        </TabsContent>
        
        <TabsContent value="tools" className="animate-fade-in">
          <div className="space-y-4">
            {tools.map((tool) => (
              <Card 
                key={tool.id} 
                className="glass-card rounded-xl border-0 hover:border-fin-green/30 transition-all cursor-pointer"
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg glass flex items-center justify-center shadow-inner-glow">
                    <tool.icon size={20} className="text-fin-green" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-semibold">{tool.title}</h3>
                    <p className="text-sm text-gray-400">{tool.description}</p>
                  </div>
                  
                  <ChevronRight size={20} className="text-fin-green" />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h3 className="font-semibold mt-6 mb-3">External Resources</h3>
          <Card className="glass-card rounded-xl border-0">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">CoinMarketCap</h4>
                    <p className="text-xs text-gray-400">Cryptocurrency market data</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-fin-green hover:text-fin-green hover:bg-fin-green/10"
                  >
                    <ExternalLink size={16} />
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">CoinDesk</h4>
                    <p className="text-xs text-gray-400">Cryptocurrency news and insights</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-fin-green hover:text-fin-green hover:bg-fin-green/10"
                  >
                    <ExternalLink size={16} />
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">TradingView</h4>
                    <p className="text-xs text-gray-400">Advanced charting and analysis</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-fin-green hover:text-fin-green hover:bg-fin-green/10"
                  >
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <Card className="glass-card rounded-xl border-0 border-l-4 border-l-yellow-500">
              <CardContent className="p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <HelpCircle size={16} className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-medium">Disclaimer</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    The information provided is for educational purposes only and should not be considered financial advice.
                    Always conduct your own research before making investment decisions.
                  </p>
                  <Button 
                    variant="link" 
                    className="h-auto p-0 text-xs text-fin-green mt-2 flex items-center"
                  >
                    Learn more
                    <ArrowRight size={12} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Footer Navigation */}
      <AppFooter />
    </div>
  );
};

export default Resources;
