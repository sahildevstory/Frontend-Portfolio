import GradientText from "./GradientText";

type Props = {
  title: string;
  subtitle: string;
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  className,
}: Props) {
  return (
    <div className={`mb-10 text-left ${className}`}>
      <h2 className="text-5xl font-bold heading-font">
        <GradientText>{title}</GradientText>
      </h2>

      {/* <p className="mt-6 max-w-2xl text-zinc-400 text-left">
        {subtitle}
      </p> */}
    </div>
  );
}