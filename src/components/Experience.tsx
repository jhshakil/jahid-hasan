import { Card, CardContent } from "@/components/ui/card";
import { TExperience } from "@/types";
import { Calendar } from "lucide-react";

type Props = {
  experienceData: TExperience[];
};

const Experience = ({ experienceData }: Props) => {
  if (!(experienceData && experienceData.length)) return;
  return (
    <section className="py-20" id="experience">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Professional Experience
      </h2>
      <div className="space-y-8">
        {experienceData?.map((item) => (
          <ExperienceCard key={item.id} experience={item} />
        ))}
      </div>
    </section>
  );
};

function ExperienceCard({ experience }: { experience: TExperience }) {
  const { designation, companyName, duration, description } = experience;
  return (
    <Card className="bg-[#232730] border-none overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-1">{designation}</h3>
            <p className="text-blue-400 mb-1">{companyName}</p>
          </div>
          <div className="flex items-center text-gray-400 mt-2 md:mt-0">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>
        <div>
          <p className="text-gray-300">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default Experience;
