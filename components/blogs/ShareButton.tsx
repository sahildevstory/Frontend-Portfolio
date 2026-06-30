// components/blog/ShareButton.tsx
"use client";

import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  excerpt: string;
}

export default function ShareButton({ title, excerpt }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled or failed");
      }
    } else {
      // Fallback: Copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy link");
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="
        p-2.5
        rounded-full
        bg-surface/30
        border
        border-white/10
        text-zinc-400
        hover:text-white
        hover:border-red-500/40
        hover:bg-red-500/10
        transition-all
        duration-300
      "
    >
      <Share2 className="w-4 h-4" />
    </button>
  );
}