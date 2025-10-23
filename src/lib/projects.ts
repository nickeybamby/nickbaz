export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link: string;
  metrics?: string[];
  client?: string;
  duration?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    description:
      "Led a complete redesign of a high-traffic e-commerce platform, resulting in 40% increase in conversion rates and improved user experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tags: ["React", "Next.js", "TypeScript", "Project Management"],
    category: "Frontend Development",
    link: "/projects/ecommerce-redesign",
    metrics: [
      "40% conversion increase",
      "60% faster load times",
      "95% mobile score",
      "99.9% uptime",
    ],
    client: "Tech Retail Co.",
    duration: "6 months",
  },
  {
    id: 2,
    title: "Agile Transformation Initiative",
    description:
      "Successfully transformed a traditional waterfall development team to Agile methodology, improving delivery time by 60% and team satisfaction.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    tags: ["Agile", "Scrum", "Team Leadership", "Process Improvement"],
    category: "Project Management",
    link: "/projects/agile-transformation",
    metrics: [
      "60% faster delivery",
      "90% team satisfaction",
      "Zero missed deadlines",
      "100% adoption rate",
    ],
    client: "Enterprise Solutions Inc.",
    duration: "4 months",
  },
  {
    id: 3,
    title: "Healthcare Dashboard Application",
    description:
      "Built a comprehensive healthcare dashboard for patient management with real-time data visualization and analytics capabilities.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
    tags: ["React", "D3.js", "Healthcare", "Data Visualization"],
    category: "Frontend Development",
    link: "/projects/healthcare-dashboard",
    metrics: [
      "Real-time updates",
      "HIPAA compliant",
      "95% user satisfaction",
      "60% time savings",
    ],
    client: "MedTech Solutions",
    duration: "8 months",
  },
  {
    id: 4,
    title: "Cross-Functional Team Leadership",
    description:
      "Led a distributed team of 12 developers, designers, and QA engineers across multiple time zones to deliver a complex SaaS platform.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
    tags: [
      "Team Leadership",
      "Remote Management",
      "SaaS",
      "Stakeholder Management",
    ],
    category: "Project Management",
    link: "/projects/saas-platform",
    metrics: [
      "12 team members",
      "3 time zones",
      "98% on-time delivery",
      "Zero turnover",
    ],
    client: "CloudTech Corp",
    duration: "12 months",
  },
  {
    id: 5,
    title: "Design System Implementation",
    description:
      "Created and implemented a comprehensive design system that reduced development time by 50% and improved consistency across products.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop",
    tags: ["Design Systems", "Figma", "Storybook", "Component Library"],
    category: "Frontend Development",
    link: "/projects/design-system",
    metrics: [
      "50% faster development",
      "100% consistency",
      "40 components",
      "Zero design debt",
    ],
    client: "Digital Agency",
    duration: "3 months",
  },
  {
    id: 6,
    title: "Digital Transformation Program",
    description:
      "Managed a $2M digital transformation program for a Fortune 500 company, coordinating multiple vendors and internal teams.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tags: [
      "Program Management",
      "Digital Transformation",
      "Vendor Management",
      "Enterprise",
    ],
    category: "Project Management",
    link: "/projects/digital-transformation",
    metrics: [
      "$2M budget",
      "40% cost savings",
      "500% ROI",
      "Zero security incidents",
    ],
    client: "Fortune 500 Company",
    duration: "18 months",
  },
];

export function findProjectBySlug(slug: string) {
  return projects.find((p) => p.link.endsWith(`/${slug}`));
}
