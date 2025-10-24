import React, { useState, useMemo, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button, Icon } from './ui';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navItems, personalInfo } from '../constants';
import { useScroll } from '../hooks/useScroll';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const isScrolled = useScroll(50);
  const scrollToSection = useScrollToSection();

  const handleScrollToSection = useCallback((sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  }, [scrollToSection]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const headerClassName = useMemo(() => 
    `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-lg'
        : 'bg-white dark:bg-dark-900 shadow-md'
    }`, [isScrolled]
  );

  const themeIcon = useMemo(() => 
    isDarkMode ? SunIcon : MoonIcon, [isDarkMode]
  );

  const mobileMenuIcon = useMemo(() => 
    isMobileMenuOpen ? XMarkIcon : Bars3Icon, [isMobileMenuOpen]
  );


  return (
    <header className={headerClassName}>
      <nav className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleScrollToSection('home')}
              className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:scale-105 transition-all duration-200"
            >
              {personalInfo.name}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScrollToSection(item.href.substring(1))}
                className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-dark-700"
              >
                {item.name}
              </button>
            ))}
            
            {/* Download CV Button */}
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Sikandar_Zubair_CV.pdf"
              className="inline-flex items-center px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </a>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-all duration-200"
              aria-label="Toggle theme"
            >
              <Icon 
                icon={themeIcon} 
                size="md" 
                color={isDarkMode ? "warning" : "default"} 
              />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="md:hidden p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                icon={mobileMenuIcon} 
                size="lg" 
                color="default" 
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 sm:py-6 mt-2 border-t border-gray-200 dark:border-dark-700">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleScrollToSection(item.href.substring(1))}
                  className="text-left text-base sm:text-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium py-2 sm:py-3 px-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Download CV Button */}
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Sikandar_Zubair_CV.pdf"
                className="inline-flex items-center justify-center px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white text-base font-medium rounded-lg transition-colors duration-200 mt-2"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
