import Image from "next/image";
import { TProfile, TSocial } from "@/types";
import Link from "next/link";

type Props = {
  profileData: TProfile;
  social: TSocial[];
};

const Hero = ({ profileData, social }: Props) => {
  const { name, designation, image } = profileData;

  return (
    <header className="text-center py-20">
      <div className="relative w-60 h-60 mx-auto mb-6">
        <Image
          src={image}
          alt="Profile"
          fill
          className="rounded-full border-4 border-blue-500 object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">Hello, I&apos;m {name}</h1>
      <p className="text-xl text-gray-400 mb-6">{designation}</p>
      <div className="flex justify-center space-x-4">
        {social?.map((social: TSocial) => (
          <Link
            key={social.id}
            href={social?.url || "#"}
            target="_blank"
            rel="noreferrer"
            className=" hover:text-blue-500"
          >
            <span>{social.name}</span>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Hero;
