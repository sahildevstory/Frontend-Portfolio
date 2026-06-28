import SectionContainer from "@/components/common/SectionContainer";
import SectionTitle from "@/components/common/SectionTitle";

import SkillCard from "./SkillCard";
import { SKILLS } from "@/data/skills";

export default function Skills() {
  return (
    <SectionContainer>
      <SectionTitle
        title="Tech Arsenal"
        subtitle="The technologies I use to design, build, and deliver high-quality web applications."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {SKILLS.map((group) => (
          <SkillCard
            key={group.category}
            title={group.category}
            skills={group.items}
          />
        ))}
      </div>
    </SectionContainer>
  );
}