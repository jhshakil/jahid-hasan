import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import { IResponse, TBlog, TProfile, TProject, TSkill, TSocial } from "@/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import nexiosInstance from "../../nexios.config";
import { envConfig } from "@/config/envConfig";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";

const page = async () => {
  const { data: profileData }: NexiosResponse<IResponse<TProfile[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/profile`, {
      cache: "no-store",
    });

  const { data: blogData }: NexiosResponse<IResponse<TBlog[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/blog`, {
      cache: "no-store",
    });

  const { data: socialData }: NexiosResponse<IResponse<TSocial[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/social`, {
      cache: "no-store",
    });

  const { data: skillData }: NexiosResponse<IResponse<TSkill[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/skill`, {
      cache: "no-store",
    });

  const { data: projectData }: NexiosResponse<IResponse<TProject[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/project`, {
      cache: "no-store",
    });

  return (
    <div>
      {profileData?.data && (
        <Hero
          profileData={profileData?.data[0]}
          social={socialData?.data as TSocial[]}
        />
      )}
      {profileData?.data && <About about={profileData?.data[0]?.about} />}
      <Experience />
      <Skills skillData={skillData?.data as TSkill[]} />
      <Projects projects={projectData?.data as TProject[]} />
      {blogData?.data && <Blog blogs={blogData?.data?.slice(0, 3)} />}
      <Contact />
    </div>
  );
};

export default page;
