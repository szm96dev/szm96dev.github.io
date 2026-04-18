import React, { memo } from 'react';
import ExperienceList from './Experience/ExperienceList';
import EducationCertifications from './Experience/EducationCertifications';
import { SectionHeader } from './ui';

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative section-padding bg-gradient-to-b from-white via-primary-50/60 to-white dark:from-dark-900 dark:via-dark-900/80 dark:to-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-10 w-64 h-64 bg-primary-200/30 dark:bg-primary-900/20 blur-3xl rounded-full"></div>
        <div className="absolute right-0 bottom-10 w-72 h-72 bg-primary-400/20 dark:bg-primary-800/30 blur-3xl rounded-full"></div>
      </div>

      <div className="container-custom relative space-y-12">
        <SectionHeader
          pill="Journey so far"
          title="Experience & Education"
          description="As a frontend learner and computer science student, I’m building my skills through consistent practice, personal projects, and academic growth."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12">
          <ExperienceList />
          <EducationCertifications />
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);
