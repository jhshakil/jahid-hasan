import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import { getProfileData } from "@/services";

const page = async () => {
  const profileData = await getProfileData();

  return (
    <div>
      <Hero profileData={profileData?.data[0]} />
      <About about={profileData?.data[0]?.about} />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
};

export default page;
