import React from 'react';
import { experiences } from '../../constants';

const ExperienceList = () => {
  return (
    <div>
      <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-8">
        Professional Experience
      </h3>
      
      <div className="space-y-8">
        {experiences.map((experience) => (
          <div key={experience.id} className="relative">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                  </h4>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {experience.duration}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    {experience.company}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200">
                    {experience.type}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {experience.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
