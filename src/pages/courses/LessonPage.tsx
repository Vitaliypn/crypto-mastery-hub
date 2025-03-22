
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  PlayCircle, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  X,
  BookOpen,
  ListChecks
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import BackButtonHeader from '@/components/BackButtonHeader';
import courseData from '@/data/courseData';
import { QuizQuestion } from '@/data/courseData';

const LessonPage = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const [quizMode, setQuizMode] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  
  // Find course and lesson
  const course = courseData.find(c => c.id === Number(courseId));
  
  if (!course) {
    return (
      <div className="min-h-screen bg-fin-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Course Not Found</h2>
          <Button variant="outline" onClick={() => navigate('/courses')}>
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }
  
  // Find the module and lesson
  let currentLesson;
  let currentModule;
  
  for (const module of course.modules) {
    const lesson = module.lessons.find(l => l.id === Number(lessonId));
    if (lesson) {
      currentLesson = lesson;
      currentModule = module;
      break;
    }
  }
  
  if (!currentLesson || !currentModule) {
    return (
      <div className="min-h-screen bg-fin-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Lesson Not Found</h2>
          <Button variant="outline" onClick={() => navigate(`/courses/${courseId}`)}>
            Back to Course
          </Button>
        </div>
      </div>
    );
  }
  
  // Find next and previous lessons
  const allLessons = course.modules.flatMap(m => m.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === Number(lessonId));
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  
  // Calculate quiz score
  const calculateScore = () => {
    if (!currentLesson.content?.quiz) return 0;
    
    let correctAnswers = 0;
    currentLesson.content.quiz.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswerIndex) {
        correctAnswers++;
      }
    });
    
    return (correctAnswers / currentLesson.content.quiz.length) * 100;
  };
  
  const handleQuizSubmit = () => {
    const score = calculateScore();
    setQuizSubmitted(true);
    
    if (score === 100) {
      toast.success('Perfect score! 🎉 You\'ve mastered this lesson!');
    } else if (score >= 70) {
      toast.success(`Good job! You scored ${score}%`);
    } else {
      toast.info(`You scored ${score}%. Review the material and try again.`);
    }
  };
  
  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (quizSubmitted) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-20 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      
      <BackButtonHeader 
        title={quizMode ? "Quiz" : currentLesson.title}
        onBack={() => {
          if (quizMode) {
            setQuizMode(false);
            setQuizSubmitted(false);
            setSelectedAnswers([]);
          } else {
            navigate(`/courses/${courseId}`);
          }
        }}
      />
      
      {quizMode ? (
        // Quiz Mode
        <div className="mb-8 animate-fade-in">
          <div className="glass-card rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold mb-4 text-center">Lesson Quiz</h2>
            <p className="text-sm text-gray-300 mb-6 text-center">
              Test your knowledge of {currentLesson.title}
            </p>
            
            {currentLesson.content?.quiz?.map((question, qIndex) => (
              <div key={qIndex} className="mb-6">
                <h3 className="font-medium mb-3">{question.question}</h3>
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => {
                    const isSelected = selectedAnswers[qIndex] === oIndex;
                    const isCorrect = quizSubmitted && oIndex === question.correctAnswerIndex;
                    const isWrong = quizSubmitted && isSelected && !isCorrect;
                    
                    return (
                      <div 
                        key={oIndex}
                        className={`p-3 rounded-lg border ${
                          isSelected 
                            ? 'border-fin-green bg-fin-green/10' 
                            : 'border-gray-700'
                        } ${
                          isCorrect && quizSubmitted 
                            ? 'border-fin-green bg-fin-green/20' 
                            : isWrong 
                              ? 'border-red-500 bg-red-500/10' 
                              : ''
                        } cursor-pointer flex justify-between items-center`}
                        onClick={() => handleAnswerSelect(qIndex, oIndex)}
                      >
                        <span className="text-sm">{option}</span>
                        {quizSubmitted && (
                          isCorrect ? (
                            <Check size={16} className="text-fin-green" />
                          ) : (
                            isWrong && <X size={16} className="text-red-500" />
                          )
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {!quizSubmitted ? (
              <Button 
                className="w-full bg-fin-green hover:bg-fin-green-dark text-black font-medium rounded-xl py-6 shadow-glow transition-all duration-300 mt-4"
                onClick={handleQuizSubmit}
                disabled={selectedAnswers.length !== currentLesson.content?.quiz?.length}
              >
                Submit Answers
              </Button>
            ) : (
              <div className="text-center">
                <Badge className="bg-fin-green/20 text-fin-green px-4 py-2 text-sm mb-4">
                  You scored {calculateScore()}%
                </Badge>
                <Button 
                  className="w-full bg-fin-green hover:bg-fin-green-dark text-black font-medium rounded-xl py-6 shadow-glow transition-all duration-300"
                  onClick={() => {
                    setQuizMode(false);
                    setQuizSubmitted(false);
                    setSelectedAnswers([]);
                  }}
                >
                  Back to Lesson
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        // Lesson Mode
        <div className="mb-8">
          {/* Module Info */}
          <div className="glass-card rounded-xl p-4 mb-6 flex items-center">
            <BookOpen size={18} className="text-fin-green mr-2" />
            <div>
              <h2 className="text-sm font-medium">{currentModule.title}</h2>
              <p className="text-xs text-gray-400">Module {currentModule.id} of {course.modules.length}</p>
            </div>
          </div>
          
          {/* Video Player */}
          <div className="glass-card rounded-xl overflow-hidden aspect-video mb-6 relative">
            <div className="absolute inset-0 flex items-center justify-center bg-fin-green/10">
              <PlayCircle size={48} className="text-fin-green cursor-pointer hover:scale-110 transition-transform" />
            </div>
            <video 
              poster="https://source.unsplash.com/random/800x450?crypto" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          {/* Lesson Content */}
          <div className="glass-card rounded-xl overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">{currentLesson.content?.title || currentLesson.title}</h2>
              <p className="text-sm text-gray-300 mb-6">
                {currentLesson.content?.description || "In this lesson, you'll learn about the key concepts related to this topic and how they apply to cryptocurrency."}
              </p>
              
              {/* Module Overview if available */}
              {currentModule.overview && (
                <div className="p-4 bg-fin-green/5 rounded-lg mb-4">
                  <h3 className="text-sm font-medium flex items-center gap-2 mb-2">
                    <ListChecks size={16} className="text-fin-green" />
                    Key Points
                  </h3>
                  <ul className="text-xs text-gray-300 space-y-2">
                    {currentModule.overview.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-fin-green mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Quiz Button */}
              {currentLesson.content?.quiz && (
                <Button 
                  className="w-full bg-fin-green/20 hover:bg-fin-green/30 text-fin-green font-medium rounded-xl py-6 transition-all duration-300 mt-2"
                  onClick={() => setQuizMode(true)}
                >
                  Take Quiz
                </Button>
              )}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {prevLesson ? (
              <Button 
                variant="outline" 
                className="flex-1 border-gray-700 hover:border-fin-green hover:bg-fin-green/5 rounded-xl group"
                onClick={() => navigate(`/courses/${courseId}/lessons/${prevLesson.id}`)}
              >
                <ChevronLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                Previous
              </Button>
            ) : (
              <div className="flex-1"></div>
            )}
            
            {nextLesson ? (
              <Button 
                className="flex-1 bg-fin-green hover:bg-fin-green-dark text-black font-medium rounded-xl group"
                onClick={() => navigate(`/courses/${courseId}/lessons/${nextLesson.id}`)}
              >
                Next
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Button 
                className="flex-1 bg-fin-green hover:bg-fin-green-dark text-black font-medium rounded-xl"
                onClick={() => navigate(`/courses/${courseId}`)}
              >
                Complete Course
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonPage;
