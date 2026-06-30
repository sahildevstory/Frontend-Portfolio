// // components/sections/projects/Projects.tsx
// "use client";

// import { useState, useMemo } from "react";
// import SectionContainer from "@/components/common/SectionContainer";
// import SectionTitle from "@/components/common/SectionTitle";
// import FeaturedProject from "./FeaturedProject";
// import ProjectCard from "./ProjectCard";
// import { PROJECTS, getAllTechnologies } from "@/data/projects";
// import {
//   Search,
//   Filter,
//   X,
//   Grid,
//   LayoutGrid,
//   ChevronDown,
//   Sparkles,
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

// export default function Projects() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTech, setSelectedTech] = useState<string>("All");
//   const [viewMode, setViewMode] = useState<"bento" | "grid">("bento");
//   const [showFilters, setShowFilters] = useState(false);

//   const featuredProject = PROJECTS.find((project) => project.featured);
//   const allTechnologies = getAllTechnologies();

//   // Filter projects
//   const filteredProjects = useMemo(() => {
//     let projects = PROJECTS.filter((p) => !p.featured);

//     if (searchTerm) {
//       projects = projects.filter(
//         (p) =>
//           p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           p.subtitle.toLowerCase().includes(searchTerm.toLowerCase()),
//       );
//     }

//     if (selectedTech !== "All") {
//       projects = projects.filter((p) =>
//         p.technologies.some((t) => t === selectedTech),
//       );
//     }

//     return projects;
//   }, [searchTerm, selectedTech]);

//   // Bento grid layout - assign different sizes to projects
//   const getBentoSize = (index: number) => {
//     const sizes = [
//       "col-span-2 row-span-2", // Large
//       "col-span-1 row-span-1", // Small
//       "col-span-1 row-span-1", // Small
//       "col-span-1 row-span-1", // Small
//       "col-span-2 row-span-1", // Wide
//       "col-span-1 row-span-1", // Small
//       "col-span-1 row-span-1", // Small
//       "col-span-1 row-span-1", // Small
//     ];
//     return sizes[index % sizes.length];
//   };

//   const getBentoImageHeight = (size: string) => {
//     if (size.includes("row-span-2")) return "h-64 md:h-80";
//     if (size.includes("col-span-2")) return "h-48 md:h-56";
//     return "h-40 md:h-48";
//   };

//   return (
//     <SectionContainer>
//       <div className="space-y-8">
//         {/* Header with Gradient */}
//         <div className="relative">
//           <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
//           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />

//           <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
//             <div className="flex-1">
//               <SectionTitle
//                 title="Recent Project"
//                 subtitle="A selection of projects showcasing my frontend engineering skills, UI craftsmanship, and modern web development experience."
//                 className="flex-1"
//               />
//             </div>

//             {/* View Toggle - Premium */}
//             <div className="flex items-center gap-2 self-start lg:self-auto bg-surface/30 backdrop-blur-sm rounded-xl border border-white/10 p-1.5">
//               <button
//                 onClick={() => setViewMode("bento")}
//                 className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
//                   viewMode === "bento"
//                     ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
//                     : "text-gray-400 hover:text-white hover:bg-white/5"
//                 }`}
//               >
//                 Bento
//               </button>
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
//                   viewMode === "grid"
//                     ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
//                     : "text-gray-400 hover:text-white hover:bg-white/5"
//                 }`}
//               >
//                 Grid
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Featured Project - Premium */}
//         {featuredProject && (
//           <div className="relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-50" />
//             <div className="relative">
//               <FeaturedProject project={featuredProject} />
//             </div>
//           </div>
//         )}

//         {/* Filter & Search Bar - Premium */}
//         <div className="space-y-4">
//           <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//             {/* Search - Premium */}
//             <div className="relative flex-1 max-w-md">
//               <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-purple-600/5 rounded-full blur-sm" />
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-red-600 z-10" />
//                 <input
//                   type="text"
//                   placeholder="Search projects..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full bg-surface/50 backdrop-blur-sm border border-white/10 rounded-full py-3 pl-11 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all duration-300"
//                 />
//                 {searchTerm && (
//                   <button
//                     onClick={() => setSearchTerm("")}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
//                   >
//                     <X className="w-4 h-4 text-gray-400" />
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Filter Toggle - Premium */}
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="group relative flex items-center gap-2 px-5 py-2.5 bg-surface/30 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
//             >
//               <Filter className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//               <span className="font-medium">Filters</span>
//               <ChevronDown
//                 className={`w-4 h-4 transition-transform duration-300 ${
//                   showFilters ? "rotate-180" : ""
//                 }`}
//               />
//               {selectedTech !== "All" && (
//                 <Badge className="bg-red-600/20 text-red-400 border-red-600/30 ml-1">
//                   {selectedTech}
//                 </Badge>
//               )}
//             </button>
//           </div>

