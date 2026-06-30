// components/blog/BlogClient.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import BlogCard from "./BlogCard";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, Loader2, RefreshCw } from "lucide-react";

interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  published: boolean;
  views: number;
  createdAt: string;
  author: {
    name: string;
    email: string;
  };
}

export default function BlogClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedTag, setSelectedTag] = useState(searchParams.get("tag") || "all");
  const [allTags, setAllTags] = useState<string[]>([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
  });

  const fetchBlogs = useCallback(async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (selectedTag !== "all") params.set("tag", selectedTag);
      params.set("page", page.toString());
      params.set("limit", "10");

      const res = await fetch(`/api/blogs?${params.toString()}`);
      const data = await res.json();

      if (res.ok) {
        setBlogs(data.blogs);
        setPagination(data.pagination);
        
        // Extract all tags
        const tags = data.blogs.flatMap((b: Blog) => b.tags || []);
        setAllTags(Array.from(new Set(tags)));
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }, [search, selectedTag]);

  useEffect(() => {
    fetchBlogs(1);
  }, [fetchBlogs]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (selectedTag !== "all") params.set("tag", selectedTag);
    router.push(`/blog?${params.toString()}`);
    fetchBlogs(1);
  };

  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag);
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (tag !== "all") params.set("tag", tag);
    router.push(`/blog?${params.toString()}`);
    fetchBlogs(1);
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedTag("all");
    router.push("/blog");
    fetchBlogs(1);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Header */}
      <div className="mb-10 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white heading-font">
          Blog
        </h1>
        <p className="mt-3 text-zinc-400 text-sm md:text-base max-w-2xl">
          Thoughts, tutorials, and insights on web development, design, and technology.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="space-y-4 md:space-y-6">
        <form onSubmit={handleSearch} className="relative">
          <input
            className="w-full bg-surface/50 backdrop-blur-sm border border-white/10 rounded-full py-2.5 md:py-3 pl-10 md:pl-12 pr-12 md:pr-16 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all duration-300"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-500" />
          {search && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                fetchBlogs(1);
              }}
              className="absolute right-12 md:right-16 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-500 text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors"
          >
            Search
          </button>
        </form>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs md:text-sm text-zinc-500 mr-1">Filter:</span>
          <button
            onClick={() => handleTagFilter("all")}
            className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
              selectedTag === "all"
                ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                : "bg-surface/30 text-gray-400 hover:text-white border border-white/10 hover:border-white/20"
            }`}
          >
            All
          </button>
          {allTags.slice(0, 8).map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagFilter(tag)}
              className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                  : "bg-surface/30 text-gray-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {tag}
            </button>
          ))}
          {(search || selectedTag !== "all") && (
            <button
              onClick={clearFilters}
              className="text-xs text-gray-500 hover:text-white transition-colors ml-2"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="mt-4 md:mt-6 flex items-center justify-between">
        <p className="text-xs md:text-sm text-gray-500">
          Showing <span className="text-white font-medium">{pagination.total}</span> articles
          {selectedTag !== "all" && (
            <span className="text-gray-400">
              {" "}· Tag: <span className="text-red-400">{selectedTag}</span>
            </span>
          )}
          {search && (
            <span className="text-gray-400">
              {" "}· Searching for "<span className="text-white">{search}</span>"
            </span>
          )}
        </p>
        <button
          onClick={() => fetchBlogs(pagination.page)}
          className="text-gray-500 hover:text-white transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Blog Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
        </div>
      ) : blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} post={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 md:py-24">
          <div className="text-4xl md:text-6xl mb-4">📝</div>
          <h3 className="text-lg md:text-xl font-bold text-white heading-font">No articles found</h3>
          <p className="text-sm md:text-base text-gray-400 mt-2">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 px-4 md:px-6 py-1.5 md:py-2 bg-red-600 text-white rounded-full text-xs md:text-sm font-medium hover:bg-red-500 transition-colors"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => fetchBlogs(page)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                pagination.page === page
                  ? "bg-red-600 text-white"
                  : "bg-surface/30 text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}