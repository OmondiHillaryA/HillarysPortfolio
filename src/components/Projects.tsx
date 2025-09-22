'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import Link from 'next/link';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="mt-20 text-center">
      <hr className="my-8 border-gray-200 dark:border-gray-700" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
      >
        Featured Projects
      </motion.h2>
      <hr className="my-8 border-gray-200 dark:border-gray-700" />
      
      <div className="flex flex-wrap justify-center items-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link href={`/projects/${project.id}`} className="text-xl font-semibold text-yellow-300 hover:underline">
              {project.title}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}