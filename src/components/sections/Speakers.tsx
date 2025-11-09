"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { SPEAKERS } from "@/lib/content/speakers";

export default function Speakers() {
  return (
    <section id="speakers" className="mx-auto max-w-6xl px-4 md:px-6 py-16">
      <SectionTitle
        title="Palestrantes & Convidados"
        subtitle="Diversidade de trilhas e experiências"
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SPEAKERS.map((s, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.03 }}
            className="rounded-2xl overflow-hidden bg-white shadow-jesSoft hover:shadow-jesGlow transition-all hover:-translate-y-0.5"
          >
            <div className="relative h-48">
              <Image
                src={s.photo}
                alt={`Foto de ${s.name}`}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-jes-azulProfundo">{s.name}</h3>
              <p className="text-sm text-neutral-700">{s.role}</p>
              {s.track && (
                <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-jes-verdeAmazonico/10 text-jes-verdeAmazonico">
                  {s.track}
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}