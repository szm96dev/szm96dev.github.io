import { personalInfo } from './personalInfo';

// Menu items for the navbar
export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

// How to reach me
export const contactInfo = [
  {
    icon: 'email',
    title: 'Email',
    value: personalInfo.email,
    link: personalInfo.emailUrl
  },
  {
    icon: 'phone',
    title: 'Phone',
    value: personalInfo.phone,
    link: personalInfo.phoneUrl
  },
  {
    icon: 'location',
    title: 'Location',
    value: personalInfo.location,
    link: personalInfo.locationUrl
  }
];

export const socialLinks = [
  {
    name: 'GitHub',
    icon: 'github',
    url: personalInfo.githubUrl,
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: personalInfo.linkedinUrl,
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  }
];

// Footer links
export const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

export const footerSocialLinks = [
  {
    name: 'GitHub',
    icon: 'github',
    url: personalInfo.githubUrl
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: personalInfo.linkedinUrl
  },
  {
    name: 'Email',
    icon: 'email',
    url: personalInfo.emailUrl
  }
];
