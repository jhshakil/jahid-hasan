import { Badge } from "@/components/ui/badge";
import { envConfig } from "@/config/envConfig";
import { IResponse, TSkill } from "@/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import nexiosInstance from "../../nexios.config";

const Skills = async () => {
  const { data: skillData }: NexiosResponse<IResponse<TSkill[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/skill`, {
      cache: "no-store",
    });

  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skillData?.data?.map((skill: TSkill) => (
          <Badge key={skill.id} variant="outline">
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
