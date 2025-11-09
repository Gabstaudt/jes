"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { registerGsap } from "@/lib/anim/gsap";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroFX() {
  const rootRef = useRef<HTMLDivElement|null>(null);
  const leavesRef = useRef<HTMLDivElement|null>(null);
  const circuitsRef = useRef<HTMLDivElement|null>(null);
  const titleRef = useRef<HTMLHeadingElement|null>(null);
  const subtitleRef = useRef<HTMLParagraphElement|null>(null);

  useEffect(() => {
    const gsap = registerGsap();
    const ctx = gsap.context(() => {
      
      gsap.to(".circuit-shimmer", {
        backgroundPositionX: "200%", duration: 6, ease: "none", repeat: -1,
      });

      
      const spans = titleRef.current?.querySelectorAll("span");
      if (spans?.length) {
        gsap.set(spans, { yPercent: 110, opacity: 0, rotateX: -45 });
        gsap.to(spans, {
          yPercent: 0, opacity: 1, rotateX: 0,
          duration: 0.9, ease: "power3.out", stagger: 0.06
        });
      }
      gsap.fromTo(subtitleRef.current, { y: 20, opacity: 0, filter: "blur(8px)" }, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, delay: 0.2, ease: "power3.out" });

      
      gsap.to(leavesRef.current, {
        y: 40, ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true }
      });
      gsap.to(circuitsRef.current, {
        y: -30, ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true }
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const split = (t: string) => t.split("").map((c, i) => <span key={i} className="inline-block will-change-transform">{c === " " ? "\u00A0" : c}</span>);

  return (
    <section ref={rootRef} className="relative min-h-[92vh] flex items-center overflow-hidden">
      <Image src="/1.png" alt="Floresta amazônica em tons azul profundo" fill priority sizes="100vw" className="object-cover" />



      <div ref={leavesRef} className="absolute inset-0 pointer-events-none transition-transform duration-300 hover:scale-[1.01]">
        <Image src="/3.png" alt="Folhagens amazônicas estilizadas" fill sizes="100vw" className="object-cover select-none" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,51,102,0.65),transparent_40%)] md:bg-[linear-gradient(to_right,rgba(0,51,102,0.45),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-24 text-center md:text-left">
        <h1 ref={titleRef} className="text-white drop-shadow-md text-5xl md:text-7xl font-semibold leading-[1.05]">
          {split("2° Jornada de Engenharia de \n   Software")}
        </h1>
        <p ref={subtitleRef} className="mt-4 text-white/90 text-lg md:text-2xl max-w-2xl md:max-w-3xl mx-auto md:mx-0">
          Amazonia Digital:Empoderamento da tecnologia como potencializador da transformação sustentável
        </p>
        <p className="mt-3 text-white/85">24 a 28 de novembro de 2025</p>

        <div className="mt-10 flex items-center gap-4 justify-center md:justify-start">
          <MagneticButton href="/inscricao" ariaLabel="Inscreva-se" className="min-w-[170px]">Inscreva-se</MagneticButton>
          <a href="#lastyear" data-hover className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-white/60 text-white/90 hover:text-white hover:border-white/80 backdrop-blur-sm transition-colors">
            Veja como foi
          </a>
        </div>
      </div>
    </section>
  );
}
