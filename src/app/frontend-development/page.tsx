import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const technologies = [
  {
    title: "React & Next.js",
    description:
      "Building modern, scalable web applications with the latest React ecosystem tools.",
    icon: "⚛️",
    features: ["React 18+", "Next.js 14", "Server Components", "App Router"],
  },
  {
    title: "TypeScript",
    description:
      "Type-safe development for better code quality, maintainability, and developer experience.",
    icon: "📘",
    features: [
      "Type Safety",
      "Better IDE Support",
      "Refactoring",
      "Documentation",
    ],
  },
  {
    title: "Modern CSS",
    description:
      "Creating beautiful, responsive interfaces with modern CSS techniques and frameworks.",
    icon: "🎨",
    features: [
      "Tailwind CSS",
      "CSS Modules",
      "Styled Components",
      "Responsive Design",
    ],
  },
];

const services = [
  {
    title: "Custom Web Applications",
    description:
      "Building tailored web applications that meet your specific business requirements and user needs.",
    deliverables: [
      "React/Next.js Apps",
      "Responsive Design",
      "Performance Optimization",
      "SEO Implementation",
    ],
  },
  {
    title: "UI/UX Implementation",
    description:
      "Translating designs into pixel-perfect, interactive user interfaces that delight users.",
    deliverables: [
      "Component Libraries",
      "Design Systems",
      "Interactive Prototypes",
      "User Testing",
    ],
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, accessibility, and overall user experience.",
    deliverables: [
      "Performance Audits",
      "Code Splitting",
      "Lazy Loading",
      "Accessibility Compliance",
    ],
  },
  {
    title: "Technical Consulting",
    description:
      "Providing expert guidance on frontend architecture, technology choices, and best practices.",
    deliverables: [
      "Architecture Reviews",
      "Technology Recommendations",
      "Code Reviews",
      "Team Training",
    ],
  },
];

const portfolio = [
  {
    title: "E-Commerce Platform",
    description:
      "Built a high-performance e-commerce platform with React, Next.js, and Stripe integration.",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    metrics: [
      "40% faster load times",
      "99.9% uptime",
      "95% mobile score",
      "50% conversion increase",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    link: "/projects/ecommerce-platform",
  },
  {
    title: "Healthcare Dashboard",
    description:
      "Developed a comprehensive healthcare management dashboard with real-time data visualization.",
    technologies: ["React", "D3.js", "Chart.js", "TypeScript", "Material-UI"],
    metrics: [
      "Real-time updates",
      "HIPAA compliant",
      "95% user satisfaction",
      "60% time savings",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
    link: "/projects/healthcare-dashboard",
  },
  {
    title: "Design System",
    description:
      "Created a comprehensive design system that reduced development time by 50% across products.",
    technologies: [
      "Storybook",
      "React",
      "TypeScript",
      "Figma",
      "Design Tokens",
    ],
    metrics: [
      "50% faster development",
      "100% consistency",
      "40 components",
      "Zero design debt",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop",
    link: "/projects/design-system",
  },
];

const skills = [
  { name: "React & Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "JavaScript (ES6+)", level: 94 },
  { name: "HTML5 & CSS3", level: 96 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Responsive Design", level: 93 },
  { name: "Performance Optimization", level: 89 },
  { name: "Accessibility (a11y)", level: 87 },
  { name: "Testing (Jest, RTL)", level: 85 },
  { name: "Git & Version Control", level: 94 },
];

export default function FrontendDevelopment() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Frontend Development Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Modern Web Experiences
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                I create beautiful, fast, and accessible web applications using
                the latest technologies and best practices. From concept to
                deployment, I bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Technologies I Love
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I work with modern, proven technologies that deliver exceptional
                user experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {technologies.map((tech) => (
                <Card
                  key={tech.title}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="text-5xl mb-4">{tech.icon}</div>
                    <CardTitle className="text-xl">{tech.title}</CardTitle>
                    <CardDescription className="text-base">
                      {tech.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tech.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="outline"
                          className="mr-2 mb-2"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Technical Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deep knowledge across the frontend development stack with
                continuous learning and adaptation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Development Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive frontend development solutions tailored to your
                project needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Featured Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Recent projects showcasing modern frontend development
                techniques and best practices.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {portfolio.map((project) => (
                <Card
                  key={project.title}
                  className="overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <h4 className="font-semibold mb-3">Key Results:</h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.map((metric) => (
                        <Badge
                          key={metric}
                          variant="secondary"
                          className="text-xs"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      View Project
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                My Development Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach that ensures quality, performance, and
                maintainable code.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Planning & Design
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Understanding requirements, creating wireframes, and
                    planning the technical architecture.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Writing clean, maintainable code with proper testing and
                    documentation.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Testing & Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive testing, performance optimization, and
                    accessibility compliance.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Deployment & Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Smooth deployment, monitoring, and ongoing support for your
                    application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to create a modern, fast, and beautiful web application?
              Let&apos;s discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
