import Blog from "@/components/Blog";
import { getBlogData } from "@/services";

const page = async () => {
  const blogData = await getBlogData();
  return (
    <>
      <Blog blogs={blogData?.data} />
    </>
  );
};

export default page;
