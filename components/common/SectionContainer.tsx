import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function SectionContainer({
  children,
  className,
  id,
}: Props) {
  return (
    <Section id={id} className={className}>
      <Container>{children}</Container>
    </Section>
  );
}