export type Keynote = {
name: string;
role: string;
photo: string; // path em /public ou URL
topic?: string;
link?: string;
};


export const KEYNOTES: Keynote[] = [
{ name: "Keynote 1", role: "Pesquisadora em IA Sustentável", photo: "/jes/2025/keynotes/k1.jpg", topic: "Green AI & Amazônia Digital" },
{ name: "Keynote 2", role: "Arquiteto de Software", photo: "/jes/2025/keynotes/k2.jpg", topic: "RegTech & Compliance Ambiental" },
{ name: "Keynote 3", role: "Líder DevOps", photo: "/jes/2025/keynotes/k3.jpg", topic: "MLOps sustentável na prática" },
];