"use client";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion, useMotionValue } from "motion/react";

export const EvervaultCard = () => {
  const mouseX = useMotionValue(100);
  const mouseY = useMotionValue(100);
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(3000);
    setRandomString(str);
  }, []);

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(3000);
    setRandomString(str);
  }

  return (
    <div
      className="group/card absolute inset-0 w-full overflow-hidden mask-t-from-80% mask-b-from-80%"
      onMouseMove={onMouseMove}
    >
      <motion.div
        // className="opacity-0 group-hover/card:opacity-100"
        style={style}
      >
        <p className="font-mono text-xs font-bold break-words whitespace-pre-wrap text-slate-300 transition duration-500 group-hover/card:text-slate-400 dark:text-neutral-700 dark:group-hover/card:text-neutral-600">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
};

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
