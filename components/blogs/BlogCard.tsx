// components/blog/BlogCard.tsx
"use client";

import Link from "next/link";
import { Calendar, Eye, User } from "lucide-react";

interface BlogCardProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    coverImage?: string;
    tags: string[];
    views: number;
    createdAt: string;
    author: {
      name: string;
      email: string;
    };
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-gradient-to-br from-surface/80 to-surface-light/80
        p-5 md:p-6
        transition-all
        duration-500
        hover:border-red-500/40
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-red-500/5
        animate-fade-in-up
      "
    >
      {/* Glow */}
      <div className="absolute -top-20 -right-20 h-40 w-40 bg-red-600/10 blur-2xl transition-all duration-500 group-hover:bg-red-600/20" />

      {/* Cover Image Placeholder */}
      {post.coverImage ? (
        <div className="relative w-full h-40 md:h-48 rounded-lg overflow-hidden mb-4">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="w-full h-12 md:h-16 rounded-lg bg-gradient-to-br from-red-500/10 to-purple-500/10 mb-4 flex items-center justify-center">
          <span className="text-2xl md:text-3xl">📝</span>
        </div>
      )}

      <h2 className="text-lg md:text-xl font-bold text-white heading-font group-hover:text-red-400 transition-colors line-clamp-2">
        {post.title}
      </h2>

      <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
        {post.excerpt}
      </p>

      {/* Meta Info */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
        <span className="flex items-center gap-1">
          <User className="w-3 h-3" />
          {post.author.name}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          {post.views}
        </span>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300"
          >
            #{tag}
          </span>
        ))}
        {post.tags.length > 3 && (
          <span className="text-[10px] px-2.5 py-1 rounded-full text-zinc-500">
            +{post.tags.length - 3}
          </span>
        )}
      </div>
    </Link>
  );
}