import { TBlog } from "@/types";
import BlogCard from "./BlogCard";

type Props = {
  blogs: TBlog[];
};

const Blog = async ({ blogs }: Props) => {
  if (!(blogs && blogs.length)) return;

  return (
    <section className="py-20" id="blog">
      <h2 className="text-3xl font-bold mb-8 text-center">BLOG</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((post) => (
          <BlogCard key={post.slug} blog={post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
