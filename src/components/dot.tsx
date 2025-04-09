import { cn } from "@/lib/utils";
import { Asterisk } from "lucide-react";

interface DotProps {
  className?: string;
}

export default function Dot({ className }: DotProps) {
  return (
    <div
      className={cn(
        "z-10 hidden h-4 w-4 items-center justify-center rounded-full border border-dashed border-slate-300 bg-slate-100 text-slate-400 sm:flex dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-500",
        className,
      )}
    >
      <Asterisk className="hover:animate-spin" />
    </div>
  );
}
