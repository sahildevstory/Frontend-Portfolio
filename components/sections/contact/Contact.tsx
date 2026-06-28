"use client";

import SectionContainer from "@/components/common/SectionContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { GitCommit, LucideForkKnifeCrossed, Mail } from "lucide-react";


export default function Contact() {
  const email = "yourmail@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    alert("Email copied!");
  };

  return (
    <SectionContainer>
      <SectionTitle
        title="Let’s Work Together"
        subtitle="Have an idea or opportunity? Let’s build something amazing."
      />

      {/* Main Card */}
      <div
        className="
          mt-16
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-10
          text-center
          backdrop-blur-xl
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            -top-32
            left-1/2
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-red-600/20
            blur-[120px]
          "
        />

        <h3 className="text-3xl font-bold text-white">
          Got a project in mind?
        </h3>

        <p className="mt-4 text-zinc-400">
          I’m currently available for freelance work and full-time opportunities.
        </p>

        {/* Email Button */}
        <button
          onClick={copyEmail}
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-red-600
            px-6
            py-3
            font-medium
            text-white
            transition-all
            hover:bg-red-500
          "
        >
          <Mail size={18} />
          Copy Email
        </button>

        {/* Socials */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            className="text-zinc-400 transition hover:text-white"
          >
            <GitCommit size={22} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="text-zinc-400 transition hover:text-white"
          >
            <LucideForkKnifeCrossed size={22} />
          </a>

          <a
            href={`mailto:${email}`}
            className="text-zinc-400 transition hover:text-white"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}