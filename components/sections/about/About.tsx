import SectionContainer from "@/components/common/SectionContainer";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <SectionContainer>
      <div className="grid gap-20 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <AboutImage />
        </div>
        <div className="lg:col-span-7">
          <AboutContent />
          <AboutStats />
        </div>
      </div>
    </SectionContainer>
  );
}
