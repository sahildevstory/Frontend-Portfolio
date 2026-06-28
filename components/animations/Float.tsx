"use client";

import { motion } from "framer-motion";

interface FloatProps {
  children: React.ReactNode;
  className?: string;
}

export default function Float({
  children,
  className,
}: FloatProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}