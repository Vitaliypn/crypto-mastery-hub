
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Star, Play } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import AppFooter from '@/components/AppFooter';
import PageHeader from '@/components/PageHeader';
import courseData from '@/data/courseData';

const CourseLibrary = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  
  // Filter courses based on search query and level
  const filteredCourses = courseData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });
  
  return (
    <div className="min-h-screen bg-fin-dark text-white px-4 pb-20 pt-4 max-w-lg mx-auto relative overflow-hidden bg-noise">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-fin-green/20 to-transparent opacity-30 blur-3xl -z-10" />
      
      <PageHeader title="Course Library" />
      
      {/* Search & Filter */}
      <div className="mb-6">
        <div className="relative mb-4">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search courses..."
            className="glass-card pl-10 border-gray-700 focus:border-fin-green"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <ToggleGroup 
            type="single" 
            value={selectedLevel}
            onValueChange={(value) => {
              if (value) setSelectedLevel(value);
            }}
            className="glass justify-start rounded-lg border border-gray-800/50 p-1"
          >
            <ToggleGroupItem 
              value="all" 
              className="rounded text-xs h-7 data-[state=on]:bg-fin-green/20 data-[state=on]:text-fin-green"
            >
              All
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="beginner" 
              className="rounded text-xs h-7 data-[state=on]:bg-fin-green/20 data-[state=on]:text-fin-green"
            >
              Beginner
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="intermediate" 
              className="rounded text-xs h-7 data-[state=on]:bg-fin-green/20 data-[state=on]:text-fin-green"
            >
              Intermediate
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="advanced" 
              className="rounded text-xs h-7 data-[state=on]:bg-fin-green/20 data-[state=on]:text-fin-green"
            >
              Advanced
            </ToggleGroupItem>
          </ToggleGroup>
          
          <Button 
            size="sm" 
            variant="outline" 
            className="h-8 px-3 rounded-lg border-gray-700 hover:border-fin-green flex gap-1 items-center"
          >
            <Filter size={14} />
            <span className="text-xs">Filters</span>
          </Button>
        </div>
      </div>
      
      {/* Course List */}
      <div className="space-y-4 mb-8">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-fin-green/10 flex items-center justify-center">
              <Search size={24} className="text-fin-green" />
            </div>
            <h3 className="font-semibold mb-1">No courses found</h3>
            <p className="text-sm text-gray-400">Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredCourses.map((course) => (
            <Card 
              key={course.id} 
              className="glass-card rounded-xl border-0 hover:border-fin-green/30 transition-all cursor-pointer"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-lg glass flex items-center justify-center shadow-inner-glow animate-pulse-slow">
                    <div className="text-fin-green text-2xl font-bold">{course.icon}</div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{course.title}</h3>
                      <span className={`text-xs rounded-full px-2 py-0.5 bg-fin-green/10 text-fin-green`}>
                        {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-400 mt-1 mb-2">{course.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <div className="flex text-fin-green">
                          <Star size={12} fill="currentColor" />
                          <span className="ml-1 text-xs">{course.rating}</span>
                        </div>
                        <span className="text-[10px] text-gray-500">({course.reviews})</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400">
                          {course.modules.flatMap(m => m.lessons).length} lessons
                        </span>
                        <span className="text-[10px] text-gray-400">•</span>
                        <span className="text-[10px] text-gray-400">
                          {Math.round(course.modules.flatMap(m => m.lessons).reduce((acc, lesson) => {
                            const [mins, secs] = lesson.duration.split(':').map(Number);
                            return acc + mins + secs / 60;
                          }, 0))} mins
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-800/50">
                  <span className="text-xs text-gray-400">By {course.instructor}</span>
                  <Button 
                    size="sm" 
                    className="h-7 rounded-lg bg-fin-green/10 hover:bg-fin-green text-fin-green hover:text-black"
                  >
                    <Play size={14} className="mr-1" />
                    <span className="text-xs">Start</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
      
      {/* Footer Navigation */}
      <AppFooter />
    </div>
  );
};

export default CourseLibrary;
