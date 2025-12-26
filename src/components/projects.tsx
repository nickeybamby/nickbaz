"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "NovaLaunch",
    description:
      "Led the end-to-end delivery of the project — defining requirements, coordinating cross-functional teams...",
    image:
      "https://res.cloudinary.com/dt7fmvznd/image/upload/v1761680585/Screenshot_301_n3kr0r.png",
    tags: ["Agile", "Scrum", "Team Leadership", "Stakeholder Management", "Strategic Planning"],
    category: "Project Management",
    link: "/projects",
  },
  {
    id: 2,
    title: "CHP - Community Help Platform",
    description:
      "Led a distributed team of 5 developers, designers, and QA engineers across multiple time zones to deliver a complex SaaS platform.",
    image:
      "https://res.cloudinary.com/dt7fmvznd/image/upload/v1761676679/Screenshot_297_s6ifq8.png",
    tags: [
      "Team Leadership",
      "Remote Management",
      "SaaS",
      "Stakeholder Management",
    ],
    category: "Project Management",
    link: "/projects",
  },
  {
    id: 3,
    title: "ChantUp",
    description:
      "Managed a digital transformation program for a Multinational industry, coordinating multiple vendors and internal teams.",
    image:
      "https://res.cloudinary.com/dt7fmvznd/image/upload/v1761681093/Screenshot_302_b573k2.png",
    tags: [
      "Program Management",
      "Digital Transformation",
      "Vendor Management",
      "Enterprise",
    ],
    category: "Project Management",
    link: "/projects",
  }
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
            Here are some of my recent projects that showcase my expertise in
            both project management and frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 backdrop-blur"
                  >
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
                <Button
                  asChild
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={project.link}>
                    View Project Details
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
              <svg
                className="ml-2 w-4 h-4"
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
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
