import Container from "@/components/container";
import Dot from "@/components/dot";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Asterisk } from "lucide-react";

export default function SimplicityVersions() {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 divide-y divide-dashed divide-slate-300 lg:grid-cols-2 lg:divide-x lg:divide-y-0 dark:divide-neutral-700">
          <div className="relative flex flex-col">
            <div className="relative flex flex-col justify-center p-6">
              <h3 className="mb-2">Simplicity at the core</h3>
              <p className="mb-4">
                Your brilliance deserves better than complicated frameworks. Our
                tool helps you break down challenges into manageable steps,
                so your natural genius can solve them effortlessly.
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-2 mask-b-from-50% p-6 pt-0">
              <span className="flex items-center">
                <svg
                  width="2"
                  height="24"
                  viewBox="0 0 2 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke stroke-slate-800 dark:stroke-neutral-200"
                >
                  <line x1={1} x2={1} y1={0} y2={24} />
                </svg>

                <p className="text-slate-500 dark:text-neutral-500">
                  Start typing
                </p>
              </span>
              <div className="divide-y divide-dashed divide-slate-300 rounded-md border border-slate-300 bg-slate-50 shadow-lg dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800">
                <ul className="py-2">
                  <p className="px-4 py-2 text-sm text-slate-500 dark:text-neutral-500">
                    Blocks
                  </p>
                  {["Customer needs", "Developer needs", "Limitations"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 transition hover:bg-slate-200 dark:hover:bg-neutral-600"
                      >
                        {item}
                      </li>
                    ),
                  )}
                </ul>
                <ul className="py-2">
                  <p className="px-4 py-2 text-sm text-slate-500 dark:text-neutral-500">
                    Sections
                  </p>
                  <li className="px-4 py-2 transition hover:bg-slate-200 dark:hover:bg-neutral-600">
                    Problem identification
                  </li>
                </ul>
              </div>
            </div>
            <Dot className="absolute -bottom-2 -left-2 lg:-top-2 lg:-right-2 lg:left-auto" />
            <Dot className="absolute -right-2 -bottom-2" />
          </div>

          <div className="">
            <div className="p-6">
              <h3 className="mb-2">Give each concept room to grow</h3>
              <p>
                Explore multiple paths without losing sight of any ideas. Free
                your creativity and watch as the best solutions naturally rise
                to the top.
              </p>
            </div>
            <div className="mask-b-from-50%">
              <VersionIllustration />
            </div>
          </div>

          <Dot className="absolute -top-2 -right-2" />
          <Dot className="absolute -right-2 -bottom-2" />
        </div>
      </Container>
    </section>
  );
}

function VersionIllustration() {
  return (
    <div className="relative min-h-96 perspective-distant perspective-origin-top transform-3d">
      <VersionCard className="text-slate-800 dark:text-neutral-200">
        <div className="flex w-full justify-between">
          <p className="text-lg font-semibold">Customer needs</p>
          <p>Version 3</p>
        </div>
      </VersionCard>
      <VersionCard className="-translate-z-[300px] hover:translate-y-35 hover:-translate-z-[300px]">
        <div className="flex w-full justify-between">
          <p className="text-lg font-semibold">Customer needs</p>
          <p>Version 2</p>
        </div>
      </VersionCard>
      <VersionCard className="translate-y-40 -translate-z-[600px] hover:translate-y-30 hover:-translate-z-[600px]">
        <div className="flex w-full justify-between">
          <p className="text-lg font-semibold">Customer needs</p>
          <p>Version 1</p>
        </div>
      </VersionCard>
    </div>
  );
}

function VersionCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute right-6 left-6 flex flex-col gap-3 rounded-lg border border-slate-300 bg-slate-50 px-6 py-4 text-slate-300 shadow-lg/5 transition hover:text-slate-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-700 dark:hover:text-neutral-200",
        "translate-y-45",
        // "translate-y-30 -rotate-y-50",
        className,
      )}
    >
      {children}
      <ul>
        {[
          "Light and dark mode themes out of the box",
          "White-labeling capabilities for enterprise clients",
          "Clear customisation documentation with usage examples",
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <Asterisk size={20} strokeWidth={1.25} className="shrink-0" />
            <p className="truncate">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
