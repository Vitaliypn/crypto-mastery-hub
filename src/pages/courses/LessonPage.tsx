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
import CourseModuleOverview from '@/components/CourseModuleOverview';
import courseData from '@/data/courseData';
import { QuizQuestion } from '@/data/courseData';

const LessonPage = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const [quizMode, setQuizMode] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

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
  
  const getYouTubeVideoId = (url: string | undefined) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  const videoId = getYouTubeVideoId(currentLesson.content?.videoUrl);
  
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
  
  const handleVideoPlay = () => {
    setVideoPlaying(true);
  };
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-20 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
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
        <div className="mb-8">
          <div className="glass-card rounded-xl p-4 mb-6 flex items-center">
            <BookOpen size={18} className="text-fin-green mr-2" />
            <div>
              <h2 className="text-sm font-medium">{currentModule.title}</h2>
              <p className="text-xs text-gray-400">Module {currentModule.id} of {course.modules.length}</p>
            </div>
          </div>
          
          <div className="glass-card rounded-xl overflow-hidden aspect-video mb-6 relative">
            {videoId ? (
              videoPlaying ? (
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title={currentLesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-fin-dark/70 cursor-pointer"
                  onClick={handleVideoPlay}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-fin-green/20 to-transparent opacity-30" />
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={currentLesson.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-fin-green/90 flex items-center justify-center animate-pulse-slow shadow-glow">
                      <PlayCircle size={36} className="text-black" />
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-fin-green/10">
                <PlayCircle size={48} className="text-fin-green cursor-pointer hover:scale-110 transition-transform" />
              </div>
            )}
          </div>
          
          <div className="glass-card rounded-xl overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">{currentLesson.content?.title || currentLesson.title}</h2>
              <p className="text-sm text-gray-300 mb-6">
                {currentLesson.content?.description || "In this lesson, you'll learn about the key concepts related to this topic and how they apply to cryptocurrency."}
              </p>
              
              {currentModule.overview && <CourseModuleOverview overview={currentModule.overview} />}
              
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
