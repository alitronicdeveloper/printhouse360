"use client";

import { useEffect, useState } from "react";

export default function TextRotator({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % texts.length), 2500);
    return () => clearInterval(t);
  }, [texts.length]);

  return (
    <div className="relative h-[1.15em] overflow-hidden">
      {texts.map((text, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            i === index
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
