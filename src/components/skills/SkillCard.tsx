'use client';

import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  level: number;
}

interface SkillCardProps {
  category: string;
  icon: string;
  items: SkillItemProps[];
  index: number;
}

export default function SkillCard({ category, icon, items, index }: SkillCardProps) {
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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

  // Header animation variants
  const headerVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        className="flex items-center gap-3 mb-6"
        variants={headerVariants}
        initial="rest"
        whileHover="hover"
      >
        <motion.span 
          className="text-2xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          {icon}
        </motion.span>
        <h3 className="text-xl font-bold">{category}</h3>
      </motion.div>

      <div className="space-y-4">
        {items.map((skill, idx) => (
          <SkillItem key={skill.name} {...skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillItem({ name, level, index }: SkillItemProps & { index: number }) {
  // Progress bar animation variants
  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        duration: 1,
        delay: index * 0.1,
        ease: "easeInOut"
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-1">
        <motion.span 
          variants={textVariants}
          className="text-sm font-medium text-muted-foreground"
        >
          {name}
        </motion.span>
        <motion.span 
          variants={textVariants}
          className="text-sm font-medium text-muted-foreground"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          variants={barVariants}
          className="h-full bg-primary"
          style={{
            backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)",
            backgroundSize: "1rem 1rem",
          }}
        />
      </div>
    </motion.div>
  );
}