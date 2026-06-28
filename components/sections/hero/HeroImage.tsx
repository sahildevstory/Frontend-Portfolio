export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Red Glow */}
      <div className="absolute h-[450px] w-[450px] rounded-full bg-red-600/20 blur-[120px]" />

      {/* Border */}
      <div
        className="
        relative
        h-[500px]
        w-[360px]
        rounded-[36px]
        border
        border-white/10
        bg-gradient-to-b
        from-zinc-900
        to-black
        p-2
        "
      >
        <div
          className="
          flex
          h-full
          w-full
          items-center
          justify-center
          rounded-[30px]
          border
          border-white/10
          bg-zinc-950
        "
        >
          <p className="text-zinc-500">
            Your Sketch
          </p>
        </div>
      </div>
    </div>
  );
}