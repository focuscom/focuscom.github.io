import { Asterisk } from "lucide-react";
import { ReactNode } from "react";

interface FrameProps {
  children: ReactNode;
  showCorners?: boolean;
}

export default function Frame({ children, showCorners = true }: FrameProps) {
  return (
    <div className="relative mx-10 max-w-6xl border-x border-dashed border-slate-300 p-4 xl:mx-auto dark:border-neutral-700">
      {children}
      {showCorners && (
        <>
          <div className="absolute bottom-[-8px] left-[-8px] z-10 flex h-4 w-4 items-center justify-center rounded-full border border-dashed border-slate-300 bg-slate-100 text-slate-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-500">
            <Asterisk />
          </div>
          <div className="dark: absolute right-[-8px] bottom-[-8px] z-10 flex h-4 w-4 items-center justify-center rounded-full border border-dashed border-slate-300 bg-slate-100 text-slate-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-500">
            <Asterisk />
          </div>
        </>
      )}
    </div>
  );
}
