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

const methodologies = [
  {
    title: "Agile & Scrum",
    description:
      "Implementing Agile frameworks to deliver value incrementally and respond to change effectively.",
    icon: "🔄",
    features: [
      "Sprint Planning",
      "Daily Standups",
      "Retrospectives",
      "Backlog Management",
    ],
  },
  {
    title: "Kanban",
    description:
      "Visual workflow management to optimize delivery and identify bottlenecks in real-time.",
    icon: "📋",
    features: [
      "Workflow Visualization",
      "WIP Limits",
      "Continuous Delivery",
      "Flow Optimization",
    ],
  },
  {
    title: "Lean Management",
    description:
      "Eliminating waste and maximizing value through continuous improvement and customer focus.",
    icon: "⚡",
    features: [
      "Value Stream Mapping",
      "Waste Elimination",
      "Continuous Improvement",
      "Customer Focus",
    ],
  },
];

const services = [
  {
    title: "Project Planning & Strategy",
    description:
      "Comprehensive project planning including scope definition, resource allocation, and timeline development.",
    deliverables: [
      "Project Charter",
      "Work Breakdown Structure",
      "Resource Plan",
      "Risk Assessment",
    ],
  },
  {
    title: "Team Leadership & Coaching",
    description:
      "Leading cross-functional teams and coaching individuals to achieve their full potential.",
    deliverables: [
      "Team Charter",
      "Individual Development Plans",
      "Performance Reviews",
      "Mentoring Programs",
    ],
  },
  {
    title: "Process Optimization",
    description:
      "Analyzing and improving existing processes to increase efficiency and quality.",
    deliverables: [
      "Process Maps",
      "Improvement Recommendations",
      "Implementation Plan",
      "Training Materials",
    ],
  },
  {
    title: "Stakeholder Management",
    description:
      "Building strong relationships with stakeholders and ensuring clear communication throughout the project.",
    deliverables: [
      "Stakeholder Analysis",
      "Communication Plan",
      "Status Reports",
      "Risk Mitigation",
    ],
  },
];

const caseStudies = [
  {
    title: "Digital Transformation at Fortune 500 Company",
    description:
      "Led a $2M digital transformation initiative, reducing time-to-market by 40% and improving customer satisfaction scores.",
    metrics: [
      "40% faster delivery",
      "$500K cost savings",
      "95% team satisfaction",
      "50% reduction in defects",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  },
  {
    title: "Agile Transformation for Startup",
    description:
      "Transformed a traditional waterfall team to Agile methodology, resulting in 60% improvement in delivery predictability.",
    metrics: [
      "60% better predictability",
      "35% faster releases",
      "80% defect reduction",
      "100% team adoption",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  },
  {
    title: "Cross-Functional Team Scaling",
    description:
      "Scaled a development team from 5 to 25 members while maintaining quality and delivery velocity.",
    metrics: [
      "5x team growth",
      "Maintained velocity",
      "Zero quality issues",
      "90% retention rate",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
  },
];

export default function ProjectManagement() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Project Management Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Strategic Project Leadership
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                I help teams and organizations deliver complex projects on time,
                within budget, and with exceptional quality through proven
                methodologies and strong leadership.
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
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Methodologies */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Proven Methodologies
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I leverage industry-standard frameworks and adapt them to your
                team's unique needs and culture.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {methodologies.map((method) => (
                <Card
                  key={method.title}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="text-5xl mb-4">{method.icon}</div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription className="text-base">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {method.features.map((feature) => (
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

        {/* Services */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Comprehensive Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From initial planning to successful delivery, I provide
                end-to-end project management support.
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
                    <h4 className="font-semibold mb-3">Key Deliverables:</h4>
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

        {/* Case Studies */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from projects I've led across different industries
                and team sizes.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Card
                  key={study.title}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription className="text-base">
                      {study.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Key Results:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.metrics.map((metric) => (
                        <Badge
                          key={metric}
                          variant="secondary"
                          className="text-xs"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                My Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A structured approach that ensures project success from start to
                finish.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                  <p className="text-sm text-muted-foreground">
                    Understanding your goals, constraints, and team dynamics to
                    create the optimal approach.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Planning</h3>
                  <p className="text-sm text-muted-foreground">
                    Developing comprehensive project plans, timelines, and
                    resource allocation strategies.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Execution</h3>
                  <p className="text-sm text-muted-foreground">
                    Leading daily operations, managing risks, and ensuring
                    quality delivery throughout the project.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuous improvement, retrospectives, and knowledge
                    transfer for future success.
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
              Ready to Transform Your Project Delivery?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how I can help your team deliver exceptional results
              with proven project management expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
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
