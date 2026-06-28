import { GitBranch, Link2, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        relative
        mt-32
        border-t
        border-white/10
        bg-black
      "
    >
      {/* Glow Background */}
      <div
        className="
          absolute
          -top-40
          left-1/2
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-red-600/10
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Sahil Khan
            </h2>
            <p className="mt-4 text-zinc-400 leading-7">
              Frontend Developer focused on building modern,
              animated, and high-performance web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold">
              Navigation
            </h3>

            <ul className="mt-4 space-y-3 text-zinc-400">
              <li>
                <Link href="#hero" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold">
              Connect
            </h3>

            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                className="text-zinc-400 hover:text-white"
              >
                <GitBranch />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="text-zinc-400 hover:text-white"
              >
                <Link2 />
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="text-zinc-400 hover:text-white"
              >
                <Mail />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            text-center
            text-sm
            text-zinc-500
            md:flex-row
            md:justify-between
          "
        >
          <p>© {new Date().getFullYear()} Sahil Khan. All rights reserved.</p>

          <p className="text-zinc-600">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}