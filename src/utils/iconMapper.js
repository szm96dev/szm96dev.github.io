import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiReactrouter, 
  SiFigma,
  SiGit,
  SiGithub,
  SiNpm,
  SiWebpack
} from 'react-icons/si';
import { 
  CodeBracketIcon, 
  PaintBrushIcon, 
  CpuChipIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

// Maps skill names to their icons
export const getSkillIcon = (iconName) => {
  const iconMap = {
    'SiReact': SiReact,
    'SiJavascript': SiJavascript,
    'SiHtml5': SiHtml5,
    'SiCss3': SiCss3,
    'SiTailwindcss': SiTailwindcss,
    'SiReactrouter': SiReactrouter,
    'SiFigma': SiFigma,
    'SiGit': SiGit,
    'SiGithub': SiGithub,
    'SiNpm': SiNpm,
    'SiWebpack': SiWebpack,
    'CodeBracketIcon': CodeBracketIcon,
    'CpuChipIcon': CpuChipIcon,
    'DevicePhoneMobileIcon': DevicePhoneMobileIcon,
    'GlobeAltIcon': GlobeAltIcon,
    'DocumentTextIcon': DocumentTextIcon,
    'CheckCircleIcon': CheckCircleIcon,
    'PaintBrushIcon': PaintBrushIcon,
    'SparklesIcon': SparklesIcon,
    'MagnifyingGlassIcon': MagnifyingGlassIcon
  };
  return iconMap[iconName] || CodeBracketIcon;
};

// Returns colors for different skill levels
export const getSkillLevelColor = (level) => {
  switch (level) {
    case 'Expert':
      return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20';
    case 'Advanced':
      return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20';
    case 'Intermediate':
      return 'text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20';
    case 'Beginner':
      return 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20';
    default:
      return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/20';
  }
};

// Maps contact info to their icons
export const getContactIcon = (iconName) => {
  const iconMap = {
    'email': (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'phone': (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    'location': (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    'github': (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
      </svg>
    ),
    'linkedin': (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
      </svg>
    )
  };
  return iconMap[iconName] || iconMap['email'];
};
