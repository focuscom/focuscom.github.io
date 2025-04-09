import Container from "@/components/container";

export default function Footer() {
  return (
    <footer>
      <Container showCorners={false}>
        <div className="flex justify-between px-6 py-4">
          <p>Focus 2025</p>
          <p>
            Designed by{" "}
            <span>
              <a href="https://x.com/mslizh" className="hover:underline">
                mslizh
              </a>
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
