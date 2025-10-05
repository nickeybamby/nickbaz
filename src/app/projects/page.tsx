import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    description: "Led a complete redesign of a high-traffic e-commerce platform, resulting in 40% increase in conversion rates and improved user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tags: ["React", "Next.js", "TypeScript", "Project Management"],
    category: "Frontend Development",
    link: "/projects/ecommerce-redesign",
    metrics: ["40% conversion increase", "60% faster load times", "95% mobile score", "99.9% uptime"],
    client: "Tech Retail Co.",
    duration: "6 months"
  },
  {
    id: 2,
    title: "Agile Transformation Initiative",
    description: "Successfully transformed a traditional waterfall development team to Agile methodology, improving delivery time by 60% and team satisfaction.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    tags: ["Agile", "Scrum", "Team Leadership", "Process Improvement"],
    category: "Project Management",
    link: "/projects/agile-transformation",
    metrics: ["60% faster delivery", "90% team satisfaction", "Zero missed deadlines", "100% adoption rate"],
    client: "Enterprise Solutions Inc.",
    duration: "4 months"
  },
  {
    id: 3,
    title: "Healthcare Dashboard Application",
    description: "Built a comprehensive healthcare dashboard for patient management with real-time data visualization and analytics capabilities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
    tags: ["React", "D3.js", "Healthcare", "Data Visualization"],
    category: "Frontend Development",
    link: "/projects/healthcare-dashboard",
    metrics: ["Real-time updates", "HIPAA compliant", "95% user satisfaction", "60% time savings"],
    client: "MedTech Solutions",
    duration: "8 months"
  },
  {
    id: 4,
    title: "Cross-Functional Team Leadership",
    description: "Led a distributed team of 12 developers, designers, and QA engineers across multiple time zones to deliver a complex SaaS platform.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
    tags: ["Team Leadership", "Remote Management", "SaaS", "Stakeholder Management"],
    category: "Project Management",
    link: "/projects/saas-platform",
    metrics: ["12 team members", "3 time zones", "98% on-time delivery", "Zero turnover"],
    client: "CloudTech Corp",
    duration: "12 months"
  },
  {
    id: 5,
    title: "Design System Implementation",
    description: "Created and implemented a comprehensive design system that reduced development time by 50% and improved consistency across products.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop",
    tags: ["Design Systems", "Figma", "Storybook", "Component Library"],
    category: "Frontend Development",
    link: "/projects/design-system",
    metrics: ["50% faster development", "100% consistency", "40 components", "Zero design debt"],
    client: "Digital Agency",
    duration: "3 months"
  },
  {
    id: 6,
    title: "Digital Transformation Program",
    description: "Managed a $2M digital transformation program for a Fortune 500 company, coordinating multiple vendors and internal teams.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tags: ["Program Management", "Digital Transformation", "Vendor Management", "Enterprise"],
    category: "Project Management",
    link: "/projects/digital-transformation",
    metrics: ["$2M budget", "40% cost savings", "500% ROI", "Zero security incidents"],
    client: "Fortune 500 Company",
    duration: "18 months"
  }
];

const categories = ["All", "Frontend Development", "Project Management"];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Portfolio
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Featured Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A collection of projects that showcase my expertise in project management 
                and frontend development across various industries and team sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
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
                    <div className="space-y-4">
                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">Client:</span>
                          <p className="font-medium">{project.client}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Duration:</span>
                          <p className="font-medium">{project.duration}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Results:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.metrics.map((metric) => (
                            <Badge key={metric} variant="secondary" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <a href={project.link}>
                          View Project Details
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Project Impact</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Measurable results from projects across different industries and team sizes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2M+</div>
                <div className="text-sm text-muted-foreground">Budget Managed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life with proven expertise 
              in project management and frontend development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Start a Project
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