//           {/* Filter Chips - Premium */}
//           <div
//             className={`overflow-hidden transition-all duration-500 ${
//               showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="pt-4 pb-2 flex flex-wrap gap-2">
//               <button
//                 onClick={() => setSelectedTech("All")}
//                 className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                   selectedTech === "All"
//                     ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/20"
//                     : "bg-surface/30 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-sm"
//                 }`}
//               >
//                 All Projects
//               </button>
//               {allTechnologies.slice(0, 8).map((tech) => (
//                 <button
//                   key={tech}
//                   onClick={() => setSelectedTech(tech)}
//                   className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                     selectedTech === tech
//                       ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/20"
//                       : "bg-surface/30 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-sm"
//                   }`}
//                 >
//                   {tech}
//                 </button>
//               ))}
//               <div 
//               className=" text-[var(--primary)] shadow-lg shadow-[var(--primary)] border-[var(--primary)] px-6 py-2 flex items-center justify-center rounded-full border "
//               >
//                 <button
//                   onClick={() => {
//                     setSearchTerm("");
//                     setSelectedTech("All");
//                   }}
//                 >
//                   Clear all
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Project Count - Premium */}
//         <div className="flex items-center justify-between  border-white/5 ">
//           <p className="text-sm text-gray-500">
//             Showing{" "}
//             <span className="text-white font-medium">
//               {filteredProjects.length}
//             </span>{" "}
//             projects
//             {selectedTech !== "All" && (
//               <span className="text-gray-400">
//                 {" "}
//                 · Filtered by{" "}
//                 <span className="text-red-400">{selectedTech}</span>
//               </span>
//             )}
//             {searchTerm && (
//               <span className="text-gray-400">
//                 {" "}
//                 · Searching for "
//                 <span className="text-white">{searchTerm}</span>"
//               </span>
//             )}
//           </p>
//         </div>
//         <SectionTitle
//           title="Featured Projects"
//           subtitle="A selection of projects showcasing my frontend engineering skills, UI craftsmanship, and modern web development experience."
//           className="flex-1"
//         />
//         {/* Projects Grid - Premium Bento */}
//         {filteredProjects.length > 0 ? (
//           viewMode === "bento" ? (
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto ">
//               {filteredProjects.map((project, index) => {
//                 const size = getBentoSize(index);
//                 const imageHeight = getBentoImageHeight(size);
//                 const isLarge = size.includes("row-span-2");
//                 const isWide = size.includes("col-span-2");

//                 return (
//                   <div
//                     key={project.id}
//                     className={`${size} relative group animate-fade-in-up`}
//                     style={{ animationDelay: `${index * 80}ms` }}
//                   >
//                     {/* Premium Card with Glass Effect */}
//                     <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface/80 to-surface-light/80 backdrop-blur-sm transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5">
//                       {/* Glow on hover */}
//                       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-red-600/5 via-transparent to-purple-600/5" />

//                       {/* Image */}
//                       <div
//                         className={`relative w-full ${imageHeight} overflow-hidden`}
//                       >
//                         <img
//                           src={project.image}
//                           alt={project.title}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

//                         {/* Technology tags overlay */}
//                         <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
//                           {project.technologies
//                             .slice(0, isLarge ? 4 : 3)
//                             .map((tech) => (
//                               <span
//                                 key={tech}
//                                 className="bg-surface/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-[8px] text-gray-300 border border-white/10"
//                               >
//                                 {tech}
//                               </span>
//                             ))}
//                           {project.technologies.length > (isLarge ? 4 : 3) && (
//                             <span className="bg-surface/80 backdrop-blur-sm px-2 py-0.5 rounded-full text-[8px] text-gray-400 border border-white/10">
//                               +{project.technologies.length - (isLarge ? 4 : 3)}
//                             </span>
//                           )}
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="p-4 relative">
//                         <div className="flex items-start justify-between gap-2">
//                           <div className="flex-1 min-w-0">
//                             <h3
//                               className={`font-bold text-white heading-font group-hover:text-red-400 transition-colors ${isLarge ? "text-lg" : "text-sm"} truncate`}
//                             >
//                               {project.title}
//                             </h3>
//                             <p
//                               className={`text-zinc-400 ${isLarge ? "text-sm" : "text-xs"} truncate`}
//                             >
//                               {project.subtitle}
//                             </p>
//                           </div>
//                           <span className="text-[10px] text-zinc-500 bg-surface/30 px-2 py-0.5 rounded-full border border-white/5 whitespace-nowrap flex-shrink-0">
//                             {project.year}
//                           </span>
//                         </div>

//                         {isLarge && (
//                           <p className="mt-2 text-xs text-zinc-400 line-clamp-2">
//                             {project.description}
//                           </p>
//                         )}

