
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  PlayCircle, 
  PauseCircle,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ThumbsUp,
  Download,
  ListChecks,
  Flag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BackButtonHeader from '@/components/BackButtonHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LessonPage = () => {
  const { courseId, lessonId } = useParams<{ courseId: string, lessonId: string }>();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  
  // Mock data for this lesson
  const lesson = {
    id: Number(lessonId),
    title: 'How Blockchain Works',
    duration: '18:30',
    description: 'This lesson explores the fundamental concepts of blockchain technology, including distributed ledgers, consensus mechanisms, and how blocks are formed and validated.',
    videoUrl: 'https://example.com/videos/blockchain-basics.mp4',
    notes: `
      <h3>Key Concepts</h3>
      <ul>
        <li>Blockchain is a distributed, decentralized ledger</li>
        <li>Transactions are grouped into blocks</li>
        <li>Each block links to the previous block, forming a chain</li>
        <li>Consensus mechanisms ensure the integrity of the blockchain</li>
        <li>Popular consensus mechanisms include Proof of Work (PoW) and Proof of Stake (PoS)</li>
      </ul>
      
      <h3>Blockchain Components</h3>
      <ul>
        <li><strong>Block:</strong> A container of transactions</li>
        <li><strong>Hash:</strong> A unique identifier for each block</li>
        <li><strong>Previous Hash:</strong> Links to the previous block</li>
        <li><strong>Timestamp:</strong> Records when the block was created</li>
        <li><strong>Nonce:</strong> A number used in mining to find a valid hash</li>
      </ul>
    `,
    quiz: [
      {
        question: 'What is a blockchain?',
        options: [
          'A centralized database managed by a single authority',
          'A distributed, decentralized ledger that records transactions',
          'A physical chain of computer hardware',
          'A software application for tracking cryptocurrencies'
        ],
        correctAnswer: 1
      },
      {
        question: 'What links one block to the previous one in a blockchain?',
        options: [
          'The timestamp',
          'The transaction data',
          'The hash of the previous block',
          'The mining software'
        ],
        correctAnswer: 2
      }
    ],
    prevLesson: { id: 102, title: 'History of Bitcoin' },
    nextLesson: { id: 201, title: 'Setting Up Your First Wallet' }
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-8 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      
      <BackButtonHeader 
        title={lesson.title} 
        rightContent={
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-9 h-9 rounded-full glass text-gray-300 hover:text-white"
            onClick={() => setShowNotes(!showNotes)}
          >
            <BookOpen size={18} />
          </Button>
        }
      />
      
      {/* Video Player */}
      <div className="relative mb-6 rounded-xl overflow-hidden aspect-video glass-card">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* This would normally be a real video player, using a mockup here */}
          <div className="w-full h-full bg-black/30 flex items-center justify-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-16 h-16 rounded-full bg-fin-green/20 text-fin-green hover:bg-fin-green/30 hover:scale-105 transition-all"
              onClick={togglePlayPause}
            >
              {isPlaying ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-between px-4">
            <span className="text-xs">05:24 / {lesson.duration}</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8 text-white/80 hover:text-white">
                <Download size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 text-white/80 hover:text-white">
                <Flag size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs for Content/Notes/Quiz */}
      <Tabs defaultValue="content" className="mb-6">
        <TabsList className="grid grid-cols-3 glass">
          <TabsTrigger value="content">Overview</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="mt-4 animate-fade-in">
          <h3 className="font-semibold mb-2">About This Lesson</h3>
          <p className="text-sm text-gray-300 mb-6">{lesson.description}</p>
          
          <div className="flex gap-2 mb-6">
            <Button 
              variant="outline"
              className="flex-1 glass-card border-gray-700 hover:border-fin-green/30 flex items-center gap-2"
            >
              <ThumbsUp size={16} className="text-fin-green" />
              <span>Helpful</span>
            </Button>
            <Button 
              variant="outline"
              className="flex-1 glass-card border-gray-700 hover:border-fin-green/30 flex items-center gap-2"
            >
              <MessageSquare size={16} className="text-fin-green" />
              <span>Comments</span>
            </Button>
          </div>
          
          <h3 className="font-semibold mb-3">Lesson Navigation</h3>
          <div className="grid grid-cols-2 gap-3">
            {lesson.prevLesson && (
              <Button 
                variant="outline"
                className="glass-card border-gray-700 hover:border-fin-green/30 flex items-center gap-2 justify-center"
                onClick={() => navigate(`/courses/${courseId}/lessons/${lesson.prevLesson.id}`)}
              >
                <ChevronLeft size={16} />
                <span className="truncate text-sm">Previous Lesson</span>
              </Button>
            )}
            
            {lesson.nextLesson && (
              <Button 
                className="glass-card bg-fin-green/10 text-fin-green hover:bg-fin-green hover:text-black flex items-center gap-2 justify-center border-0"
                onClick={() => navigate(`/courses/${courseId}/lessons/${lesson.nextLesson.id}`)}
              >
                <span className="truncate text-sm">Next Lesson</span>
                <ChevronRight size={16} />
              </Button>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="notes" className="mt-4 animate-fade-in">
          <Card className="glass-card rounded-xl border-0">
            <CardContent className="p-4">
              <div 
                className="prose prose-sm prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: lesson.notes }}
              />
              <div className="flex justify-center mt-6">
                <Button variant="outline" className="glass-card border-gray-700 hover:border-fin-green/30">
                  <Download size={16} className="mr-2" />
                  Download Notes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="quiz" className="mt-4 animate-fade-in">
          <Card className="glass-card rounded-xl border-0 mb-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <ListChecks size={18} className="text-fin-green" />
                <h3 className="font-semibold">Check Your Understanding</h3>
              </div>
              
              {lesson.quiz.map((quizItem, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="font-medium text-sm mb-2">{index + 1}. {quizItem.question}</h4>
                  <div className="space-y-2">
                    {quizItem.options.map((option, oIndex) => (
                      <div 
                        key={oIndex}
                        className="p-3 rounded-lg glass border border-gray-700 hover:border-fin-green/30 cursor-pointer transition-all text-sm"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <Button className="w-full mt-4 bg-fin-green hover:bg-fin-green-dark text-black font-medium rounded-xl shadow-glow transition-all duration-300">
                Check Answers
              </Button>
            </CardContent>
          </Card>
          
          <div className="text-center text-sm text-gray-400">
            Complete the quiz to mark this lesson as completed
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Back to Course Button */}
      <div className="text-center">
        <Button 
          variant="ghost" 
          className="text-gray-400 hover:text-white"
          onClick={() => navigate(`/courses/${courseId}`)}
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Course
        </Button>
      </div>
    </div>
  );
};

export default LessonPage;
