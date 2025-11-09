"use client";
import { useRef } from "react";
import clsx from "clsx";

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export default function MagneticButton({ children, className, href, onClick, ariaLabel }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement|null>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width/2);
    const y = e.clientY - (r.top + r.height/2);
    el.style.transform = `translate(${x*0.15}px, ${y*0.15}px)`;
  }
  function onLeave() { const el = ref.current; if (el) el.style.transform = `translate(0,0)`; }

  const core = (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx(
        "relative inline-flex items-center justify-center px-7 py-3 rounded-2xl font-medium",
        "bg-jes-verdeDigital text-white transition-all duration-300",
        "shadow-[0_0_0_0_rgba(0,199,169,0.0)] hover:shadow-[0_0_24px_0_rgba(0,199,169,0.6)]",
        "outline-none focus-visible:ring-2 focus-visible:ring-jes-verdeDigital",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(0,199,169,0.35),transparent_55%)] pointer-events-none" />
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="inline-block">
        {core}
      </a>
    );
  }
  return core;
}
