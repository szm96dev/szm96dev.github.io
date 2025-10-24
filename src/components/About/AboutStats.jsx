import React from 'react';

const AboutStats = () => {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Available' }
  ];

  return (
    <div className="space-y-8">
      {/* Skills Visualization */}
      <div className="relative">
        <div className="w-full h-96 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 dark:from-dark-700 dark:to-dark-600 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 rounded-lg bg-white dark:bg-dark-800 mx-auto mb-4 flex items-center justify-center shadow-lg">
              <svg className="w-16 h-16 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">Technical Skills</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 dark:bg-dark-700 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStats;
