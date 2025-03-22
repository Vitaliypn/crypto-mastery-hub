
import React from 'react';
import { ListChecks } from 'lucide-react';

interface CourseModuleOverviewProps {
  overview: string[];
}

const CourseModuleOverview: React.FC<CourseModuleOverviewProps> = ({ overview }) => {
  if (!overview || overview.length === 0) return null;
  
  return (
    <div className="p-3 bg-fin-green/5 rounded-lg mb-2">
      <h5 className="text-sm font-medium flex items-center gap-2 mb-2">
        <ListChecks size={16} className="text-fin-green" />
        Overview
      </h5>
      <ul className="text-xs text-gray-300 space-y-1">
        {overview.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-fin-green mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseModuleOverview;
