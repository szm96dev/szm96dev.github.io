import React, { memo, useMemo } from 'react';
import { projects } from '../../constants';

const pillars = [
  {
    title: 'Frontend craft',
    body: 'React practice, reusable components, and steady improvement with each project.',
    icon: (
      <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    )
  },
  {
    title: 'UX mindset',
    body: 'Clear layouts, responsive design, and attention to usability basics.',
    icon: (
      <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v1.5a3 3 0 106 0V11c0-1.657-1.343-3-3-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11h-.75a2.25 2.25 0 00-2.25 2.25v1.5A3.75 3.75 0 007.75 18h8.5a3.75 3.75 0 003.75-3.75v-1.5A2.25 2.25 0 0017.75 11H17" />
      </svg>
    )
  },
  {
    title: 'Collaboration',
    body: 'Open to feedback, eager to learn, and committed to improving with every project.',
    icon: (
      <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a3 3 0 10-6 0 3 3 0 006 0z" />
      </svg>
    )
  }
];

const AboutStats = () => {
  const totalProjects = projects.length;
  const featuredProjects = projects.filter((project) => project.featured).length;
  const reactProjects = projects.filter((project) => project.category === 'react').length;

  const stats = useMemo(() => [
    { value: `${totalProjects}`, label: 'Projects showcased' },
    { value: `${featuredProjects}`, label: 'Featured projects' },
    { value: `${reactProjects}`, label: 'React projects built' },
    { value: 'Daily', label: 'Learning commitment' }
  ], [featuredProjects, reactProjects, totalProjects]);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-dark-900 text-white p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff30_0,_transparent_45%)]"></div>
        <div className="relative">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-primary-100/80 font-semibold uppercase tracking-wide">Snapshot</p>
              <h4 className="text-2xl font-heading font-bold">What I bring</h4>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex space-x-3 items-start"
              >
                <div className="mt-0.5">{pillar.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-white">{pillar.title}</p>
                  <p className="text-sm text-primary-100/80 mt-1 leading-relaxed">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-5 rounded-2xl bg-white/85 dark:bg-dark-800/80 backdrop-blur shadow-lg border border-gray-100/70 dark:border-dark-700/70"
          >
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(AboutStats);
