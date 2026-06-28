import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className,
}: Props) {
  return (
    <Section className={className}>
      <Container>{children}</Container>
    </Section>
  );
}