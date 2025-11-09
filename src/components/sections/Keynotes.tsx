"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { KEYNOTES } from "@/lib/content/keynotes";

export default function Keynotes() {
  return (
    <section id="keynotes" className="mx-auto max-w-6xl px-4 md:px-6 py-16">
      <SectionTitle
        title="Keynotes"
        subtitle="Lideranças que inspiram a transformação sustentável"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {KEYNOTES.map((k, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl overflow-hidden bg-white shadow-jesSoft hover:shadow-jesGlow transition-shadow"
          >
            <div className="relative h-56">
              <Image
                src={k.photo}
                alt={`Foto de ${k.name}`}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-jes-azulProfundo">
                {k.name}
              </h3>
              <p className="text-sm text-neutral-700">{k.role}</p>
              {k.topic && (
                <p className="mt-2 text-sm text-neutral-800">{k.topic}</p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}