import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST APIs",
  "HTML5",
  "CSS3",
  "Sass",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Jest",
  "Cypress",
  "Webpack",
  "Docker",
  "AWS",
  "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
