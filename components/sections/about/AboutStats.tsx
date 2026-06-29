// components/sections/about/AboutStats.tsx
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase, 
  FolderGit2, 
  Users, 
  Award,
  Rocket,
  Zap,
  ShieldCheck,
  GitBranch
} from "lucide-react";

export default function AboutStats() {
  const stats = [
    { 
      label: "Years Experience", 
      value: "2+", 
      icon: <Briefcase className="w-5 h-5" />,
      color: "text-blue-400"
    },
    { 
      label: "Projects Completed", 
      value: "5+", 
      icon: <FolderGit2 className="w-5 h-5" />,
      color: "text-emerald-400"
    },
    { 
      label: "Live Products", 
      value: "3+", 
      icon: <Rocket className="w-5 h-5" />,
      color: "text-purple-400"
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className="bg-surface/50 border-border/50 backdrop-blur-sm hover:border-red-600/30 hover:scale-[1.02] transition-all duration-300 group"
        >
          <CardContent className="p-5 text-center space-y-3">
            <div className="flex justify-center">
              <div className={`${stat.color} p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
            </div>
            <p className="text-2xl font-bold text-white heading-font tracking-tight">
              {stat.value}
            </p>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
              {stat.label}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}