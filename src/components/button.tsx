interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded bg-accent-900 px-3 py-1 text-accent-50 hover:bg-accent-700 active:bg-accent-500">
      {children}
    </button>
  );
}
