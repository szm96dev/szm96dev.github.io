import React, { memo, useMemo } from 'react';

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

  const style = useMemo(() => ({
    animationDelay: `${delay}ms`
  }), [delay]);
  
  // Skip animation if needed for performance
  if (skipAnimation || delay === 0) {
    return <>{children}</>;
  }
  
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

export default memo(AnimatedText);
