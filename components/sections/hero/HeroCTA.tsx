import { Button } from "@/components/ui/button";

export default function HeroCTA() {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
        Get Started
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-purple-600 text-purple-400"
      >
        Learn More
      </Button>
    </div>
  );
}
