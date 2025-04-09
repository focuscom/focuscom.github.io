import { ReactNode } from "react";
import Container from "@/components/container";
import Dot from "@/components/dot";
import { EvervaultCard } from "@/components/evervault";
import { cn } from "@/lib/utils";
import { FileText, Folder, FolderOpen } from "lucide-react";
import Image from "next/image";

export default function ToolsSecurity() {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 divide-y divide-dashed divide-slate-300 lg:grid-cols-2 lg:divide-x lg:divide-y-0 dark:divide-neutral-700">
          <div className="relative flex flex-col">
            <div className="p-6">
              <h3 className="mb-2">Use familiar tools</h3>
              <p>
                Continue working with the tools you have mastered. Our solution
                fits naturally into your existing workflow, improving your
                process without requiring you to change how you work.
              </p>
            </div>
            <ToolsIllustration />
            <Dot className="absolute -bottom-2 -left-2 lg:-top-2 lg:-right-2 lg:left-auto" />
            <Dot className="absolute -right-2 -bottom-2" />
          </div>
          <div className="flex flex-col">
            <div className="p-6">
              <h3 className="mb-2">Meet any security policy</h3>
              <p>
                Our local-first approach ensures complete privacy and compliance
                with the strictest corporate security policies, allowing you
                to use our tool in any environment without compromise.
              </p>
            </div>
            <SecurityIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}

interface ListItemProps {
  icon?: ReactNode;
  label: string;
}

function SecurityIllustration() {
  return (
    <div className="relative flex flex-1 items-center justify-center p-6 sm:pt-0">
      {/* <Sunken className="z-10 w-full border-dashed border-slate-300 sm:rounded-lg sm:border dark:border-neutral-700"> */}
      <div className="z-10 w-full rounded-md border border-slate-300 bg-slate-50 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800">
        <div className="border-b border-dashed border-slate-300 px-4 py-3 dark:border-neutral-700">
          <p className="text-slate-500 dark:text-neutral-500">
            Users/Simon/Documents/Focus
          </p>
        </div>
        <ul className="h-68 overflow-hidden py-2">
          <ListItem
            label="Lack of sleep"
            icon={<Folder size={20} strokeWidth={1.25} />}
          />
          <ListItem
            label="Inconsistent styling"
            icon={<FolderOpen size={20} strokeWidth={1.25} />}
          />
          <ul className="ml-10">
            <ListItem
              label="Clarification"
              icon={<FolderOpen size={20} strokeWidth={1.25} />}
            />
            <ul className="ml-10">
              <ListItem
                label="Business needs.md"
                icon={<FileText size={20} strokeWidth={1.25} />}
              />
              <ListItem
                label="Customer needs.md"
                icon={<FileText size={20} strokeWidth={1.25} />}
              />
            </ul>
            <ListItem
              label="Research"
              icon={<Folder size={20} strokeWidth={1.25} />}
            />
            <ListItem
              label="Problem identification"
              icon={<Folder size={20} strokeWidth={1.25} />}
            />
            <ListItem
              label="Problem solution"
              icon={<Folder size={20} strokeWidth={1.25} />}
            />
          </ul>
        </ul>
      </div>
      {/* </Sunken> */}
      <EvervaultCard />
    </div>
  );
}

function ListItem({ icon, label }: ListItemProps) {
  return (
    <li className="flex items-center gap-4 px-4 py-2">
      {icon && icon}
      <p>{label}</p>
    </li>
  );
}

export function ToolsIllustration() {
  return (
    <div className="relative flex min-h-88 w-full flex-1 items-center justify-center overflow-hidden bg-slate-100 mask-radial-from-0% mask-radial-at-center dark:bg-neutral-900">
      <div className="z-10 flex h-20 w-20 shrink-0 scale-50 items-center justify-center rounded-full border border-slate-300 bg-slate-50 dark:border-neutral-700 dark:bg-neutral-800">
        <Image
          src="images/slack-light.svg"
          width={32}
          height={32}
          alt="Slack logo"
        />
      </div>
      <div className="z-10 flex h-20 w-20 shrink-0 scale-60 items-center justify-center rounded-full border border-slate-300 bg-slate-50 dark:border-neutral-700 dark:bg-neutral-800">
        <Image
          src="images/miro-light.svg"
          width={32}
          height={32}
          alt="Miro logo"
          className="dark:hidden"
        />
        <Image
          src="images/miro-dark.svg"
          width={32}
          height={32}
          alt="Miro logo"
          className="hidden dark:block"
        />
      </div>
      <div className="z-10 flex h-20 w-20 shrink-0 scale-80 items-center justify-center rounded-full border border-slate-300 bg-slate-50 dark:border-neutral-700 dark:bg-neutral-800">
        <Image
          src="images/jira-light.svg"
          width={32}
          height={32}
          alt="Jira logo"
        />
      </div>

      <div className="z-10 mx-4 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-50 dark:border-neutral-700 dark:bg-neutral-800">
        <Image
          src="images/focus-light.svg"
          width={32}
          height={32}
          alt="Focus logo"
          className="dark:hidden"
        />
        <Image
          src="images/focus-dark.svg"
          width={32}
          height={32}
          alt="Focus logo"
          className="hidden dark:block"
        />
      </div>

      <div className="z-10 flex h-20 w-20 shrink-0 scale-80 items-center justify-center rounded-full border border-slate-300 bg-slate-50 dark:border-neutral-700 dark:bg-neutral-800">
        <Image
          src="images/linear-light.svg"
          width={32}
          height={32}
          alt="Linear logo"
          className="dark:hidden"
        />
        <Image
          src="images/linear-dark.svg"
          width={32}
          height={32}
          alt="Linear logo"
          className="hidden dark:block"
        />
      </div>
      <div className="z-10 flex h-20 w-20 shrink-0 scale-60 items-center justify-center rounded-full border border-slate-300 bg-slate-50 dark:border-neutral-700 dark:bg-neutral-800">
        <Image
          src="images/figma-light.svg"
          width={32}
          height={32}
          alt="Figma logo"
        />
      </div>
      <div className="z-10 flex h-20 w-20 shrink-0 scale-50 items-center justify-center rounded-full border border-slate-300 bg-slate-50 dark:border-neutral-700 dark:bg-neutral-800">
        <Image
          src="images/github-light.svg"
          width={32}
          height={32}
          alt="GitHub logo"
          className="dark:hidden"
        />
        <Image
          src="images/github-dark.svg"
          width={32}
          height={32}
          alt="GitHub logo"
          className="hidden dark:block"
        />
      </div>

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
    </div>
  );
}
