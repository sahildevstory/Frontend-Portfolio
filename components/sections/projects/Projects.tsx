import SectionContainer from "@/components/common/SectionContainer";
import SectionTitle from "@/components/common/SectionTitle";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  const featuredProject = PROJECTS.find((project) => project.featured);

  const otherProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <SectionContainer>
      <SectionTitle
        title="Featured Projects"
        subtitle="A selection of projects showcasing my frontend engineering skills, UI craftsmanship, and modern web development experience."
      />

      {featuredProject && <FeaturedProject project={featuredProject} />}

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
