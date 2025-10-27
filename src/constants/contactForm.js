// Contact form field values
export const CONTACT_FORM_INITIAL_VALUES = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

// Field names for easy reference
export const CONTACT_FORM_FIELD_NAMES = {
  NAME: 'name',
  EMAIL: 'email',
  SUBJECT: 'subject',
  MESSAGE: 'message'
};

// Placeholder text for form fields
export const CONTACT_FORM_PLACEHOLDERS = {
  name: 'Your name',
  email: 'your.email@example.com',
  subject: "What's this about?",
  message: 'Tell me about your project or just say hello!'
};

// Labels for form fields
export const CONTACT_FORM_LABELS = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message'
};

// Web3Forms settings
export const WEB3FORMS_CONFIG = {
  ACCESS_KEY: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
  ENDPOINT: 'https://api.web3forms.com/submit'
};

// hCaptcha settings
export const HCAPTCHA_CONFIG = {
  SITE_KEY: process.env.REACT_APP_HCAPTCHA_SITE_KEY || 'YOUR_HCAPTCHA_SITE_KEY',
  SIZE: 'normal',
  LANGUAGE: 'en',
  THEMES: {
    LIGHT: 'light',
    DARK: 'dark'
  }
};

// Error messages for hCaptcha
export const HCAPTCHA_ERROR_MESSAGES = {
  NOT_COMPLETED: 'Please complete the captcha verification',
  EXPIRED: 'Captcha has expired. Please try again.',
  ERROR: 'Captcha verification failed. Please try again.'
};