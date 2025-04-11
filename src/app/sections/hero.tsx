import Image from "next/image";
import Container from "@/components/container";
import WaitlistButton from "../waitlist-button";
import Sunken from "@/components/sunken";
import Dot from "@/components/dot";

export default function Hero() {
  const common = { alt: "Product screen", width: 1512, height: 982 };

  return (
    <section id="hero" className="scroll-mt-14">
      <Container>
        <div className="divide-y divide-dashed divide-slate-300 dark:divide-neutral-700">
          <div className="relative p-6">
            <h1>From mess to success</h1>
            <p className="mb-6 sm:text-xl">
              Focus is a productivity app for <b>managers</b> and 
              <b>designers</b>, helping to identify the right problems and solve
              them effectively.
            </p>
            <WaitlistButton />
            <Dot className="absolute -bottom-2 -left-2" />
            <Dot className="absolute -right-2 -bottom-2" />
          </div>
          <Sunken className="h-auto w-full">
            <Image
              src="images/hero-light.png"
              width={common.width}
              height={common.height}
              alt={common.alt}
              priority
              className="rounded border border-slate-300 shadow-2xl dark:hidden"
            />
            <Image
              priority
              src="images/hero-dark.png"
              width={common.width}
              height={common.height}
              alt={common.alt}
              className="hidden rounded border border-neutral-700 shadow-2xl dark:block"
            />
          </Sunken>
        </div>
      </Container>
    </section>
  );
}
