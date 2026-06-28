import GradientText from "./GradientText";

type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-20 text-center">
      <h2 className="text-5xl font-bold">
        <GradientText>{title}</GradientText>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
}