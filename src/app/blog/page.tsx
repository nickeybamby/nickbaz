import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Agile Project Management",
    excerpt: "Exploring how modern project management methodologies are evolving to meet the demands of remote-first teams and rapidly changing business environments.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    category: "Project Management",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Agile", "Remote Work", "Leadership"]
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    excerpt: "Best practices for structuring React applications that can grow with your team and handle increasing complexity without sacrificing performance.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
    category: "Frontend Development",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Performance"]
  },
  {
    id: 3,
    title: "The Art of Technical Communication",
    excerpt: "How to effectively communicate complex technical concepts to stakeholders, clients, and team members who may not have technical backgrounds.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    category: "Leadership",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["Communication", "Leadership", "Soft Skills"]
  },
  {
    id: 4,
    title: "Design Systems: More Than Just Components",
    excerpt: "Why design systems are crucial for product success and how to build one that serves both designers and developers effectively.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop",
    category: "Frontend Development",
    date: "2023-12-28",
    readTime: "7 min read",
    tags: ["Design Systems", "UI/UX", "Component Libraries"]
  },
  {
    id: 5,
    title: "Managing Technical Debt in Agile Teams",
    excerpt: "Strategies for balancing feature delivery with technical quality, and how to make the business case for addressing technical debt.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    category: "Project Management",
    date: "2023-12-20",
    readTime: "6 min read",
    tags: ["Technical Debt", "Agile", "Quality"]
  },
  {
    id: 6,
    title: "The Rise of TypeScript in Modern Web Development",
    excerpt: "Why TypeScript has become the standard for large-scale JavaScript applications and how it's changing the way we build web apps.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop",
    category: "Frontend Development",
    date: "2023-12-15",
    readTime: "5 min read",
    tags: ["TypeScript", "JavaScript", "Web Development"]
  }
];

const categories = ["All", "Project Management", "Frontend Development", "Leadership"];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Blog & Insights
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Thoughts on Technology & Leadership
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Sharing insights from my experience in project management, frontend development, 
                and building high-performing teams.
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

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative">
                    <Image
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      width={500}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{blogPosts[0].category}</Badge>
                      <span className="text-sm text-muted-foreground">{blogPosts[0].readTime}</span>
                    </div>
                    <CardTitle className="text-2xl mb-4">{blogPosts[0].title}</CardTitle>
                    <CardDescription className="text-base mb-6">
                      {blogPosts[0].excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {blogPosts[0].tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-fit">
                      Read Full Article
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-12">All Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Posts
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get the latest insights on project management and frontend development 
              delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background"
              />
              <Button className="bg-background text-foreground hover:bg-background/90">
                Subscribe
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

