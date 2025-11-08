"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";


type Props = {
href?: string;
onClick?: () => void;
children: React.ReactNode;
className?: string;
external?: boolean;
ariaLabel?: string;
};


export default function Button({ href, onClick, children, className, external, ariaLabel }: Props) {
const core = (
<motion.button
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
className={clsx(
"inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium",
"bg-jes-verdeDigital text-white shadow-jesSoft",
"transition-shadow hover:shadow-jesGlow",
className
)}
aria-label={ariaLabel}
onClick={onClick}
>
{children}
</motion.button>
);


if (href) {
return external ? (
<Link href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>{core}</Link>
) : (
<Link href={href} aria-label={ariaLabel}>{core}</Link>
);
}
return core;
}