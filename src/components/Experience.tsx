import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {experienceItems.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <Card className="bg-[#232730] border-none overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-blue-400 mb-1">{company}</p>
          </div>
          <div className="flex items-center text-gray-400 mt-2 md:mt-0">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{period}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

const experienceItems: ExperienceItemProps[] = [
  {
    title: "Senior Front-end Developer",
    company: "TechCorp Solutions",
    location: "New York, NY",
    period: "2022 - Present",
    description: [
      "Lead a team of 5 developers in creating modern web applications using React and Next.js",
      "Implemented state management solutions using Redux and Context API, improving application performance by 30%",
      "Mentored junior developers and conducted code reviews to ensure high code quality and best practices",
      "Collaborated with UX/UI designers to implement responsive and accessible designs",
    ],
  },
  {
    title: "Front-end Developer",
    company: "WebInnovate Inc.",
    location: "San Francisco, CA",
    period: "2020 - 2022",
    description: [
      "Developed responsive websites and web applications using React, TypeScript, and Tailwind CSS",
      "Worked on optimizing website performance, achieving a 40% improvement in load times",
      "Integrated RESTful APIs and implemented real-time features using WebSockets",
      "Participated in agile development processes, including daily stand-ups and sprint planning",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "DigitalCraft Agency",
    location: "Austin, TX",
    period: "2018 - 2020",
    description: [
      "Built and maintained client websites using HTML, CSS, and JavaScript",
      "Assisted in the development of a custom CMS using PHP and MySQL",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Collaborated with the design team to create interactive UI components",
    ],
  },
];

export default Experience;
