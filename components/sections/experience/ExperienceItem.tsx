interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export default function ExperienceItem({
  role,
  company,
  period,
  description,
  highlights,
}: ExperienceItemProps) {
  return (
    <div
      className="
        relative
        border-l
        border-white/10
        pl-8
        pb-12
      "
    >
      {/* Dot */}
      <div className="absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-red-500" />

      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          p-6
          transition-all
          duration-300
          hover:border-red-500/40
        "
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-white">
            {role}
          </h3>

          <p className="text-sm text-zinc-400">
            {company} • {period}
          </p>
        </div>

        <p className="mt-4 text-zinc-400">
          {description}
        </p>

        <ul className="mt-5 space-y-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="text-sm text-zinc-300"
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}