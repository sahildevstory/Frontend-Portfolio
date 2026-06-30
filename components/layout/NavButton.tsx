import { FileText } from "lucide-react";
import Link from "next/link";

export default function NavButton() {
  return (
    <Link
      href="/resume"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-red-500/40 px-4 py-2 text-sm text-zinc-300 hover:text-white transition-all duration-300"
    >
      <FileText className="w-4 h-4" />
      Resume
    </Link>
  );
}
