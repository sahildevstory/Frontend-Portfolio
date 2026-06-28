import { getPost } from "@/lib/blog/mdx";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 🔥 FIX HERE

  const post = getPost(slug);

  if (!post) {
    return (
      <div className="text-white p-10">
        Post not found
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold">{post.title}</h1>

      <p className="mt-4 text-zinc-400">{post.excerpt}</p>

      <div className="mt-10 whitespace-pre-line">
        {post.content}
      </div>
    </article>
  );
}