import { NAV_LINKS } from "@/constants/navigation";

export default function NavLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-3">
      {NAV_LINKS.map((link) => (
        <li key={link.title}>
          <a
            href={link.href}
            className="
              relative
              overflow-hidden
              rounded-full

              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl

              px-5
              py-2.5

              text-sm
              font-medium
              text-zinc-300

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-red-500/30
              hover:bg-red-500/10
              hover:text-white
              hover:shadow-[0_0_25px_rgba(225,29,72,0.2)]
            "
          >
            {/* glossy highlight */}
            <span
              className="-left-full
    top-0
    h-full
    w-1/2
    rotate-12

    transition-all
    duration-700

  "
            />
            <span className="relative z-10">{link.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
