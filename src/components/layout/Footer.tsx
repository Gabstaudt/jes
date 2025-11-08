import Link from "next/link";


export default function Footer() {
return (
<footer className="mt-20 border-t border-black/5">
<div className="mx-auto max-w-6xl px-4 md:px-6 py-10 grid gap-6 md:grid-cols-3">
<div>
<h4 className="font-semibold text-jes-azulProfundo">JES 2025</h4>
<p className="text-sm text-neutral-700 mt-2">Amazônia Digital — Empoderamento da tecnologia como potencializador da transformação sustentável.</p>
</div>
<div>
<h5 className="font-semibold text-neutral-900">Links</h5>
<ul className="mt-2 space-y-1 text-sm">
<li><Link href="#keynotes">Keynotes</Link></li>
<li><Link href="#speakers">Palestrantes</Link></li>
<li><Link href="#lastyear">Veja como foi</Link></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-neutral-900">Contato</h5>
<p className="text-sm text-neutral-700 mt-2">Organização JES — UEPA</p>
</div>
</div>
<div className="py-4 text-center text-xs text-neutral-600">© {new Date().getFullYear()} JES. Todos os direitos reservados.</div>
</footer>
);
}