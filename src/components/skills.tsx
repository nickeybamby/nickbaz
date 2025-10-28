"use client";

import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Project Management",
    icon: "📊",
    skills: [
      { name: "Agile Methodologies", level: 95 },
      { name: "Risk Management", level: 88 },
      { name: "Stakeholder Management", level: 94 },
      { name: "Budget Planning", level: 85 },
      { name: "Timeline Management", level: 93 },
    ]
  },
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 94 },
      { name: "HTML5 & CSS3", level: 96 },
      { name: "Performance Optimization", level: 89 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "ClickUp", level: 94 },
      { name: "Jira", level: 91 },
      { name: "VS Code", level: 90 },
      { name: "Notion", level: 96 },
      { name: "Primavera P6", level: 85 },
    ]
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Problem Solving", level: 93 },
      { name: "Strategic Thinking", level: 90 },
      { name: "Client Relations", level: 92 },
      { name: "Conflict Resolution", level: 87 },
    ]
  }
];

// const certifications = [
//   {
//     name: "Certified Scrum Master (CSM)",
//     issuer: "Scrum Alliance",
//     year: "2023",
//     icon: "🏆"
//   },
//   {
//     name: "Project Management Professional (PMP)",
//     issuer: "PMI",
//     year: "2022",
//     icon: "📜"
//   },
//   {
//     name: "AWS Certified Cloud Practitioner",
//     issuer: "Amazon Web Services",
//     year: "2023",
//     icon: "☁️"
//   },
//   {
//     name: "Google Analytics Certified",
//     issuer: "Google",
//     year: "2022",
//     icon: "📈"
//   }
// ];

export function Skills() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What I Bring to Your Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A unique combination of technical expertise and project management skills 
            to deliver exceptional results.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    {/* <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        {/* <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-2">Certifications & Achievements</h3>
            <p className="text-muted-foreground">
              Professional certifications that validate my expertise and commitment to continuous learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-background rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="font-semibold mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <Badge variant="outline" className="text-xs">{cert.year}</Badge>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}