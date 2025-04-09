import Container from "@/components/container";
import WaitlistButton from "../waitlist-button";

export default function CTA() {
  return (
    <section>
      <Container>
        <div className="p-6">
          <h2 className="mb-4">Join our waitlist</h2>
          <p className="mb-6">
            We believe you deserve a refined experience from day one. That
            is why we are carefully rolling out access through small group
            invitations, improving the application based on real user feedback.
            Join our waitlist to secure early access and help shape the future
            of problem-solving.
          </p>
          <WaitlistButton />
        </div>
      </Container>
    </section>
  );
}
