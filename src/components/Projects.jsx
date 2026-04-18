import React, { useState, useMemo, useCallback, memo } from 'react';
import { projects, projectCategories, personalInfo } from '../constants';
import { shouldOpenInNewTab } from '../utils/helpers';
import { Button } from './ui';

// Project card component with overlay and meta chips
const ProjectCard = memo(({ project }) => {
  const liveDemoProps = useMemo(() => ({
    href: project.liveDemo,
    target: shouldOpenInNewTab(project.liveDemo) ? "_blank" : "_self",
    rel: shouldOpenInNewTab(project.liveDemo) ? "noopener noreferrer" : ""
  }), [project.liveDemo]);

  const githubProps = useMemo(() => ({
    href: project.github,
    target: shouldOpenInNewTab(project.github) ? "_blank" : "_self",
    rel: shouldOpenInNewTab(project.github) ? "noopener noreferrer" : ""
  }), [project.github]);

  return (
    <div className="rounded-2xl bg-white/85 dark:bg-dark-800/80 backdrop-blur border border-gray-100/70 dark:border-dark-700/70 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-primary-200/70 dark:hover:ring-primary-700/50 transition-all duration-300 overflow-hidden group">
      {/* Project Preview */}
      <div className="relative overflow-hidden">
        {project.preview ? (
          <div className="w-full h-52 bg-gray-100 dark:bg-dark-600">
            <img
              src={project.preview}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-black/40 to-transparent flex items-end">
              <div className="w-full p-4 flex items-center justify-between text-white">
                <span className="text-sm font-semibold">View project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-dark-600 dark:to-dark-500 flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Project Preview</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-52 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-dark-600 dark:to-dark-500 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Project Demo</p>
            </div>
          </div>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-white/80 dark:bg-dark-800/80 text-primary-700 dark:text-primary-200 px-3 py-1 rounded-full text-xs font-semibold shadow">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-200 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              {project.category}
            </div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs font-semibold text-primary-600 dark:text-primary-300 uppercase tracking-wide">
              Case study
            </p>
          </div>
          {project.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-200">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-200 text-xs font-semibold rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 21a1 1 0 11-2 0" />
            </svg>
            Real-world ready
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m0 14v2m9-2h-3m-4-6h7M3 13h7" />
            </svg>
            Polished UI
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v1.5a3 3 0 106 0V11c0-1.657-1.343-3-3-3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11h-.75a2.25 2.25 0 00-2.25 2.25v1.5A3.75 3.75 0 007.75 18h8.5a3.75 3.75 0 003.75-3.75v-1.5A2.25 2.25 0 0017.75 11H17" />
            </svg>
            UX-first
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <a
            {...liveDemoProps}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2.5 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
          <a
            {...githubProps}
            className="flex-1 bg-white dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 text-gray-800 dark:text-gray-200 text-center py-2.5 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 border border-gray-200 dark:border-dark-600"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = useMemo(() => 
    filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter),
    [filter]
  );

  const handleFilterChange = useCallback((categoryId) => {
    setFilter(categoryId);
  }, []);
  const projectCount = filteredProjects.length;
  const activeCategoryName = useMemo(() => {
    if (filter === 'all') return 'All Projects';
    const match = projectCategories.find((c) => c.id === filter);
    return match ? match.name : 'Projects';
  }, [filter]);

  return (
    <section
      id="projects"
      className="relative section-padding bg-gradient-to-b from-white via-primary-50/40 to-white dark:from-dark-900 dark:via-dark-900/80 dark:to-dark-900 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-24 top-16 w-80 h-80 bg-primary-300/30 dark:bg-primary-800/30 blur-3xl rounded-full"></div>
        <div className="absolute -left-32 bottom-0 w-72 h-72 bg-primary-500/20 dark:bg-primary-700/25 blur-3xl rounded-full"></div>
      </div>
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-dark-800/80 backdrop-blur text-primary-700 dark:text-primary-300 text-sm font-semibold">
              Featured work
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
              Interfaces that balance polish and performance
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              React builds with refined UI, responsive layouts, and production-ready code. Each project focuses on clarity, accessibility, and real-world UX.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold">
                {projectCount} projects
              </span>
              <Button
                as="a"
                href={personalInfo.githubUrl}
                target={shouldOpenInNewTab(personalInfo.githubUrl) ? "_blank" : undefined}
                rel={shouldOpenInNewTab(personalInfo.githubUrl) ? "noopener noreferrer" : undefined}
                size="md"
                className="bg-primary-600 hover:bg-primary-700 text-white shadow-lg"
              >
                View GitHub
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-white/80 dark:bg-dark-800/80 backdrop-blur border border-gray-100/70 dark:border-dark-700/70 p-6 shadow-lg">
            <p className="text-sm font-semibold text-primary-700 dark:text-primary-300 uppercase tracking-wide mb-3">What to expect</p>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"></span>
                Performant React with clean routing, state patterns, and accessibility baked in.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"></span>
                Tailwind-driven design systems for consistent spacing, color, and typography.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400"></span>
                Real-world flows: data fetching, filters, and responsive layouts.
              </li>
            </ul>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-3">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  filter === category.id
                    ? 'bg-primary-600 text-white border-primary-600 shadow-lg'
                    : 'bg-white/80 dark:bg-dark-800/80 border-gray-200 dark:border-dark-700 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-dark-800/80 border border-gray-200 dark:border-dark-700 text-sm font-semibold text-gray-700 dark:text-gray-200">
              {activeCategoryName} • {projectCount} shown
            </span>
            {filter !== 'all' && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFilter('all')}
                className="border border-gray-200 dark:border-dark-700 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-2xl bg-white/70 dark:bg-dark-800/80 border border-gray-200 dark:border-dark-700">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">No projects in this filter yet.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Try another category or view everything on GitHub.</p>
          </div>
        )}

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href={personalInfo.githubUrl}
            target={shouldOpenInNewTab(personalInfo.githubUrl) ? "_blank" : "_self"}
            rel={shouldOpenInNewTab(personalInfo.githubUrl) ? "noopener noreferrer" : ""}
            className="inline-flex items-center gap-2 bg-white/80 dark:bg-dark-800/80 border border-gray-200 dark:border-dark-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
