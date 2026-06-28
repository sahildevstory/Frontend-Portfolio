export default function CursorDot() {
  return (
    <div
      id="cursor-dot"
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        h-3
        w-3
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-red-500
        shadow-[0_0_15px_rgba(239,68,68,0.9)]
      "
    />
  );
}