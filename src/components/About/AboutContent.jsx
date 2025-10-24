import React from 'react';
import { aboutContent, aboutSkills } from '../../constants';

const AboutContent = () => {
  return (
    <div>
      <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-6">
        {aboutContent.title}
      </h3>
      
      <div className="space-y-4 text-gray-600 dark:text-gray-400">
        {aboutContent.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* My main skills */}
      <div className="mt-8">
        <h4 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
          Core Skills
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {aboutSkills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
