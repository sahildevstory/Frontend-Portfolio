import { Card, CardContent } from "@/components/ui/card";

export default function AboutStats() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects", value: "10+" },
    { label: "Clients", value: "8" },
    { label: "Technologies", value: "15+" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-gray-800/50 border-gray-700 text-center">
          <CardContent className="p-4">
            <p className="text-2xl font-bold text-purple-400">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
