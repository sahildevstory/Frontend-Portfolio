interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`text-[var(--primary)] hover:text-[var(--primary-hover)] ${className}`}>
      {children}
    </span>
  );
}
