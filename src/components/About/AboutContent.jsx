import React, { memo, useMemo } from 'react';
import { aboutContent, aboutSkills } from '../../constants';

const focusAreas = [
  'React projects with clean, simple UI',
  'Reusable components with TailwindCSS',
  'Redux and basic state management practice',
  'Responsive layouts and usability basics'
];

const AboutContent = () => {
  const followUpParagraphs = useMemo(() => aboutContent.paragraphs.slice(1), []);

  return (
    <div className="rounded-3xl bg-white/85 dark:bg-dark-900/70 backdrop-blur shadow-2xl border border-gray-100/70 dark:border-dark-700/70 p-8 md:p-10 space-y-6">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold">
        About Sikandar
      </div>
      <div>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-3 leading-tight">
          {aboutContent.title}
        </h3>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {aboutContent.paragraphs[0]}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {focusAreas.map((item) => (
          <div
            key={item}
            className="flex items-start space-x-3 p-4 rounded-2xl bg-gray-50/80 dark:bg-dark-800/80 border border-gray-100/70 dark:border-dark-700/70"
          >
            <span className="w-2 h-2 mt-1.5 rounded-full bg-primary-600 dark:bg-primary-400"></span>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{item}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-primary-50/80 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 p-5">
        <h4 className="text-lg font-heading font-semibold text-primary-800 dark:text-primary-200 mb-3">
          Current learning progress
        </h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {aboutSkills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/60 dark:bg-dark-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {followUpParagraphs.map((paragraph, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-white/80 dark:bg-dark-800/80 border border-gray-100/70 dark:border-dark-700/70 shadow-sm"
          >
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed">
              {paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(AboutContent);
