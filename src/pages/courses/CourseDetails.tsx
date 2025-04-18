
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  PlayCircle, 
  Clock, 
  Book, 
  Star, 
  ChevronRight, 
  Share2, 
  BookOpen,
  CheckCircle,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BackButtonHeader from '@/components/BackButtonHeader';
import AppFooter from '@/components/AppFooter';
import CourseModuleOverview from '@/components/CourseModuleOverview';
import courseData from '@/data/courseData';

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  // Find the course from our course data
  const course = courseData.find(c => c.id === Number(courseId));
  
  if (!course) {
    return (
      <div className="min-h-screen bg-fin-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Course Not Found</h2>
          <Button 
            variant="outline" 
            onClick={() => navigate('/courses')}
          >
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }
  
  // Calculate next lesson
  const nextLesson = course.modules
    .flatMap(module => module.lessons)
    .find(lesson => !lesson.completed);
  
  // Calculate completed lessons count
  const completedLessons = course.modules
    .flatMap(module => module.lessons)
    .filter(lesson => lesson.completed).length;
  
  const totalLessons = course.modules
    .flatMap(module => module.lessons).length;
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-20 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      
      <BackButtonHeader 
        title={course.title} 
        rightContent={
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-9 h-9 rounded-full glass text-gray-300 hover:text-white"
          >
            <Share2 size={18} />
          </Button>
        }
      />
      
      {/* Course Banner and Overview */}
      <div className="glass-card rounded-xl overflow-hidden mb-6">
        <div className="bg-fin-green/10 p-6 flex flex-col items-center text-center relative">
          <div className="w-16 h-16 rounded-xl glass flex items-center justify-center mb-3 shadow-inner-glow animate-pulse-slow">
            <div className="text-fin-green text-2xl font-bold">{course.icon}</div>
          </div>
          
          <h2 className="text-xl font-bold mb-2">{course.title}</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-fin-green" fill="currentColor" />
              <span className="text-sm">{course.rating}</span>
            </div>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-400">{course.reviews} reviews</span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-400">{course.students.toLocaleString()} students</span>
          </div>
          
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-1">
              <Book size={14} className="text-fin-green" />
              <span className="text-xs">{totalLessons} lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-fin-green" />
              <span className="text-xs">
                {course.modules.flatMap(m => m.lessons).reduce((acc, lesson) => {
                  const [mins, secs] = lesson.duration.split(':').map(Number);
                  return acc + mins + secs / 60;
                }, 0).toFixed(0)} mins
              </span>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="p-4 border-t border-gray-800/50">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-400">Your progress</span>
            <span className="text-xs font-medium">{completedLessons}/{totalLessons} lessons</span>
          </div>
          <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-fin-green rounded-full"
              style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* Continue Learning Button */}
      {nextLesson && (
        <Button 
          className="w-full bg-fin-green hover:bg-fin-green-dark text-black font-medium rounded-xl py-6 shadow-glow transition-all duration-300 group mb-6"
          onClick={() => navigate(`/courses/${course.id}/lessons/${nextLesson.id}`)}
        >
          <PlayCircle size={18} className="mr-2" />
          Continue Learning
          <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      )}
      
      {/* Course Description */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">About This Course</h3>
        <p className="text-sm text-gray-300">{course.description}</p>
      </div>
      
      {/* Instructor */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Instructor</h3>
        <Card className="glass-card rounded-xl border-0">
          <CardContent className="p-4 flex items-center gap-3">
            <img 
              src={course.instructorAvatar} 
              alt={course.instructor} 
              className="w-12 h-12 rounded-full object-cover ring-2 ring-fin-green/20"
            />
            <div>
              <h4 className="font-semibold">{course.instructor}</h4>
              <p className="text-xs text-gray-400">{course.instructorRole}</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Course Content */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3">Course Content</h3>
        <div className="space-y-3">
          {course.modules.map((module) => (
            <Card key={module.id} className="glass-card rounded-xl border-0">
              <div className="p-4 border-b border-gray-800/50">
                <h4 className="font-semibold flex items-center">
                  <BookOpen size={16} className="text-fin-green mr-2" />
                  {module.title}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  {module.lessons.length} lessons
                </p>
                
                {/* Module Overview */}
                {module.overview && <CourseModuleOverview overview={module.overview} />}
              </div>
              <div>
                {module.lessons.map((lesson) => (
                  <div 
                    key={lesson.id}
                    className="flex items-center justify-between p-3 border-b border-gray-800/30 last:border-0 hover:bg-fin-green/5 transition-colors cursor-pointer"
                    onClick={() => navigate(`/courses/${course.id}/lessons/${lesson.id}`)}
                  >
                    <div className="flex items-center gap-3">
                      {lesson.completed ? (
                        <CheckCircle size={16} className="text-fin-green" />
                      ) : (
                        <Lock size={16} className="text-gray-500" />
                      )}
                      <span className={`text-sm ${lesson.completed ? 'text-gray-300' : 'text-gray-500'}`}>
                        {lesson.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{lesson.duration}</span>
                      <PlayCircle size={16} className={`${lesson.completed ? 'text-fin-green' : 'text-gray-600'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Footer Navigation */}
      <AppFooter />
    </div>
  );
};

export default CourseDetails;
