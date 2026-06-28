import SectionContainer from "@/components/common/SectionContainer";
import SectionTitle from "@/components/common/SectionTitle";

import ExperienceItem from "./ExperienceItem";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <SectionContainer>
      <SectionTitle
        title="Experience"
        subtitle="My professional journey and hands-on development experience."
      />

      <div className="mt-16 space-y-10">
        {EXPERIENCE.map((exp) => (
          <ExperienceItem
            key={exp.id}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            highlights={exp.highlights}
          />
        ))}
      </div>
    </SectionContainer>
  );
}