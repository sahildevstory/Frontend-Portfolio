// data/projects.ts
import { Project } from "@/components/sections/projects/types/projects";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Abroad Education",
    subtitle: "International College Admissions Platform",
    description:
      "A responsive consulting website for international college admissions featuring 50+ videos, 70+ testimonials, and 10+ blogs. Built with an admin panel for managing blog posts, testimonials, and site content updates. Integrated contact workflows allowing prospective students to submit admission inquiries directly through the platform.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=center",
    year: "2025",
    role: "Full Stack Developer",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "ShadCN UI",
      "MERN",
    ],
    live: "https://abroad-education.vercel.app",
    github: "https://github.com/sahildevstory/Abroad-Education",
    featured: true,
    stats: {
      users: "100+",
      videos: "50+",
      testimonials: "70+",
      blogs: "10+",
    },
  },
  {
    id: 2,
    title: "InsightSphere",
    subtitle: "Full-Stack Blogging Platform",
    description:
      "A full-stack blogging platform enabling users to sign up, publish blogs, like, and comment on posts with real-time engagement features. Implemented a rich text editor with image upload support using Multer for seamless media embedding. Built an analytics dashboard to track post engagement metrics including likes, comments, and user interactions. Designed and integrated 15+ REST API endpoints and developed 20+ reusable React UI components.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&crop=center",
    year: "2024",
    role: "Full Stack Developer",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "Multer",
      "REST APIs",
    ],
    live: "https://insightsphere.vercel.app",
    github: "https://github.com/sahildevstory/InsightSphere",
    featured: false,
    stats: {
      endpoints: "15+",
      components: "20+",
    },
  },

  {
    id: 3,
    title: "Real Estate Listings",
    subtitle: "Property Management Platform",
    description:
      "A modern real estate platform allowing users to browse, search, and filter property listings. Features include advanced search with filters, property detail pages, user authentication, and a dashboard for property management. Optimized for performance and SEO.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
    year: "2023",
    role: "Full Stack Developer",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    live: "https://real-estate.vercel.app",
    github: "https://github.com/sahildevstory/Real-Estate-Listings",
    featured: false,
  },
  {
    id: 5,
    title: "UK Career Portal",
    subtitle: "AI-Assisted Job Search Platform",
    description:
      "A career portal supporting 5,000+ users with AI-assisted job search, authentication flows, and automated reminder systems. Built for a UK client with a focus on performance optimization achieving 90+ Lighthouse scores through lazy loading, memoization, and code splitting.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&crop=center",
    year: "2025",
    role: "Frontend Developer",
    technologies: [
      "React.js",
      "Redux",
      "Context API",
      "TailwindCSS",
      "Material UI",
      "ShadCN UI",
      "REST APIs",
      "Lighthouse",
    ],
    live: "https://career-portal.vercel.app",
    github: "https://github.com/sahildevstory/career-portal",
    featured: false,
    stats: {
      users: "5,000+",
      score: "90+",
    },
  },

];

// Helper functions
export const getFeaturedProject = () => {
  return PROJECTS.find((project) => project.featured);
};

export const getOtherProjects = () => {
  return PROJECTS.filter((project) => !project.featured);
};

export const getProjectsByTechnology = (tech: string) => {
  return PROJECTS.filter((project) =>
    project.technologies.some((t) =>
      t.toLowerCase().includes(tech.toLowerCase()),
    ),
  );
};

export const getAllTechnologies = () => {
  return Array.from(new Set(PROJECTS.flatMap((p) => p.technologies)));
};

export const getProjectById = (id: number) => {
  return PROJECTS.find((project) => project.id === id);
};

export const getRecentProjects = (count: number = 3) => {
  return [...PROJECTS]
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, count);
};
