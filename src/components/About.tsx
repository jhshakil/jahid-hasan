import Image from "next/image";
import { Card, CardContent } from "./ui/card";

type Props = {
  about: string;
};

const About = ({ about }: Props) => {
  return (
    <section className="py-20" id="about">
      <h2 className="text-3xl font-bold mb-8 text-center">ABOUT ME</h2>
      <Card className="bg-[#232730] border-none">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                I Develop System That Work
              </h3>
              <p className="text-gray-400 mb-4">{about}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold">Name:</p>
                  <p className="text-gray-400">Manuel Wilson</p>
                </div>
                <div>
                  <p className="font-bold">Email:</p>
                  <p className="text-gray-400">contact@example.com</p>
                </div>
                <div>
                  <p className="font-bold">Location:</p>
                  <p className="text-gray-400">New York, USA</p>
                </div>
                <div>
                  <p className="font-bold">Availability:</p>
                  <p className="text-gray-400">Full-time</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg"
                alt="Developer System"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
