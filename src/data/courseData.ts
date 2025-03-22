
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface LessonContent {
  title: string;
  videoTitle?: string;
  description?: string;
  quiz?: QuizQuestion[];
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  content?: LessonContent;
}

export interface Module {
  id: number;
  title: string;
  overview?: string[];
  lessons: Lesson[];
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  instructorRole: string;
  instructorAvatar: string;
  rating: number;
  reviews: number;
  students: number;
  level: "beginner" | "intermediate" | "advanced";
  progress: number;
  description: string;
  icon: string;
  modules: Module[];
}

const courseData: Course[] = [
  {
    id: 1,
    title: "Crypto Basics",
    instructor: "Sarah Johnson",
    instructorRole: "Senior Crypto Analyst",
    instructorAvatar: "https://i.pravatar.cc/100?img=5",
    icon: "₿",
    rating: 5.0,
    reviews: 124,
    students: 1250,
    level: "beginner",
    progress: 25,
    description: "Learn the fundamentals of cryptocurrency and blockchain technology. This course covers everything from the basics of blockchain to setting up your first wallet and making transactions.",
    modules: [
      {
        id: 1,
        title: "Introduction to Cryptocurrency",
        overview: [
          "Definition of cryptocurrency",
          "Brief history (Bitcoin, Ethereum, altcoins)",
          "Importance of cryptocurrencies today"
        ],
        lessons: [
          { 
            id: 101, 
            title: "What is Cryptocurrency?", 
            duration: "12:20", 
            completed: true,
            content: {
              title: "What is Cryptocurrency? Explained for Beginners",
              quiz: [
                {
                  question: "What was the first cryptocurrency?",
                  options: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin"],
                  correctAnswerIndex: 0
                },
                {
                  question: "Cryptocurrencies rely primarily on which technology?",
                  options: ["Blockchain", "Internet Banking", "Artificial Intelligence", "Quantum Computing"],
                  correctAnswerIndex: 0
                }
              ]
            }
          },
          { 
            id: 102, 
            title: "History of Bitcoin", 
            duration: "15:45", 
            completed: true 
          },
          { 
            id: 103, 
            title: "How Blockchain Works", 
            duration: "18:30", 
            completed: false 
          },
        ]
      },
      {
        id: 2,
        title: "Understanding Blockchain Technology",
        overview: [
          "What is blockchain?",
          "How blockchain ensures security & transparency",
          "Real-world blockchain use cases"
        ],
        lessons: [
          { 
            id: 201, 
            title: "Blockchain Explained Simply", 
            duration: "14:15", 
            completed: false,
            content: {
              title: "Blockchain Explained Simply",
              quiz: [
                {
                  question: "Blockchain technology is best described as:",
                  options: ["A centralized ledger", "A decentralized ledger", "A cryptocurrency exchange", "A data storage company"],
                  correctAnswerIndex: 1
                },
                {
                  question: "What makes blockchain secure?",
                  options: ["Decentralization and cryptography", "Centralized control", "Password protection", "Physical storage"],
                  correctAnswerIndex: 0
                }
              ]
            }
          },
          { 
            id: 202, 
            title: "Securing Your Investments", 
            duration: "16:40", 
            completed: false 
          },
          { 
            id: 203, 
            title: "Making Your First Purchase", 
            duration: "20:10", 
            completed: false 
          },
        ]
      },
      {
        id: 3,
        title: "Wallets & Security",
        overview: [
          "Types of crypto wallets (hot wallets, cold wallets)",
          "How to secure your cryptocurrencies",
          "Protecting private keys"
        ],
        lessons: [
          { 
            id: 301, 
            title: "Cryptocurrency Wallets Explained", 
            duration: "13:50", 
            completed: false,
            content: {
              title: "Cryptocurrency Wallets Explained",
              quiz: [
                {
                  question: "A cold wallet is considered safer than a hot wallet because:",
                  options: ["It's stored offline", "It's easier to use", "It's cheaper", "It's stored online"],
                  correctAnswerIndex: 0
                },
                {
                  question: "Your private keys should be shared with:",
                  options: ["No one", "Your friends", "Crypto exchanges", "Anyone requesting them"],
                  correctAnswerIndex: 0
                }
              ]
            }
          },
          { 
            id: 302, 
            title: "Keeping Your Crypto Safe", 
            duration: "22:30", 
            completed: false 
          },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Blockchain 101",
    instructor: "Mark Williams",
    instructorRole: "Blockchain Engineer",
    instructorAvatar: "https://i.pravatar.cc/100?img=12",
    icon: "🧱",
    rating: 4.8,
    reviews: 95,
    students: 876,
    level: "beginner",
    progress: 0,
    description: "Understanding blockchain technology and its applications. This course covers the technical aspects of how blockchains work and their real-world use cases.",
    modules: [
      {
        id: 1,
        title: "How Blockchain Works",
        overview: [
          "Structure of blocks and chains",
          "Consensus mechanisms (Proof-of-Work vs Proof-of-Stake)",
          "Mining and validation processes"
        ],
        lessons: [
          { 
            id: 101, 
            title: "How Does Blockchain Work?", 
            duration: "16:20", 
            completed: false,
            content: {
              title: "How Does Blockchain Work?",
              quiz: [
                {
                  question: "Proof-of-Work (PoW) requires miners to:",
                  options: ["Solve complex mathematical problems", "Deposit cryptocurrencies as stakes", "Buy cryptocurrencies", "Create smart contracts"],
                  correctAnswerIndex: 0
                },
                {
                  question: "What connects blocks in a blockchain?",
                  options: ["Cryptographic hashes", "Physical chains", "Email addresses", "Websites"],
                  correctAnswerIndex: 0
                }
              ]
            }
          },
          { 
            id: 102, 
            title: "Consensus Mechanisms", 
            duration: "18:45", 
            completed: false 
          },
          { 
            id: 103, 
            title: "Mining and Validation", 
            duration: "20:30", 
            completed: false 
          },
        ]
      },
      {
        id: 2,
        title: "Smart Contracts",
        overview: [
          "Definition of smart contracts",
          "Benefits and uses of smart contracts",
          "Platforms supporting smart contracts (Ethereum, Solana)"
        ],
        lessons: [
          { 
            id: 201, 
            title: "Smart Contracts Explained", 
            duration: "15:45", 
            completed: false,
            content: {
              title: "Smart Contracts Explained (Ethereum Example)",
              quiz: [
                {
                  question: "Smart contracts automatically execute:",
                  options: ["When predefined conditions are met", "At random intervals", "When manually triggered only", "On government orders"],
                  correctAnswerIndex: 0
                },
                {
                  question: "Which blockchain was first popularized for smart contracts?",
                  options: ["Ethereum", "Bitcoin", "Dogecoin", "Ripple"],
                  correctAnswerIndex: 0
                }
              ]
            }
          },
          { 
            id: 202, 
            title: "Use Cases of Smart Contracts", 
            duration: "17:20", 
            completed: false 
          },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Trading and Investment Basics",
    instructor: "Alex Chen",
    instructorRole: "Crypto Trader",
    instructorAvatar: "https://i.pravatar.cc/100?img=9",
    icon: "📈",
    rating: 4.7,
    reviews: 78,
    students: 934,
    level: "intermediate",
    progress: 0,
    description: "Advanced patterns and techniques for crypto trading. Learn how to analyze markets, manage risk, and develop effective trading strategies.",
    modules: [
      {
        id: 1,
        title: "How to Buy Cryptocurrency",
        overview: [
          "Choosing a cryptocurrency exchange",
          "Steps for purchasing crypto",
          "Understanding fees and transaction times"
        ],
        lessons: [
          { 
            id: 101, 
            title: "How to Buy Bitcoin and Cryptocurrencies", 
            duration: "14:30", 
            completed: false,
            content: {
              title: "How to Buy Bitcoin and Cryptocurrencies Safely",
              quiz: [
                {
                  question: "The safest places to buy crypto are usually:",
                  options: ["Regulated exchanges", "Unknown websites", "Social media platforms", "Private individuals"],
                  correctAnswerIndex: 0
                },
                {
                  question: "What factor can influence the cost of purchasing cryptocurrency?",
                  options: ["Exchange fees", "Color of the website", "Your username", "Time of day"],
                  correctAnswerIndex: 0
                }
              ]
            }
          },
          { 
            id: 102, 
            title: "Navigating Exchanges", 
            duration: "16:15", 
            completed: false 
          },
        ]
      },
      {
        id: 2,
        title: "Basic Crypto Trading Strategies",
        overview: [
          "Introduction to basic trading concepts (buy and hold, dollar-cost averaging)",
          "Managing risks and expectations",
          "Avoiding common mistakes"
        ],
        lessons: [
          { 
            id: 201, 
            title: "Cryptocurrency Trading for Beginners", 
            duration: "19:25", 
            completed: false,
            content: {
              title: "Cryptocurrency Trading for Beginners",
              quiz: [
                {
                  question: "Dollar-cost averaging means:",
                  options: ["Investing equal amounts regularly", "Buying crypto once", "Selling everything monthly", "Investing in random cryptocurrencies"],
                  correctAnswerIndex: 0
                },
                {
                  question: "A common beginner mistake is:",
                  options: ["Panic selling", "Holding long-term", "Conducting research before investing", "Diversifying investments"],
                  correctAnswerIndex: 0
                }
              ]
            }
          },
          { 
            id: 202, 
            title: "Risk Management", 
            duration: "17:40", 
            completed: false 
          },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Crypto Glossary & Resources",
    instructor: "Jen Kumar",
    instructorRole: "Crypto Educator",
    instructorAvatar: "https://i.pravatar.cc/100?img=3",
    icon: "📚",
    rating: 4.9,
    reviews: 62,
    students: 750,
    level: "beginner",
    progress: 0,
    description: "Learn about essential crypto terms, concepts, and resources. This course will help you understand the terminology used in the crypto world.",
    modules: [
      {
        id: 1,
        title: "Essential Crypto Terminology",
        overview: [
          "Key crypto terms: Altcoin, FOMO, HODL, NFT, DeFi",
          "Explanation of important acronyms",
          "Resources for further learning"
        ],
        lessons: [
          { 
            id: 101, 
            title: "Crypto Terms You Need to Know", 
            duration: "15:40", 
            completed: false,
            content: {
              title: "Crypto Terms You Need to Know",
              quiz: [
                {
                  question: "\"HODL\" originally meant:",
                  options: ["Hold onto your crypto long-term", "Sell immediately", "Buying only Ethereum", "Trading frequently"],
                  correctAnswerIndex: 0
                },
                {
                  question: "NFT stands for:",
                  options: ["Non-Fungible Token", "New Finance Technology", "Normal Financial Transfer", "Non-Fundable Transfer"],
                  correctAnswerIndex: 0
                }
              ]
            }
          },
          { 
            id: 102, 
            title: "Understanding DeFi", 
            duration: "18:15", 
            completed: false 
          },
        ]
      }
    ]
  }
];

export default courseData;
