import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import { IResponse, TBlog, TProfile } from "@/types";
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

  return (
    <div>
      {profileData?.data && <Hero profileData={profileData?.data[0]} />}
      {profileData?.data && <About about={profileData?.data[0]?.about} />}
      <Experience />
      <Projects />
      <Skills />
      {blogData?.data && <Blog blogs={blogData?.data?.slice(0, 3)} />}

      <Contact />
    </div>
  );
};

export default page;
