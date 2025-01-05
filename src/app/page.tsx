import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import { envConfig } from "@/config/envConfig";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import { toast } from "sonner";

const page = async () => {
  let fullHomeData = null;

  try {
    fullHomeData = await fetch(`${envConfig.baseUrl}/home`).then((res) =>
      res.json()
    );
  } catch (error) {
    toast("something went wrong");
    console.log(error);
  }

  if (!fullHomeData.success) return;

  return (
    <div>
      <Hero
        profileData={fullHomeData?.data?.profile}
        social={fullHomeData?.data?.socials}
      />
      <About profileData={fullHomeData?.data?.profile} />
      <Experience experienceData={fullHomeData?.data?.experiences} />
      <Skills skillData={fullHomeData?.data?.skills} />
      <Projects projects={fullHomeData?.data?.projects} />
      <Blog blogs={fullHomeData?.data?.blogs} />
      <Contact />
    </div>
  );
};

export default page;
