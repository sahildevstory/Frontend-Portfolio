// components/sections/about/About.tsx (Main component)
import SectionContainer from "@/components/common/SectionContainer";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <SectionContainer id="about">
      <div className="grid gap-12 lg:grid-cols-12 items-center justify-center">
        {/* Content Column */}
        <div className="lg:col-span-12">
          <AboutContent />
          {/* <AboutStats /> */}
        </div>
      </div>
    </SectionContainer>
  );
}