import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { envConfig } from "@/config/envConfig";
import { IResponse, TExperience } from "@/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import nexiosInstance from "../../nexios.config";

const Experience = async () => {
  const { data: experienceData }: NexiosResponse<IResponse<TExperience[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/experience`, {
      cache: "no-store",
    });

  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experienceData?.data?.map((exp: TExperience) => (
          <Card key={exp.id}>
            <CardHeader>
              <CardTitle>{exp.designation}</CardTitle>
              <CardDescription>
                {exp.companyName} | {exp.duration}
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
};

export default Experience;
