import Container from "@/components/container";
import Image from "next/image";

export default function Versions() {
  const common = { alt: "Product screen", width: 1512, height: 982 };

  return (
    <section>
      <Container>
        <div className="p-4">
          <h2 className="mt-14 mb-4 text-center">
            Give each concept room to grow
          </h2>
          <p className="text-center">
            Explore multiple paths without losing sight of any ideas. Free your
            creativity and watch as the best solutions naturally rise to the
            top.
          </p>
        </div>
        <Image
          width={common.width}
          height={common.height}
          alt={common.alt}
          src="images/versions-light.png"
          className="mask-t-from-80% mask-b-from-50%"
        />
      </Container>
    </section>
  );
}
