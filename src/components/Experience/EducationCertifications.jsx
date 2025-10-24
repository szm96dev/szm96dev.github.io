import React from 'react';
import { education, certifications } from '../../constants';

const EducationCertifications = () => {
  return (
    <div>
      <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-8">
        Education & Certifications
      </h3>
      
      <div className="space-y-8">
        {/* Education */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Education
          </h4>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-md">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h5>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {edu.institution} • {edu.year}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Certifications
          </h4>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-lg p-4 shadow-md">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h5>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {cert.issuer} • {cert.year}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {cert.credential}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCertifications;
