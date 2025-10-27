import React, { memo, useMemo, useCallback } from 'react';
import { Section, Button, AnimatedText } from './ui';
import { personalInfo } from '../constants';
import { SiReact, SiRedux, SiJavascript, SiHtml5, SiCss3, SiTailwindcss } from 'react-icons/si';
import { useScrollToSection } from '../hooks/useScrollToSection';

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
      className="min-h-screen flex items-center justify-center" 
      background="gradient"
      padding="none"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6">
        {/* Content section */}
        <div className="text-center lg:text-left">
          {/* Main heading */}
          <AnimatedText animation="fade-in" delay={0} skipAnimation={true}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Hi, I'm{' '}
              <span className="text-primary-600 dark:text-primary-400">
                {personalInfo.name}
              </span>
            </h1>
          </AnimatedText>
          
          {/* Subtitle */}
          <AnimatedText animation="slide-up" delay={200}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
              {personalInfo.title}
            </h2>
          </AnimatedText>
          
          {/* Tagline */}
          <AnimatedText animation="slide-up" delay={0} skipAnimation={true}>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
              {personalInfo.tagline}
            </p>
          </AnimatedText>
          
          {/* Action buttons */}
          <AnimatedText animation="slide-up" delay={600}>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleViewProjects}
                  size="lg"
                  className="px-6 sm:px-8 py-3"
                >
                  View My Projects
                </Button>
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sikandar_Zubair_CV.pdf"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base font-medium rounded-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </AnimatedText>
        </div>

        {/* Code/Design Elements */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main code/design representation */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-dark-700 dark:to-dark-600 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">Code & Design</p>
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