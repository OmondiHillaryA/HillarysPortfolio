
'use client';

import { projects } from '@/lib/data';
import { Project } from '@/types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-8 max-w-4xl">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">{project.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">{project.description}</p>
      
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-center space-x-6 mb-12">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub size={24} />
            <span className="text-lg">Code</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            aria-label={`View ${project.title} live demo`}
          >
            <FaExternalLinkAlt size={24} />
            <span className="text-lg">Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}