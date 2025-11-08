"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";


export default function Header() {
return (
<header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xs border-b border-black/5">
<nav className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
<Link href="/" className="font-semibold tracking-tight text-jes-azulProfundo">JES 2025</Link>
<div className="flex items-center gap-4">
<Link href="#keynotes" className="text-sm text-neutral-700 hover:text-jes-azulProfundo">Keynotes</Link>
<Link href="#speakers" className="text-sm text-neutral-700 hover:text-jes-azulProfundo">Palestrantes</Link>
<Link href="#lastyear" className="text-sm text-neutral-700 hover:text-jes-azulProfundo">Veja como foi</Link>
<Link href="/inscricao" className="text-sm text-neutral-700 hover:text-jes-azulProfundo">Inscreva-se</Link>
<div className="ml-2 flex items-center gap-3">
<motion.a href="#" aria-label="Instagram da JES" whileHover={{ scale: 1.1 }} className="text-jes-azulProfundo"><Instagram size={18} /></motion.a>
<motion.a href="#" aria-label="LinkedIn da JES" whileHover={{ scale: 1.1 }} className="text-jes-azulProfundo"><Linkedin size={18} /></motion.a>
<motion.a href="#" aria-label="YouTube da JES" whileHover={{ scale: 1.1 }} className="text-jes-azulProfundo"><Youtube size={18} /></motion.a>
</div>
</div>
</nav>
</header>
);
}