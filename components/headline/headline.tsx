"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import ScaleIn from "../animations/ScaleIn";

export default function Headline() {
  const letters = ["S", "A", "H", "I", "L", " ", "K", "H", "A", "N"];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mt-10">
      <Badge
        variant="outline"
        className="
    inline-flex
    items-center
    gap-2
    rounded-full
    border-zinc-700
    bg-zinc-900/60
    px-5
    py-2
    text-zinc-200
    backdrop-blur-md
    code-font
  "
      >
        <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse " />
        Drag • Drop • Animate
      </Badge>
      <div>
        <div className="text-white font-bold text-[clamp(40px,8vw,140px)] ">
          {/* LETTERS */}
        
          <div className="flex flex-wrap items-center justify-center gap-1 text-white font-bold text-[clamp(40px,8vw,140px)]">
           
            {letters.map((l, i) => (
              <motion.span
                key={i}
                drag
                dragMomentum={false}
                whileDrag={{
                  scale: 1.2,
                  zIndex: 100,
                  cursor: "grabbing",
                }}
                className="heading-font cursor-grab select-none"
              >
                {l}
              </motion.span>
            ))}
          </div>
          <motion.div
            drag
            dragMomentum={false}
            whileDrag={{ scale: 1.2 }}
            className="code-font text-(--primary) hover:text-(--primary-hover) text-[8px] md:text-lg lg:text-xl flex items-center justify-center uppercase"
          >
            <h1> Frontend Developer / UI developer</h1>
          </motion.div>

          {/* IMAGE = behaves like a letter */}
          <motion.div
            drag
            dragMomentum={false}
            whileDrag={{ scale: 1.1 }}
            className="cursor-grab active:cursor-grabbing select-none flex items-center justify-center"
          >
            <Image
              src="/images/intro/CenterLogo.svg"
              alt="logo"
              width={400}
              height={400}
              className="w-[200px] sm:w-[300px] md:w-[400px] h-auto"
              loading="eager"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
