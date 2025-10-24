import React from 'react';
import AboutContent from './About/AboutContent';
import AboutStats from './About/AboutStats';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AboutContent />
          <AboutStats />
        </div>
      </div>
    </section>
  );
};

export default About;
