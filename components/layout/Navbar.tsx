import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <header className="sticky top-0 z-50 hidden lg:flex justify-center">
        <div
          className="
          mt-5
          flex
          w-full
          max-w-6xl
          items-center
          justify-between

          rounded-full
          border border-zinc-800/70
          bg-black/40
          backdrop-blur-xl

          px-6
          py-4
          "
        >
          <NavLogo />

          <NavLinks />

          <NavButton />
        </div>
      </header>

      {/* Mobile Top Bar */}
      <header className="sticky top-0 z-50 flex lg:hidden justify-center">
        <div
          className="
          mt-4
          flex
         
          items-center
          justify-between

          rounded-full
          border border-zinc-800/70
          bg-black/40
          backdrop-blur-xl

          px-5
          py-3
          "
        >
          <NavLogo />
        </div>
      </header>

      {/* Bottom App Bar */}
      <MobileMenu />
    </>
  );
}
