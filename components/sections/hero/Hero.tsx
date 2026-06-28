import SectionContainer from "@/components/common/SectionContainer";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Projects from "../projects";

export default function Hero() {
  return (
    <SectionContainer className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <HeroContent />
        </div>
        <div className="lg:col-span-5">
          <HeroImage />
        </div>
      </div>
    </SectionContainer>
  );
}
