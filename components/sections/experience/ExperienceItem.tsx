// components/sections/experience/ExperienceItem.tsx
"use client"
import { useRef, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Code2, ChevronRight } from "lucide-react";

interface ExperienceItemProps {
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
  techStack: string[];
  isActive: boolean;
  index: number;
  totalItems: number;
}

export default function ExperienceItem({
  role,
  company,
  location,
  period,
  startDate,
  endDate,
  description,
  highlights,
  techStack,
  isActive,
  index,
  totalItems,
}: ExperienceItemProps) {
  const [timeElapsed, setTimeElapsed] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      const calculateTime = () => {
        const start = new Date(startDate);
        const now = new Date();
        const diff = now.getTime() - start.getTime();
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        
        if (months > 0) {
          setTimeElapsed(`${months}m ${days}d`);
        } else {
          setTimeElapsed(`${days}d`);
        }
      };

      calculateTime();
      const interval = setInterval(calculateTime, 60000);
      return () => clearInterval(interval);
    }
  }, [isActive, startDate]);

  return (
    <div ref={itemRef} className="relative group">
      <div
        className="
          relative
          rounded-2xl
          border
          border-white/10
          bg-surface/30
          backdrop-blur-sm
          p-6
          transition-all
          duration-300
          hover:border-red-500/40
          hover:bg-surface/50
          hover:shadow-2xl
          hover:shadow-red-500/5
        "
      >
        {/* Active Badge */}
        {isActive && (
          <div className="absolute -top-8 right-6">
            <Badge className="bg-red-600/20 text-white border-red-600/30 animate-pulse">
              <Clock className="w-80 h-4 mr-1" />
              Active • {timeElapsed}
            </Badge>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white heading-font">
              {role}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <span className="font-medium text-gray-300">{company}</span>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 bg-surface-light/50 px-3 py-1.5 rounded-full border border-white/5 whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5 text-gray-500" />
            <span>{period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Highlights */}
        <ul className="mt-4 space-y-2">
          {highlights.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-gray-300 hover:text-gray-200 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="mt-5 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <Badge 
                key={tech}
                variant="outline"
                className="bg-surface/30 border-white/5 text-gray-400 text-xs hover:border-red-600/30 hover:text-gray-200 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}