// components/sections/skills/SkillCard.tsx
"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface SkillCardProps {
  title: string;
  skills: string[];
  index: number;
}

export default function SkillCard({ title, skills, index }: SkillCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Color mapping for different categories
  const colorMap: Record<string, string> = {
    "Frontend": "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    "Backend": "from-green-500/20 to-emerald-500/20 border-green-500/30",
    "Tools & Others": "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  };

  const borderColor = colorMap[title] || "from-gray-500/20 to-gray-500/20 border-gray-500/30";

  return (
    <div
      className={`
        group
        rounded-2xl
        border
        border-white/10
        bg-gradient-to-br from-surface to-surface-light
        p-6
        transition-all
        duration-500
        hover:border-red-500/40
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-red-500/5
        animate-fade-in-up
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header with Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${borderColor.split(' ')[0]}`} />
          <h3 className="text-xl font-bold text-white heading-font">
            {title}
          </h3>
        </div>
        <span className="text-xs text-zinc-500 bg-surface/30 px-2 py-1 rounded-full border border-white/5">
          {skills.length}
        </span>
      </div>

      {/* Skills Grid */}
      <div className={`
        flex flex-wrap gap-2
        transition-all duration-500
        ${isExpanded ? 'max-h-96' : 'max-h-40 overflow-hidden'}
      `}>
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              group/skill
              relative
              rounded-full
              border
              border-white/10
              bg-white/5
              px-3.5
              py-1.5
              text-sm
              text-zinc-300
              transition-all
              duration-300
              hover:border-red-500/40
              hover:text-red-300
              hover:bg-red-500/5
              hover:scale-105
              cursor-default
            "
          >
            {skill}
            {/* Hover glow */}
            <span className="absolute inset-0 rounded-full bg-red-500/0 transition-all duration-300 group-hover/skill:bg-red-500/5" />
          </span>
        ))}
      </div>

      {/* Expand/Collapse Button */}
      {skills.length > 8 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp size={14} />
            </>
          ) : (
            <>
              Show {skills.length - 8} More
              <ChevronDown size={14} />
            </>
          )}
        </button>
      )}
    </div>
  );
}