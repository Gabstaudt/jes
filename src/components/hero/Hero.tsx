"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";
import { useRef } from "react";


export default function Hero() {
const ref = useRef<HTMLDivElement | null>(null);
const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
const y = useTransform(scrollYProgress, [0, 1], [-10, 10]);


return (
<section ref={ref} className="relative min-h-[78vh] md:min-h-[86vh] flex items-center">
<Image
src="/jes/2025/1.png"
alt="Floresta amazônica ao entardecer com tonalidade azul profundo"
fill
priority
sizes="100vw"
className="object-cover"
/>


<Image
src="/jes/2025/2.png"
alt="Overlay de circuitos em padrão tecnológico"
fill
sizes="100vw"
className="object-cover mix-blend-screen opacity-45 pointer-events-none blur-[1px]"
/>


<div className="absolute inset-0 bg-gradient-to-b from-jes-azulProfundo/70 via-transparent to-transparent md:bg-gradient-to-r md:from-jes-azulProfundo/40" />


<motion.div style={{ y }} whileHover={{ scale: 1.02, rotateZ: 0.2 }} className="absolute inset-0">
<Image
src="/jes/2025/3.png"
alt="Folhagens amazônicas estilizadas"
fill
sizes="100vw"
className="object-cover pointer-events-none select-none"
/>
</motion.div>


<div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-24 text-center">
<h1 className="text-white drop-shadow text-4xl md:text-6xl font-semibold [font-family:var(--font-display)]">Amazônia Digital</h1>
<p className="mt-4 text-white/90 text-lg md:text-xl max-w-3xl mx-auto">Empoderamento da tecnologia como potencializador da transformação sustentável</p>
<p className="mt-3 text-white/85">24–28 de novembro de 2025</p>
<div className="mt-8 flex items-center justify-center gap-4">
<Button href="/inscricao" external className="min-w-[160px]" ariaLabel="Inscreva-se">Inscreva-se</Button>
</div>
</div>
</section>
);
}