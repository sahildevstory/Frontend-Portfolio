import FadeUp from "@/components/animations/FadeUp";
import HeroCTA from "./HeroCTA";

export default function HeroContent() {
  return (
    <div className="space-y-8">

      <FadeUp>
        <span>
          Available for Opportunities
        </span>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h1>Sahil Khan</h1>
      </FadeUp>

      <FadeUp delay={0.4}>
        <p>Description...</p>
      </FadeUp>

      <FadeUp delay={0.6}>
        <HeroCTA />
      </FadeUp>

    </div>
  );
}