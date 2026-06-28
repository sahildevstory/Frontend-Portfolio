interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ${className}`}>
      {children}
    </span>
  );
}
