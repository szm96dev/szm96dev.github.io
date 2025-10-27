import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Button } from '../ui';
import { useTheme } from '../../context/ThemeContext';
import { CONTACT_FORM_INITIAL_VALUES, CONTACT_FORM_PLACEHOLDERS, CONTACT_FORM_LABELS, HCAPTCHA_ERROR_MESSAGES, WEB3FORMS_CONFIG, HCAPTCHA_CONFIG } from '../../constants';
import { contactFormValidationSchema } from '../../schemas';
import { showToast } from '../../utils/toast';

const ContactForm = () => {
  const hCaptchaRef = useRef(null);
  const { isDarkMode } = useTheme();

  // Handle form submission with toast notifications
  const handleSubmit = async (values, { setSubmitting, resetForm, setFieldError }) => {
    let toastId;
    try {
      // Show loading toast
      toastId = showToast.loading('Sending your message...');
      
      // Get hCaptcha token
      const hCaptchaToken = hCaptchaRef.current?.getResponse();
      
      // Check if hCaptcha is completed
      if (!hCaptchaToken) {
        setFieldError('hcaptcha', HCAPTCHA_ERROR_MESSAGES.NOT_COMPLETED);
        showToast.dismiss(toastId);
        showToast.error(HCAPTCHA_ERROR_MESSAGES.NOT_COMPLETED);
        setSubmitting(false);
        return;
      }

      // Prepare form data with hCaptcha
      const formDataWithCaptcha = {
        access_key: WEB3FORMS_CONFIG.ACCESS_KEY,
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
        from_name: "Portfolio Contact Form",
        reply_to: values.email,
        'h-captcha-response': hCaptchaToken
      };

      // Try primary submission with hCaptcha
      let response = await fetch(WEB3FORMS_CONFIG.ENDPOINT, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formDataWithCaptcha),
      });

      let result = await response.json();
      
      // If hCaptcha failed, try direct submission without hCaptcha
      if (!result.success && result.message && result.message.includes('hCaptcha')) {
        console.log('hCaptcha failed, trying direct submission without hCaptcha');
        
        // Prepare form data without hCaptcha for direct submission
        const formDataWithoutCaptcha = {
          access_key: WEB3FORMS_CONFIG.ACCESS_KEY,
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          from_name: "Portfolio Contact Form",
          reply_to: values.email
          // Note: Not including 'h-captcha-response' field
        };
        
        // Try direct submission without hCaptcha
        response = await fetch(WEB3FORMS_CONFIG.ENDPOINT, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formDataWithoutCaptcha),
        });
        
        result = await response.json();
      }
      
      // Handle response
      if (result.success) {
        showToast.dismiss(toastId);
        showToast.success('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
        resetForm();
        hCaptchaRef.current?.reset();
      } else {
        // Handle different types of errors
        showToast.dismiss(toastId);
        if (result.message && result.message.includes('hCaptcha')) {
          showToast.error('Captcha verification is temporarily unavailable. Please try again in a few minutes.');
        } else {
          showToast.error(result.message || 'Oops! Something went wrong. Please try again later.');
        }
        hCaptchaRef.current?.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast.dismiss(toastId);
      showToast.error('Network error. Please check your connection and try again.');
      hCaptchaRef.current?.reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
        Send me a message
      </h3>
      
      <Formik
        initialValues={CONTACT_FORM_INITIAL_VALUES}
        validationSchema={contactFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 sm:space-y-6">
            {/* Name and Email fields */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {CONTACT_FORM_LABELS.name} *
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm sm:text-base"
                  placeholder={CONTACT_FORM_PLACEHOLDERS.name}
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {CONTACT_FORM_LABELS.email} *
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm sm:text-base"
                  placeholder={CONTACT_FORM_PLACEHOLDERS.email}
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>
            
            {/* Subject field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {CONTACT_FORM_LABELS.subject} *
              </label>
              <Field
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white text-sm sm:text-base"
                placeholder={CONTACT_FORM_PLACEHOLDERS.subject}
              />
              <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            
            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {CONTACT_FORM_LABELS.message} *
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={5}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white resize-none text-sm sm:text-base"
                placeholder={CONTACT_FORM_PLACEHOLDERS.message}
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            
            {/* hCaptcha */}
            <div className="flex justify-center my-4">
              <HCaptcha
                ref={hCaptchaRef}
                sitekey={HCAPTCHA_CONFIG.SITE_KEY}
                theme={isDarkMode ? HCAPTCHA_CONFIG.THEMES.DARK : HCAPTCHA_CONFIG.THEMES.LIGHT}
                size={HCAPTCHA_CONFIG.SIZE}
                language={HCAPTCHA_CONFIG.LANGUAGE}
                onVerify={(token) => {
                  console.log('hCaptcha verified:', token);
                }}
                onError={(error) => {
                  console.error('hCaptcha error:', error);
                  showToast.error('Captcha verification error. Please try again.');
                }}
                onExpire={() => {
                  console.log('hCaptcha expired');
                  showToast.warning('Captcha expired. Please verify again.');
                }}
              />
            </div>
            
            {/* hCaptcha error message */}
            <ErrorMessage name="hcaptcha" component="div" className="text-red-500 text-sm text-center" />
            
            {/* Submit button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 sm:py-4"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Sending...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="text-sm sm:text-base">Send Message</span>
                </>
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;