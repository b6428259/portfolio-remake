export const personalInfo = {
    name: "Ronnasit Tuayton",
    title: "Full-Stack Developer",
    email: "ronnasit.tuayton@gmail.com",
    github: "https://github.com/b6428259",
    linkedin: "https://www.linkedin.com/in/ronnasit/",
    avatar: "https://i.imgur.com/pyJNsAn.png",
    bio: "A passionate Full-Stack Developer specializing in building modern web applications with cutting-edge technologies."
};


export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    demo?: string; // เพิ่ม demo link (optional)
    featured: boolean;
    link?: string; // รักษา link เดิมไว้สำหรับ backward compatibility
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Kongpatana Workshop Viewer",
        description: "Advanced 3D model viewer with real-time manipulation, dynamic lighting, and responsive design.",
        image: "https://i.imgur.com/zkxrSDh.png",
        demo: "https://kongpatana-workshop-model.netlify.app/", // ใช้ demo แทน link
        tags: ["React", "Three.js", "WebGL", "Tailwind CSS"],
        github: "https://github.com/b6428259/3d-model",
        featured: true
    },
    {
        id: 2,
        title: "SpotUp",
        description: "Event ticketing platform with secure payment processing and ticket scanning system.",
        image: "https://i.imgur.com/smwHaSE.png",
        demo: "https://spotup.shop", // ใช้ demo แทน link
        tags: ["React", "Spring Boot", "MySQL", "Stripe"],
        github: "https://github.com/b6428259/my-ticketing-system",
        featured: true
    },
    {
        id: 3,
        title: "MusicBeats",
        description: "merges the styles of https://www.musicarms.net and https://www.beatsbydre.com/ into a single webpage.",
        image: "https://i.imgur.com/AnwBbXW.png",
        demo: "https://b6428259.github.io/MusicBeats/", // ใช้ demo แทน link
        tags: ["HTML", "CSS", "JavaScript"], // แก้ไข tags ให้ถูกต้องตามโปรเจค
        github: "https://github.com/b6428259/MusicBeats",
        featured: true
    },
];

export const skills = [
     {
    category: "Frontend",
    items: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextjs", color: "#000000" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#38B2AC" },
      { name: "Three.js", icon: "threejs", color: "#000000" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css3", color: "#1572B6" },
      { name: "Figma", icon: "figma", color: "#F24E1E" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Express", icon: "express", color: "#000000" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Spring Boot", icon: "spring", color: "#6DB33F" },
      { name: "Java", icon: "java", color: "#007396" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "PostgreSQL", icon: "postgresql", color: "#336791" },
      { name: "MySQL", icon: "mysql", color: "#00758F" },
      { name: "REST API", icon: "rest", color: "#E44D26" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Google Cloud", icon: "gcp", color: "#4285F4" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub Actions", icon: "githubactions", color: "#2088FF" },
      { name: "CI/CD", icon: "cicd", color: "#4CAF50" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
      { name: "Kubernetes", icon: "kubernetes", color: "#326CE5" },
      { name: "Vercel", icon: "vercel", color: "#000000" }
    ]
  },
    {
  category: "Languages & Tools",
  items: [
    {
      name: "JavaScript",
      icon: "javascript",
      color: "#F7DF1E"
    },
    {
      name: "Python",
      icon: "python",
      color: "#3776AB"
    },
    {
      name: "SQL",
      icon: "sql",
      color: "#003B57"
    },
    {
      name: "Postman",
      icon: "postman",
      color: "#FF6C37"
    },
    {
      name: "Figma",
      icon: "figma",
      color: "#F24E1E"
    }
  ]
}

];