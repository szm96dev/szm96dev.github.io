import React from 'react';

const AnimatedText = ({ 
  children, 
  animation = 'fade-in',
  delay = 0,
  className = '',
  skipAnimation = false,
  ...props 
}) => {
  const animations = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
    'bounce': 'animate-bounce',
    'pulse': 'animate-pulse'
  };
  
  // Skip animation if needed for performance
  if (skipAnimation || delay === 0) {
    return <>{children}</>;
  }
  
  const style = {
    animationDelay: `${delay}ms`
  };
  
  return (
    <div 
      className={`${animations[animation]} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedText;