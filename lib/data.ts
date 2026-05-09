export const profile = {
  name: "Ayushi Yadav",
  role: "Software Engineer",
  company: "MAQ Software",
  location: "Noida, Uttar Pradesh, India",
  email: "ayushi70077@gmail.com",
  phone: "+91-8960246793",
  linkedin: "https://www.linkedin.com/in/ayushi-yadav-8393b3261/",
  github: "https://github.com/ayushi70077",
  leetcode: "https://leetcode.com/u/ayushi70077/",
  resumeUrl: "/resume.pdf",
  status: "Open to front-end and full-stack opportunities",
  taglines: [
    "Building enterprise web apps with React & .NET",
    "Shipping production features end-to-end",
    "Designing clean APIs and faster UIs",
    "From SQL Server to Azure App Services",
  ],
  summary:
    "Software Engineer with 1+ year of experience building enterprise-grade web applications across the full stack — React, TypeScript, ASP.NET Core (C#), and SQL Server. I own features end-to-end, design RESTful APIs, and ship to production on Microsoft Azure with Azure DevOps CI/CD. I care about clean architecture, fast UIs, and working tightly with cross-functional teams in Agile environments.",
  highlights: [
    { value: "1+", label: "Years of experience" },
    { value: "10+", label: "Production features shipped" },
    { value: "20%", label: "Faster API responses" },
    { value: "30%", label: "Fewer reported UI bugs" },
  ],
};

export type Skill = {
  name: string;
  level: number; // 0-100
  years?: number;
};

export type SkillCategory = {
  name: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    description: "Building responsive, accessible, type-safe UIs.",
    skills: [
      { name: "React.js", level: 90, years: 2 },
      { name: "TypeScript", level: 85, years: 1 },
      { name: "JavaScript (ES6+)", level: 90, years: 2 },
      { name: "Redux", level: 80, years: 1 },
      { name: "HTML5", level: 95, years: 3 },
      { name: "CSS3", level: 90, years: 3 },
      { name: "Bootstrap", level: 85, years: 2 },
      { name: "Electron", level: 75, years: 1 },
    ],
  },
  {
    name: "Backend",
    description: "Designing clean RESTful APIs and service layers.",
    skills: [
      { name: "ASP.NET Core", level: 85, years: 1 },
      { name: "C#", level: 85, years: 1 },
      { name: ".NET", level: 80, years: 1 },
      { name: "RESTful APIs", level: 85, years: 1 },
      { name: "Axios", level: 85, years: 2 },
    ],
  },
  {
    name: "Databases",
    description: "Modeling data and writing performant queries.",
    skills: [
      { name: "SQL Server", level: 85, years: 1 },
      { name: "SQL", level: 85, years: 2 },
      { name: "SSMS", level: 80, years: 1 },
      { name: "MongoDB", level: 70, years: 1 },
    ],
  },
  {
    name: "Cloud & DevOps",
    description: "Shipping safely with CI/CD on Azure.",
    skills: [
      { name: "Microsoft Azure", level: 75, years: 1 },
      { name: "Azure App Services", level: 75, years: 1 },
      { name: "Azure Functions", level: 70, years: 1 },
      { name: "Azure DevOps (CI/CD)", level: 80, years: 1 },
      { name: "Git", level: 90, years: 3 },
    ],
  },
  {
    name: "Tools & Workflow",
    description: "Day-to-day toolbelt for quality and velocity.",
    skills: [
      { name: "Visual Studio", level: 85, years: 2 },
      { name: "VS Code", level: 95, years: 3 },
      { name: "Postman", level: 85, years: 2 },
      { name: "Insomnia", level: 75, years: 1 },
      { name: "Swagger", level: 80, years: 1 },
      { name: "Jira", level: 80, years: 1 },
    ],
  },
  {
    name: "Languages",
    description: "Comfortable across multiple programming languages.",
    skills: [
      { name: "C#", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "C++", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  project: string;
  stack: string[];
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "MAQ Software",
    role: "Software Engineer",
    project: "Enterprise Web Application",
    stack: ["React", "TypeScript", "ASP.NET Core", "C#", "SQL Server", "Azure DevOps"],
    location: "Noida, Uttar Pradesh, IN",
    start: "Aug 2025",
    end: "Present",
    bullets: [
      "Owned end-to-end development across the React + TypeScript frontend and ASP.NET Core (C#) backend, delivering 10+ production features aligned with enterprise clean architecture standards.",
      "Designed and maintained RESTful APIs and SQL Server database objects, reducing average API response time by 20% through optimized query structures and a layered service design.",
      "Led multi-repository integration and deployment workflows on Azure DevOps CI/CD with Git, coordinating with cross-functional teams to achieve zero-downtime releases on Azure App Services.",
    ],
  },
  {
    company: "MAQ Software",
    role: "Associate Software Engineer",
    project: "Captura Workflow Application",
    stack: ["React", "Electron", "JavaScript", "HTML", "CSS"],
    location: "Noida, Uttar Pradesh, IN",
    start: "Jan 2025",
    end: "Jul 2025",
    bullets: [
      "Enhanced frontend UI components and styling in a React-based Electron desktop application, improving visual consistency across 15+ screens and accelerating user task completion.",
      "Identified and resolved critical UI defects by validating frontend behavior against backend API contracts, reducing reported UI bugs by approximately 30% during the engagement.",
      "Refined reusable React components and applied responsive styling best practices, contributing to a measurably smoother workflow experience for end users.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full Stack" | "Frontend" | "Backend";
  featured?: boolean;
  stack: string[];
  highlights: string[];
  links?: { live?: string; github?: string };
  period: string;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-website",
    title: "E-Commerce Website",
    tagline: "Responsive React storefront backed by a C# .NET API",
    description:
      "A full-stack shopping experience covering product browsing, cart management, and order processing. Implemented Redux for predictable global state and used Axios with lazy data loading to cut redundant network calls.",
    category: "Full Stack",
    featured: true,
    stack: ["React.js", "C# .NET", "Redux", "Axios", "Bootstrap", "SQL Server"],
    highlights: [
      "End-to-end browse → cart → checkout flow",
      "Global cart state with Redux for predictable updates",
      "Reduced redundant API calls via lazy-loaded product data",
      "Responsive Bootstrap UI across mobile and desktop",
    ],
    period: "Jun 2024 – Jul 2024",
  },
  {
    slug: "weather-forecast-portal",
    title: "Weather Forecast Portal",
    tagline: "Real-time weather dashboard with multi-city search",
    description:
      "A real-time weather portal showing wind speed, humidity, and rainfall across multiple locations. Integrated a third-party weather API with dynamic search and clean, responsive styling.",
    category: "Frontend",
    featured: true,
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    highlights: [
      "Live wind, humidity, and rainfall metrics",
      "Dynamic city search with instant results",
      "Mobile-first responsive layout",
    ],
    period: "Jan 2024 – Feb 2024",
  },
  {
    slug: "captura-workflow",
    title: "Captura Workflow (MAQ Software)",
    tagline: "React + Electron desktop application",
    description:
      "Production desktop application built with React and Electron. Refined reusable components, fixed critical UI defects against backend API contracts, and improved visual consistency across 15+ screens.",
    category: "Frontend",
    stack: ["React", "Electron", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Improved visual consistency across 15+ screens",
      "Reduced reported UI bugs by ~30%",
      "Reusable component refactor for faster iteration",
    ],
    period: "Jan 2025 – Jul 2025",
  },
  {
    slug: "enterprise-web-app",
    title: "Enterprise Web Application (MAQ Software)",
    tagline: "Full-stack React + ASP.NET Core platform on Azure",
    description:
      "Enterprise-grade web application built end-to-end with React, TypeScript, and ASP.NET Core. Designed RESTful APIs and SQL Server objects, and led multi-repo CI/CD on Azure DevOps for zero-downtime releases.",
    category: "Full Stack",
    featured: true,
    stack: ["React", "TypeScript", "ASP.NET Core", "C#", "SQL Server", "Azure"],
    highlights: [
      "Delivered 10+ production features end-to-end",
      "Cut average API response time by 20%",
      "Zero-downtime Azure App Service releases",
    ],
    period: "Aug 2025 – Present",
  },
];

export const education = {
  degree: "Bachelor of Technology, Computer Science",
  school: "Ajay Kumar Garg Engineering College, Ghaziabad",
  period: "Nov 2021 – Jun 2025",
  cgpa: "8.3",
};

export const certifications = [
  {
    name: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
    issuer: "Microsoft",
  },
];
