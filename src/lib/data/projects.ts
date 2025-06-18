export type Technology = {
  name: string
  icon: string
  color: string
}

export type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  thumbnail: string
  images: string[]
  technologies: Technology[]
  links: {
    github?: string
    live?: string
    documentation?: string
  }
  featured: boolean
}

export const technologies: Record<string, Technology> = {
  typescript: {
    name: 'TypeScript',
    icon: 'typescript',
    color: '#007ACC',
  },
  javascript: {
    name: 'JavaScript',
    icon: 'javascript',
    color: '#F7DF1E',
  },
  react: {
    name: 'React',
    icon: 'react',
    color: '#61DAFB',
  },
  nextjs: {
    name: 'Next.js',
    icon: 'nextdotjs',
    color: '#000000',
  },
  nodejs: {
    name: 'Node.js',
    icon: 'nodedotjs',
    color: '#339933',
  },
  express: {
    name: 'Express',
    icon: 'express',
    color: '#000000',
  },
  php: {
    name: 'PHP',
    icon: 'php',
    color: '#777BB4',
  },
  laravel: {
    name: 'Laravel',
    icon: 'laravel',
    color: '#FF2D20',
  },
  mysql: {
    name: 'MySQL',
    icon: 'mysql',
    color: '#4479A1',
  },
  mongodb: {
    name: 'MongoDB',
    icon: 'mongodb',
    color: '#47A248',
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    icon: 'tailwindcss',
    color: '#06B6D4',
  },
  docker: {
    name: 'Docker',
    icon: 'docker',
    color: '#2496ED',
  },
  aws: {
    name: 'AWS',
    icon: 'amazonaws',
    color: '#FF9900',
  },
  firebase: {
    name: 'Firebase',
    icon: 'firebase',
    color: '#FFCA28',
  },
}

// Sample project data
export const projects: Project[] = [
  {
    id: 'gaming-social-platform',
    title: 'Gaming Social Platform',
    description:
      'A social network for gamers to share their achievements and connect with others',
    longDescription:
      'A comprehensive social platform designed specifically for gamers. Users can create profiles, share their gaming achievements, connect with other gamers, and form communities around their favorite games. Features include real-time chat, achievement tracking, game statistics integration, and event organization tools. Built with a modern tech stack to ensure fast performance and real-time updates.',
    thumbnail:
      'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    technologies: [
      technologies.react,
      technologies.nodejs,
      technologies.typescript,
      technologies.mongodb,
      technologies.firebase,
    ],
    links: {
      github: 'https://github.com/Tiago0Br/gaming-social-platform',
      live: 'https://gaming-social.example.com',
    },
    featured: true,
  },
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce platform with cart management, user authentication, and payment integration',
    longDescription:
      'A full-featured e-commerce solution that provides everything needed for online retail. Built with scalability in mind, this platform includes product catalog management, inventory tracking, shopping cart functionality, user account management, order processing, and secure payment integration. The admin dashboard provides comprehensive analytics and sales reports to help business owners make informed decisions.',
    thumbnail:
      'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    technologies: [
      technologies.nextjs,
      technologies.react,
      technologies.nodejs,
      technologies.mongodb,
      technologies.aws,
    ],
    links: {
      github: 'https://github.com/Tiago0Br/e-commerce-platform',
      live: 'https://ecommerce.example.com',
      documentation: 'https://docs.ecommerce.example.com',
    },
    featured: true,
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A productivity app to organize tasks with team collaboration features',
    longDescription:
      'An intuitive task management application designed to boost productivity for individuals and teams. Features include customizable task boards, drag-and-drop organization, deadline tracking, priority levels, team assignment capabilities, and progress visualization. The application includes both web and mobile interfaces for access anywhere, with offline capability and real-time synchronization when back online.',
    thumbnail:
      'https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    technologies: [
      technologies.react,
      technologies.nodejs,
      technologies.express,
      technologies.mongodb,
    ],
    links: {
      github: 'https://github.com/Tiago0Br/task-management-app',
      live: 'https://taskapp.example.com',
    },
    featured: true,
  },
  {
    id: 'restaurant-management-system',
    title: 'Restaurant Management System',
    description:
      'A comprehensive system for restaurant operations including order management and POS',
    longDescription:
      'A complete restaurant management solution that streamlines operations and enhances customer experience. The system includes modules for table management, menu configuration, order taking, kitchen display, inventory management, employee scheduling, customer loyalty programs, and detailed reporting. The point-of-sale (POS) component is designed for speed and ease of use, with support for multiple payment methods and split bills.',
    thumbnail:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    technologies: [
      technologies.php,
      technologies.laravel,
      technologies.mysql,
      technologies.javascript,
    ],
    links: {
      github: 'https://github.com/Tiago0Br/restaurant-management',
    },
    featured: false,
  },
  {
    id: 'weather-forecast-app',
    title: 'Weather Forecast App',
    description:
      'A beautiful and accurate weather forecasting application with interactive maps',
    longDescription:
      'An elegant weather forecasting application that provides accurate, up-to-date weather information for locations worldwide. The app features current conditions, hourly forecasts, 7-day outlook, severe weather alerts, and interactive radar maps. Users can save multiple locations and receive customizable notifications. The UI is designed to be visually appealing while clearly presenting complex meteorological data in an accessible format.',
    thumbnail:
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    technologies: [technologies.react, technologies.javascript, technologies.tailwindcss],
    links: {
      github: 'https://github.com/Tiago0Br/weather-app',
      live: 'https://weather.example.com',
    },
    featured: false,
  },
  {
    id: 'inventory-management-system',
    title: 'Inventory Management System',
    description:
      'A robust system for tracking inventory, processing orders, and generating reports',
    longDescription:
      'A comprehensive inventory management system designed for businesses of all sizes. The application enables efficient tracking of stock levels, automated reordering based on customizable thresholds, barcode/QR code scanning, supplier management, purchase order creation, and warehouse organization. The reporting module provides insights on inventory turnover, value, and forecast projections to optimize inventory investment.',
    thumbnail:
      'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7873559/pexels-photo-7873559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    technologies: [
      technologies.php,
      technologies.laravel,
      technologies.mysql,
      technologies.javascript,
    ],
    links: {
      github: 'https://github.com/Tiago0Br/inventory-system',
    },
    featured: false,
  },
]

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured)
}

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}
