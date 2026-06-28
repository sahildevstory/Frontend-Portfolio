import { Card, CardContent } from "@/components/ui/card";
import { ABOUT } from "./about-data";
import { Badge } from "@/components/ui/badge";

export default function AboutContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-gray-400 leading-relaxed">
        I'm a passionate full-stack developer with expertise in modern web technologies. 
        I love creating beautiful, responsive, and user-friendly applications that make a difference.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-4">
            <h3 className="font-bold text-purple-400">Experience</h3>
            <p className="text-gray-400">3+ Years</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-4">
            <h3 className="font-bold text-purple-400">Projects</h3>
            <p className="text-gray-400">10+ Completed</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
