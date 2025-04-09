import Container from "@/components/container";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-inherit">
      <Container>
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#hero" className="group flex items-center gap-2">
            <Logo />
            <p className="font-semibold">Focus</p>
          </a>
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
