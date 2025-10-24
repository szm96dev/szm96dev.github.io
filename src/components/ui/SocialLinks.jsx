import React from 'react';
import { shouldOpenInNewTab } from '../../utils/helpers';

const SocialLinks = ({ 
  links = [], 
  size = 'md',
  variant = 'default',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400',
    primary: 'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300',
    white: 'text-white hover:text-primary-300',
    dark: 'text-gray-800 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400'
  };
  
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500';
  
  return (
    <div className={`flex space-x-4 ${className}`} {...props}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target={shouldOpenInNewTab(link.url) ? '_blank' : undefined}
          rel={shouldOpenInNewTab(link.url) ? 'noopener noreferrer' : undefined}
          className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${link.color || ''}`}
          aria-label={link.name}
        >
          <div className="w-6 h-6">
            {link.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
