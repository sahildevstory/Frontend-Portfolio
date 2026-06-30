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
  Tag as TagIcon,
  Sparkles,
  LayoutDashboard,
  CalendarDays,
  Users,
  TrendingUp,
  Zap
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

  // Stats
  const publishedCount = blogs.filter(b => b.published).length;
  const draftCount = blogs.filter(b => !b.published).length;
  const totalViews = blogs.reduce((acc, b) => acc + b.views, 0);

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
    <div className="min-h-screen  text-white relative">
      {/* Animated Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 w-full px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute  rounded-full opacity-40" />
              <div className="relative  rounded-fullflex items-center justify-center">
🕸️              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent heading-font">
                Spider-Verse Dashboard
              </h1>
              <p className="text-[10px] text-zinc-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {session?.user?.name || session?.user?.email}
              </p>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-red-500/10 hover:border-red-500/30 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white transition-all duration-300"
          >
            <LogOut className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        {!isEditing ? (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent p-5 hover:border-red-500/30 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-red-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-red-500/20">
                    <FileText className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white heading-font">{blogs.length}</p>
                    <p className="text-xs text-zinc-400">Total Posts</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/20">
                    <Eye className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white heading-font">{publishedCount}</p>
                    <p className="text-xs text-zinc-400">Published</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-amber-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/20">
                    <EyeOff className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white heading-font">{draftCount}</p>
                    <p className="text-xs text-zinc-400">Drafts</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent p-5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/20">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white heading-font">{totalViews}</p>
                    <p className="text-xs text-zinc-400">Total Views</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent heading-font">
                  Manage Your Content
                </h2>
                <p className="text-sm text-zinc-400 mt-1 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-red-400" />
                  Create, edit, or delete blog articles
                </p>
              </div>
              <button
                onClick={handleCreateNew}
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition-all duration-300 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
              >
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span>New Article</span>
              </button>
            </div>

            {/* Blogs List */}
            {blogs.length > 0 ? (
              <div className="grid gap-4">
                {blogs.map((blog, index) => (
                  <div
                    key={blog.id}
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-5 backdrop-blur-sm hover:border-red-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/5"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all duration-700" />
                    
                    <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5 mb-2">
                          {blog.published ? (
                            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] px-2.5 py-1 flex items-center gap-1 font-medium">
                              <Eye className="w-3 h-3" />
                              Published
                            </Badge>
                          ) : (
                            <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 text-[10px] px-2.5 py-1 flex items-center gap-1 font-medium">
                              <EyeOff className="w-3 h-3" />
                              Draft
                            </Badge>
                          )}
                          <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                            <CalendarDays className="w-3 h-3" />
                            {new Date(blog.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {blog.views} views
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white heading-font group-hover:text-red-400 transition-colors line-clamp-1">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-zinc-400 mt-1 line-clamp-1">
                          {blog.excerpt}
                        </p>
                        
                        {blog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {blog.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] px-2.5 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 hover:bg-red-500/10 transition-colors"
                              >
                                #{tag}
                              </span>
                            ))}
                            {blog.tags.length > 3 && (
                              <span className="text-[9px] px-2.5 py-1 rounded-full border border-white/5 text-zinc-500">
                                +{blog.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
                        <button
                          onClick={() => handleEdit(blog)}
                          className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 px-3.5 py-2 text-xs text-zinc-300 hover:text-white transition-all duration-300"
                        >
                          <Edit className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(blog.slug)}
                          className="flex items-center gap-1.5 rounded-xl border border-red-500/20 bg-red-500/10 hover:bg-red-500/20 px-3.5 py-2 text-xs text-red-400 hover:text-red-300 transition-all duration-300"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-full blur-2xl" />
                  <FileText className="w-16 h-16 text-zinc-600 mx-auto relative" />
                </div>
                <h3 className="text-xl font-bold text-white heading-font mt-4">No articles yet</h3>
                <p className="text-sm text-zinc-400 mt-1">Get started by creating your first blog post!</p>
                <button
                  onClick={handleCreateNew}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition-all px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-600/20"
                >
                  <Plus className="w-4 h-4" />
                  Create First Article
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Form View */
          <div>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditingBlog(null);
              }}
              className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-6 transition-all"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Dashboard
            </button>

            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
              
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold heading-font text-white flex items-center gap-3 mb-8">
                  <span className="bg-gradient-to-r from-red-500 to-purple-500 w-1 h-8 rounded-full" />
                  {editingBlog ? "Edit Article" : "Create New Article"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400 flex items-center gap-2">
                      <X className="w-4 h-4 flex-shrink-0" />
                      {submitError}
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Title */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                        <span className="text-red-400">*</span>
                        Article Title
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Write an engaging title..."
                        className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3.5 px-5 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all duration-300"
                      />
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                        <span className="text-red-400">*</span>
                        Excerpt
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        placeholder="Write a compelling summary..."
                        className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3.5 px-5 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                        <span className="text-red-400">*</span>
                        Content
                      </label>
                      <textarea
                        required
                        rows={12}
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Write your article content here. Markdown is supported..."
                        className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3.5 px-5 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all duration-300 font-mono leading-relaxed"
                      />
                    </div>

                    {/* Cover Image & Tags */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Cover Image URL</label>
                        <input
                          type="url"
                          value={formData.coverImage}
                          onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                          placeholder="https://images.unsplash.com/..."
                          className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3.5 px-5 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Tags</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.tags}
                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                            placeholder="react, nextjs, animation"
                            className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-5 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all duration-300"
                          />
                          <TagIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        </div>
                        <p className="text-xs text-zinc-500">Separate tags with commas</p>
                      </div>
                    </div>

                    {/* Published */}
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
                      <input
                        type="checkbox"
                        id="published"
                        checked={formData.published}
                        onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                        className="w-5 h-5 rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-600/20 focus:ring-2 transition-all"
                      />
                      <label htmlFor="published" className="text-sm font-medium text-zinc-300 cursor-pointer select-none">
                        Publish immediately
                      </label>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:scale-[1.02] active:scale-100 transition-all duration-300 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-red-600/20 hover:shadow-red-600/30 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4" />
                      )}
                      {editingBlog ? "Update Article" : "Create Article"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setEditingBlog(null);
                      }}
                      className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}