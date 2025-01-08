import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import { envConfig } from "@/config/envConfig";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import { NexiosResponse } from "nexios-http/types/interfaces";
import {
  IResponse,
  TBlog,
  TExperience,
  TProfile,
  TProject,
  TSkill,
  TSocial,
} from "@/types";
import nexiosInstance from "../../nexios.config";

type resProps = {
  profile: TProfile;
  socials: TSocial[];
  experiences: TExperience[];
  skills: TSkill[];
  projects: TProject[];
  blogs: TBlog[];
};

const page = async () => {
  const { data: fullHomeData }: NexiosResponse<IResponse<resProps>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/home`, {
      cache: "no-store",
    });

  if (!fullHomeData.success) return;

  return (
    <div>
      <Hero
        profileData={fullHomeData?.data?.profile as TProfile}
        social={fullHomeData?.data?.socials as TSocial[]}
      />
      <About profileData={fullHomeData?.data?.profile as TProfile} />
      <Experience
        experienceData={fullHomeData?.data?.experiences as TExperience[]}
      />
      <Skills skillData={fullHomeData?.data?.skills as TSkill[]} />
      <Projects projects={fullHomeData?.data?.projects as TProject[]} />
      <Blog blogs={fullHomeData?.data?.blogs as TBlog[]} />
      <Contact profileData={fullHomeData?.data?.profile as TProfile} />
    </div>
  );
};

export default page;
