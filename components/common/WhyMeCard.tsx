// components/sections/skills/WhyMeCard.tsx
"use client";

import { 
  FiCode, 
  FiUsers, 
  FiAward,
  FiZap,
  FiCheckCircle
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import { TbSparkles } from "react-icons/tb";

export default function WhyMeCard() {
  const highlights = [
    { icon: <FiZap className="w-4 h-4" />, text: "React & Next.js Specialist" },
    { icon: <FiCheckCircle className="w-4 h-4" />, text: "Performance Optimized" },
    { icon: <FiCode className="w-4 h-4" />, text: "Pixel-Perfect UI/UX" },
    { icon: <FiAward className="w-4 h-4" />, text: "90+ Lighthouse Scores" },
  ];

  return (
    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-surface-light p-6 transition-all duration-500 hover:border-red-500/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/5 animate-fade-in-up">
      {/* Glow Effect */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red-600/5 blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-600/5 blur-[80px]" />

       {/* Why Me Card - Right Side */}
        <div className="lg:col-span-1">
          <div className="relative h-full ">
            {/* Glow */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-red-600/5 blur-[80px]" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <TbSparkles className="w-4 h-4 text-red-400" />
                <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                  Why Me?
                </span>
              </div>

              <h4 className="text-xl font-bold text-white heading-font">
                2+ Years of Frontend Excellence
              </h4>

              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                I'm a passionate frontend developer who loves crafting
                beautiful, performant, and user-friendly web applications.
                With expertise in React, Next.js, and modern CSS frameworks,
                I turn complex problems into elegant solutions.
              </p>

              {/* Stats Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-surface/30 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center gap-2">
                    <FiCode className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-zinc-500">Projects</span>
                  </div>
                  <p className="text-lg font-bold text-white mt-1">10+</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center gap-2">
                    <FaRocket className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-zinc-500">Shipped</span>
                  </div>
                  <p className="text-lg font-bold text-white mt-1">8+</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center gap-2">
                    <FiUsers className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-zinc-500">Clients</span>
                  </div>
                  <p className="text-lg font-bold text-white mt-1">8+</p>
                </div>
                <div className="bg-surface/30 rounded-xl p-3 border border-white/5">
                  <div className="flex items-center gap-2">
                    <FiAward className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-zinc-500">Performance</span>
                  </div>
                  <p className="text-lg font-bold text-white mt-1">40%</p>
                </div>
              </div>

              {/* Quick Highlights */}
              <div className="mt-4 space-y-2">
                {[
                  "React & Next.js Specialist",
                  "Performance Optimized",
                  "Pixel-Perfect UI/UX",
                  "90+ Lighthouse Scores",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-zinc-400"
                  >
                    <span className="text-red-400">•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}