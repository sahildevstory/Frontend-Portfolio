import SectionContainer from "@/components/common/SectionContainer";
import SectionTitle from "@/components/common/SectionTitle";
import BlogCard from "@/components/blogs/BlogCard";
import { getBlogs } from "@/lib/api/blog";
import Link from "next/link";

export default async function BlogPreview() {
  const blogs = await getBlogs();

  // Serialize Date objects to strings for the Client Component
  const serializedBlogs = blogs.map((blog) => ({
    ...blog,
    createdAt: blog.createdAt.toISOString(),
    updatedAt: blog.updatedAt.toISOString(),
  }));

  return (
    <SectionContainer id="blog">
      <div className="relative">
        {/* Glow behind section */}
        <div className="absolute -top-20 -right-20 w-40 h-40 md:w-64 md:h-64 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 md:w-64 md:h-64 bg-purple-600/5 rounded-full blur-3xl" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <SectionTitle
            title="Latest Blogs"
            subtitle="Thoughts, tutorials, and insights on web development and design."
            className="mb-0"
          />
      {blogs.length > 0 && (
  <Link
    href="/blogs"
    className="relative z-10 mt-4 md:mt-0 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white hover:border-red-500/40 hover:bg-white/5 transition-all duration-300"
  >
    View All Blogs →
  </Link>
)}
        </div>

        {serializedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serializedBlogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} post={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 md:py-20 rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm">
            <div className="text-4xl md:text-6xl mb-4">📝</div>
            <h3 className="text-lg md:text-xl font-bold text-white heading-font">
              No articles found
            </h3>
            <p className="text-sm md:text-base text-gray-400 mt-2">
              Stay tuned! Exciting blogs are coming soon.
            </p>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}
