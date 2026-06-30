// // components/sections/experience/Experience.tsx'
// "use client";
// import { useRef, useEffect, useState } from "react";
// import SectionContainer from "@/components/common/SectionContainer";
// import SectionTitle from "@/components/common/SectionTitle";
// import ExperienceItem from "./ExperienceItem";
// import { EXPERIENCE } from "@/data/experience";

// export default function Experience() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const containerTop = containerRef.current.getBoundingClientRect().top;
//       const scrollPosition = window.scrollY;

//       // Find which experience is currently in view
//       let currentIndex = 0;
//       itemRefs.current.forEach((ref, index) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const offset = 150; // Offset to trigger activation
//           if (rect.top <= window.innerHeight / 2 + offset) {
//             currentIndex = index;
//           }
//         }
//       });

//       setActiveIndex(currentIndex);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <SectionContainer>
//       <SectionTitle
//         title="Experience"
//         subtitle="My professional journey and hands-on development experience."
//       />
//       <div className="grid grid-cols-12 gap-8">
//         {/* Left Sidebar - Timeline */}
//         <div className="hidden lg:block lg:col-span-3">
//           <div className="sticky top-24">
//             <div className="relative pl-8">
//               {/* Vertical Line */}
//               <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-red-500/20 to-transparent" />

//               {/* Animated Circle */}
//               <div
//                 className="absolute left-0 transition-all duration-500 ease-in-out"
//                 style={{
//                   top: `${(activeIndex / (EXPERIENCE.length - 1)) * 85}%`,
//                   transform: "translateY(-50%)",
//                 }}
//               >
//                 <div className="relative flex items-center justify-center">
//                   {/* Pulse Ring */}
//                   <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
//                   <div
//                     className="absolute inset-0 rounded-full bg-red-500/10 animate-pulse"
//                     style={{ animationDuration: "2s" }}
//                   />
//                   {/* Main Dot */}
//                   <div className="relative w-4 h-4 rounded-full bg-red-500 border-2 border-background shadow-lg shadow-red-500/30" />
//                 </div>
//               </div>

//               {/* Timeline Items */}
//               <div className="space-y-12">
//                 {EXPERIENCE.map((exp, index) => (
//                   <div
//                     key={exp.id}
//                     className={`transition-all duration-300 ${
//                       index === activeIndex ? "opacity-100" : "opacity-40"
//                     }`}
//                   >
//                     <p
//                       className={`text-sm font-medium transition-colors duration-300 ${
//                         index === activeIndex ? "text-white" : "text-gray-400"
//                       }`}
//                     >
//                       {exp.role}
//                     </p>
//                     <p
//                       className={`text-xs transition-colors duration-300 ${
//                         index === activeIndex ? "text-red-400" : "text-gray-500"
//                       }`}
//                     >
//                       {exp.company}
//                     </p>
//                     <p className="text-xs text-gray-600">{exp.period}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Content - Experience Items */}
//         <div ref={containerRef} className="lg:col-span-9">
//           <div className="mt-12 space-y-6">
//             {EXPERIENCE.map((exp, index) => (
//               <div
//                 key={exp.id}
//                 ref={(el) => {
//                   itemRefs.current[index] = el;
//                   return;
//                 }}
//                 className={`transition-all duration-700 ${
//                   index === activeIndex
//                     ? "opacity-100 translate-y-0 scale-100"
//                     : "opacity-60 translate-y-2 scale-[0.98]"
//                 }`}
//               >
//                 <ExperienceItem
//                   role={exp.role}
//                   company={exp.company}
//                   location={exp.location}
//                   period={exp.period}
//                   startDate={exp.startDate}
//                   endDate={exp.endDate}
//                   description={exp.description}
//                   highlights={exp.highlights}
//                   techStack={exp.techStack}
//                   isActive={index === 0}
//                   index={index}
//                   totalItems={EXPERIENCE.length}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </SectionContainer>
//   );
// }

// components/sections/experience/Experience.tsx
"use client";
import { useRef, useEffect, useState } from "react";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTitle from "@/components/common/SectionTitle";
import ExperienceItem from "./ExperienceItem";
import { EXPERIENCE } from "@/data/experience";
import { ChevronRight } from "lucide-react";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll handler for active index
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      let currentIndex = 0;
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const offset = 150;
          if (rect.top <= window.innerHeight / 2 + offset) {
            currentIndex = index;
          }
        }
      });

      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SectionContainer>
      <SectionTitle
        title="Experience"
        subtitle="My professional journey and hands-on development experience."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Sidebar - Timeline (Desktop) */}
        <div className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-red-500/20 to-transparent" />

              {/* Animated Circle */}
              <div
                className="absolute left-0 transition-all duration-500 ease-in-out"
                style={{
                  top: `${(activeIndex / (EXPERIENCE.length - 1)) * 85}%`,
                  transform: "translateY(-50%)",
                }}
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
                  <div
                    className="absolute inset-0 rounded-full bg-red-500/10 animate-pulse"
                    style={{ animationDuration: "2s" }}
                  />
                  <div className="relative w-4 h-4 rounded-full bg-red-500 border-2 border-background shadow-lg shadow-red-500/30" />
                </div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {EXPERIENCE.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`transition-all duration-300 ${
                      index === activeIndex ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium transition-colors duration-300 ${
                        index === activeIndex ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {exp.role}
                    </p>
                    <p
                      className={`text-xs transition-colors duration-300 ${
                        index === activeIndex ? "text-red-400" : "text-gray-500"
                      }`}
                    >
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-600">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Experience Items */}
        <div ref={containerRef} className="lg:col-span-9">
          {/* Mobile Timeline Indicator */}
          <div className="lg:hidden mb-6 flex items-center gap-2 text-xs text-gray-500">
            <span className="font-medium text-gray-400">Experience</span>
            <span className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            {/* <span className="text-red-400">
              {activeIndex + 1} / {EXPERIENCE.length}
            </span> */}
          </div>

          <div className="mt-4 lg:mt-12 space-y-8 lg:space-y-6">
            {EXPERIENCE.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                  return;
                }}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-60 translate-y-2 scale-[0.98]"
                }`}
              >
                <ExperienceItem
                  role={exp.role}
                  company={exp.company}
                  location={exp.location}
                  period={exp.period}
                  startDate={exp.startDate}
                  endDate={exp.endDate}
                  description={exp.description}
                  highlights={exp.highlights}
                  techStack={exp.techStack}
                  isActive={index === 0}
                  index={index}
                  totalItems={EXPERIENCE.length}
                />
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="lg:hidden flex justify-center gap-2 mt-8">
            {EXPERIENCE.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const ref = itemRefs.current[index];
                  if (ref) {
                    ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-8 h-2 bg-red-500"
                    : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}