import { notFound } from "next/navigation";

const blogPosts = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js",
    date: "2023-06-15",
    content: `
      Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this post, we'll cover the basics of setting up a Next.js project and explore some of its key features.

      ## Setting up a Next.js Project

      To create a new Next.js project, you can use the following command:

      \`\`\`
      npx create-next-app@latest my-next-app
      \`\`\`

      This will set up a new Next.js project with all the necessary configurations.

      ## Key Features of Next.js

      1. **Server-Side Rendering (SSR)**: Next.js allows you to render React components on the server, which can improve performance and SEO.

      2. **Static Site Generation (SSG)**: You can generate static HTML files at build time, which can be served directly from a CDN.

      3. **File-based Routing**: Next.js uses a file-based routing system, making it easy to create and manage routes in your application.

      4. **API Routes**: You can create API endpoints as part of your Next.js application, allowing you to build full-stack applications easily.

      ## Conclusion

      Next.js provides a great developer experience and powerful features out of the box. It's an excellent choice for building modern web applications with React.
    `,
  },
  // Add more blog posts here
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="container max-w-screen-md mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
        {post.title}
      </h1>
      <p className="text-muted-foreground mb-8">{post.date}</p>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
