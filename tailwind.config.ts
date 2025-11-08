import type { Config } from "tailwindcss";


const config: Config = {
content: [
"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
extend: {
colors: {
jes: {
azulProfundo: "#003366",
verdeAmazonico: "#27978E",
verdeDigital: "#00C7A9",
cinzaEscuro: "#1E1E1E",
branco: "#FFFFFF",
},
},
boxShadow: {
jesGlow: "0 0 24px 0 rgba(0, 199, 169, 0.6)",
jesSoft: "0 8px 24px rgba(0,0,0,0.15)",
},
borderRadius: {
xl: "1rem",
'2xl': "1.25rem",
},
backdropBlur: {
xs: '1px',
},
},
},
plugins: [],
};
export default config;