"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  delay?: number;
}

export function StatsCard({ title, value, icon: Icon, change, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
    >
      <Card className="relative overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            delay: delay + 0.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 5
          }}
        />
        
        <div className="p-6 backdrop-blur-sm relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <motion.h3 
                className="text-2xl font-bold"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: delay + 0.1 }}
              >
                {value}
              </motion.h3>
            </div>
            <motion.div 
              className="rounded-full p-2 bg-primary/10 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-6 w-6 text-primary" />
            </motion.div>
          </div>
          <div className="mt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: delay + 0.2 }}
            >
              <span className="text-sm text-green-600 font-medium">{change}</span>
              <span className="text-sm text-muted-foreground"> vs last month</span>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}