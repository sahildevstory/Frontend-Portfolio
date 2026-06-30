"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { 
  Plus, 
  Edit, 
  Trash2, 
  LogOut, 
  Save, 
  X, 
  ArrowLeft, 
  Loader2, 
  Eye, 
  EyeOff, 
  FileText,
  Tag as TagIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string | null;
  tags: string[];
  published: boolean;
  views: number;
  createdAt: string;
  author: {
    name: string | null;
    email: string;
  };
}

interface AdminClientProps {
  initialBlogs: Blog[];
  session: any;
}

export default function AdminClient({ initialBlogs, session }: AdminClientProps) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Partial<Blog> | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    coverImage: "",
    tags: "",
    published: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleCreateNew = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      coverImage: "",
      tags: "",
      published: false,
    });
    setIsEditing(true);
    setSubmitError("");
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      coverImage: blog.coverImage || "",
      tags: blog.tags.join(", "),
      published: blog.published,
    });
    setIsEditing(true);
    setSubmitError("");
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this blog? This action cannot be undone.")) {
      return;
    }

    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setBlogs(blogs.filter((b) => b.slug !== slug));
      } else {
        alert("Failed to delete blog post");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while deleting the blog");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError("");

    const tagsArray = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const payload = {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      coverImage: formData.coverImage || null,
      tags: tagsArray,
      published: formData.published,
    };

    try {
      if (editingBlog) {
        // PUT request
        const res = await fetch(`/api/blogs/${editingBlog.slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (res.ok) {
          setBlogs(blogs.map((b) => (b.id === editingBlog.id ? data : b)));
          setIsEditing(false);
          setEditingBlog(null);
        } else {
          setSubmitError(data.error || "Failed to update blog post");
        }
      } else {
        // POST request
        const res = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (res.ok) {
          setBlogs([data, ...blogs]);
          setIsEditing(false);
        } else {
          setSubmitError(data.error || "Failed to create blog post");
        }
      }
    } catch (err) {
      console.error(err);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Spider-web style grid backdrop overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🕸️</span>
            <div>
              <h1 className="text-lg font-bold heading-font text-white">Spider-Verse Dashboard</h1>
              <p className="text-[10px] text-zinc-500">Logged in as {session?.user?.name || session?.user?.email}</p>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-red-500/10 hover:border-red-500/30 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 relative z-10">
        {!isEditing ? (
          <div>
            {/* List View header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold heading-font text-white">Manage Blogs</h2>
                <p className="text-sm text-zinc-400 mt-1">Create, edit, or delete blog articles on your website.</p>
              </div>
              <button
                onClick={handleCreateNew}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition-all px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-red-600/20 cursor-pointer self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Blog</span>
              </button>
            </div>

            {/* Blogs Table/Grid */}
            {blogs.length > 0 ? (
              <div className="grid gap-4">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-2">
                        {blog.published ? (
                          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] px-2 py-0.5 flex items-center gap-1 font-medium">
                            <Eye className="w-3 h-3" />
                            <span>Published</span>
                          </Badge>
                        ) : (
                          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-[10px] px-2 py-0.5 flex items-center gap-1 font-medium">
                            <EyeOff className="w-3 h-3" />
                            <span>Draft</span>
                          </Badge>
                        )}
                        <span className="text-[10px] text-zinc-500">
                          {new Date(blog.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white truncate">{blog.title}</h3>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{blog.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] px-2 py-0.5 rounded-full border border-white/5 bg-white/5 text-zinc-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="flex items-center justify-center gap-1 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(blog.slug)}
                        className="flex items-center justify-center gap-1 rounded-lg border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 text-xs text-red-400 hover:text-red-300 transition-all cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 rounded-2xl border border-white/10 bg-zinc-900/20">
                <FileText className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white heading-font">No blogs available</h3>
                <p className="text-sm text-zinc-400 mt-1">Get started by creating your first blog article!</p>
                <button
                  onClick={handleCreateNew}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-5 py-2.5 text-sm font-medium text-white hover:scale-105 transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create First Blog</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Create / Edit Form View */
          <div>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditingBlog(null);
              }}
              className="group flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to list</span>
            </button>

            <h2 className="text-2xl font-bold heading-font text-white mb-8">
              {editingBlog ? "Edit Blog Article" : "Create New Blog Article"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
              {submitError && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                  {submitError}
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                {/* Title */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-medium text-zinc-300">Blog Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter an engaging title..."
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all"
                  />
                </div>

                {/* Excerpt */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-medium text-zinc-300">Short Excerpt / Description</label>
                  <textarea
                    required
                    rows={2}
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Provide a brief summary of the article..."
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all resize-none"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-medium text-zinc-300">Article Body Content</label>
                  <textarea
                    required
                    rows={12}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Write your article body here. Markdown is supported..."
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all font-mono leading-relaxed"
                  />
                </div>

                {/* Cover Image URL */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-300">Cover Image URL (Optional)</label>
                  <input
                    type="url"
                    value={formData.coverImage}
                    onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all"
                  />
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-300">Tags (comma separated)</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="nextjs, animation, css"
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all"
                    />
                    <TagIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  </div>
                </div>

                {/* Published Checkbox */}
                <div className="flex items-center gap-3 md:col-span-2 mt-2">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-600/20 focus:ring-2"
                  />
                  <label htmlFor="published" className="text-sm font-medium text-zinc-300 cursor-pointer select-none">
                    Publish immediately (visible on the live website)
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:scale-[1.02] active:scale-100 transition-all px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-600/20 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  <span>Save Article</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setEditingBlog(null);
                  }}
                  className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-medium text-zinc-300 hover:text-white transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
