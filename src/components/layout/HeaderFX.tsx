"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { registerGsap } from "@/lib/anim/gsap";

const links = [
  { name: "Keynotes", href: "#keynotes" },
  { name: "Palestrantes", href: "#speakers" },
  { name: "Veja como foi", href: "#lastyear" },
  { name: "Inscreva-se", href: "/inscricao" },
];

export default function HeaderFX() {
  const [scrolled, setScrolled] = useState(false);
  const underlineRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const gsap = registerGsap();
    const anchors = document.querySelectorAll<HTMLAnchorElement>("nav a[data-uf]");
    anchors.forEach((a) => {
      a.addEventListener("mouseenter", () => {
        const r = a.getBoundingClientRect();
        gsap.to(underlineRef.current, {
          x: r.left + r.width / 2,
          width: r.width * 0.5,
          duration: 0.28,
          ease: "power3.out",
        });
      });
      a.addEventListener("mouseleave", () =>
        gsap.to(underlineRef.current, { width: 0, duration: 0.25 })
      );
    });
  }, []);

  const linkCls = scrolled
    ? "text-neutral-800 hover:text-jes-azulProfundo"
    : "text-white hover:text-white/90 drop-shadow";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? "bg-white/75 backdrop-blur-md shadow-[0_6px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={scrolled ? "/logo-escura.png" : "/logo-clara.png"}
            alt="Logo da Jornada de Engenharia de Software 2025"
            width={120}
            height={40}
            priority
            className="object-contain w-auto h-8 md:h-9 transition-transform duration-300 hover:scale-[1.04]"
          />
        </Link>

        <div className="relative hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-uf
              className={`nav-link uf-underline text-sm transition-colors ${linkCls}`}
            >
              {l.name}
            </Link>
          ))}

          <span
            ref={underlineRef}
            className="pointer-events-none absolute -bottom-1 left-0 block h-[2px] w-0 bg-jes-verdeDigital rounded-full"
          />
        </div>
      </nav>

      <style jsx global>{`
        .uf-underline {
          position: relative;
        }
        .uf-underline::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 2px;
          width: 0%;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            var(--color-jes-verdeDigital, #00C7A9),
            #37e6cf,
            var(--color-jes-verdeAmazonico, #27978E),
            var(--color-jes-azulProfundo, #003366)
          );
          background-size: 200% 100%;
          transition: width 260ms ease, opacity 200ms ease;
          opacity: 0.9;
        }
        .uf-underline:hover::after,
        .uf-underline:focus-visible::after {
          width: 100%;
          animation: uf-gradient-move 1.2s linear infinite;
        }
        @keyframes uf-gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </header>
  );
}
