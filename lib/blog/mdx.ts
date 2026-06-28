import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_PATH = path.join(process.cwd(), "content/blog");

// 🔥 GET ALL POSTS
export function getAllPosts() {
  if (!fs.existsSync(BLOG_PATH)) {
    console.warn("Blog folder not found:", BLOG_PATH);
    return [];
  }

  const files = fs.readdirSync(BLOG_PATH);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");

      const filePath = path.join(BLOG_PATH, file);
      const content = fs.readFileSync(filePath, "utf-8");

      const { data, content: mdx } = matter(content);

      return {
        slug,
        title: data.title ?? "Untitled",
        excerpt: data.excerpt ?? "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        date: data.date ?? "",
        content: mdx ?? "",
      };
    });
}

// 🔥 GET SINGLE POST
export function getPost(slug: string) {
  try {
    if (!slug) {
      console.error("❌ getPost called with undefined slug");
      return null;
    }

    const filePath = path.join(BLOG_PATH, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      console.error("❌ MDX file not found:", filePath);
      return null;
    }

    const file = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(file);

    return {
      slug,
      title: data.title ?? "Untitled",
      excerpt: data.excerpt ?? "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      date: data.date ?? "",
      content: content ?? "",
    };
  } catch (err) {
    console.log("MDX ERROR:", err);
    return null;
  }
}