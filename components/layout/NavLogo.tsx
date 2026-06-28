import Image from "next/image";

export default function NavLogo() {
  return (
    <a
      href="/"
      className="font-heading text-xl font-bold tracking-wide block"
    >
      <Image
        src="/images/intro/HeaderLogo.svg"
        alt="Spider Logo"
        width={20}
        height={20}
        loading="eager"
        className="transition-transform  duration-300 hover:scale-350 active:scale-350"
      />
    </a>
  );
}