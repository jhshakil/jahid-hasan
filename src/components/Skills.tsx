import { Badge } from "@/components/ui/badge";
import { getSkillData } from "@/services";
import { TSkill } from "@/types";

const Skills = async () => {
  const skillData = await getSkillData();

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
