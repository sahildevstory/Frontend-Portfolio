// app/blog/page.tsx
import { Suspense } from "react";
import BlogClient from "@/components/blogs/BlogClient";
import { Loader2 } from "lucide-react";

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20 min-h-screen bg-black">
          <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
        </div>
      }
    >
      <BlogClient />
    </Suspense>
  );
}
