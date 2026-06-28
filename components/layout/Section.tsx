type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`  
        container
        
        py-32
        relative
        ${className}
      `}
    >
      {children}
    </section>
  );
}