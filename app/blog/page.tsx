import BlogClient from "@/components/blog/BlogClient";
import { getAllPosts } from "@/lib/blog/mdx";

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogClient posts={posts} />;
}