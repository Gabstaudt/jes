"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { registerGsap } from "@/lib/anim/gsap";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const gsap = registerGsap();
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.12, wheelMultiplier: 0.9 });

    function raf(t: number) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    
    
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    
    gsap.ticker.lagSmoothing(0);

    return () => { lenis.destroy(); };
  }, []);

  return <>{children}</>;
}
