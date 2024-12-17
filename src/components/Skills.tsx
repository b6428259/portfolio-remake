'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/constants';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiThreedotjs,
         SiNodedotjs, SiExpress, SiMongodb, SiSpring,
         SiGooglecloud, SiDocker, SiGit } from 'react-icons/si';
         import { FaJava } from "react-icons/fa";

// Icon mapping
const iconComponents: { [key: string]: React.ElementType } = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  threejs: SiThreedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  spring: SiSpring,
  java: FaJava,
  gcp: SiGooglecloud,
  docker: SiDocker,
  git: SiGit,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          {skills.map((section, sectionIndex) => (
            <div key={section.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.2 }}
                className="text-xl font-semibold mb-6 text-center"
              >
                {section.category}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
              >
                {section.items.map((skill, index) => {
                  const Icon = iconComponents[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card hover:bg-card/80
                        transition-colors duration-300 w-full max-w-[150px] group"
                    >
                      <Icon 
                        className="w-12 h-12 transition-colors duration-300" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground
                        transition-colors duration-300"
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}