import Container from "@/components/container";
import Logo from "@/components/logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-inherit">
      <Container>
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-2">
            <Logo />
            <p className="font-semibold">Focus</p>
          </Link>
          <span className="flex items-center gap-6">
            <a href="#priorities" className="hover:underline">
              Features
            </a>
            <a href="https://tally.so/r/3NPjqb" className="hover:underline">
              Waitlist
            </a>
            {/* <a href="#pricing" className="hover:underline">
              Pricing
            </a> */}
          </span>
        </div>
      </Container>
    </header>
  );
}
