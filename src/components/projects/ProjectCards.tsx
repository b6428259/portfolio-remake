'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import type { Project } from '@/lib/constants';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Card hover animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  // Image hover animation
  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  // Tag animation
  const tagVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, rotate: 3 },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <motion.div 
        className="relative h-48 sm:h-64 overflow-hidden"
        variants={imageVariants}
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.image || '/images/project-placeholder.png'}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent 
          group-hover:from-primary/20 transition-all duration-300" />
      </motion.div>

      <div className="relative p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              variants={tagVariants}
              initial="rest"
              whileHover="hover"
              transition={{ duration: 0.2 }}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground
                hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Project Title with hover effect */}
        <motion.h3
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
        >
          {project.title}
        </motion.h3>
        
        <p className="text-muted-foreground mb-4">
          {project.description}
        </p>

        {/* Links with hover animations */}
        <div className="flex space-x-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span>Code</span>
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <HiExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}