// app/not-found.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center relative px-4 py-12">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]" />
      
      {/* Spider-web style grid backdrop overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="w-full max-w-2xl relative">
        {/* Glow effect behind the card */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-purple-600 to-red-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
        
        {/* Main content card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-black/90 p-8 md:p-12 backdrop-blur-xl text-center">
          {/* Spider Logo */}
          <div className="mb-6">
            <span className="text-6xl md:text-7xl inline-block ">🕸️</span>
          </div>

          {/* Error Code */}
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-red-500 heading-font animate-pulse">
            404
          </h1>

          {/* Message */}
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white heading-font">
            Lost in the Spider-Verse?
          </h2>
          
          <p className="mt-3 text-sm md:text-base text-zinc-400 max-w-md mx-auto">
            The page you're looking for has been trapped in another dimension. 
            Don't worry, even Spider-Man gets lost sometimes!
          </p>

          {/* Decorative divider */}
          <div className="my-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500/50" />
            <span className="text-red-500/50 text-xs">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500/50" />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            {/* Home Button */}
            <Link
              href="/"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/25 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Go Home</span>
            </Link>

            {/* Back Button - Fixed with useRouter */}
            <button
              onClick={() => router.back()}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] flex items-center gap-2 w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </button>

            {/* Search/Explore Button */}
            <Link
              href="/blogs"
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] flex items-center gap-2 w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Explore Blogs</span>
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <p className="text-[10px] text-zinc-500">
              🕷️ Need help? Check out our{' '}
              <Link href="/blogs" className="text-red-400 hover:text-red-300 transition-colors">
                latest blogs
              </Link>
              {' '}or {' '}
              <Link href="/" className="text-red-400 hover:text-red-300 transition-colors">
                return to safety
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}