// components/sections/skills/Skills.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTitle from "@/components/common/SectionTitle";
import { SKILLS } from "@/data/skills";
import WhyMeCard from "@/components/common/WhyMeCard";

export default function Skills() {
  const allSkills = SKILLS.flatMap((group) => group.items);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const animationRefs = useRef<{ [key: string]: number }>({});

  // Start animation for each category
  useEffect(() => {
    SKILLS.forEach((group) => {
      const el = scrollRefs.current[group.category];
      if (el && !hoveredCategory) {
        // Start animation
        const startTime = performance.now();
        const duration = 20000; // 20 seconds
        const totalWidth = el.scrollWidth / 3; // Width of one set of skills

        const animate = (timestamp: number) => {
          if (!el || hoveredCategory === group.category) return;
          
          const elapsed = (timestamp - startTime) % duration;
          const progress = elapsed / duration;
          const translateX = -progress * totalWidth;
          
          el.style.transform = `translateX(${translateX}px)`;
          animationRefs.current[group.category] = requestAnimationFrame(animate);
        };

        animationRefs.current[group.category] = requestAnimationFrame(animate);
      }
    });

    return () => {
      Object.values(animationRefs.current).forEach(id => cancelAnimationFrame(id));
    };
  }, [hoveredCategory]);

  return (
    <SectionContainer>
      <SectionTitle
        title="Skills"
        subtitle="A showcase of my technical capabilities and the tools I use to bring digital experiences to life."
        className="flex-1"
      />
      
      <div className="grid gap-8 lg:grid-cols-1">
        {/* Main Skills Box */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-surface-light p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5">
          {/* Glow Effects */}
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-red-600/10 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-purple-600/5 blur-[120px]" />

          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-red-500 to-red-400" />
              <h2 className="text-2xl font-bold text-white heading-font">
                Tech Stack
              </h2>
              <span className="text-xs text-zinc-500 bg-surface/30 px-2.5 py-1 rounded-full border border-white/5">
                {allSkills.length} Technologies
              </span>
            </div>

            {/* Infinite Scrolling Skills */}
            <div className="space-y-6">
              {SKILLS.map((group, groupIndex) => {
                const isHovered = hoveredCategory === group.category;
                
                return (
                  <div 
                    key={group.category} 
                    className="space-y-2"
                    onMouseEnter={() => setHoveredCategory(group.category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {/* Category Label */}
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        group.category === "Frontend" ? "bg-blue-500" : 
                        group.category === "Backend" ? "bg-green-500" : 
                        "bg-purple-500"
                      }`} />
                      <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        {group.category}
                      </span>
                      <span className="flex-1 h-px bg-gradient-to-r from-white/5 to-transparent" />
                      {isHovered && (
                        <span className="text-[10px] text-red-400 animate-pulse">
                          ● Paused
                        </span>
                      )}
                    </div>

                    {/* Infinite Scroll Container */}
                    <div className="relative overflow-hidden">
                      <div 
                        ref={(el) => {
                          scrollRefs.current[group.category] = el;
                        }}
                        className="flex gap-2 py-2"
                        style={{
                          width: 'max-content',
                          transform: 'translateX(0)',
                        }}
                      >
                        {[...group.items, ...group.items, ...group.items].map((skill, index) => (
                          <span
                            key={`${skill}-${index}`}
                            className={`
                              flex-shrink-0
                              rounded-full
                              border
                              border-white/10
                              bg-white/5
                              px-4
                              py-2
                              text-sm
                              text-zinc-300
                              transition-all
                              duration-300
                              hover:border-red-500/40
                              hover:text-red-300
                              hover:bg-red-500/5
                              hover:scale-105
                              cursor-default
                              whitespace-nowrap
                              ${isHovered ? 'opacity-100' : 'opacity-80 hover:opacity-100'}
                            `}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Gradient Fade on edges */}
                      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface to-transparent pointer-events-none" />
                      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why Me Card */}
        {/* <div className="lg:col-span-1">
          <WhyMeCard />
        </div> */}
      </div>
    </SectionContainer>
  );
}