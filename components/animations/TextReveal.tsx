"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function TextReveal({
  children,
  className,
}: TextRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}