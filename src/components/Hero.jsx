import React, { memo, useMemo, useCallback } from 'react';
import { Section, Button, AnimatedText } from './ui';
import { personalInfo } from '../constants';
import { SiReact, SiRedux, SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from 'react-icons/si';
import { useScrollToSection } from '../hooks/useScrollToSection';

const focusPills = ['React', 'Redux', 'TailwindCSS', 'Responsive UI', 'JavaScript'];

const Hero = () => {
  const scrollToSection = useScrollToSection();

  // Handle view projects button click
  const handleViewProjects = useCallback(() => {
    scrollToSection('projects');
  }, [scrollToSection]);

  // Handle scroll to about section
  const handleScrollToAbout = useCallback(() => {
    scrollToSection('about');
  }, [scrollToSection]);

  // Floating skill icons
  const floatingSkills = useMemo(() => [
    {
      icon: SiReact,
      title: "React - Main Framework",
      className: "absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-2xl animate-bounce-slow flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-500 hover:shadow-blue-500/25 group cursor-pointer",
      iconClassName: "w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:rotate-12 transition-transform duration-300"
    },
    {
      icon: SiJavascript,
      title: "JavaScript - Core Language",
      className: "absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-10 h-10 sm:w-14 sm:h-14 bg-yellow-500 rounded-2xl animate-bounce-slow flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-500 hover:shadow-yellow-500/25 group cursor-pointer",
      iconClassName: "w-5 h-5 sm:w-7 sm:h-7 text-white group-hover:rotate-12 transition-transform duration-300",
      style: { animationDelay: '0.8s' }
    },
    {
      icon: SiHtml5,
      title: "HTML5 - Markup Language",
      className: "absolute top-1/4 -left-6 sm:top-1/3 sm:-left-8 w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-xl animate-bounce-slow flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-500 hover:shadow-orange-500/25 group cursor-pointer",
      iconClassName: "w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300",
      style: { animationDelay: '1.2s' }
    },
    {
      icon: SiCss3,
      title: "CSS3 - Styling",
      className: "absolute top-1/4 -right-6 sm:top-1/3 sm:-right-8 w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-xl animate-bounce-slow flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-500 hover:shadow-blue-400/25 group cursor-pointer",
      iconClassName: "w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300",
      style: { animationDelay: '1.6s' }
    },
    {
      icon: SiTailwindcss,
      title: "TailwindCSS - CSS Framework",
      className: "absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 bg-cyan-500 rounded-xl animate-bounce-slow flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-500 hover:shadow-cyan-500/25 group cursor-pointer",
      iconClassName: "w-5 h-5 sm:w-7 sm:h-7 text-white group-hover:rotate-12 transition-transform duration-300",
      style: { animationDelay: '2s' }
    },
    {
      icon: SiRedux,
      title: "Redux - State Management",
      className: "absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl animate-bounce-slow flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-500 hover:shadow-purple-600/25 group cursor-pointer",
      iconClassName: "w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300",
      style: { animationDelay: '2.4s' }
    }
  ], []);

  return (
    <Section
      id="home"
      className="relative min-h-screen flex items-center"
      background="gradient"
      padding="none"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-10 w-72 h-72 bg-primary-300/30 dark:bg-primary-800/30 blur-3xl rounded-full"></div>
        <div className="absolute right-0 bottom-10 w-80 h-80 bg-primary-500/20 dark:bg-primary-700/25 blur-3xl rounded-full"></div>
      </div>
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center px-4 sm:px-6 relative">
        {/* Content section */}
        <div className="text-center lg:text-left space-y-7">
          <AnimatedText animation="fade-in" delay={0} skipAnimation={true}>
            <p className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-dark-800/80 backdrop-blur text-primary-700 dark:text-primary-300 text-sm font-semibold">
              Sikandar Zubair · React Frontend
            </p>
          </AnimatedText>

          <AnimatedText animation="fade-in" delay={100} skipAnimation={true}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
              I build modern React interfaces while growing as a frontend developer.
            </h1>
          </AnimatedText>
          
          <AnimatedText animation="slide-up" delay={150}>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              A computer science student at Virtual University of Pakistan, focused on responsive UI, clean component architecture, and continuous improvement through real projects.
            </p>
          </AnimatedText>
          
          <AnimatedText animation="slide-up" delay={250}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleViewProjects}
                size="lg"
                className="px-6 sm:px-8 py-3"
              >
                View Projects
              </Button>
              <Button
                as="a"
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="ghost"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
              >
                Download CV
              </Button>
            </div>
          </AnimatedText>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-sm text-gray-600 dark:text-gray-300">
            {focusPills.map((pill) => (
              <span key={pill} className="px-3 py-1.5 rounded-full bg-white/80 dark:bg-dark-800/80 border border-gray-100 dark:border-dark-700">
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="relative rounded-3xl bg-white/80 dark:bg-dark-800/80 backdrop-blur shadow-2xl border border-gray-100 dark:border-dark-700 p-6 overflow-hidden space-y-4">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-200/40 dark:bg-primary-900/30 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-400/30 dark:bg-primary-800/30 blur-3xl rounded-full"></div>
              
              <div className="relative flex items-center justify-between">
                <div className="text-left">
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-300 uppercase">Availability</p>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white">Open to internships and junior roles</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Remote • On-site • Entry-level opportunities</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-200">
                  Available
                </span>
              </div>

              <div className="relative rounded-2xl bg-gradient-to-br from-primary-600 to-primary-500 text-white p-4 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Current focus</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Learning & building</span>
                </div>
                <p className="text-xs text-white/80">
                  React projects, stronger JavaScript fundamentals, and better UI implementation with each build.
                </p>
                <Button
                  as="a"
                  href={personalInfo.emailUrl}
                  size="sm"
                  className="w-full bg-white text-primary-700 hover:bg-gray-100"
                >
                  Contact Me
                </Button>
              </div>

              <div className="relative rounded-2xl bg-gray-50 dark:bg-dark-700 p-4 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">Stack in focus</span>
                  <span className="text-xs text-primary-600 dark:text-primary-300">Current</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { label: 'React', icon: SiReact },
                    { label: 'Redux', icon: SiRedux },
                    { label: 'Tailwind', icon: SiTailwindcss }
                  ].map(({ label, icon: IconComp }) => (
                    <div key={label} className="rounded-xl bg-white dark:bg-dark-600 p-3 shadow">
                      <IconComp className="w-5 h-5 mx-auto text-primary-600 dark:text-primary-300" />
                      <p className="mt-2 text-xs font-semibold text-gray-700 dark:text-gray-200">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 text-left">
                  Practicing React, Redux, and responsive UI with each new project.
                </p>
              </div>

              <div className="relative rounded-2xl bg-white/80 dark:bg-dark-800/80 border border-gray-100 dark:border-dark-700 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-100">Recent focus</span>
                  <span className="text-xs text-primary-600 dark:text-primary-300">Practice</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-600 rounded-full w-3/5"></div>
                </div>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">React practice, better layouts, and cleaner component structure.</p>
              </div>
            </div>

            {/* Floating skills icons */}
            {floatingSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className={skill.className}
                  style={skill.style}
                  title={skill.title}
                >
                  <IconComponent className={skill.iconClassName} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={handleScrollToAbout}
          className="text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </Section>
  );
};

export default memo(Hero);
