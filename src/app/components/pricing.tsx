import Container from "@/components/container";

export default function Pricing() {
  return (
    <section id="pricing">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-dashed divide-slate-300 lg:grid-cols-2 lg:divide-x lg:divide-y-0 dark:divide-neutral-700">
          <div className="relative flex flex-col justify-center p-6">
            <h2 className="mb-4">Simple pricing</h2>
            <p>
              $10 per month for everything after a 30-day free trial. We believe
              your time is too valuable to waste deciphering complicated pricing
              tiers and hidden fees.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
