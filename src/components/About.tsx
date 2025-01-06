import { Card, CardContent } from "./ui/card";
import { TProfile } from "@/types";

type Props = {
  profileData: TProfile;
};

const About = ({ profileData }: Props) => {
  return (
    <section className="py-20" id="about">
      <h2 className="text-3xl font-bold mb-8 text-center">ABOUT ME</h2>
      <Card className="bg-[#232730] border-none">
        <CardContent className="p-6">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-gray-400 mb-4">{profileData.about}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Name:</p>
                <p className="text-gray-400">{profileData.name}</p>
              </div>
              <div>
                <p className="font-bold">Email:</p>
                <p className="text-gray-400">{profileData.email}</p>
              </div>
              <div>
                <p className="font-bold">Location:</p>
                <p className="text-gray-400">{profileData.address}</p>
              </div>
              <div>
                <p className="font-bold">Language:</p>
                <p className="text-gray-400">{profileData.language}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
