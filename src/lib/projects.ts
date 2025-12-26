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
  // {
  //   id: 1,
  //   title: "E-Commerce Platform Redesign",
  //   description:
  //     "Led a complete redesign of a high-traffic e-commerce platform, resulting in 40% increase in conversion rates and improved user experience.",
  //   image:
  //     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
  //   tags: ["React", "Next.js", "TypeScript", "Project Management"],
  //   category: "Frontend Development",
  //   link: "/projects/ecommerce-redesign",
  //   metrics: [
  //     "40% conversion increase",
  //     "60% faster load times",
  //     "95% mobile score",
  //     "99.9% uptime",
  //   ],
  //   client: "Softouch Clothing",
  //   duration: "6 months",
  //   gallery: [
  //     {
  //       src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=500&fit=crop",
  //       caption:
  //         "Homepage redesign highlighting the new product discovery flow.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=500&fit=crop",
  //       caption:
  //         "Responsive product listing with improved filtering and sorting.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800&h=500&fit=crop",
  //       caption: "Checkout funnel optimized for conversions and clarity.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
  //       caption: "Design system components used across the platform.",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "NovaLaunch",
  //   description:
  //     "Led the end-to-end delivery of the project, defining requirements, coordinating cross-functional teams, managing timelines, and ensuring the platform met usability, performance, and scalability standards. Through structured planning, clear stakeholder communication, and disciplined execution, the project was completed successfully and delivered a reliable, user-centric solution that empowers creators and startups to launch smarter.",
  //   image:
  //     "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  //   tags: ["Agile", "Scrum", "Team Leadership", "Stakeholder Management", "Strategic Planning"],
  //   category: "Project Management",
  //   link: "/projects/novalaunch",
  //   metrics: [
  //     "60% faster delivery",
  //     "90% team satisfaction",
  //     "Zero missed deadlines",
  //     "100% adoption rate",
  //   ],
  //   client: "Clinicraft Studios",
  //   duration: "4 months",
  //   gallery: [
  //     {
  //       src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
  //       caption:
  //         "Sprint board snapshots showing improved cadence after transformation.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
  //       caption: "Cross-functional workshops and collaboration sessions.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1557264305-2f6f2ee2d8f8?w=800&h=500&fit=crop",
  //       caption: "Metrics dashboard tracking team performance improvements.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
  //       caption: "Retrospective artifacts used to capture learnings.",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Healthcare Dashboard Application",
  //   description:
  //     "Built a comprehensive healthcare dashboard for patient management with real-time data visualization and analytics capabilities.",
  //   image:
  //     "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
  //   tags: ["React", "D3.js", "Healthcare", "Data Visualization"],
  //   category: "Frontend Development",
  //   link: "/projects/healthcare-dashboard",
  //   metrics: [
  //     "Real-time updates",
  //     "HIPAA compliant",
  //     "95% user satisfaction",
  //     "60% time savings",
  //   ],
  //   client: "MedTech Solutions",
  //   duration: "8 months",
  //   gallery: [
  //     {
  //       src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
  //       caption: "Dashboard overview showing patient metrics and alerts.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1526378723901-7e6f4b5e7d8e?w=800&h=500&fit=crop",
  //       caption: "Data visualization components for clinical insights.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=500&fit=crop",
  //       caption: "Real-time telemetry and charting examples used in the app.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
  //       caption: "HIPAA-compliant architecture diagrams and flows.",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "CHP - Community Help Platform",
  //   description:
  //     "Led a distributed team of 12 developers, designers, and QA engineers across multiple time zones to deliver a complex SaaS platform.",
  //   image:
  //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
  //   tags: [
  //     "Team Leadership",
  //     "Remote Management",
  //     "SaaS",
  //     "Stakeholder Management",
  //   ],
  //   category: "Project Management",
  //   link: "/projects/chp",
  //   metrics: [
  //     "12 team members",
  //     "3 time zones",
  //     "98% on-time delivery",
  //     "Zero turnover",
  //   ],
  //   client: "CloudTech Corp",
  //   duration: "*",
  //   gallery: [
  //     {
  //       src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
  //       caption:
  //         "Collaboration across distributed teams in different time zones.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
  //       caption: "Sprint planning and coordination artifacts.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
  //       caption: "System architecture and deployment pipelines.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
  //       caption: "Team retrospectives and continuous improvement practices.",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Design System Implementation",
  //   description:
  //     "Created and implemented a comprehensive design system that reduced development time by 50% and improved consistency across products.",
  //   image:
  //     "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop",
  //   tags: ["Design Systems", "Figma", "Storybook", "Component Library"],
  //   category: "Frontend Development",
  //   link: "/projects/design-system",
  //   metrics: [
  //     "50% faster development",
  //     "100% consistency",
  //     "40 components",
  //     "Zero design debt",
  //   ],
  //   client: "Digital Agency",
  //   duration: "3 months",
  //   gallery: [
  //     {
  //       src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&h=500&fit=crop",
  //       caption: "Component library overview and token usage.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
  //       caption: "Design audit and migration plan snapshots.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1503435824048-a799a3a84a31?w=800&h=500&fit=crop",
  //       caption: "Storybook documentation and visual tests.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop",
  //       caption: "Design tokens and usage across themes.",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "ChantUp MVP",
  //   description:
  //     "Managed a $2M digital transformation program for a Fortune 500 company, coordinating multiple vendors and internal teams.",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  //   tags: [
  //     "Program Management",
  //     "Digital Transformation",
  //     "Vendor Management",
  //     "Enterprise",
  //   ],
  //   category: "Project Management",
  //   link: "/projects/chantup",
  //   metrics: [
  //     "$15k budget",
  //     "40% cost savings",
  //     "500% ROI",
  //     "Zero security incidents",
  //   ],
  //   client: "*",
  //   duration: "18 months",
  //   gallery: [
  //     {
  //       src: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=800&h=500&fit=crop",
  //       caption: "Program roadmap and milestone overview.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=500&fit=crop",
  //       caption: "Vendor coordination and governance models.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
  //       caption: "Executive dashboards showing ROI and KPIs.",
  //     },
  //     {
  //       src: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&h=500&fit=crop",
  //       caption: "Risk management and mitigation artifacts.",
  //     },
  //   ],
  // },
  // NEW PROJECTS FROM PORTFOLIO START HERE
  {
    id: 7,
    title: "ERP & Digital Platform Implementation",
    description:
      "Led end-to-end ERP and digital platform implementation, integrating finance and content workflows. Managed Agile sprints, cross-functional teams, risks, and stakeholder communication. Achieved 25% faster delivery and 40% reduction in manual workflows.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    tags: ["Agile", "ERP Implementation", "Stakeholder Management", "Risk Management", "Process Automation"],
    category: "Project Management",
    link: "https://chantup.com",
    metrics: [
      "25% faster delivery",
      "40% workflow reduction",
      "Cross-functional coordination",
      "Zero critical incidents",
    ],
    client: "ChantUp",
    duration: "12 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
        caption: "ERP system architecture and integration workflows.",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        caption: "Sprint planning sessions and team coordination.",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        caption: "Finance and content workflow automation dashboards.",
      },
      {
        src: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=500&fit=crop",
        caption: "Risk management and stakeholder communication artifacts.",
      },
    ],
  },
  {
    id: 8,
    title: "Custom ERP Automation Project",
    description:
      "Customised Dynamics 365 ERP integrations to automate advocacy and community operations. Oversaw scope, backlog prioritisation, and deployment while ensuring timeline and budget adherence.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=300&fit=crop",
    tags: ["Dynamics 365", "Agile", "Backlog Management", "Deployment", "Budget Control"],
    category: "Project Management",
    link: "https://chantup.com",
    metrics: [
      "100% on-time delivery",
      "Budget adherence",
      "Automated workflows",
      "Enhanced community ops",
    ],
    client: "ChantUp",
    duration: "8 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        caption: "Dynamics 365 customization and integration overview.",
      },
      {
        src: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
        caption: "Advocacy and community operations automation flows.",
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
        caption: "Backlog prioritization and sprint planning sessions.",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        caption: "Deployment timeline and budget tracking dashboards.",
      },
    ],
  },
  {
    id: 9,
    title: "Website Redesign & AI Travel Assistance Integration",
    description:
      "Leading the planning of a website redesign and Google Gemini–based AI travel assistant, defining system architecture, API integration scope, data readiness, and a phased delivery roadmap for scalable deployment.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
    tags: ["AI Integration", "System Architecture", "API Design", "Phased Delivery", "Travel Tech"],
    category: "Project Management",
    link: "https://a-baytours.com/",
    metrics: [
      "AI-powered assistance",
      "Scalable architecture",
      "Phased rollout",
      "Enhanced UX",
    ],
    client: "A-Bay Tours",
    duration: "6 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop",
        caption: "Travel website redesign mockups and user flows.",
      },
      {
        src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        caption: "Google Gemini AI integration architecture.",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        caption: "API integration scope and data readiness assessment.",
      },
      {
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
        caption: "Phased delivery roadmap and milestone tracking.",
      },
    ],
  },
  {
    id: 10,
    title: "E-commerce Web Application - Masobe Books",
    description:
      "Managed the delivery of an e-commerce web application for Masobe Books, overseeing frontend and backend development, payment gateway integration, API-driven product and order management, and CMS-based content updates. Coordinated hosting, deployment, and QA processes to ensure secure transactions, scalable performance, and reliable post-launch operations.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=300&fit=crop",
    tags: ["E-commerce", "Payment Integration", "API Management", "QA Processes", "Deployment"],
    category: "Project Management",
    link: "https://masobebooks.com",
    metrics: [
      "Secure payments",
      "Scalable performance",
      "100% QA coverage",
      "Reliable operations",
    ],
    client: "Masobe Books",
    duration: "5 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop",
        caption: "E-commerce platform overview with product catalog.",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
        caption: "Payment gateway integration and checkout flow.",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        caption: "API-driven order management dashboard.",
      },
      {
        src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=500&fit=crop",
        caption: "QA testing documentation and deployment pipeline.",
      },
    ],
  },
  {
    id: 11,
    title: "Health Tech Mobile App - Heala Tech",
    description:
      "Supported the coordination of a health-tech mobile application enabling telemedicine, digital prescriptions, and patient-provider communication. Assisted with requirements gathering, sprint coordination, and milestone tracking across mobile developers and healthcare stakeholders. Contributed to QA readiness and deployment planning, with a focus on secure APIs, data privacy considerations, and scalable mobile app delivery.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
    tags: ["Healthcare Tech", "Sprint Coordination", "Mobile Development", "Data Privacy", "Telemedicine"],
    category: "Project Management",
    link: "https://heala.ng/",
    metrics: [
      "Secure telemedicine",
      "HIPAA considerations",
      "Scalable delivery",
      "95% milestone success",
    ],
    client: "Heala Tech",
    duration: "10 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
        caption: "Telemedicine mobile app interface and user flows.",
      },
      {
        src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=500&fit=crop",
        caption: "Digital prescription and patient-provider communication features.",
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
        caption: "Sprint coordination across mobile development teams.",
      },
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
        caption: "Security architecture and data privacy compliance documentation.",
      },
    ],
  },
  {
    id: 12,
    title: "Website Redesign - Zero-Based Maintenance",
    description:
      "Led the technical planning and delivery of a corporate website redesign for Zero-Based Maintenance (ZBM), restructuring information architecture, service pages, and responsive layouts to better represent web, mobile, and AR service offerings. Coordinated designers and developers on UX/UI decisions, CMS structure, and deployment readiness, ensuring scalable architecture, clean integrations, and improved content maintainability.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop",
    tags: ["Website Redesign", "UX/UI", "CMS", "Responsive Design", "Technical Planning"],
    category: "Project Management",
    link: "https://zbm.ng/",
    metrics: [
      "Improved UX",
      "Scalable CMS",
      "Responsive design",
      "Enhanced maintainability",
    ],
    client: "Zero-Based Maintenance",
    duration: "4 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
        caption: "Corporate website redesign with restructured information architecture.",
      },
      {
        src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
        caption: "Service pages showcasing web, mobile, and AR offerings.",
      },
      {
        src: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800&h=500&fit=crop",
        caption: "UX/UI coordination sessions with design and development teams.",
      },
      {
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
        caption: "CMS structure planning and deployment readiness checks.",
      },
    ],
  },
  {
    id: 13,
    title: "Onboarding & Digital Presence - NordMotion",
    description:
      "Led the digital presence and onboarding website project for NordMotion, coordinating requirements, UX/UI, CMS, and API integration planning to showcase modular drive systems, industrial solutions, and responsive content delivery. Collaborated with designers and developers to align digital architecture with stakeholder goals, improve user engagement, and ensure secure, scalable deployment.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    tags: ["Digital Onboarding", "API Integration", "Industrial Tech", "User Engagement", "Stakeholder Alignment"],
    category: "Project Management",
    link: "https://nordmotion.com/",
    metrics: [
      "Improved engagement",
      "Secure deployment",
      "Scalable platform",
      "Stakeholder satisfaction",
    ],
    client: "Nord (in collaboration with ZBM)",
    duration: "6 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=500&fit=crop",
        caption: "NordMotion digital presence and onboarding platform overview.",
      },
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
        caption: "Modular drive systems and industrial solutions showcase.",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        caption: "API integration planning and CMS coordination.",
      },
      {
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
        caption: "Stakeholder alignment sessions and deployment planning.",
      },
    ],
  },
  {
    id: 14,
    title: "Wellington College International Lagos - Website & LMS Integration",
    description:
      "Led consulting delivery for the WCIL website design and LMS integration for their launch in Lagos, Nigeria, defining system architecture, integration scope, and a phased rollout roadmap to support digital learning and admissions workflows.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop",
    tags: ["Education Tech", "LMS Integration", "System Architecture", "Consulting", "Phased Rollout"],
    category: "Project Management",
    link: "/projects/wcil",
    metrics: [
      "LMS integration",
      "Digital learning support",
      "Phased rollout success",
      "Admissions workflow",
    ],
    client: "Intense Digital Consultancy (in collaboration with WCIL)",
    duration: "*",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
        caption: "Wellington College International Lagos website design.",
      },
      {
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
        caption: "LMS integration architecture and digital learning workflows.",
      },
      {
        src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=500&fit=crop",
        caption: "System architecture planning and integration scope definition.",
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
        caption: "Phased rollout roadmap and admissions workflow optimization.",
      },
    ],
  },
  {
    id: 15,
    title: "Real Estate Mobile App - Beryl Prestige Living",
    description:
      "Led the delivery of Beryl Prestige Living's real estate mobile application with backend API integrations for property listings, role-based access (agents, investors, tenants), and secure authentication, driving system architecture decisions and sprint coordination. Defined data flow, deployment readiness, and API documentation priorities with designers and developers to ensure scalable, secure platform operations.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
    tags: ["Real Estate Tech", "Mobile App", "API Integration", "Role-Based Access", "System Architecture"],
    category: "Project Management",
    link: "https://beryl-backend.azronix.xyz/",
    metrics: [
      "Role-based access",
      "Secure authentication",
      "Scalable platform",
      "API-driven listings",
    ],
    client: "Beryl Homes",
    duration: "9 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
        caption: "Real estate mobile app with property listing interface.",
      },
      {
        src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop",
        caption: "Backend API architecture for agents, investors, and tenants.",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        caption: "System architecture planning and sprint coordination sessions.",
      },
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
        caption: "Security and authentication implementation documentation.",
      },
    ],
  },
  {
    id: 16,
    title: "Hotel Website Design & WhatsApp Booking - Orange Inn",
    description:
      "Delivered a responsive hotel website with WhatsApp API booking integration, overseeing UX/UI design, frontend development, and deployment for seamless guest engagement and reservations.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&h=300&fit=crop",
    tags: ["Hospitality Tech", "WhatsApp Integration", "UX/UI Design", "Frontend Development", "Responsive Design"],
    category: "Project Management",
    link: "https://orangehotel.vercel.app/",
    metrics: [
      "WhatsApp booking",
      "Seamless UX",
      "Mobile responsive",
      "Quick deployment",
    ],
    client: "Orange Inn",
    duration: "3 months",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop",
        caption: "Orange Inn hotel website responsive design.",
      },
      {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
        caption: "WhatsApp API integration for direct booking functionality.",
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
        caption: "UX/UI design showcasing guest engagement features.",
      },
      {
        src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
        caption: "Frontend development and deployment pipeline.",
      },
    ],
  },
];

export function findProjectBySlug(slug: string) {
  return projects.find((p) => p.link.endsWith(`/${slug}`));
}
