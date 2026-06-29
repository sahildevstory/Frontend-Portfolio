// components/sections/projects/ProjectCard.tsx (Updated for masonry)
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Users, GitBranch, ExternalLink } from "lucide-react";
import { Project } from "@/components/sections/projects/types/projects";

interface Props {
  project: Project;
  index: number;
  variant?: "grid" | "masonry";
}

export default function ProjectCard({ project, index, variant = "grid" }: Props) {
  const isMasonry = variant === "masonry";

  return (
    <article
      className={`
        group
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-gradient-to-br from-surface to-surface-light
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-red-500/40
        hover:shadow-2xl
        hover:shadow-red-500/5
        animate-fade-in-up
        ${isMasonry ? "break-inside-avoid" : ""}
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-surface-light">
        <div
          className={`
            relative w-full
            ${isMasonry ? "aspect-auto min-h-[200px]" : "aspect-video"}
          `}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={isMasonry ? 600 : 450}
            loading="lazy"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Quick Action Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <Link
              href={project.live}
              target="_blank"
              className="bg-red-600 text-white p-3 rounded-full hover:bg-red-500 transition-all hover:scale-110 shadow-lg shadow-red-600/25"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
            <Link
              href={project.github}
              target="_blank"
              className="bg-surface/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110 border border-white/10"
            >
              <GitBranch className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white heading-font group-hover:text-red-400 transition-colors truncate">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-400 line-clamp-1">
              {project.subtitle}
            </p>
          </div>
          <span className="text-xs text-zinc-500 bg-surface/30 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap flex-shrink-0">
            {project.year}
          </span>
        </div>

        <p className={`mt-3 text-sm leading-relaxed text-zinc-400 ${isMasonry ? '' : 'line-clamp-3'}`}>
          {project.description}
        </p>

        {/* Stats */}
        {project.stats && (
          <div className="mt-4 flex flex-wrap gap-3">
            {Object.entries(project.stats).slice(0, 3).map(([key, value]) => (
              <div key={key} className="flex items-center gap-1.5">
                <span className="text-xs text-red-400 font-medium">{value}</span>
                <span className="text-[10px] text-zinc-500 capitalize">{key}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, isMasonry ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                bg-white/5
                px-2.5
                py-1
                text-[10px]
                text-zinc-300
                border border-white/5
                transition-all
                duration-300
                group-hover:border-red-500/20
              "
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (isMasonry ? 6 : 4) && (
            <span className="text-[10px] text-zinc-500 px-2.5 py-1">
              +{project.technologies.length - (isMasonry ? 6 : 4)}
            </span>
          )}
        </div>

        {/* View Link */}
        <Link
          href={project.live}
          target="_blank"
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-sm
            text-red-400
            font-medium
            transition-all
            duration-300
            hover:gap-3
            group/link
          "
        >
          View Project
          <ArrowUpRight 
            size={16} 
            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" 
          />
        </Link>
      </div>
    </article>
  );
}