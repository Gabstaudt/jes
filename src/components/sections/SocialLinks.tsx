"use client";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";


const socials = [
{ name: "Instagram", href: "#", Icon: Instagram },
{ name: "LinkedIn", href: "#", Icon: Linkedin },
{ name: "YouTube", href: "#", Icon: Youtube },
];


export default function SocialLinks() {
return (
<section className="mx-auto max-w-6xl px-4 md:px-6 py-16">
<div className="grid md:grid-cols-3 gap-6">
{socials.map(({ name, href, Icon }, i) => (
<motion.a
key={name}
href={href}
aria-label={`${name} da JES`}
initial={{ opacity: 0, y: 15, filter: "blur(3px)" }}
whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.45, delay: i * 0.05 }}
whileHover={{ scale: 1.02 }}
className="rounded-2xl p-6 bg-white shadow-jesSoft hover:shadow-jesGlow text-jes-azulProfundo flex items-center gap-3"
>
<Icon aria-hidden className="shrink-0" />
<span className="font-medium">{name}</span>
</motion.a>
))}
</div>
</section>
);
}