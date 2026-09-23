"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

export function Reveal({
  children,
  from = "left",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate = from === "left" ? (isMobile ? "-40px" : "-100px") : (isMobile ? "40px" : "100px");
  const rotate = isMobile ? "0deg" : (from === "left" ? "-3deg" : "3deg");

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible ? "translateX(0) rotate(0deg)" : `translateX(${translate}) rotate(${rotate})`,
        opacity: visible ? 1 : 0,
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

export function VibrateBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [hovering, setHovering] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Kwa simu — hakuna vibrate
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  return (
    <div
      onMouseEnter={() => canHover && setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        if (canHover) {
          // Reset transform on leave
        }
      }}
      className={`relative transition-transform duration-300 ${className}`}
      style={canHover ? { perspective: "1000px", transformStyle: "preserve-3d" } : undefined}
      onMouseMove={(e) => {
        if (!canHover) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotY = ((x - cx) / cx) * 6;
        const rotX = ((cy - y) / cy) * 6;
        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`;
      }}
    >
      {children}
    </div>
  );
}
