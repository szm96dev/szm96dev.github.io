import React from 'react';
import { shouldOpenInNewTab } from '../../utils/helpers';

const ContactInfo = ({ 
  items = [], 
  className = '',
  ...props 
}) => {
  return (
    <div className={`space-y-4 ${className}`} {...props}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-5 h-5 text-primary-600 dark:text-primary-400">
            {item.icon}
          </div>
          {item.link ? (
            <a
              href={item.link}
              className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200"
              target={shouldOpenInNewTab(item.link) ? '_blank' : undefined}
              rel={shouldOpenInNewTab(item.link) ? 'noopener noreferrer' : undefined}
            >
              {item.value}
            </a>
          ) : (
            <span className="text-gray-600 dark:text-gray-300">
              {item.value}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
