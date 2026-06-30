// app/blogs/[slug]/not-found.tsx
import Link from "next/link";
import { Home, BookOpen, ArrowLeft } from "lucide-react";

export default function BlogNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative px-4 py-12">
      {/* Background effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="w-full max-w-2xl relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-purple-600 to-red-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
        
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-black/90 p-8 md:p-12 backdrop-blur-xl text-center">
          <span className="text-5xl mb-4 inline-block">📖</span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-red-500 heading-font">
            Blog Not Found
          </h1>
          
          <h2 className="mt-4 text-xl font-semibold text-white">
            This story got lost in the multiverse
          </h2>
          
          <p className="mt-3 text-sm text-zinc-400 max-w-md mx-auto">
            The blog post you're looking for doesn't exist or has been moved to another dimension.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/blogs"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/25 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>View All Blogs</span>
            </Link>
            
            <Link
              href="/"
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}