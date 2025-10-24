import React from 'react';
import ExperienceList from './Experience/ExperienceList';
import EducationCertifications from './Experience/EducationCertifications';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in web development, from learning the fundamentals to building real-world applications. 
            Here's my professional experience and educational background.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ExperienceList />
          <EducationCertifications />
        </div>
      </div>
    </section>
  );
};

export default Experience;