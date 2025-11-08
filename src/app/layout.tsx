import type { Metadata } from "next";
import "../../styles/globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";


const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-poppins" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-display" });


// Se tiver os arquivos da Hatton, descomente e ajuste os paths:
// const hatton = localFont({
// src: [
// { path: "/public/fonts/Hatton/Hatton-Regular.woff2", weight: "400" },
// { path: "/public/fonts/Hatton/Hatton-Medium.woff2", weight: "500" },
// { path: "/public/fonts/Hatton/Hatton-Bold.woff2", weight: "700" },
// ],
// variable: "--font-hatton",
// });


export const metadata: Metadata = {
title: "JES 2025 — Amazônia Digital",
description: "Amazônia Digital — Empoderamento da tecnologia como potencializador da transformação sustentável.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="pt-BR" className={`${poppins.variable} ${playfair.variable}`}>
<body className="min-h-screen bg-white">
{children}
</body>
</html>
);
}