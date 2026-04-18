import React, { memo, useMemo } from 'react';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const SectionHeader = ({
  pill,
  title,
  description,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';
  const wrapperClasses = useMemo(() => cx(
    'space-y-3',
    isCenter ? 'text-center mx-auto' : 'text-left',
    className
  ), [className, isCenter]);

  return (
    <div className={wrapperClasses}>
      {pill && (
        <div className={cx(
          'inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-dark-800/80 backdrop-blur text-primary-700 dark:text-primary-300 text-sm font-semibold',
          isCenter ? 'mx-auto' : ''
        )}>
          {pill}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className={cx(
          'text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl',
          isCenter ? 'mx-auto' : ''
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default memo(SectionHeader);
