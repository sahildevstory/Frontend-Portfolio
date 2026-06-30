type PageLayoutProps = {
  children: React.ReactNode;
};



export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex justify-center  px-8 bg-[var(--surface-light)] border-x border-[var(--border)] border-x-2">
      <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12  ">
        {children}
      </div>
    </div>
  );
}