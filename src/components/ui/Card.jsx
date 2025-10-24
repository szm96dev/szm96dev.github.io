import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'rounded-xl border transition-all duration-200';
  
  const variants = {
    default: 'bg-white dark:bg-dark-800 border-gray-200 dark:border-gray-700',
    elevated: 'bg-white dark:bg-dark-800 border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-gray-900/20',
    outlined: 'bg-transparent border-2 border-primary-200 dark:border-primary-800',
    filled: 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800'
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105 dark:hover:shadow-gray-900/30' : '';
  
  const cardClasses = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-6 pb-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardBody = ({ children, className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
