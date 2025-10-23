import { notFound } from "next/navigation";
import Image from "next/image";
import { findProjectBySlug } from "@/lib/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Props) {
  const { slug } = params;
  const project = findProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Key Results</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics?.map((m) => (
                      <Badge key={m} variant="secondary" className="text-xs">
                        {m}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <a href="/contact">Get in touch</a>
                  </Button>
                  <Button variant="outline">Download Case Study</Button>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="rounded overflow-hidden shadow">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4">
                  <div>
                    <span className="font-medium text-muted-foreground">
                      Client:
                    </span>
                    <div className="font-medium">{project.client}</div>
                  </div>
                  <div className="mt-2">
                    <span className="font-medium text-muted-foreground">
                      Duration:
                    </span>
                    <div className="font-medium">{project.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
