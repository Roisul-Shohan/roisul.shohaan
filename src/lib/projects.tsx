import type { ReactNode } from "react";
import { SiNodedotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  LuGraduationCap,
  LuShoppingCart,
  LuBrain,
  LuBookOpen,
  LuClipboardCheck,
  LuRadiation,
} from "react-icons/lu";

export interface ProjectData {
  title: string;
  summary: string;
  overview: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  glow: string;
  accent: string;
  icon: ReactNode;
  image?: string;
}

export const featuredProjects: ProjectData[] = [
  {
    title: "CareerSphere",
    summary:
      "AI-powered career development platform with interviews, resume tools, and a professional community feed.",
    overview:
      "CareerSphere is a career growth platform built for students and fresh graduates to prepare for interviews, polish resumes, and get practical guidance in one place.",
    features: [
      "AI interview prep and mock questions",
      "Resume builder and cover letter generator",
      "Community feed for career updates",
      "Authentication and role-based workflows",
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
    ],
    liveUrl: "https://career-sphere-alpha.vercel.app/",
    repoUrl: "https://github.com/Roisul-Shohan/CAREER-SPHERE",
    glow: "from-primary/40 via-secondary/20 to-transparent",
    accent: "from-primary to-secondary",
    icon: <LuBrain />,
    image: "/images/projects/career-sphere.png",
  },
  {
    title: "ExamHub",
    summary:
      "Exam practice hub with timed quizzes, results tracking, and study-focused dashboards.",
    overview:
      "ExamHub helps learners practice for tests with a clean quiz flow, progress tracking, and performance insights that make revision less chaotic.",
    features: [
      "Timed mock exams and quiz flow",
      "Score history and progress tracking",
      "Topic-wise practice sets",
      "Dashboard for learner progress",
    ],
    techStack: ["Next.js", "TypeScript", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/Roisul-Shohan",
    glow: "from-secondary/40 via-primary/20 to-transparent",
    accent: "from-secondary to-primary",
    icon: <LuClipboardCheck />,
  },
  {
    title: "Learning Management System",
    summary:
      "Learning platform with student and instructor portals, GridFS video streaming, quizzes, and certificates.",
    overview:
      "This LMS is designed for structured learning delivery with role-specific dashboards, lecture streaming, and course completion support.",
    features: [
      "Student and instructor dashboards",
      "GridFS video streaming with byte-range support",
      "Quizzes and progress tracking",
      "Admin-approved PDF certificates",
    ],
    techStack: ["Node.js", "Express", "MongoDB GridFS", "JWT", "EJS"],
    liveUrl: "https://learning-management-system-1-j300.onrender.com",
    repoUrl: "https://github.com/Roisul-Shohan/Learning-Management-System",
    glow: "from-primary/40 via-secondary/30 to-transparent",
    accent: "from-primary to-secondary-container",
    icon: <LuGraduationCap />,
  },
  {
    title: "Course Management (Java)",
    summary:
      "Role-based university course management app built with Java Servlets, JSP, and MongoDB.",
    overview:
      "A classroom management system for students, teachers, and admins with authentication, course workflows, and clean role separation.",
    features: [
      "Admin, teacher, and student portals",
      "JWT auth and bcrypt password hashing",
      "Course CRUD and role-based access",
      "Docker-friendly deployment setup",
    ],
    techStack: ["Java", "Servlets", "JSP", "MongoDB", "JWT"],
    liveUrl: "https://course-management-system-vdic.onrender.com/",
    repoUrl: "https://github.com/Roisul-Shohan/course-management-system",
    glow: "from-secondary/40 via-primary/20 to-transparent",
    accent: "from-secondary-container to-primary",
    icon: <LuBookOpen />,
  },
];

export const allProjects: ProjectData[] = [
  ...featuredProjects,
  {
    title: "SCATCH — E-Commerce",
    summary:
      "Full-stack e-commerce app with shopping cart, product management, and profile editing.",
    overview:
      "SCATCH is a practical e-commerce system for browsing products, managing a cart, and handling user sessions and uploads.",
    features: [
      "Shopping cart and product management",
      "JWT auth and session handling",
      "Multer image uploads",
      "User profile editing",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Multer"],
    liveUrl: "https://scatch-lac.vercel.app/",
    repoUrl: "https://github.com/Roisul-Shohan/SCATCH",
    glow: "from-secondary/40 via-primary/20 to-transparent",
    accent: "from-secondary to-primary",
    icon: <LuShoppingCart />,
  },
  {
    title: "Course Management 2",
    summary:
      "Second iteration of the course management workflow with improved dashboards and controls.",
    overview:
      "Course Management 2 is a refined version of the university workflow project with cleaner dashboard flows and more flexible role operations.",
    features: [
      "Improved dashboard experience",
      "Role-based course management",
      "Reusable CRUD workflows",
      "Better admin and teacher controls",
    ],
    techStack: ["Java", "JSP", "Servlets", "MongoDB", "JWT"],
    liveUrl: undefined,
    repoUrl: undefined,
    glow: "from-primary/35 via-secondary/20 to-transparent",
    accent: "from-primary-container to-secondary",
    icon: <FaJava />,
  },
  {
    title: "DevPulse Backend",
    summary:
      "Backend API for DevPulse with auth, validation, and data workflows.",
    overview:
      "DevPulse Backend powers the app’s data layer with secured endpoints, clean validation, and API-driven application state.",
    features: [
      "REST API design",
      "Authentication and authorization",
      "Validation and error handling",
      "Database integration",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
    liveUrl: undefined,
    repoUrl: undefined,
    glow: "from-primary/40 via-secondary/20 to-transparent",
    accent: "from-primary to-secondary",
    icon: <SiNodedotjs />,
  },
  {
    title: "ARVision",
    summary: "AR/3D experience for interactive product or scene visualization.",
    overview:
      "ARVision explores augmented reality style interactions and immersive visual presentation for modern web experiences.",
    features: [
      "3D/AR-style visual experiences",
      "Immersive product preview flow",
      "Interactive camera-driven visuals",
      "Smooth motion and scene presentation",
    ],
    techStack: ["Next.js", "Three.js", "TypeScript", "React", "WebGL"],
    liveUrl: undefined,
    repoUrl: undefined,
    glow: "from-secondary/35 via-primary/20 to-transparent",
    accent: "from-secondary to-primary",
    icon: <LuRadiation />,
  },
];
