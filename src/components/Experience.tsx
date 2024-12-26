import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getExperienceData } from "@/services";
import { TExperience } from "@/types";

const Experience = async () => {
  const experienceData = await getExperienceData();

  console.log(experienceData);
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
