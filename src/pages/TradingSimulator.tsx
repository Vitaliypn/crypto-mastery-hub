
import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  RefreshCw, 
  DollarSign, 
  Search, 
  ArrowRight, 
  BarChart2,
  Info,
  Wallet,
  BarChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppFooter from '@/components/AppFooter';
import PageHeader from '@/components/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TradingSimulator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for portfolio
  const portfolio = {
    balance: 10000,
    totalValue: 12458.32,
    profit: 2458.32,
    profitPercentage: 24.58,
    assets: [
      {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        amount: 0.12,
        value: 6523.44,
        price: 54362.00,
        change: 5.32,
        icon: '₿',
        color: 'text-amber-500'
      },
      {
        id: 2,
        name: 'Ethereum',
        symbol: 'ETH',
        amount: 2.5,
        value: 4950.25,
        price: 1980.10,
        change: -2.15,
        icon: 'Ξ',
        color: 'text-blue-400'
      },
      {
        id: 3,
        name: 'Solana',
        symbol: 'SOL',
        amount: 15,
        value: 984.63,
        price: 65.64,
        change: 12.75,
        icon: '◎',
        color: 'text-purple-400'
      }
    ],
    transactions: [
      {
        id: 1,
        type: 'buy',
        asset: 'Bitcoin',
        symbol: 'BTC',
        amount: 0.05,
        price: 53100.00,
        value: 2655.00,
        date: '2 days ago',
        icon: '₿',
        color: 'text-amber-500'
      },
      {
        id: 2,
        type: 'buy',
        asset: 'Ethereum',
        symbol: 'ETH',
        amount: 1.2,
        price: 1950.25,
        value: 2340.30,
        date: '5 days ago',
        icon: 'Ξ',
        color: 'text-blue-400'
      },
      {
        id: 3,
        type: 'sell',
        asset: 'Solana',
        symbol: 'SOL',
        amount: 5,
        price: 60.50,
        value: 302.50,
        date: '1 week ago',
        icon: '◎',
        color: 'text-purple-400'
      }
    ],
    watchlist: [
      {
        id: 4,
        name: 'Cardano',
        symbol: 'ADA',
        price: 1.25,
        change: 3.45,
        icon: '₳',
        color: 'text-blue-500'
      },
      {
        id: 5,
        name: 'Polkadot',
        symbol: 'DOT',
        price: 22.75,
        change: -1.20,
        icon: '●',
        color: 'text-pink-500'
      }
    ]
  };
  
  // Available cryptocurrencies for trading
  const cryptos = [
    ...portfolio.assets,
    ...portfolio.watchlist,
    {
      id: 6,
      name: 'Ripple',
      symbol: 'XRP',
      price: 0.85,
      change: 1.23,
      icon: '✕',
      color: 'text-blue-600'
    },
    {
      id: 7,
      name: 'Litecoin',
      symbol: 'LTC',
      price: 130.45,
      change: -0.65,
      icon: 'Ł',
      color: 'text-gray-400'
    }
  ];
  
  // Filter cryptos based on search
  const filteredCryptos = searchQuery.trim() === '' 
    ? cryptos 
    : cryptos.filter(crypto => 
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-20 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[200px] h-[200px] bg-gradient-radial from-indigo-500/10 to-transparent opacity-20 blur-3xl -z-10" />
      
      <PageHeader title="Trading Simulator" />
      
      {/* Portfolio Value */}
      <Card className="glass-card rounded-xl overflow-hidden border-0 mb-6">
        <CardContent className="p-0">
          <div className="p-4 text-center">
            <h3 className="text-sm text-gray-400 mb-1">Total Portfolio Value</h3>
            <div className="text-3xl font-bold mb-1">${portfolio.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div className={`flex items-center justify-center text-sm ${portfolio.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {portfolio.profit >= 0 ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
              ${Math.abs(portfolio.profit).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              ({portfolio.profitPercentage}%)
            </div>
          </div>
          
          <div className="h-24 bg-fin-green/10 flex items-end relative">
            <div className="absolute inset-0">
              <svg viewBox="0 0 200 60" className="w-full h-full text-fin-green">
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
            </div>
          </div>
          
          <div className="grid grid-cols-2 p-3 border-t border-gray-800/50">
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400 mb-1">Cash Balance</span>
              <div className="flex items-center">
                <DollarSign size={16} className="text-fin-green mr-1" />
                <span className="font-semibold">${portfolio.balance.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex flex-col items-center border-l border-gray-800/50">
              <span className="text-xs text-gray-400 mb-1">Profit/Loss</span>
              <div className={`flex items-center ${portfolio.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {portfolio.profit >= 0 ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                <span className="font-semibold">${Math.abs(portfolio.profit).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="portfolio" className="mb-8">
        <TabsList className="grid grid-cols-3 glass mb-4">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="trade">Trade</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="portfolio" className="animate-fade-in space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Your Assets</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 text-fin-green hover:text-fin-green hover:bg-fin-green/10"
            >
              <RefreshCw size={14} className="mr-1" />
              Refresh
            </Button>
          </div>
          
          {portfolio.assets.map((asset) => (
            <Card key={asset.id} className="glass-card rounded-xl border-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full glass flex items-center justify-center ${asset.color}`}>
                    <span className="text-lg font-bold">{asset.icon}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold">{asset.name}</h4>
                        <span className="text-xs text-gray-400">{asset.amount} {asset.symbol}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${asset.value.toLocaleString()}</div>
                        <div className={`text-xs ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {asset.change >= 0 ? '+' : ''}{asset.change}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-4 pt-3 border-t border-gray-800/50">
                  <div className="text-xs">
                    <span className="text-gray-400">Price: </span>
                    <span>${asset.price.toLocaleString()}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="h-7 px-3 rounded-lg text-xs border-gray-700 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30"
                    >
                      Sell
                    </Button>
                    <Button 
                      size="sm" 
                      className="h-7 px-3 rounded-lg text-xs bg-fin-green/10 text-fin-green hover:bg-fin-green hover:text-black"
                    >
                      Buy
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Watchlist</h3>
            {portfolio.watchlist.map((crypto) => (
              <div 
                key={crypto.id}
                className="flex items-center justify-between py-3 border-b border-gray-800/30 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full glass flex items-center justify-center ${crypto.color}`}>
                    <span className="text-sm font-bold">{crypto.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{crypto.name}</h4>
                    <span className="text-xs text-gray-400">{crypto.symbol}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${crypto.price.toLocaleString()}</div>
                  <div className={`text-xs ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="trade" className="animate-fade-in">
          <div className="relative mb-4">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search cryptocurrencies..."
              className="glass-card pl-10 border-gray-700 focus:border-fin-green"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center text-xs text-gray-400 px-2">
              <span>Asset</span>
              <span>Price</span>
            </div>
            
            {filteredCryptos.length === 0 ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-fin-green/10 flex items-center justify-center">
                  <Search size={20} className="text-fin-green" />
                </div>
                <p className="text-sm text-gray-400">No cryptocurrencies found</p>
              </div>
            ) : (
              filteredCryptos.map((crypto) => (
                <div 
                  key={crypto.id}
                  className="glass-card rounded-xl p-3 flex items-center justify-between cursor-pointer hover:border-fin-green/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full glass flex items-center justify-center ${crypto.color}`}>
                      <span className="text-lg font-bold">{crypto.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{crypto.name}</h4>
                      <span className="text-xs text-gray-400">{crypto.symbol}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${crypto.price.toLocaleString()}</div>
                    <div className={`text-xs ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <Card className="glass-card rounded-xl border-0 mb-4">
            <CardContent className="p-4 text-center">
              <div className="flex justify-around mb-4">
                <Button className="w-24 bg-fin-green text-black hover:bg-fin-green-dark rounded-lg">
                  Buy
                </Button>
                <Button variant="outline" className="w-24 text-red-400 border-red-500/30 hover:bg-red-500/10 hover:text-red-400 rounded-lg">
                  Sell
                </Button>
              </div>
              
              <p className="text-xs text-gray-400 mb-2">Select a cryptocurrency above to start trading</p>
              
              <div className="flex items-center justify-center gap-1 text-fin-green">
                <Info size={14} />
                <span className="text-xs">This is a simulation using virtual money</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Transaction History</h3>
            <Button 
              size="sm" 
              variant="outline" 
              className="h-8 px-3 rounded-lg text-xs border-gray-700 hover:border-fin-green/30"
            >
              <Wallet size={14} className="mr-1" />
              Export
            </Button>
          </div>
          
          <Card className="glass-card rounded-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              {portfolio.transactions.map((transaction, index) => (
                <div 
                  key={transaction.id}
                  className={`p-4 ${index < portfolio.transactions.length - 1 ? 'border-b border-gray-800/30' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full glass flex items-center justify-center ${transaction.color}`}>
                      <span className="text-lg font-bold">{transaction.icon}</span>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-semibold flex items-center">
                            <span className={`text-xs px-2 py-0.5 rounded-full mr-2 ${
                              transaction.type === 'buy' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                            }`}>
                              {transaction.type.toUpperCase()}
                            </span>
                            {transaction.asset}
                          </h4>
                          <span className="text-xs text-gray-400">{transaction.date}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${transaction.value.toLocaleString()}</div>
                          <span className="text-xs text-gray-400">
                            {transaction.amount} {transaction.symbol} @ ${transaction.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center p-3 border-t border-gray-800/50">
                <Button 
                  variant="ghost" 
                  className="text-fin-green hover:text-fin-green hover:bg-fin-green/10 text-sm"
                >
                  View All Transactions
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Trading Tips */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Trading Tips</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-fin-green hover:text-fin-green hover:bg-fin-green/10"
          >
            <BarChart size={14} className="mr-1" />
            Charts
          </Button>
        </div>
        
        <Card className="glass-card rounded-xl border-0 mb-3">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center">
              <BarChart2 size={18} className="text-fin-green mr-2" />
              Understanding Market Trends
            </h4>
            <p className="text-sm text-gray-300">
              Learn to identify bullish and bearish patterns in the market to make informed trading decisions.
            </p>
            <Button 
              variant="link" 
              className="text-fin-green p-0 h-auto mt-2 text-sm"
            >
              Read more
              <ArrowRight size={14} className="ml-1" />
            </Button>
          </CardContent>
        </Card>
        
        <Card className="glass-card rounded-xl border-0">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2 flex items-center">
              <Info size={18} className="text-fin-green mr-2" />
              Risk Management Strategies
            </h4>
            <p className="text-sm text-gray-300">
              Never invest more than you can afford to lose. Use stop-loss orders to limit potential losses.
            </p>
            <Button 
              variant="link" 
              className="text-fin-green p-0 h-auto mt-2 text-sm"
            >
              Read more
              <ArrowRight size={14} className="ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Footer Navigation */}
      <AppFooter />
    </div>
  );
};

export default TradingSimulator;
