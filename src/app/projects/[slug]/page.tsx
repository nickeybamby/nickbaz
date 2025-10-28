import { notFound } from "next/navigation";
import Image from "next/image";
import { findProjectBySlug } from "@/lib/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ParamsObj = { slug: string };
type Params = ParamsObj | Promise<ParamsObj>;

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = (await params) as ParamsObj;
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
                {/* Gallery: 2 per row with captions */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Project Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {project.gallery.map((g, idx) => (
                        <figure
                          key={idx}
                          className="rounded overflow-hidden bg-background/30 p-2"
                        >
                          <div className="rounded overflow-hidden shadow">
                            <Image
                              src={g.src}
                              alt={`${project.title} - image ${idx + 1}`}
                              width={800}
                              height={500}
                              className="w-full h-48 object-cover"
                            />
                          </div>
                          <figcaption className="mt-2 text-sm text-muted-foreground">
                            <article>
                              <p>{g.caption}</p>
                            </article>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex gap-4">
                  <Button asChild>
                    <a href="/contact">Get in touch</a>
                  </Button>
                  <Button variant="outline">Download Case Study</Button>
                  {/* Download CV - place your PDF in /public with this exact filename to enable download */}
                  {/* If you want the CV downloadable from the site, put the file
                  at public/Nicholas_Obazei_pso.pdf and uncomment the button below. */}
                  {/*
                  <Button asChild>
                    <a
                      href="/Nicholas_Obazei_pso.pdf"
                      download
                      className="inline-flex items-center"
                    >
                      Download CV
                    </a>
                  </Button>
                  */}
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
