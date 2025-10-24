import React, { memo, useMemo } from 'react';
import { skillCategories, additionalSkills } from '../constants';
import { getSkillIcon, getSkillLevelColor } from '../utils/iconMapper';
import { useInViewport } from '../hooks/useInViewport';

// Individual skill item to prevent re-renders
const SkillItem = memo(({ skill }) => {
  const IconComponent = useMemo(() => getSkillIcon(skill.icon), [skill.icon]);
  const levelColor = useMemo(() => getSkillLevelColor(skill.level), [skill.level]);

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200">
      <div className="flex items-center space-x-3">
        <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        <span className="font-medium text-gray-900 dark:text-white">
          {skill.name}
        </span>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColor}`}>
        {skill.level}
      </span>
    </div>
  );
});

SkillItem.displayName = 'SkillItem';

// Skill category wrapper to avoid re-renders
const SkillCategory = memo(({ category }) => (
  <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-6 text-center">
      {category.title}
    </h3>
    
    <div className="space-y-4">
      {category.skills.map((skill, skillIndex) => (
        <SkillItem key={skillIndex} skill={skill} />
      ))}
    </div>
  </div>
));

SkillCategory.displayName = 'SkillCategory';

const Skills = () => {
  const { elementRef, hasBeenInViewport } = useInViewport({ threshold: 0.2 });

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm building my expertise in frontend development with a focus on React, modern CSS, and user experience design. 
            Here's a breakdown of my current skills and learning progress.
          </p>
        </div>

        <div ref={elementRef} className={`grid lg:grid-cols-3 gap-8 transition-all duration-1000 ${hasBeenInViewport ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory key={categoryIndex} category={category} />
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Additional Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                React Certification
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Meta React Developer
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                JavaScript Fundamentals
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                freeCodeCamp Certified
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Responsive Web Design
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                freeCodeCamp Certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
