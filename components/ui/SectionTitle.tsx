import Badge from "./CustomBadge";
import Heading from "./Heading";

type SectionTitleProps = {
  badge: string;
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      <Badge>{badge}</Badge>

      <Heading className="mt-5">{title}</Heading>

      <p className="mx-auto mt-6 max-w-2xl text-zinc-400">{subtitle}</p>
    </div>
  );
}
