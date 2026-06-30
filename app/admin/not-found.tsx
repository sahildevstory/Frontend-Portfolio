// app/admin/not-found.tsx
import Link from "next/link";
import { Shield, Home, ArrowLeft } from "lucide-react";

export default function AdminNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative px-4 py-12 bg-black">
      {/* Background effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="w-full max-w-md relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-purple-600 to-red-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
        
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-black/90 p-8 backdrop-blur-xl text-center">
          <div className="mb-4">
            <span className="text-5xl inline-block">🕸️</span>
          </div>

          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 heading-font">
            404
          </h1>
          
          <h2 className="mt-2 text-lg font-semibold text-white">
            Admin Page Not Found
          </h2>
          
          <p className="mt-2 text-xs text-zinc-400">
            Even Spider-Man's admin panel has limits!
          </p>

          <div className="mt-6 space-y-3">
            <Link
              href="/admin"
              className="block w-full rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-600/25"
            >
              <Shield className="w-4 h-4 inline-block mr-2" />
              Go to Admin Dashboard
            </Link>
            
            <Link
              href="/"
              className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]"
            >
              <Home className="w-4 h-4 inline-block mr-2" />
              Return to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}