import { Progress } from "@/components/ui/progress";
import { TSkill } from "@/types";

type Props = {
  skillData: TSkill[];
};

const Skills = ({ skillData }: Props) => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillData.map((skill) => (
          <div key={skill.id}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.percentage}%</span>
            </div>
            <Progress
              value={Number(skill.percentage)}
              className="h-2 bg-white"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
