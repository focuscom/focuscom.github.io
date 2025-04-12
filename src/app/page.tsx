import Hero from "./components/hero";
import SimplicityVersions from "./components/simplicity-versions";
import Priorities from "./components/priorities";
import CTA from "./components/cta";
// import Pricing from "./sections/pricing";
// import Versions from "./sections/versions";
// import Presentation from "./sections/presentation";
// import Progress from "./sections/progress";
import ToolsSecurity from "./components/tools-security";

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
