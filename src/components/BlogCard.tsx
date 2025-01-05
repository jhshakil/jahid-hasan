import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const BlogCard = ({ slug, title, excerpt, date, image }: BlogCardProps) => {
  return (
    <Card className="bg-[#232730] border-none overflow-hidden">
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-400 line-clamp-3 mb-4">{excerpt}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex items-center text-sm text-gray-400">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogCard;
