import * as Yup from 'yup';

// Form validation rules
export const contactFormValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'),
  subject: Yup.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters')
    .required('Subject is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .required('Message is required')
});

// Validation rule limits
export const CONTACT_FORM_VALIDATION_RULES = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    PATTERN: /^[a-zA-Z\s]+$/
  },
  EMAIL: {
    PATTERN: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  },
  SUBJECT: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 100
  },
  MESSAGE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 1000
  }
};

// Error messages for form validation
export const CONTACT_FORM_ERROR_MESSAGES = {
  NAME_REQUIRED: 'Name is required',
  NAME_MIN_LENGTH: 'Name must be at least 2 characters',
  NAME_MAX_LENGTH: 'Name must be less than 50 characters',
  NAME_INVALID: 'Name can only contain letters and spaces',
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Invalid email address',
  EMAIL_FORMAT: 'Please enter a valid email address',
  SUBJECT_REQUIRED: 'Subject is required',
  SUBJECT_MIN_LENGTH: 'Subject must be at least 5 characters',
  SUBJECT_MAX_LENGTH: 'Subject must be less than 100 characters',
  MESSAGE_REQUIRED: 'Message is required',
  MESSAGE_MIN_LENGTH: 'Message must be at least 10 characters',
  MESSAGE_MAX_LENGTH: 'Message must be less than 1000 characters'
};