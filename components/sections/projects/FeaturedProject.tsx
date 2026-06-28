"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight, GitBranch } from "lucide-react";
import { Project } from "@/components/sections/projects/types/projects";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article
      className="
      group
      relative
      mt-14
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:border-red-500/40
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -right-32
        -top-32
        h-80
        w-80
        rounded-full
        bg-red-600/10
        blur-[120px]
        transition-all
        duration-700
        group-hover:bg-red-600/20
        "
      />

      <div className="grid lg:grid-cols-2">
        {/* Image */}

        <div className="relative overflow-hidden">
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
          </div>
        </div>

        {/* Content */}

        <div className="flex flex-col justify-between p-10">
          <div>
            <span
              className="
              inline-flex
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              px-4
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-red-400
              "
            >
              Featured Project
            </span>

            <h2
              className="
              mt-6
              text-4xl
              font-bold
              text-white
              "
            >
              {project.title}
            </h2>

            <h3
              className="
              mt-2
              text-xl
              text-zinc-400
              "
            >
              {project.subtitle}
            </h3>

            <p
              className="
              mt-8
              leading-8
              text-zinc-400
              "
            >
              {project.description}
            </p>

            {/* Info */}

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-xs uppercase text-zinc-500">Year</p>

                <p className="mt-2 text-white">{project.year}</p>
              </div>

              <div>
                <p className="text-xs uppercase text-zinc-500">Role</p>

                <p className="mt-2 text-white">{project.role}</p>
              </div>
            </div>

            {/* Technologies */}

            <div className="mt-10 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
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
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={project.live}
              target="_blank"
              className="
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
              duration-300
              hover:bg-red-500
              "
            >
              Live Demo
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href={project.github}
              target="_blank"
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-white
              transition-all
              duration-300
              hover:border-red-500/40
              hover:bg-white/5
              "
            >
              <GitBranch size={18} />
              Source Code
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
