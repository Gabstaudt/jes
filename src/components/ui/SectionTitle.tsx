import clsx from "clsx";


export default function SectionTitle({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) {
return (
<div className={clsx("max-w-4xl mx-auto text-center mb-10", className)}>
<h2 className="text-3xl md:text-4xl font-semibold text-jes-azulProfundo">{title}</h2>
{subtitle && <p className="mt-3 text-neutral-700">{subtitle}</p>}
</div>
);
}