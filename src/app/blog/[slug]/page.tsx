import { getBlogDetails } from "@/services";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogDetails(params.slug);

  console.log(post);

  if (!post) {
    notFound();
  }

  return (
    <div className="container max-w-screen-md mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
        {post.data.title}
      </h1>
      {/* <p className="text-muted-foreground mb-8">{post.date}</p> */}
      {/* <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.description }}
      /> */}
      <p>{post.data.description}</p>
    </div>
  );
};

export default page;
