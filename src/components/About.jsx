import React, { memo } from 'react';
import { Section, SectionHeader } from './ui';
import AboutContent from './About/AboutContent';
import AboutStats from './About/AboutStats';

const About = () => {
  return (
    <Section
      id="about"
      background="gradient"
      padding="xl"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-0 w-72 h-72 bg-primary-200/30 dark:bg-primary-900/20 blur-3xl rounded-full"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary-500/20 dark:bg-primary-800/25 blur-3xl rounded-full"></div>
      </div>

      <div className="relative space-y-10">
        <SectionHeader
          pill="About"
          title="A React developer building strong frontend foundations"
          description="I focus on clean components, responsive layouts, and practical learning through consistent project work."
          align="left"
          className="lg:max-w-3xl"
        />
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
        <AboutContent />
        <AboutStats />
        </div>
      </div>
    </Section>
  );
};

export default memo(About);
