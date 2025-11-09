"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement|null>(null);
  const ring = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    const d = dot.current!, r = ring.current!;
    let x = 0, y = 0, rx = 0, ry = 0;

    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; d.style.transform = `translate(${x}px, ${y}px)`; };
    const raf = () => { rx += (x - rx) * 0.15; ry += (y - ry) * 0.15; r.style.transform = `translate(${rx}px, ${ry}px)`; requestAnimationFrame(raf); };
    window.addEventListener("mousemove", move, { passive: true });
    requestAnimationFrame(raf);

    const hoverables = "a, button, [data-hover], [role='button']";
    const onEnter = () => r.classList.add("scale-150", "opacity-90");
    const onLeave = () => r.classList.remove("scale-150", "opacity-90");
    document.querySelectorAll(hoverables).forEach(el => {
      el.addEventListener("mouseenter", onEnter); el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll(hoverables).forEach(el => {
        el.removeEventListener("mouseenter", onEnter); el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/60 mix-blend-difference opacity-60 transition-transform duration-200 z-[9999]" />
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white mix-blend-difference z-[9999]" />
    </>
  );
}
