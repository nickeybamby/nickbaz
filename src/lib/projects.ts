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
  gallery?: { src: string; caption: string }[];
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
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=500&fit=crop",
        caption:
          "Homepage redesign highlighting the new product discovery flow.",
      },
      {
        src: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=500&fit=crop",
        caption:
          "Responsive product listing with improved filtering and sorting.",
      },
      {
        src: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800&h=500&fit=crop",
        caption: "Checkout funnel optimized for conversions and clarity.",
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
        caption: "Design system components used across the platform.",
      },
    ],
  },
  {
    id: 2,
    title: "NovaLaunch",
    description:
      "Led the end-to-end delivery of the project — defining requirements, coordinating cross-functional teams, managing timelines, and ensuring the platform met usability, performance, and scalability standards. Through structured planning, clear stakeholder communication, and disciplined execution, the project was completed successfully and delivered a reliable, user-centric solution that empowers creators and startups to launch smarter.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    tags: ["Agile", "Scrum", "Team Leadership", "Stakeholder Management", "Strategic Planning"],
    category: "Project Management",
    link: "/projects/novalaunch",
    metrics: [
      "60% faster delivery",
      "90% team satisfaction",
      "Zero missed deadlines",
      "100% adoption rate",
    ],
    client: "Enterprise Solutions Inc.",
    duration: "4 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
        caption:
          "Sprint board snapshots showing improved cadence after transformation.",
      },
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
        caption: "Cross-functional workshops and collaboration sessions.",
      },
      {
        src: "https://images.unsplash.com/photo-1557264305-2f6f2ee2d8f8?w=800&h=500&fit=crop",
        caption: "Metrics dashboard tracking team performance improvements.",
      },
      {
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
        caption: "Retrospective artifacts used to capture learnings.",
      },
    ],
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
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
        caption: "Dashboard overview showing patient metrics and alerts.",
      },
      {
        src: "https://images.unsplash.com/photo-1526378723901-7e6f4b5e7d8e?w=800&h=500&fit=crop",
        caption: "Data visualization components for clinical insights.",
      },
      {
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=500&fit=crop",
        caption: "Real-time telemetry and charting examples used in the app.",
      },
      {
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
        caption: "HIPAA-compliant architecture diagrams and flows.",
      },
    ],
  },
  {
    id: 4,
    title: "CHP - Community Help Platform",
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
    link: "/projects/chp",
    metrics: [
      "12 team members",
      "3 time zones",
      "98% on-time delivery",
      "Zero turnover",
    ],
    client: "CloudTech Corp",
    duration: "12 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
        caption:
          "Collaboration across distributed teams in different time zones.",
      },
      {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
        caption: "Sprint planning and coordination artifacts.",
      },
      {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
        caption: "System architecture and deployment pipelines.",
      },
      {
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
        caption: "Team retrospectives and continuous improvement practices.",
      },
    ],
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
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&h=500&fit=crop",
        caption: "Component library overview and token usage.",
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
        caption: "Design audit and migration plan snapshots.",
      },
      {
        src: "https://images.unsplash.com/photo-1503435824048-a799a3a84a31?w=800&h=500&fit=crop",
        caption: "Storybook documentation and visual tests.",
      },
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop",
        caption: "Design tokens and usage across themes.",
      },
    ],
  },
  {
    id: 6,
    title: "ChantUp MVP",
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
    link: "/projects/chantup",
    metrics: [
      "$2M budget",
      "40% cost savings",
      "500% ROI",
      "Zero security incidents",
    ],
    client: "Fortune 500 Company",
    duration: "18 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=800&h=500&fit=crop",
        caption: "Program roadmap and milestone overview.",
      },
      {
        src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=500&fit=crop",
        caption: "Vendor coordination and governance models.",
      },
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
        caption: "Executive dashboards showing ROI and KPIs.",
      },
      {
        src: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&h=500&fit=crop",
        caption: "Risk management and mitigation artifacts.",
      },
    ],
  },
];

export function findProjectBySlug(slug: string) {
  return projects.find((p) => p.link.endsWith(`/${slug}`));
}
