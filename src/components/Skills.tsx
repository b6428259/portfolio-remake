'use client';

import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiThreedotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiSpring, SiGooglecloud, SiDocker,
  SiGit, SiJavascript, SiHtml5, SiCss3, SiFigma, SiPython, SiPostgresql,
  SiMysql, SiFirebase, SiKubernetes, SiGithubactions, SiVercel
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";        // REST API icon
import { MdBuild } from "react-icons/md";      // CI/CD icon

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
  python: SiPython,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss3,
  figma: SiFigma,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  rest: TbApi,
  gcp: SiGooglecloud,
  docker: SiDocker,
  git: SiGit,
  githubactions: SiGithubactions,
  cicd: MdBuild,
  firebase: SiFirebase,
  kubernetes: SiKubernetes,
  vercel: SiVercel,
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextjs", color: "#000000" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#38B2AC" },
      { name: "Three.js", icon: "threejs", color: "#000000" },
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css3", color: "#1572B6" },
      { name: "Figma", icon: "figma", color: "#F24E1E" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Express", icon: "express", color: "#000000" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "Java", icon: "java", color: "#007396" },
      { name: "Spring Boot", icon: "spring", color: "#6DB33F" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "REST API", icon: "rest", color: "#4A90E2" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Google Cloud", icon: "gcp", color: "#4285F4" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Kubernetes", icon: "kubernetes", color: "#326CE5" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub Actions", icon: "githubactions", color: "#2088FF" },
      { name: "CI/CD", icon: "cicd", color: "#0062AD" },
      { name: "Vercel", icon: "vercel", color: "#000000" },
    ],
  },
];

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
                  if (!Icon) return null;

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
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card hover:bg-card/80 transition-colors duration-300 w-full max-w-[150px] group"
                    >
                      <Icon
                        className="w-12 h-12 transition-colors duration-300"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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
