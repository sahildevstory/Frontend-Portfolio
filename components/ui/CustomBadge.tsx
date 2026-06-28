type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      rounded-full
      border
      border-[var(--primary)]
      px-4
      py-1
      text-sm
      text-[var(--primary)]
      "
    >
      {children}
    </span>
  );
}