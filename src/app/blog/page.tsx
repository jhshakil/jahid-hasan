import Blog from "@/components/Blog";
import { envConfig } from "@/config/envConfig";
import { IResponse, TBlog } from "@/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import nexiosInstance from "../../../nexios.config";

const page = async () => {
  const { data: blogData }: NexiosResponse<IResponse<TBlog[]>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/blog`, {
      cache: "no-store",
    });

  return <div>{blogData?.data && <Blog blogs={blogData?.data} />}</div>;
};

export default page;
