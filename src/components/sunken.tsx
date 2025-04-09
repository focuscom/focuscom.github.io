import { cn } from "@/lib/utils";

interface SunkenProps {
  children: React.ReactNode;
  className?: string;
}

export default function Sunken({ children, className }: SunkenProps) {
  return (
    <div className={cn("bg-slate-200 p-2 dark:bg-neutral-800", className)}>
      {children}
    </div>
  );
}
