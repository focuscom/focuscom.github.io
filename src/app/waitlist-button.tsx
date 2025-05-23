"use client";

import posthog from "posthog-js";

export default function WaitlistButton() {
  function clickHandler() {
    posthog.capture("waitlist form opened");
  }

  return (
    <a
      onClick={clickHandler}
      className="inline-block rounded bg-slate-800 px-3 py-2 text-slate-100 hover:bg-slate-700 active:bg-slate-500 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-100 dark:active:bg-neutral-300"
      href="https://tally.so/r/3NPjqb"
    >
      Join Waitlist
    </a>
  );
}
