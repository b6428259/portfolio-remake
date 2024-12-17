'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { personalInfo } from '@/lib/constants';

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Text reveal animation
const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Item variants for elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Image float animation
const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Hi, I&apos;m{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {personalInfo.name}
              </motion.span>
            </motion.h1>
            
            <motion.h2
              variants={textVariants}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8"
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                { href: personalInfo.github, icon: FaGithub, label: "GitHub" },
                { href: personalInfo.linkedin, icon: FaLinkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: HiMail, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={floatVariants}
            animate="animate"
          >
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}