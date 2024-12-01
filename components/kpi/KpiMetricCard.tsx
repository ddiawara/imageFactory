"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface KpiMetricCardProps {
  title: string;
  value: string;
  trend: string;
  description: string;
  type: "success" | "warning" | "info";
}

const colors = {
  success: "text-green-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
};

const backgrounds = {
  success: "bg-green-500/10",
  warning: "bg-yellow-500/10",
  info: "bg-blue-500/10",
};

export function KpiMetricCard({
  title,
  value,
  trend,
  description,
  type,
}: KpiMetricCardProps) {
  const isPositive = trend.startsWith("+");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`${backgrounds[type]} p-6 relative overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
          animate={{
            x: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="relative">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-medium text-sm text-muted-foreground">{title}</h3>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`${colors[type]} p-2 rounded-full bg-background/50`}
            >
              <Activity className="w-4 h-4" />
            </motion.div>
          </div>
          
          <div className="space-y-2">
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center gap-2">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span className={isPositive ? "text-green-500" : "text-red-500"}>
                {trend}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}