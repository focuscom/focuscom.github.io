import { ReactNode } from "react";
import Dot from "./dot";

interface ContainerProps {
  children?: ReactNode;
  showCorners?: boolean;
}

export default function Container({
  children,
  showCorners = true,
}: ContainerProps) {
  return (
    <div className="relative mx-0 max-w-6xl sm:mx-10 sm:border-x sm:border-dashed sm:border-slate-300 md:mx-10 xl:mx-auto dark:border-neutral-700">
      {children}
      {showCorners && (
        <>
          <Dot className="absolute bottom-[-8px] left-[-8px]" />
          <Dot className="absolute right-[-8px] bottom-[-8px]" />
        </>
      )}
    </div>
  );
}
