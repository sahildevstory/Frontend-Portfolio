import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-[var(--primary)] text-white hover:scale-105 hover:shadow-[var(--shadow-primary)]",
    secondary:
      "border border-[var(--border)] bg-transparent text-[var(--text)] hover:border-[var(--primary)]",
    outline:
      "border border-[var(--border)] bg-transparent text-[var(--text)] hover:border-[var(--primary)] hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 font-medium",
    lg: "px-8 py-4 text-lg font-medium",
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-xl transition-all duration-300",
    styles[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}