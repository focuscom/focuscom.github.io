import Hero from "./sections/hero";
import SimplicityVersions from "./sections/simplicity-versions";
import Priorities from "./sections/priorities";
import CTA from "./sections/cta";
// import Pricing from "./sections/pricing";
// import Versions from "./sections/versions";
// import Presentation from "./sections/presentation";
// import Progress from "./sections/progress";
import ToolsSecurity from "./sections/tools-security";

export default function Home() {
  return (
    <main className="divide-y divide-dashed divide-slate-300 dark:divide-neutral-700">
      <Hero />
      <Priorities />
      <SimplicityVersions />
      <ToolsSecurity />
      {/* <Progress /> */}
      {/* <Presentation /> */}
      {/* <Pricing /> */}
      <CTA />
    </main>
  );
}
