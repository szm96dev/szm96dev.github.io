import React, { memo } from 'react';
import { experiences } from '../../constants';

const ExperienceList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white">
          Learning Experience
        </h3>
        <span className="text-xs font-semibold text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20">
          Timeline
        </span>
      </div>
      
      <div className="relative pl-6">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary-400 to-primary-200 dark:from-primary-400/60 dark:to-primary-200/40"></div>
        <div className="space-y-8">
          {experiences.map((experience, idx) => (
            <div key={experience.id} className="relative">
              <div className="absolute -left-1 top-4 w-3 h-3 rounded-full bg-primary-600 border-4 border-white dark:border-dark-900 shadow-md"></div>
              <div className="rounded-2xl bg-white dark:bg-dark-800 shadow-lg border border-gray-100/70 dark:border-dark-700/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-wrap gap-3 items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-300">{experience.duration}</p>
                    <h4 className="mt-1 text-xl font-heading font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">{experience.company}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-200">
                    {experience.type}
                  </span>
                </div>

                <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {experience.description}
                </p>

                <div className="mt-5">
                  <h5 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold mb-2">
                    Highlights
                  </h5>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                        <svg className="w-4 h-4 mt-0.5 text-primary-600 dark:text-primary-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ExperienceList);
