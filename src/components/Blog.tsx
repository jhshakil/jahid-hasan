import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const blogPosts = [
  {
    title: "Getting Started with Next.js",
    date: "2023-06-15",
    slug: "getting-started-with-nextjs",
    excerpt:
      "Learn how to set up your first Next.js project and understand its core concepts.",
  },
  {
    title: "React Hooks Explained",
    date: "2023-05-20",
    slug: "react-hooks-explained",
    excerpt:
      "A deep dive into React Hooks and how they can simplify your React components.",
  },
  {
    title: "Building Scalable APIs with Node.js",
    date: "2023-04-10",
    slug: "building-scalable-apis-with-nodejs",
    excerpt:
      "Learn best practices for creating robust and scalable APIs using Node.js and Express.",
  },
];

export default function Blog() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
        Blog
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
