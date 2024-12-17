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
    demo?: string;
    featured: boolean;
    link?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Kongpatana Workshop Viewer",
        description: "Advanced 3D model viewer with real-time manipulation, dynamic lighting, and responsive design.",
        image: "https://i.imgur.com/zkxrSDh.png",
        link: "https://kongpatana-workshop-viewer.vercel.app/",
        tags: ["React", "Three.js", "WebGL", "Tailwind CSS"],
        github: "https://github.com/b6428259/3d-model",
        featured: true
    },
    {
        id: 2,
        title: "SpotUp",
        description: "Event ticketing platform with secure payment processing and ticket scanning system.",
        image: "https://i.imgur.com/smwHaSE.png",
        link: "https://spotup.shop",
        tags: ["React", "Spring Boot", "MySQL", "Stripe"],
        github: "https://github.com/b6428259/my-ticketing-system",
        featured: true
    },
];

export const skills = [
    {
        category: "Frontend",
        items: [
            {
                name: "React",
                icon: "react",
                color: "#61DAFB"
            },
            {
                name: "Next.js",
                icon: "nextjs",
                color: "#000000"
            },
            {
                name: "TypeScript",
                icon: "typescript",
                color: "#3178C6"
            },
            {
                name: "Tailwind CSS",
                icon: "tailwind",
                color: "#38B2AC"
            },
            {
                name: "Three.js",
                icon: "threejs",
                color: "#000000"
            },
        ]
    },
    {
        category: "Backend",
        items: [
            {
                name: "Node.js",
                icon: "nodejs",
                color: "#339933"
            },
            {
                name: "Express",
                icon: "express",
                color: "#000000"
            },
            {
                name: "MongoDB",
                icon: "mongodb",
                color: "#47A248"
            },
            {
                name: "Spring Boot",
                icon: "spring",
                color: "#6DB33F"
            },
            {
                name: "Java",
                icon: "java",
                color: "#007396"
            },
        ]
    },
    {
        category: "Cloud & DevOps",
        items: [
            {
                name: "Google Cloud",
                icon: "gcp",
                color: "#4285F4"
            },
            {
                name: "Docker",
                icon: "docker",
                color: "#2496ED"
            },
            {
                name: "Git",
                icon: "git",
                color: "#F05032"
            },
        ]
    }
];