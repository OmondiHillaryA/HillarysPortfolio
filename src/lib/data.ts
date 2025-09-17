import { Project, Experience } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/hillary/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    image: '/projects/ecommerce.jpg'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com/hillary/task-manager',
    liveUrl: 'https://taskmanager-demo.vercel.app',
    image: '/projects/taskmanager.jpg'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Modern weather application with location-based forecasts, interactive maps, and responsive design for all devices.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/hillary/weather-app',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    image: '/projects/weather.jpg'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Senior Frontend Developer',
    duration: '2022 - Present',
    description: 'Lead frontend development for enterprise applications using React, TypeScript, and modern web technologies. Mentor junior developers and collaborate with cross-functional teams.',
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS']
  },
  {
    id: '2',
    company: 'Digital Agency Co.',
    position: 'Full Stack Developer',
    duration: '2020 - 2022',
    description: 'Developed and maintained client websites and web applications. Worked with various technologies and frameworks to deliver high-quality solutions.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker']
  },
  {
    id: '3',
    company: 'Startup Ventures',
    position: 'Junior Developer',
    duration: '2019 - 2020',
    description: 'Started career building responsive websites and learning modern development practices. Contributed to multiple projects and gained experience in agile development.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git']
  }
];