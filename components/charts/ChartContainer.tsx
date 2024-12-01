"use client";

import { motion } from "framer-motion";
import { ChartContainerProps } from "./types";

export function ChartContainer({ children, height = 300, className }: ChartContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      style={{ height }}
    >
      {children}
    </motion.div>
  );
}