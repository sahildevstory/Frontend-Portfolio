interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  return (
    <span className={className}>
      {text}
    </span>
  );
}
