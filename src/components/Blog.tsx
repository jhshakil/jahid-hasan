import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TBlog } from "@/types";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  blogs: TBlog[];
};

const Blog = async ({ blogs }: Props) => {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
        Blog
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post: TBlog) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              {/* <CardDescription>{post.date}</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{post.description}</p>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.id}`}
                  className={cn(buttonVariants())}
                >
                  See Details
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
