import { IResponse, TBlog } from "@/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import { notFound } from "next/navigation";
import nexiosInstance from "../../../../nexios.config";
import { envConfig } from "@/config/envConfig";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { blogPosts } from "@/components/Blog";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

const page = async ({ params }: BlogPostPageProps) => {
  // const { data: post }: NexiosResponse<IResponse<TBlog>> =
  //   await nexiosInstance.get(`${envConfig.baseUrl}/blog/${params.slug}`, {
  //     cache: "no-store",
  //   });

  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // if (!post?.data) {
  //   notFound();
  // }

  return (
    <div className="container mx-auto px-4 py-20">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-[400px] mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center text-sm text-gray-400 mb-6">
          <Calendar className="w-4 h-4 mr-2" />
          {post.date}
        </div>
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <div className="prose prose-invert max-w-none prose-pre:bg-[#232730] prose-pre:border prose-pre:border-gray-800">
          {post.content.split("\n").map((paragraph, index) => {
            if (paragraph.startsWith("#")) {
              const level = paragraph.match(/^#+/)?.[0].length;
              const text = paragraph.replace(/^#+\s/, "");
              const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
              return <HeadingTag key={index}>{text}</HeadingTag>;
            }
            if (paragraph.startsWith("-")) {
              return (
                <ul key={index}>
                  <li>{paragraph.replace("- ", "")}</li>
                </ul>
              );
            }
            if (paragraph.startsWith("```")) {
              const code = paragraph.replace(/```\w+\n/, "").replace(/```/, "");
              return (
                <pre key={index}>
                  <code>{code}</code>
                </pre>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </article>
    </div>
  );
};

export default page;
