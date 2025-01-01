import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import { IResponse, TProfile } from "@/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import nexiosInstance from "../../nexios.config";
import { envConfig } from "@/config/envConfig";

const page = async () => {
  // const {data}: NexiosResponse<IResponse<TProfile>> = await getProfileData();
  const { data }: NexiosResponse<IResponse<TProfile[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/profile`, {
      cache: "no-store",
    });

  // const blogData = await getBlogData();

  return (
    <div>
      {data?.data && <Hero profileData={data?.data[0]} />}

      {/* <About about={profileData?.data[0]?.about} /> */}
      <Experience />
      <Projects />
      <Skills />
      {/* <Blog blogs={blogData?.data?.slice(0, 3)} /> */}
      <Contact />
    </div>
  );
};

export default page;
