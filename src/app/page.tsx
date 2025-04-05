import Frame from "@/components/frame";
import Image from "next/image";
import WaitlistButton from "./waitlist-button";

export default function Home() {
  return (
    <main className="divide-y divide-dashed divide-slate-300 dark:divide-neutral-700">
      <section>
        <Frame>
          <h1>From mess to success</h1>
          <p className="mb-4">
            Focus helps you identify the right problems and solve them
            effectively.
          </p>
          <WaitlistButton />
          <Image
            width={1200}
            height={800}
            src="images/placeholder.svg"
            alt="Product screen"
            className="mt-4 h-auto w-full rounded border border-dashed border-slate-300 dark:border-neutral-700"
          />
        </Frame>
      </section>

      <section>
        <Frame>
          <h2>Simplicity at the core</h2>
          <p className="mb-4">
            Your brilliance deserves better than complicated frameworks. That is
            why our tool provides a streamlined approach, breaking down
            challenges into manageable steps, so your natural genius can solve
            them effortlessly.
          </p>
          <Image
            width={1200}
            height={800}
            src="images/placeholder.svg"
            alt="Problem view"
            className="mt-4 h-auto w-full rounded border border-dashed border-slate-300 dark:border-neutral-700"
          />
        </Frame>
      </section>

      <section>
        <Frame>
          <h2>Focus on what trully matter</h2>
          <p className="mb-4">
            When priorities are scattered, progress stalls. Bring your personal
            and professional worlds together in one place, and finally
            сoncentrate on the essentials.
          </p>
          <Image
            width={1200}
            height={800}
            src="images/placeholder.svg"
            alt="Problem list view"
            className="mt-4 h-auto w-full rounded border border-dashed border-slate-300 dark:border-neutral-700"
          />
        </Frame>
      </section>

      <section>
        <Frame>
          <h2>Give each concept room to grow</h2>
          <p className="mb-4">
            Explore multiple paths without losing sight of any ideas. Free your
            creativity and watch as the best solutions naturally rise to the
            top.
          </p>
          <Image
            width={1200}
            height={800}
            src="images/placeholder.svg"
            alt="Solution versions view"
            className="mt-4 h-auto w-full rounded border border-dashed border-slate-300 dark:border-neutral-700"
          />
        </Frame>
      </section>
      <section>
        <Frame>
          <h2>Use familiar tools</h2>
          <p className="mb-4">
            Continue working with the tools you have mastered. Our solution fits
            naturally into your existing workflow, improving your process
            without requiring you to change how you work.
          </p>
          <Image
            width={1200}
            height={800}
            src="images/placeholder.svg"
            alt="Tool logo cloud"
            className="mt-4 h-auto w-full rounded border border-dashed border-slate-300 dark:border-neutral-700"
          />
        </Frame>
      </section>

      <section>
        <Frame>
          <h2>Effortless progress sharing</h2>
          <p className="mb-4">
            Every step of your journey is documented as you go, so when
            stakeholders need updates, there’s no need to backtrack. Progress is
            always ready to share, keeping everyone aligned without extra
            effort.
          </p>
          <Image
            width={1200}
            height={800}
            src="images/placeholder.svg"
            alt="Problem status"
            className="mt-4 h-auto w-full rounded border border-dashed border-slate-300 dark:border-neutral-700"
          />
        </Frame>
      </section>

      <section>
        <Frame>
          <h2>Your work tells its own story</h2>
          <p className="mb-4">
            Every decision, insight, and breakthrough is captured in context,
            making presentations intuitive and eliminating the need for lengthy
            explanations.
          </p>
          <Image
            width={1200}
            height={800}
            src="images/placeholder.svg"
            alt="Problem outline"
            className="mt-4 h-auto w-full rounded border border-dashed border-slate-300 dark:border-neutral-700"
          />
        </Frame>
      </section>

      <section>
        <Frame>
          <h2>Meet any security policy</h2>
          <p className="mb-4">
            Your data never leaves your device. Our local-first approach ensures
            complete privacy and compliance with the strictest corporate
            security policies, allowing you to use our tool in any environment
            without compromise.
          </p>
          <Image
            width={1200}
            height={800}
            src="images/placeholder.svg"
            alt="Source files"
            className="mt-4 h-auto w-full rounded border border-dashed border-slate-300 dark:border-neutral-700"
          />
        </Frame>
      </section>

      <section>
        <Frame>
          <h2>Simple pricing</h2>
          <p>$10 per month.</p>
        </Frame>
      </section>

      <section>
        <Frame>
          <h2>Join our waitlist</h2>
          <p className="mb-4">
            We believe you deserve a refined experience from day one. That is
            why we are carefully rolling out access through small group
            invitations, improving the application based on real user feedback.
            Join our waitlist to secure early access and help shape the future
            of problem-solving.
          </p>
          <WaitlistButton />
        </Frame>
      </section>
    </main>
  );
}
