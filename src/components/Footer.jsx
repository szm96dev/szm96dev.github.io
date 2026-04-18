import React, { memo, useCallback, useMemo } from 'react';
import { SocialLinks, Button } from './ui';
import { quickLinks, footerSocialLinks, personalInfo } from '../constants';
import { getContactIcon } from '../utils/iconMapper';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { getCurrentYear } from '../utils/helpers';
import { scrollToTop } from '../utils/scrollUtils';

const Footer = () => {
  const currentYear = getCurrentYear();
  const scrollToSection = useScrollToSection();
  const footerLinks = useMemo(() => footerSocialLinks.map((link) => ({
    ...link,
    icon: getContactIcon(link.icon)
  })), []);
  const handleQuickLinkClick = useCallback((href) => {
    scrollToSection(href.replace('#', ''));
  }, [scrollToSection]);

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-0 w-72 h-72 bg-primary-600/10 blur-3xl rounded-full"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary-400/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
        {/* CTA Strip */}
        <div className="py-10 sm:py-12">
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 sm:p-8 shadow-2xl">
            <div className="space-y-3 max-w-2xl">
              <p className="text-sm font-semibold text-primary-200 uppercase tracking-wide">Let&apos;s build</p>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold">Ready for your next React project</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Quick handoff, polished UI, and fast responses. Reach out for dashboards, landing pages, and frontend performance passes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                as="a"
                href={personalInfo.emailUrl}
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                Email Sikandar
              </Button>
              <Button
                as="a"
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="border border-white/40 text-white hover:bg-white/10"
              >
                View CV
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-10 sm:py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand & Description */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-3">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-gray-300 max-w-md text-sm sm:text-base">
                {personalInfo.description}
              </p>
              
              <SocialLinks 
                links={footerLinks}
                size="md"
                variant="white"
                className="mt-4"
              />
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-semibold text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleQuickLinkClick(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-semibold text-white">
                Get in Touch
              </h4>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={personalInfo.emailUrl}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href={personalInfo.phoneUrl}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 sm:py-8">
          <div className="flex justify-center sm:justify-start items-center">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
