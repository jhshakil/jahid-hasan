import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          John Doe
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-[700px]">
          Full-stack Web Developer specializing in React, Next.js, and Node.js
        </p>
        <div className="mt-8">
          <Button asChild className="mr-4">
            <Link href="#contact">Get in touch</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">Read my blog</Link>
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/profile-image.jpg"
          alt="John Doe"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
