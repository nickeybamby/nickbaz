import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                About Me
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Nice to meet you!
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I&apos;m Nicholas Obazei, a passionate technical project manager
                and frontend developer with over 3 years of experience
                delivering exceptional digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">My Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My journey began in civil engineering, where I learned how
                    to design and manage complex systems with precision and
                    structure. Along the way, I discovered my passion for
                    technology and how digital solutions could solve real-world
                    problems. This led me into frontend development, where I
                    built responsive, user-centered applications, and later into
                    project management, where I now guide entire teams through
                    the end-to-end delivery of products and platforms.
                  </p>
                  <p>
                    Across every role, I’ve focused on the same core principles:
                    clear communication, user-centered design, and delivering
                    value that truly matters.
                  </p>
                  <p>
                    What sets me apart is my ability to bridge the gap between
                    technical teams and business stakeholders. With a foundation
                    in engineering, hands-on experience in software development,
                    and a career in project management, I speak both languages
                    fluently. This allows me to translate complex technical
                    concepts into business value — and business priorities into
                    actionable technical outcomes.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dt7fmvznd/image/upload/v1761191889/ChatGPT_Image_Oct_4_2025_12_46_15_AM_hdhxx1.jpg"
                  alt="Nicholas Obazei working"
                  width={500}
                  height={600}
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide my work and shape how I approach every
                project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">🎯</div>
                  <CardTitle>User-Centered</CardTitle>
                  <CardDescription>
                    Every decision is made with the end user in mind. I believe
                    great products solve real problems for real people.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">🚀</div>
                  <CardTitle>Results-Driven</CardTitle>
                  <CardDescription>
                    I focus on delivering measurable outcomes that drive
                    business value. Success is measured by impact, not just
                    activity.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">🤝</div>
                  <CardTitle>Collaborative</CardTitle>
                  <CardDescription>
                    The best solutions come from diverse perspectives. I believe
                    in fostering an environment where everyone&apos;s voice is
                    heard and valued.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">📈</div>
                  <CardTitle>Continuous Learning</CardTitle>
                  <CardDescription>
                    Technology evolves rapidly, and so do I. I&apos;m committed
                    to staying current with the latest tools, methodologies, and
                    best practices.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">⚡</div>
                  <CardTitle>Efficient</CardTitle>
                  <CardDescription>
                    I believe in working smarter, not harder. Process
                    optimization and automation are key to sustainable success.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-2">🎨</div>
                  <CardTitle>Quality-Focused</CardTitle>
                  <CardDescription>
                    Good enough isn&apos;t good enough. I take pride in
                    delivering work that exceeds expectations and stands the
                    test of time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        {/* <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Journey</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A timeline of my professional growth and key milestones.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">2023 - Present</Badge>
                        <Badge variant="secondary">Senior Technical PM</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Senior Technical Project Manager</h3>
                      <p className="text-muted-foreground">
                        Leading cross-functional teams on complex digital transformation projects. 
                        Successfully delivered 15+ projects with 98% on-time delivery rate.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">2021 - 2023</Badge>
                        <Badge variant="secondary">Full-Stack Developer</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Full-Stack Developer & Team Lead</h3>
                      <p className="text-muted-foreground">
                        Built scalable web applications using React, Node.js, and cloud technologies. 
                        Led a team of 5 developers and mentored junior team members.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">2019 - 2021</Badge>
                        <Badge variant="secondary">Frontend Developer</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                      <p className="text-muted-foreground">
                        Specialized in React development and UI/UX implementation. 
                        Created responsive, accessible web applications for various industries.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">2016 - 2019</Badge>
                        <Badge variant="secondary">Junior Developer</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Junior Web Developer</h3>
                      <p className="text-muted-foreground">
                        Started my career building websites and learning modern web technologies. 
                        Developed strong foundation in HTML, CSS, JavaScript, and project management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to work together?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and help bring
              your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors"
              >
                Start a Project
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary-foreground text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                View My Work
              </Link>
              {/* Download CV: place the PDF at public/Nicholas_Obazei_pso.pdf to enable this link */}
              <a
                href="/Nicholas_Obazei_pso.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
