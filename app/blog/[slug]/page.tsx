// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Calendar, User, Eye, Tag } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.createdAt,
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = params;
  
  const blog = await prisma.blog.findUnique({
    where: { slug, published: true },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Header */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white heading-font">
          {blog.title}
        </h1>

        <p className="mt-4 text-lg text-zinc-400">
          {blog.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 md:gap-6 text-sm text-zinc-500">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {blog.author.name}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            {blog.views} views
          </span>
        </div>
      </div>

      {/* Cover Image */}
      {blog.coverImage && (
        <div className="relative w-full h-60 md:h-80 rounded-2xl overflow-hidden mb-8 md:mb-12">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <div className="whitespace-pre-line text-zinc-300 leading-relaxed">
          {blog.content}
        </div>
      </div>
    </article>
  );
}