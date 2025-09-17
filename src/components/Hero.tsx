'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="section-padding min-h-screen flex items-center">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-blue-600">Hillary</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Full-stack developer passionate about creating modern web applications 
            with React, TypeScript, and cutting-edge technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}