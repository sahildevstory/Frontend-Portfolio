export default function HeroBackground() {
  return (
    <>
      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* Top Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-red-600/10
          blur-[140px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-red-700/10
          blur-[120px]
        "
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
    </>
  );
}