// components/sections/about/AboutImage.tsx
import { Code, Zap, Sparkles, Cpu } from "lucide-react";

export default function AboutImage() {
  return (
    <div className="relative">
      {/* Glow Effects */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600/5 rounded-full blur-[150px]" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-[150px]" />

      {/* Main Card */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10 rounded-3xl blur-2xl" />
        
        <div className="relative h-[480px] rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-surface-light overflow-hidden group">
          {/* Decorative Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[length:24px_24px]" />
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
            {/* Animated Code Icon */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative bg-surface rounded-2xl p-6 border border-white/10 shadow-2xl">
                <Code className="w-16 h-16 text-red-500" strokeWidth={1.5} />
              </div>
            </div>

            {/* Animated Elements */}
            <div className="flex gap-3 mb-6">
              {[
                { icon: <Zap className="w-5 h-5" />, delay: "0s" },
                { icon: <Sparkles className="w-5 h-5" />, delay: "0.2s" },
                { icon: <Cpu className="w-5 h-5" />, delay: "0.4s" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-surface-light/50 backdrop-blur-sm p-3 rounded-xl border border-white/5"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="text-red-400">{item.icon}</div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold heading-font text-white">
              Building the Future
            </h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Frontend Development • Performance • Innovation
            </p>

        
          </div>
        </div>
      </div>
    </div>
  );
}