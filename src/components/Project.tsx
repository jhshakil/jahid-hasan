import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with Next.js and Stripe integration.",
    technologies: ["Next.js", "React", "Node.js", "Stripe", "MongoDB"],
    link: "https://github.com/johndoe/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "A React-based task management application with real-time updates.",
    technologies: ["React", "Firebase", "Material-UI"],
    link: "https://github.com/johndoe/task-management-app",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard using OpenWeatherMap API and Chart.js for data visualization.",
    technologies: ["JavaScript", "Chart.js", "API Integration"],
    link: "https://github.com/johndoe/weather-dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
