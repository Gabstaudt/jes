"use client";
const logos = ["/jes/2025/logos/1.svg","/jes/2025/logos/2.svg","/jes/2025/logos/3.svg","/jes/2025/logos/4.svg"];

export default function SupportersMarquee() {
  return (
    <section className="py-12 bg-gradient-to-b from-jes-azulProfundo/6 to-transparent">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-16 animate-[marquee_18s_linear_infinite]">
          {logos.concat(logos).map((src, i) => (
            <img key={i} src={src} alt="Apoiador JES" className="h-10 opacity-80" />
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
