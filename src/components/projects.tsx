"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
 
  {
    id: 1,
    title: "Agile Transformation Initiative",
    description: "Successfully transformed a traditional waterfall development team to Agile methodology, improving delivery time by 60% and team satisfaction.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    tags: ["Agile", "Scrum", "Team Leadership", "Process Improvement"],
    category: "Project Management",
    link: "/projects/agile-transformation"
  },
  {
    id: 2,
    title: "Cross-Functional Team Leadership",
    description: "Led a distributed team of 12 developers, designers, and QA engineers across multiple time zones to deliver a complex SaaS platform.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
    tags: ["Team Leadership", "Remote Management", "SaaS", "Stakeholder Management"],
    category: "Project Management",
    link: "/projects/saas-platform"
  },
  {
    id: 3,
    title: "Digital Transformation Program",
    description: "Managed a $2M digital transformation program for a Fortune 500 company, coordinating multiple vendors and internal teams.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tags: ["Program Management", "Digital Transformation", "Vendor Management", "Enterprise"],
    category: "Project Management",
    link: "/projects/digital-transformation"
  },
  {
    id: 4,
    title: "Healthcare Dashboard Application",
    description: "Built a comprehensive healthcare dashboard for patient management with real-time data visualization and analytics capabilities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
    tags: ["React", "D3.js", "Healthcare", "Data Visualization"],
    category: "Frontend Development",
    link: "/projects/healthcare-dashboard"
  },
  {
    id: 5,
    title: "E-Commerce Platform Redesign",
    description: "Led a complete redesign of a high-traffic e-commerce platform, resulting in 40% increase in conversion rates and improved user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tags: ["React", "Next.js", "TypeScript", "Project Management"],
    category: "Frontend Development",
    link: "/projects/ecommerce-redesign"
  },
  {
    id: 6,
    title: "Design System Implementation",
    description: "Created and implemented a comprehensive design system that reduced development time by 50% and improved consistency across products.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop",
    tags: ["Design Systems", "Figma", "Storybook", "Component Library"],
    category: "Frontend Development",
    link: "/projects/design-system"
  },
  
];

export function Projects() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Featured Work
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my expertise in both 
            project management and frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link href={project.link}>
                    View Project Details
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              View All Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
