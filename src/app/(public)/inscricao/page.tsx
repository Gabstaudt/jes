import Button from "@/src/components/ui/Button";


export default function InscricaoPage() {
return (
<section className="mx-auto max-w-3xl px-4 md:px-6 py-24 text-center">
<h1 className="text-3xl md:text-4xl font-semibold text-jes-azulProfundo">Inscrições</h1>
<p className="mt-3 text-neutral-700">Clique no botão abaixo para ir para a página oficial de inscrições no Even3.</p>
<div className="mt-8">
{/* TROQUE href PELO [LINK_EVEN3] */}
<Button href="#" external ariaLabel="Abrir página de inscrição no Even3">Ir para o Even3</Button>
</div>
</section>
);
}