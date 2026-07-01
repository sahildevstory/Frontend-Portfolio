// layouts/pageLayout.tsx
import DeadStarEffect from "@/components/common/DeadStarEffect";
import { CustomCursor } from "@/components/effects";

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div 

      className="min-h-screen flex justify-center bg-black px-8 bg-[var(--surface-light)]"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 lg:px-12 border-x border-[var(--border)] border-x-2 "
                  data-page-layout="true"  // ← Add this data attribute

      >
        <CustomCursor />
        {children}
      </div>
    </div>
  );
}