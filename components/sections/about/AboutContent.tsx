// components/sections/about/AboutContent.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Rocket,
  Zap,
  Layers,
  Smartphone,
  BarChart3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function AboutContent() {
  const expertise = [
    "JavaScript",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Zustand",
    "Redux",
    "C++",
  ];

  const metrics = [
    {
      label: "Projects Worked On",
      value: "10+",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      label: "Shipped Products",
      value: "7+",
      icon: <Rocket className="w-4 h-4" />,
    },
    {
      label: "Performance Optimized",
      value: "40%",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      label: "Code Quality",
      value: "98%",
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className=" relative flex items-center gap-3">
          <div className="">
            {/* Status Badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface-light/80 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-gray-300 font-medium">
                Available for work
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold heading-font leading-tight text-center">
          Hi 👋, You know my name right?
        </h2>
      </div>

      {/* Bio */}
      <div className="text-4xl md:text-5xl font-bold heading-font leading-tight text-[var(--primary)] hover:text-[var(--primary-hover)]">
        About
      </div>
      <p className="text-gray-400 leading-relaxed max-w-full text-lg">
        I'm a Frontend Developer with 2+ years of experience building modern,
        scalable, and high-performance web applications. I've contributed to 5+
        projects and shipped 3+ production applications using React, Next.js,
        TypeScript, and Tailwind CSS, with a strong focus on performance, clean
        architecture, and crafting exceptional user experiences.
      </p>

      {/* Metrics Grid */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className="bg-surface/50 border-border/50 backdrop-blur-sm hover:border-red-600/30 transition-all duration-300 group"
          >
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm font-medium">
                  {metric.label}
                </span>
                <span className="text-red-500 group-hover:scale-110 transition-transform">
                  {metric.icon}
                </span>
              </div>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div> */}

      {/* Tech Stack */}
      <div className="space-y-3">
        <p className="text-sm text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
          I've been working with these technologies recently.
        </p>
        <div className="flex flex-wrap gap-2">
          {expertise.map((tech) => (
            <Badge
              key={tech}
              className="bg-surface border-border/50 text-gray-300 hover:border-red-600/50 transition-colors px-6 py-4"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
