type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`  
        container
        
        py-12
        relative
        ${className}
      `}
    >
      {children}
    </section>
  );
}