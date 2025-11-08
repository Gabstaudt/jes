"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";


const thumbs = Array.from({ length: 8 }).map((_, i) => ({
src: `/jes/2025/lastyear/${i + 1}.jpg`,
alt: `Foto ${i + 1} do evento JES 2024`,
}));


export default function LastYear() {
return (
<section id="lastyear" className="mx-auto max-w-6xl px-4 md:px-6 py-16">
<SectionTitle title="Veja como foi" subtitle="Momentos marcantes da edição anterior" />


<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-jesSoft">
<iframe
className="absolute inset-0 w-full h-full"
src="https://www.youtube.com/embed/dQw4w9WgXcQ" /* substitua por [URL_DO_ANO_PASSADO] */
title="JES 2024 — melhores momentos"
loading="lazy"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowFullScreen
/>
</div>


<div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
{thumbs.map((t, i) => (
<motion.div
key={t.src}
initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.4, delay: i * 0.03 }}
className="relative aspect-[4/3] rounded-xl overflow-hidden"
>
<Image src={t.src} alt={t.alt} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
</motion.div>
))}
</div>
</section>
);
}