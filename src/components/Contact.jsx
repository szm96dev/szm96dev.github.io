import React, { useCallback } from 'react';
import { Section } from './ui';
import ContactForm from './Contact/ContactForm';
import ContactInfo from './Contact/ContactInfo';

const Contact = () => {
  const onSubmit = useCallback(async (formData) => {
    // Fake form submission for demo
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
  }, []);


  return (
    <Section id="contact" background="default" padding="default">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
        <div className="w-16 sm:w-24 h-1 bg-primary-600 mx-auto mb-4 sm:mb-6"></div>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to create something amazing!
          </p>
        </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
        <div className="order-2 lg:order-1">
          <ContactForm onSubmit={onSubmit} />
                </div>
        <div className="order-1 lg:order-2">
          <ContactInfo />
        </div>
        </div>
    </Section>
  );
};

export default Contact;
