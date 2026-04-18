import React, { memo } from 'react';
import { education, certifications } from '../../constants';

const EducationCertifications = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white">
          Education & Certifications
        </h3>
        <span className="text-xs font-semibold text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20">
          Growth
        </span>
      </div>

      <div className="rounded-2xl bg-white dark:bg-dark-800 shadow-xl border border-gray-100/70 dark:border-dark-700/70 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Formal Education</h4>
          <div className="flex items-center text-sm text-primary-600 dark:text-primary-300 font-semibold">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Foundations
          </div>
        </div>

        {education.map((edu, index) => (
          <div key={index} className="rounded-xl bg-primary-50/70 dark:bg-dark-700/60 p-5 border border-primary-100/80 dark:border-primary-900/30">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div>
                <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">{edu.year}</p>
                <h5 className="mt-1 text-xl font-heading font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/70 dark:bg-dark-800/80 text-primary-700 dark:text-primary-200">
                Academia
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}

        {certifications.length > 0 && (
          <>
            <div className="pt-2 border-t border-gray-100 dark:border-dark-700"></div>

            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Certifications</h4>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-300 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20">
                Proof of skill
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="rounded-xl border border-gray-100 dark:border-dark-700 p-4 bg-white/70 dark:bg-dark-800/80 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold">{cert.issuer}</p>
                      <h5 className="mt-1 text-base font-heading font-semibold text-gray-900 dark:text-white">
                        {cert.name}
                      </h5>
                    </div>
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-300 px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20">
                      {cert.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    {cert.credential}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(EducationCertifications);
