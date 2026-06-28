import Link from "next/link";
import { getBlogs } from "@/lib/api/blog";

export default async function BlogPreview() {
  const blogs = await getBlogs();

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-white mb-8">
        Latest Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.slice(0, 3).map((blog: any) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="p-5 border border-white/10 rounded-xl bg-white/5 hover:border-red-500/40"
          >
            <h3 className="text-white font-semibold">
              {blog.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}