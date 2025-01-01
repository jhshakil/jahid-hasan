import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IResponse, TProject } from "@/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import nexiosInstance from "../../nexios.config";
import { envConfig } from "@/config/envConfig";

const Project = async () => {
  const { data: projectData }: NexiosResponse<IResponse<TProject[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/project`, {
      cache: "no-store",
    });

  console.log(projectData);
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectData?.data?.map((project: TProject) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{project.technology}</p>
              {/* <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div> */}
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link
                  href={project?.subTitle || "#"}
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
};

export default Project;
