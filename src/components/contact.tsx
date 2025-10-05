"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_89vou9c"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_orsvu39"; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "yntKD5Kubo_b4q4gU"; // Replace with your EmailJS public key

const contactMethods = [
  {
    title: "Email",
    description: "Get in touch for project inquiries",
    value: "nicholasobazei@gmail.com",
    icon: "📧",
    link: "mailto:nicholasobazei@gmail.com",
  },
  {
    title: "LinkedIn",
    description: "Connect professionally",
    value: "linkedin.com/in/nickeybamby",
    icon: "💼",
    link: "https://linkedin.com/in/nickeybamby",
  },
  {
    title: "GitHub",
    description: "Check out my code",
    value: "github.com/nickeybamby",
    icon: "🐙",
    link: "https://github.com/nickeybamby",
  },
  {
    title: "X",
    description: "Follow for updates",
    value: "@nickeybamby",
    icon: "🐦",
    link: "https://x.com/nickeybamby",
  },
];

const availability = {
  status: "Available for new projects",
  responseTime: "Within 24 hours",
  location: "Remote / Global",
  timezone: "GMT+1",
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not specified",
        project_type: formData.projectType || "Not specified",
        budget: formData.budget || "Not specified",
        timeline: formData.timeline || "Not specified",
        message: formData.message,
        to_email: "nicholasobazei@gmail.com", // Your email address
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus("success");

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your project to life? I&apos;m here to help you
            succeed with expert project management and frontend development
            services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Start a Project</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-sm font-medium"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select project type</option>
                      <option value="frontend">Frontend Development</option>
                      <option value="project-management">
                        Project Management
                      </option>
                      <option value="full-service">
                        Full Service (PM + Frontend)
                      </option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="over-100k">Over $100K</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">1 Month</option>
                      <option value="2-3-months">2-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="6-months-plus">6+ Months</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and how I can help..."
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 text-sm">
                      ✅ Message sent successfully! I&apos;ll get back to you within
                      24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800 text-sm">
                      ❌ Sorry, there was an error sending your message. Please
                      try again or contact me directly at
                      nicholasobazei@gmail.com
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Availability */}
          <div className="space-y-8">
            {/* Availability Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  Current Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600">
                    {availability.status}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Response time: {availability.responseTime}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Location:</span>
                    <p className="text-muted-foreground">
                      {availability.location}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">Timezone:</span>
                    <p className="text-muted-foreground">
                      {availability.timezone}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect With Me</h3>
              <div className="grid gap-4">
                {contactMethods.map((method) => (
                  <Card
                    key={method.title}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{method.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold">{method.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {method.description}
                          </p>
                          <p className="text-sm font-medium">{method.value}</p>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                          <a
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Contact
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Services Quick Reference */}
            <Card>
              <CardHeader>
                <CardTitle>Services I Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Project Management</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Agile/Scrum</Badge>
                      <Badge variant="outline">Team Leadership</Badge>
                      <Badge variant="outline">Risk Management</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Frontend Development</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">React/Next.js</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">UI/UX</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
