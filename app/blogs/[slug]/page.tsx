// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Calendar, User, Eye, ArrowLeft, Clock, Heart, Quote, BookOpen } from "lucide-react";
import Image from "next/image";
import ShareButton from "@/components/blogs/ShareButton";

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

  const wordCount = blog.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Format content with better styling
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold text-white mt-12 mb-6 heading-font">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-bold text-white mt-10 mb-4 heading-font">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-3 heading-font">{line.slice(4)}</h3>;
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={index} className="relative my-6 pl-6 py-4 border-l-4 border-red-500 bg-red-500/5 rounded-r-xl">
            <Quote className="absolute -top-2 -left-2 w-6 h-6 text-red-500/30" />
            <p className="text-lg text-zinc-300 italic leading-relaxed">{line.slice(2)}</p>
          </blockquote>
        );
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 text-zinc-300 leading-relaxed">{line.slice(2)}</li>;
      }
      if (line.startsWith('```')) {
        return (
          <pre key={index} className="my-6 p-6 bg-surface/50 rounded-2xl border border-white/10 overflow-x-auto">
            <code className="text-sm text-emerald-300 font-mono">{line.slice(3)}</code>
          </pre>
        );
      }
      if (line.trim() === '') {
        return <div key={index} className="h-4" />;
      }
      return <p key={index} className="text-zinc-300 leading-relaxed mb-4">{line}</p>;
    });
  };

  return (
    <article className="min-h-screen bg-gradient-to-b from-background to-surface">
      {/* Animated Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Back Button */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
        <Link
          href="/blogs"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-surface/80
            backdrop-blur-xl
            border
            border-white/10
            px-4
            py-2.5
            text-sm
            font-medium
            text-zinc-300
            transition-all
            duration-300
            hover:border-red-500/40
            hover:text-white
            hover:bg-red-500/10
            hover:shadow-lg
            hover:shadow-red-500/10
            hover:-translate-x-1
          "
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span className="hidden sm:inline">Back to Blog</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </div>

      {/* Content Container */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Header - Hero Section */}
        <div className="relative mb-12">
          {/* Gradient underline */}
          <div className="absolute -top-4 left-0 w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full" />
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="
                  group
                  text-xs
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-red-500/20
                  bg-red-500/10
                  text-red-400
                  font-medium
                  hover:border-red-500/40
                  hover:bg-red-500/20
                  hover:scale-105
                  transition-all
                  duration-300
                  cursor-default
                "
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white heading-font leading-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-6 text-xl text-zinc-400 leading-relaxed max-w-2xl">
            {blog.excerpt}
          </p>

          {/* Author & Meta */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/30 to-purple-500/30 flex items-center justify-center border border-white/10">
                <User className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-white font-medium">{blog.author.name}</p>
                <p className="text-xs text-zinc-500">Author</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-red-400/70" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-red-400/70" />
                {readingTime} min read
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-red-400/70" />
                {blog.views} views
              </span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl shadow-red-500/5">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            
            {/* Decorative gradient overlays */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
        )}

        {/* Reading Progress Bar */}
        <div className="mb-8 flex items-center gap-3 text-sm text-zinc-500">
          <BookOpen className="w-4 h-4 text-red-400" />
          <span>{readingTime} min read</span>
          <div className="flex-1 h-0.5 bg-white/5 rounded-full overflow-hidden">
            <div className="w-0 h-full bg-gradient-to-r from-red-500 to-purple-500 rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            {formatContent(blog.content)}
          </div>
        </div>

        {/* Divider with decorative element */}
        <div className="relative mt-16 pt-8 border-t border-white/5">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-surface rounded-full border border-white/5 flex items-center justify-center">
            <span className="text-xs text-zinc-500">✦</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            {/* Share buttons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-zinc-500">Share this article:</span>
              <ShareButton title={blog.title} excerpt={blog.excerpt} />
            </div>

            {/* Like/Enjoy */}
            <div className="flex items-center gap-2 text-sm text-zinc-500 hover:text-red-400 transition-colors group cursor-default">
              <Heart className="w-4 h-4 text-red-500 fill-red-500 group-hover:scale-110 transition-transform" />
              <span>Enjoyed this article?</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 rounded-2xl bg-surface/30 border border-white/5 text-center">
          <p className="text-sm text-zinc-500">
            Thanks for reading! 💡 If you found this helpful, consider sharing it with others.
          </p>
        </div>
      </div>
    </article>
  );
}