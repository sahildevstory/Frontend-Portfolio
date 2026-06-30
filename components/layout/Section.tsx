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
        
        py-32
        relative
        ${className}
      `}
    >
      {children}
    </section>
  );
}