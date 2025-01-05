import { TBlog } from "@/types";
import BlogCard from "./BlogCard";

type Props = {
  blogs: TBlog[];
};

const Blog = async ({ blogs }: Props) => {
  return (
    <section className="py-20" id="blog">
      <h2 className="text-2xl font-bold mb-8 text-center">BLOG</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
};

export const blogPosts = [
  {
    slug: "modern-web-development",
    title: "Modern Web Development with Next.js",
    excerpt:
      "Explore the latest features and best practices in modern web development using Next.js and React.",
    date: "January 4, 2024",
    image: "/placeholder.svg",
    content: `
      # Modern Web Development with Next.js

      Next.js has revolutionized the way we build web applications. In this post, we'll explore the latest features and best practices that make Next.js the go-to framework for modern web development.

      ## Why Next.js?

      Next.js provides an excellent developer experience with features like:
      - Server-side rendering
      - Static site generation
      - API routes
      - Built-in routing
      - TypeScript support

      ## Getting Started

      To get started with Next.js, you need to have Node.js installed on your machine. Then, you can create a new Next.js project using:

      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`

      ## Best Practices

      Here are some best practices to follow when building with Next.js:
      1. Use TypeScript for better type safety
      2. Implement proper error handling
      3. Optimize images using Next.js Image component
      4. Use server components when possible
      5. Follow the App Router conventions
    `,
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript for Better Code Quality",
    excerpt:
      "Learn how to leverage TypeScript features to write more maintainable and scalable code.",
    date: "January 2, 2024",
    image: "/placeholder.svg",
    content: `
      # Mastering TypeScript for Better Code Quality

      TypeScript has become an essential tool for modern JavaScript development. Let's explore how it can help improve your code quality.

      ## Benefits of TypeScript

      - Strong typing system
      - Better IDE support
      - Early error detection
      - Enhanced code maintainability

      ## Advanced TypeScript Features

      ### Generics
      Generics allow you to write flexible, reusable code while maintaining type safety.

      ### Utility Types
      TypeScript provides several utility types that help you transform types in useful ways.

      ### Type Guards
      Learn how to narrow down types in a type-safe way using type guards.
    `,
  },
  {
    slug: "responsive-design-tips",
    title: "Essential Tips for Responsive Web Design",
    excerpt:
      "Discover key principles and techniques for creating responsive websites that work across all devices.",
    date: "December 28, 2023",
    image: "/placeholder.svg",
    content: `
      # Essential Tips for Responsive Web Design

      Creating websites that work well across all devices is crucial in today's mobile-first world.

      ## Core Principles

      1. Mobile-First Approach
      2. Flexible Grids
      3. Responsive Images
      4. Typography
      5. Performance Optimization

      ## CSS Best Practices

      ### Using Media Queries
      Learn how to effectively use media queries for different screen sizes.

      ### Flexible Units
      Understanding when to use relative units like rem, em, and viewport units.

      ### Modern Layout Techniques
      Exploring CSS Grid and Flexbox for responsive layouts.
    `,
  },
];

export default Blog;
