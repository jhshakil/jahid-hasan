import { IResponse, TBlog } from "@/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import { notFound } from "next/navigation";
import nexiosInstance from "../../../../nexios.config";
import { envConfig } from "@/config/envConfig";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Metadata } from "next";
import { format } from "date-fns";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { data: post }: NexiosResponse<IResponse<TBlog>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/blog/${params.slug}`, {
      cache: "no-store",
    });

  if (!post?.data) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.data?.title,
    description: post.data?.description.slice(0, 10),
  };
}

const page = async ({ params }: BlogPostPageProps) => {
  const { data: post }: NexiosResponse<IResponse<TBlog>> =
    await nexiosInstance.get(`${envConfig.baseUrl}/blog/${params.slug}`, {
      cache: "no-store",
    });

  if (!post?.data) {
    notFound();
  }

  const { title, image, description, createdAt } = post.data || {};

  return (
    <div className="container mx-auto px-4 py-20">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-[400px] mb-8">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center text-sm text-gray-400 mb-6">
          <Calendar className="w-4 h-4 mr-2" />
          {format(createdAt, "yyyy-MM-dd")}
        </div>
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="prose prose-invert max-w-none prose-pre:bg-[#232730] prose-pre:border prose-pre:border-gray-800">
          <p>{description}</p>
        </div>
      </article>
    </div>
  );
};

export default page;
