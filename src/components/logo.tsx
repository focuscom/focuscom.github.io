export default function Logo() {
  const coordinates = { x1: 12, y1: 4, x2: 12, y2: 20 };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 stroke-slate-800 group-hover:animate-spin dark:stroke-neutral-200"
      strokeLinecap="round"
      strokeWidth={1.75}
    >
      <line {...coordinates} />
      <line {...coordinates} transform="rotate(45, 12, 12)" />
      <line {...coordinates} transform="rotate(-45, 12, 12)" />
      <line {...coordinates} transform="rotate(90, 12, 12)" />
    </svg>
  );
}