//                         {/* Quick action buttons */}
//                         <div className="mt-3 flex items-center gap-2">
//                           <a
//                             href={project.live}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-xs text-red-400 hover:text-red-300 transition-colors font-medium"
//                           >
//                             Live Demo →
//                           </a>
//                           <a
//                             href={project.github}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
//                           >
//                             Code
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             // Regular Grid View
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//               {filteredProjects.map((project, index) => (
//                 <ProjectCard
//                   key={project.id}
//                   project={project}
//                   index={index}
//                   variant="grid"
//                 />
//               ))}
//             </div>
//           )
//         ) : (
//           <div className="text-center py-20">
//             <div className="text-6xl mb-4">🔍</div>
//             <h3 className="text-xl font-bold text-white heading-font">
//               No projects found
//             </h3>
//             <p className="text-gray-400 mt-2">
//               Try adjusting your search or filter criteria
//             </p>
//             <button
//               onClick={() => {
//                 setSearchTerm("");
//                 setSelectedTech("All");
//               }}
//               className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-500 transition-colors"
//             >
//               Reset filters
//             </button>
//           </div>
//         )}
//       </div>
//     </SectionContainer>
//   );
// }


// components/sections/projects/Projects.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTitle from "@/components/common/SectionTitle";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { PROJECTS, getAllTechnologies } from "@/data/projects";
import {
  Search,
  Filter,
  X,
  Grid,
  LayoutGrid,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"bento" | "grid">("bento");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const featuredProject = PROJECTS.find((project) => project.featured);
  const allTechnologies = getAllTechnologies();

  // Filter projects
  const filteredProjects = useMemo(() => {
    let projects = PROJECTS.filter((p) => !p.featured);

    if (searchTerm) {
      projects = projects.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedTech !== "All") {
      projects = projects.filter((p) =>
        p.technologies.some((t) => t === selectedTech),
      );
    }

    return projects;
  }, [searchTerm, selectedTech]);

  // Bento grid layout - responsive sizes
  const getBentoSize = (index: number) => {
    if (isMobile) {
      return "col-span-1 row-span-1";
    }
    const sizes = [
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ];
    return sizes[index % sizes.length];
  };

  const getBentoImageHeight = (size: string) => {
    if (isMobile) return "h-48";
    if (size.includes("row-span-2")) return "h-64 md:h-80";
    if (size.includes("col-span-2")) return "h-48 md:h-56";
    return "h-40 md:h-48";
  };

  return (
    <SectionContainer>
      <div className="space-y-6 md:space-y-8">
        {/* Header with Gradient */}
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-40 h-40 md:w-64 md:h-64 bg-red-600/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 md:w-64 md:h-64 bg-purple-600/5 rounded-full blur-3xl" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex-1">
              <SectionTitle
                title="Recent Project"
                subtitle="A selection of projects showcasing my frontend engineering skills, UI craftsmanship, and modern web development experience."
                className="flex-1"
              />
            </div>

            {/* View Toggle - Responsive */}
            <div className="flex items-center gap-2 self-start md:self-auto bg-surface/30 backdrop-blur-sm rounded-xl border border-white/10 p-1.5">
              <button
                onClick={() => setViewMode("bento")}
                className={`px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-medium transition-all duration-300 ${
                  viewMode === "bento"
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Bento
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-medium transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Grid
              </button>
            </div>
          </div>
        </div>

        {/* Featured Project - Premium */}
        {featuredProject && (
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl md:rounded-3xl blur-xl opacity-50" />
            <div className="relative">
              <FeaturedProject project={featuredProject} />
            </div>
          </div>
        )}

        {/* Filter & Search Bar - Responsive */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Search - Responsive */}
            <div className="relative flex-1 w-full md:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-purple-600/5 rounded-full blur-sm" />
              <div className="relative">
                <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-red-600 z-10" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-surface/50 backdrop-blur-sm border border-white/10 rounded-full py-2 md:py-3 pl-9 md:pl-11 pr-10 md:pr-12 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/10 transition-all duration-300"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Toggle - Responsive */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="group relative flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-surface/30 backdrop-blur-sm border border-white/10 rounded-full text-xs md:text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <Filter className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:rotate-12 transition-transform" />
              <span className="font-medium hidden xs:inline">Filters</span>
              <ChevronDown
                className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
              {selectedTech !== "All" && (
                <Badge className="bg-red-600/20 text-red-400 border-red-600/30 ml-1 text-[8px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1">
                  {selectedTech}
                </Badge>
              )}
            </button>
          </div>

          {/* Filter Chips - Responsive */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-3 md:pt-4 pb-2 flex flex-wrap gap-1.5 md:gap-2">
              <button
                onClick={() => setSelectedTech("All")}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-medium transition-all duration-300 ${
                  selectedTech === "All"
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/20"
                    : "bg-surface/30 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-sm"
                }`}
              >
                All Projects
              </button>
              {allTechnologies.slice(0, isMobile ? 4 : 8).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-medium transition-all duration-300 ${
                    selectedTech === tech
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/20"
                      : "bg-surface/30 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-sm"
                  }`}
                >
                  {tech}
                </button>
              ))}
              <div 
                className="text-[var(--primary)] shadow-lg shadow-[var(--primary)] border-[var(--primary)] px-3 md:px-6 py-1.5 md:py-2 flex items-center justify-center rounded-full border text-[10px] md:text-xs"
              >
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTech("All");
                  }}
                >
                  Clear all
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Count - Responsive */}
        <div className="flex items-center justify-between border-white/5">
          <p className="text-xs md:text-sm text-gray-500">
            Showing{" "}
            <span className="text-white font-medium">
              {filteredProjects.length}
            </span>{" "}
            projects
            {selectedTech !== "All" && (
              <span className="text-gray-400 hidden md:inline">
                {" "}
                · Filtered by{" "}
                <span className="text-red-400">{selectedTech}</span>
              </span>
            )}
            {searchTerm && (
              <span className="text-gray-400 hidden md:inline">
                {" "}
                · Searching for "
                <span className="text-white">{searchTerm}</span>"
              </span>
            )}
          </p>
        </div>

        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects showcasing my frontend engineering skills, UI craftsmanship, and modern web development experience."
          className="flex-1"
        />

        {/* Projects Grid - Responsive Bento */}
        {filteredProjects.length > 0 ? (
          viewMode === "bento" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
              {filteredProjects.map((project, index) => {
                const size = getBentoSize(index);
                const imageHeight = getBentoImageHeight(size);
                const isLarge = size.includes("row-span-2");
                const isWide = size.includes("col-span-2");

                return (
                  <div
                    key={project.id}
                    className={`${size} relative group animate-fade-in-up`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {/* Premium Card with Glass Effect */}
                    <div className="relative h-full overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-br from-surface/80 to-surface-light/80 backdrop-blur-sm transition-all duration-500 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5">
                      {/* Glow on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-red-600/5 via-transparent to-purple-600/5" />

                      {/* Image */}
                      <div
                        className={`relative w-full ${imageHeight} overflow-hidden`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

                        {/* Technology tags overlay - Responsive */}
                        <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 flex flex-wrap gap-1 md:gap-1.5">
                          {project.technologies
                            .slice(0, isMobile ? 2 : (isLarge ? 4 : 3))
                            .map((tech) => (
                              <span
                                key={tech}
                                className="bg-surface/80 backdrop-blur-sm px-1.5 py-0.5 md:px-2 rounded-full text-[6px] md:text-[8px] text-gray-300 border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > (isMobile ? 2 : (isLarge ? 4 : 3)) && (
                            <span className="bg-surface/80 backdrop-blur-sm px-1.5 py-0.5 md:px-2 rounded-full text-[6px] md:text-[8px] text-gray-400 border border-white/10">
                              +{project.technologies.length - (isMobile ? 2 : (isLarge ? 4 : 3))}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content - Responsive */}
                      <div className="p-3 md:p-4 relative">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`font-bold text-white heading-font group-hover:text-red-400 transition-colors ${isLarge && !isMobile ? "text-lg" : "text-sm"} truncate`}
                            >
                              {project.title}
                            </h3>
                            <p
                              className={`text-zinc-400 ${isLarge && !isMobile ? "text-sm" : "text-[10px] md:text-xs"} truncate`}
                            >
                              {project.subtitle}
                            </p>
                          </div>
                          <span className="text-[8px] md:text-[10px] text-zinc-500 bg-surface/30 px-1.5 md:px-2 py-0.5 rounded-full border border-white/5 whitespace-nowrap flex-shrink-0">
                            {project.year}
                          </span>
                        </div>

                        {isLarge && !isMobile && (
                          <p className="mt-2 text-xs text-zinc-400 line-clamp-2">
                            {project.description}
                          </p>
                        )}

                        {/* Quick action buttons - Responsive */}
                        <div className="mt-2 md:mt-3 flex items-center gap-2">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] md:text-xs text-red-400 hover:text-red-300 transition-colors font-medium"
                          >
                            Live →
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] md:text-xs text-gray-500 hover:text-gray-300 transition-colors"
                          >
                            Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Regular Grid View - Responsive
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  variant="grid"
                />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12 md:py-20">
            <div className="text-4xl md:text-6xl mb-4">🔍</div>
            <h3 className="text-lg md:text-xl font-bold text-white heading-font">
              No projects found
            </h3>
            <p className="text-sm md:text-base text-gray-400 mt-2">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTech("All");
              }}
              className="mt-4 px-4 md:px-6 py-1.5 md:py-2 bg-red-600 text-white rounded-full text-xs md:text-sm font-medium hover:bg-red-500 transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}