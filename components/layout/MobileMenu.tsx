"use client";

import { NAV_LINKS } from "@/constants/navigation";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <nav
      className="
      fixed
      bottom-5
      left-1/2
      -translate-x-1/2
      z-50

      lg:hidden

      flex
      items-center
      gap-2

      rounded-full
      border
      border-white/10

      bg-black/70
      backdrop-blur-xl

      px-4
      py-3
      shadow-2xl
      "
    >
      {NAV_LINKS.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className="
              flex
              flex-col
              items-center
              gap-1
              px-3
              text-zinc-400
              transition
              hover:text-white
            "
          >
            <Icon size={20} />
            <span className="text-[10px]">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}