'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Projects from './Projects';

import { Project } from '@/types';
import ContactForm from './ContactForm';

interface HeroProps {
  projects: Project[];
}

export default function Hero({ projects }: HeroProps) {
  return (
    <>
      <section className="min-h-[75vh] flex items-center justify-center bg-blue-600" style={{backgroundColor: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-4"
          style={{textAlign: 'center', maxWidth: '56rem', margin: '0 auto', padding: '0 1rem'}}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold mb-6 text-white"
            style={{color: 'white', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 'bold', marginBottom: '1.5rem'}}
          >
            Hi, I'm <span className="text-yellow-300">Hillary</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto"
          > 
          Versatile professional with expertise in customer support, marketing, and training, plus technical skills in HTML/CSS, C, and Python. Experienced in high-volume customer interactions, targeted marketing strategies, and team training programs. Seeking to bridge the gap between users, technology, and business growth while continuing to develop problem-solving skills.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Twitter"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter size={24} />
            </motion.a>
          <Projects projects={projects} />
        </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8"
          >
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-yellow-300 text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
    <hr className="my-8 border-gray-200 dark:border-gray-700" />
    </>
  );
}