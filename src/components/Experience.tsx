import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "Jan 2021 - Present",
    description:
      "Lead developer for multiple high-traffic web applications. Implemented microservices architecture and improved overall system performance by 40%.",
  },
  {
    title: "Full Stack Developer",
    company: "WebSolutions Co.",
    period: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained various client projects using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and reduced deployment time by 60%.",
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "Jun 2016 - Feb 2018",
    description:
      "Assisted in the development of the company's main product. Gained extensive experience in front-end technologies and agile methodologies.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
