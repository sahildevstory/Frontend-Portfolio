"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import ScaleIn from "../animations/ScaleIn";

export default function Intro() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-10000 flex items-center justify-center bg-black transition-opacity duration-1000 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="relative px-4">
        {/* Name as background */}
       
        <ScaleIn>
          <span className="text-[clamp(60px,12vw,200px)] font-bold text-white tracking-wider leading-none">
            SAHIL KHAN
          </span>
        </ScaleIn>

        {/* Image on top overlapping the name */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-sm:top-20 max-sm:w-[200px] max-sm:h-[200px]">
          <Image
            src="/images/intro/CenterLogo.svg"
            alt="Profile"
            width={300}
            height={300}
            loading="eager"
            className="object-contain shadow-2xl max-sm:w-full max-sm:h-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
