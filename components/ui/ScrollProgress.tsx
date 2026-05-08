"use client";

import { useScrollProgress } from "@/lib/hooks";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] transition-all duration-75"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--accent) 0%, #a78bfa 50%, var(--gold) 100%)",
      }}
    />
  );
}
