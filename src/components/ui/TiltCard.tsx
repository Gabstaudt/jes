"use client";
import { useRef } from "react";
import clsx from "clsx";

export default function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement|null>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-py*8).toFixed(2)}deg) rotateY(${(px*10).toFixed(2)}deg) translateZ(0)`;
    const glare = el.querySelector<HTMLDivElement>(".glare");
    if (glare) {
      const angle = Math.atan2(e.clientY - (r.top + r.height/2), e.clientX - (r.left + r.width/2));
      const deg = (angle * 180) / Math.PI + 180;
      glare.style.background = `linear-gradient(${deg}deg, rgba(255,255,255,0.35), transparent 60%)`;
    }
  }
  function onLeave() {
    const el = ref.current; if (!el) return;
    el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
    const glare = el.querySelector<HTMLDivElement>(".glare");
    if (glare) glare.style.background = `linear-gradient(0deg, rgba(255,255,255,0.0), transparent 60%)`;
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={clsx(
        "relative will-change-transform transition-transform duration-150",
        "rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_34px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      <div className="glare pointer-events-none absolute inset-0 rounded-2xl opacity-80 mix-blend-overlay" />
      {children}
    </div>
  );
}
