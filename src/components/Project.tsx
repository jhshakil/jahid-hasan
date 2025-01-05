import { Card, CardContent } from "@/components/ui/card";
import { TProject } from "@/types";
import Image from "next/image";

type Props = {
  projects: TProject[];
};

const Project = async ({ projects }: Props) => {
  return (
    <section className="py-20" id="project">
      <h2 className="text-2xl font-bold mb-8 text-center">PORTFOLIO</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project, index) => (
          <Card
            key={index}
            className="bg-[#232730] border-none overflow-hidden"
          >
            <CardContent className="p-0">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Project;
