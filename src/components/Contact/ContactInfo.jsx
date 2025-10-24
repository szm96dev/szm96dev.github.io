import React from 'react';
import { ContactInfo, SocialLinks } from '../ui';
import { contactInfo, socialLinks } from '../../constants/navigation';
import { personalInfo } from '../../constants';
import { getContactIcon } from '../../utils/iconMapper';

const ContactInfoSection = () => {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
        Contact Information
      </h3>
      
      <ContactInfo 
        items={contactInfo.map(item => ({
          ...item,
          icon: getContactIcon(item.icon)
        }))} 
        className="mb-6 sm:mb-8" 
      />

      {/* Social Links */}
      <div className="mb-6 sm:mb-8">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Follow me on
        </h4>
        <SocialLinks 
          links={socialLinks.map(link => ({
            ...link,
            icon: getContactIcon(link.icon)
          }))} 
          size="lg"
          variant="default"
        />
      </div>

      {/* Availability Status */}
      <div className="p-4 sm:p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
            Available for work
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4">
          I'm currently available for freelance projects and full-time opportunities. 
          Let's discuss your next project!
        </p>
        
        {/* Download CV Button */}
        <a
          href={personalInfo.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          download="Sikandar_Zubair_CV.pdf"
          className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ContactInfoSection;
