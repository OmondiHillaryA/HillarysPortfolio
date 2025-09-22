'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="section-padding min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"
          >
            👋 Welcome! I'm <span className="text-orange-500">Hillary</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          > 
          Professional Summary: Versatile professional with expertise in customer support, marketing, and training, plus technical skills in HTML/CSS, C, and Python. Experienced in high-volume customer interactions, targeted marketing strategies, and team training programs. Seeking to bridge the gap between users, technology, and business growth while continuing to develop problem-solving skills.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com"
              className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full hover:from-orange-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-pink-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
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