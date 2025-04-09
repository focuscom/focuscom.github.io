import Container from "@/components/container";
import Image from "next/image";

export default function Priorities() {
  return (
    <section id="priorities" className="scroll-mt-14">
      <Container>
        <div className="flex flex-col justify-center p-4">
          <h2 className="mt-8 mb-4 text-center md:mt-16">
            Focus on what trully matter
          </h2>
          <p className="mb-4 text-center">
            When priorities are scattered, progress stalls. Bring your personal
            and professional worlds together in one place, and finally
            сoncentrate on the essentials.
          </p>
        </div>
        <Image
          width={1512}
          height={500}
          src="images/priorities-light.png"
          alt="Priorities"
          className="max-h-[500px] w-full mask-r-from-70% mask-b-from-70% object-cover object-top-left dark:hidden"
        />
        <Image
          width={1512}
          height={500}
          src="images/priorities-dark.png"
          alt="Priorities"
          className="hidden max-h-[500px] w-full mask-r-from-70% mask-b-from-70% object-cover object-top-left dark:block"
        />
      </Container>
    </section>
  );
}
