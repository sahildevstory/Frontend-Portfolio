"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/components/sections/projects/types/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <article
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-red-500/40
      "
    >
      <div className="relative aspect-video overflow-hidden">

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
          group-hover:scale-110
          "
        />

      </div>

      <div className="p-7">

        <h3
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          {project.title}
        </h3>

        <p
          className="
          mt-4
          leading-7
          text-zinc-400
          "
        >
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
              rounded-full
              bg-white/5
              px-3
              py-1
              text-xs
              text-zinc-300
              "
            >
              {tech}
            </span>
          ))}

        </div>

        <Link
          href={project.live}
          target="_blank"
          className="
          mt-8
          inline-flex
          items-center
          gap-2
          text-red-400
          transition-all
          hover:gap-4
          "
        >
          View Project

          <ArrowUpRight size={18} />
        </Link>

      </div>
    </article>
  );
}