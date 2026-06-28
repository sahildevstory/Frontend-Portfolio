"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogClient({ posts = [] }: any) {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("all");

  // ✅ SAFE TAG EXTRACTION
  const allTags = Array.from(
    new Set(posts.flatMap((p: any) => p.tags || []))
  );

  // ✅ SAFE FILTERING
  const filtered = posts.filter((post: any) => {
    const title = post?.title || "";

    const matchesSearch = title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTag =
      tag === "all" || (post.tags || []).includes(tag);

    return matchesSearch && matchesTag;
  });

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-white mb-10">
        Blog
      </h1>

      {/* Search */}
      <input
        className="w-full mb-6 p-3 rounded-xl bg-white/5 border border-white/10 text-white"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filters */}
      <div className="flex gap-3 mb-10 flex-wrap">
        <button
          onClick={() => setTag("all")}
          className="px-4 py-2 rounded-full border text-white"
        >
          All
        </button>

        {allTags.map((t: any) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className="px-4 py-2 rounded-full border border-white/10 text-white"
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((post: any) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

    </section>
  );
}