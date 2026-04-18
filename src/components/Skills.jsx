import React, { memo, useMemo } from 'react';
import { skillCategories, additionalSkills } from '../constants';
import { getSkillIcon, getSkillLevelColor } from '../utils/iconMapper';
import { useInViewport } from '../hooks/useInViewport';
import { SectionHeader } from './ui';

const levelToProgress = {
  Expert: 78,
  Advanced: 66,
  Intermediate: 52,
  Beginner: 36
};

// Individual skill item to prevent re-renders
const SkillItem = memo(({ skill }) => {
  const IconComponent = useMemo(() => getSkillIcon(skill.icon), [skill.icon]);
  const levelColor = useMemo(() => getSkillLevelColor(skill.level), [skill.level]);
  const progress = levelToProgress[skill.level] || 60;

  return (
    <div className="p-4 rounded-2xl bg-white/80 dark:bg-dark-700/80 backdrop-blur border border-gray-100/70 dark:border-dark-600/70 transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <span className="font-semibold text-gray-900 dark:text-white">
              {skill.name}
            </span>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              Currently learning
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColor}`}>
          {skill.level}
        </span>
      </div>
      <div className="mt-3 w-full bg-gray-100 dark:bg-dark-600 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full bg-gradient-to-r from-primary-400 to-primary-600"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
});

SkillItem.displayName = 'SkillItem';

// Skill category wrapper to avoid re-renders
const SkillCategory = memo(({ category }) => (
  <div className="rounded-2xl bg-white/70 dark:bg-dark-800/80 backdrop-blur shadow-xl border border-gray-100/70 dark:border-dark-700/70 p-6 flex flex-col space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">
        {category.title}
      </h3>
      <span className="text-xs font-semibold text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30">
        Learning
      </span>
    </div>
    
    <div className="grid gap-3">
      {category.skills.slice(0, 6).map((skill, skillIndex) => (
        <SkillItem key={skillIndex} skill={skill} />
      ))}
    </div>
  </div>
));

SkillCategory.displayName = 'SkillCategory';

const Skills = () => {
  const { elementRef, hasBeenInViewport } = useInViewport({ threshold: 0.15 });

  return (
    <section
      id="skills"
      className="relative section-padding bg-gradient-to-b from-white via-primary-50/40 to-white dark:from-dark-900 dark:via-dark-900/80 dark:to-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-24 top-10 w-72 h-72 bg-primary-300/30 dark:bg-primary-800/30 blur-3xl rounded-full"></div>
        <div className="absolute -left-24 bottom-0 w-72 h-72 bg-primary-500/20 dark:bg-primary-700/25 blur-3xl rounded-full"></div>
      </div>

      <div className="container-custom relative space-y-12">
        <SectionHeader
          pill="Beginner Toolkit"
          title="Skills that power my builds"
          description="The core tools I’m learning and using in beginner-level frontend projects as I build confidence step by step."
          align="center"
        />

        <div
          ref={elementRef}
          className={`grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 transition-all duration-700 ${hasBeenInViewport ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.slice(0, 2).map((category, categoryIndex) => (
              <SkillCategory key={categoryIndex} category={category} />
            ))}
          </div>

          <div className="space-y-6">
            {skillCategories.slice(2).map((category, categoryIndex) => (
              <SkillCategory key={categoryIndex + 2} category={category} />
            ))}

            <div className="rounded-2xl bg-white/80 dark:bg-dark-800/80 backdrop-blur shadow-xl border border-gray-100/70 dark:border-dark-700/70 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">
                  Supporting strengths
                </h3>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-300 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20">
                  Growth
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
