import React from 'react';

const Icon = ({ 
  icon: IconComponent, 
  size = 'md',
  className = '',
  color = 'default',
  ...props 
}) => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10'
  };
  
  const colors = {
    default: 'text-gray-600 dark:text-gray-400',
    primary: 'text-primary-600 dark:text-primary-400',
    secondary: 'text-gray-500 dark:text-gray-500',
    success: 'text-green-600 dark:text-green-400',
    danger: 'text-red-600 dark:text-red-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    white: 'text-white',
    current: 'text-current'
  };
  
  if (!IconComponent) return null;
  
  const iconClasses = `${sizes[size]} ${colors[color]} ${className}`;
  
  return (
    <IconComponent className={iconClasses} {...props} />
  );
};

export default Icon;
