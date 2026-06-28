import Link from "next/link";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    coverImage?: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02] cursor-pointer">
        {post.coverImage && (
          <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center text-4xl">
            📝
          </div>
        )}
        <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{post.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag: string) => (
            <span key={tag} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-xs">{post.date}</p>
      </div>
    </Link>
  );
}
