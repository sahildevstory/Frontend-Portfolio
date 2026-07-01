// components/sections/skills/Skills.tsx
"use client";

import { useState } from "react";
import { 
  Code2, 
  Server, 
  Wrench, 
  Zap,
  Monitor,
  Database,
  Cloud,
  Terminal,
  Braces,
  GitBranch,
  Box,
  Globe,
  Layers
} from "lucide-react";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { SKILLS } from "@/data/skills";

const categoryIcons: Record<string, any> = {
  "Frontend": Monitor,
  "Backend": Server,
  "Tools & Others": Wrench,
};

const techIcons: Record<string, any> = {
  "React": Code2,
  "Next.js": Layers,
  "TypeScript": Braces,
  "Node.js": Terminal,
  "Python": Terminal,
  "AWS": Cloud,
  "Docker": Box,
  "Git": GitBranch,
  "Figma": Globe,
  "Tailwind": Layers,
  "PostgreSQL": Database,
  "MongoDB": Database,
};

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <SectionContainer>
      <SectionTitle
        title="Technical Expertise"
        subtitle="A comprehensive overview of my technical capabilities and the tools I leverage to build exceptional digital experiences."
        className="flex-1"
      />
      
      <div className="mt-10 space-y-8">
        {SKILLS.map((group, index) => {
          const Icon = categoryIcons[group.category] || Wrench;
          const isHovered = hoveredCategory === group.category;
          
          return (
            <div
              key={group.category}
              className={`
                transition-all duration-300
                ${isHovered ? 'opacity-100' : 'opacity-90'}
              `}
              onMouseEnter={() => setHoveredCategory(group.category)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: 'fadeIn 0.5s ease forwards'
              }}
            >
              <div className="flex items-start gap-5">
                {/* Category Icon */}
                <div className="flex-shrink-0 w-12 pt-1">
                  <Icon className="w-6 h-6 text-zinc-500" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-base font-medium text-zinc-300">
                      {group.category}
                    </h3>
                    <span className="text-sm text-zinc-600">
                      {group.items.length}
                    </span>
                    <div className="flex-1 h-px bg-white/5" />
                  </div>

                  {/* Skills Grid - 3 columns on desktop */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {group.items.map((skill) => {
                      const TechIcon = techIcons[skill] || Code2;
                      
                      return (
                        <span
                          key={skill}
                          className="
                            flex items-center gap-2.5
                            px-4 py-2.5
                            rounded
                            bg-white/[0.03]
                            border border-white/5
                            text-sm
                            text-zinc-400
                            transition-all duration-200
                            cursor-default
                            hover:bg-white/[0.06]
                            hover:border-white/10
                            hover:text-zinc-200
                          "
                        >
                          <TechIcon className="w-4 h-4 text-zinc-600" />
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-white/5">
        <div className="flex items-center gap-8 text-sm text-zinc-500">
          <span>
            {SKILLS.reduce((acc, g) => acc + g.items.length, 0)} technologies
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span>{SKILLS.length} categories</span>
          <span className="flex-1" />
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            always learning
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </SectionContainer>
  );
}