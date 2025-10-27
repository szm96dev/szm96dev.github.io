// My projects - the stuff I've built
export const projects = [
  {
    id: 1,
    title: 'MarketHub',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and wishlist functionality. Built with Redux state management, Material-UI components, and form validation.',
    technologies: ['React', 'Redux', 'Material-UI', 'Formik', 'Yup', 'Axios', 'Redux Persist'],
    category: 'react',
    featured: true,
    liveDemo: 'https://szm-markethub.netlify.app',
    github: 'https://github.com/szm96dev/MarketHub',
    preview: '/project-previews/markethub-preview.png'
  },
  {
    id: 2,
    title: 'TaskFlow',
    description: 'A productivity-focused task management application with smart filtering, categorization, and real-time statistics. Features custom hooks, localStorage persistence, and responsive design with Heroicons.',
    technologies: ['React', 'TailwindCSS', 'Heroicons', 'Custom Hooks', 'Local Storage', 'Responsive Design'],
    category: 'react',
    featured: true,
    liveDemo: 'https://sz-taskflow.netlify.app',
    github: 'https://github.com/szm96dev/taskflow',
    preview: '/project-previews/taskflow-preview.png'
  },
  {
    id: 3,
    title: 'Easy Split',
    description: 'A comprehensive expense splitting application for groups with smart calculations, balance tracking, and settlement management. Features Redux state management, form validation, and persistent data storage.',
    technologies: ['React', 'Redux Toolkit', 'Formik', 'Yup', 'TailwindCSS', 'Redux Persist'],
    category: 'react',
    featured: true,
    liveDemo: 'https://sz-easysplit.netlify.app',
    github: 'https://github.com/szm96dev/easy-split',
    preview: '/project-previews/easy-split-preview.png'
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'A responsive portfolio website showcasing projects, skills, and experience. Built with modern React practices, performance optimizations, lazy loading, and smooth animations.',
    technologies: ['React', 'TailwindCSS', 'Context API', 'Lazy Loading', 'Performance Optimization', 'Responsive Design'],
    category: 'react',
    featured: true,
    liveDemo: 'https://szm96dev.github.io',
    github: 'https://github.com/szm96dev/szm96dev.github.io',
    preview: '/project-previews/portfolio-preview.png'
  },
  {
    id: 5,
    title: 'CineSearch',
    description: 'A modern movie discovery platform with real-time search, detailed movie information, and favorites management. Features OMDb API integration, dark/light mode, and responsive design with smooth animations.',
    technologies: ['React', 'TailwindCSS', 'Axios', 'OMDb API', 'React Router', 'Local Storage'],
    category: 'react',
    featured: false,
    liveDemo: 'https://sm-cinesearch.netlify.app',
    github: 'https://github.com/szm96dev/cinesearch',
    preview: '/project-previews/cinesearch-preview.png'
  }
];

export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'react', name: 'React Projects' },
  { id: 'javascript', name: 'JavaScript Projects' },
  { id: 'web', name: 'Web Applications' }
];
