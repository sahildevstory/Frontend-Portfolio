// components/sections/projects/FeaturedProject.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GitBranch, Star } from "lucide-react";
import { Project } from "@/components/sections/projects/types/projects";
import { Badge } from "@/components/ui/badge";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-gradient-to-br from-surface to-surface-light
        transition-all
        duration-500
        hover:border-red-500/40
        hover:shadow-xl
        hover:shadow-red-500/5
      "
    >
      {/* Glow Effects - Smaller */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-600/10 blur-[80px] transition-all duration-700 group-hover:bg-red-600/20" />
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-600/5 blur-[80px] transition-all duration-700 group-hover:bg-purple-600/10" />

      <div className="grid lg:grid-cols-5">
        {/* Image - Smaller */}
        <div className="relative overflow-hidden lg:col-span-2">
          <div className="relative aspect-video lg:h-full">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              loading="eager"
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>
          
          {/* Featured Badge - Smaller */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30 backdrop-blur-sm text-xs px-2 py-0.5">
              <Star className="w-3 h-3 mr-1 fill-red-400" />
              Featured
            </Badge>
          </div>
        </div>

        {/* Content - Compact */}
        <div className="flex flex-col justify-between p-5 lg:p-6 lg:col-span-3">
          <div>
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-white heading-font">
              {project.title}
            </h2>

            <h3 className="mt-1 text-sm text-zinc-400">
              {project.subtitle}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-3">
              {project.description}
            </p>

            {/* Stats - Compact */}
            {project.stats && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                {Object.entries(project.stats).slice(0, 4).map(([key, value]) => (
                  <div key={key} className="bg-surface/30 rounded-lg p-2 border border-white/5">
                    <p className="text-base font-bold text-white">{value}</p>
                    <p className="text-[10px] text-gray-500 capitalize">{key}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Info - Compact */}
            <div className="mt-4 flex flex-wrap gap-4">
              <div>
                <p className="text-[10px] uppercase text-zinc-500">Year</p>
                <p className="mt-0.5 text-sm text-white font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-zinc-500">Role</p>
                <p className="mt-0.5 text-sm text-white font-medium">{project.role}</p>
              </div>
            </div>

            {/* Technologies - Compact */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-2.5
                    py-1
                    text-[10px]
                    text-zinc-300
                    transition-all
                    duration-300
                    hover:border-red-500/40
                    hover:text-red-300
                  "
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="text-[10px] text-zinc-500 px-2 py-1">
                  +{project.technologies.length - 6}
                </span>
              )}
            </div>
          </div>

          {/* Buttons - Compact */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={project.live}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                bg-red-600
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-red-500
                hover:scale-105
                hover:shadow-lg
                hover:shadow-red-600/25
              "
            >
              Live Demo
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-white/10
                px-4
                py-2
                text-sm
                text-white
                transition-all
                duration-300
                hover:border-red-500/40
                hover:bg-white/5
                hover:scale-105
              "
            >
              <GitBranch size={15} />
              Code
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}