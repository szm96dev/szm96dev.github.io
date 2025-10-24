import React from 'react';

const Section = ({ 
  children, 
  id,
  className = '', 
  background = 'default',
  padding = 'default',
  ...props 
}) => {
  const baseClasses = 'w-full';
  
  const backgrounds = {
    default: 'bg-white dark:bg-dark-800',
    primary: 'bg-primary-50 dark:bg-primary-900/20',
    secondary: 'bg-gray-50 dark:bg-gray-900',
    gradient: 'bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800',
    dark: 'bg-dark-900 dark:bg-black'
  };
  
  const paddings = {
    none: '',
    sm: 'py-8',
    default: 'py-16',
    lg: 'py-24',
    xl: 'py-32'
  };
  
  const sectionClasses = `${baseClasses} ${backgrounds[background]} ${paddings[padding]} ${className}`;
  
  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;
