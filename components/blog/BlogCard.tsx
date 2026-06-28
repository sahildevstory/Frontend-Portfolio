import Link from "next/link";

export default function BlogCard({ post }: any) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        transition-all
        hover:border-red-500/40
        hover:scale-[1.02]
      "
    >
      {/* Glow */}
      <div className="absolute -top-10 -right-10 h-32 w-32 bg-red-600/20 blur-2xl" />

      <h2 className="text-xl font-bold text-white">
        {post.title}
      </h2>

      <p className="mt-3 text-zinc-400 text-sm">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border border-white/10 text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}