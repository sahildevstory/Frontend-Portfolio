"use client";

export default function CursorRing() {
  return (
    <div
      id="cursor-ring"
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9998]
        h-14
        w-14
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-rose-600/20
        blur-xl
      "
    />
  );
}