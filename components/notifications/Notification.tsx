"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Info } from "lucide-react";
import { Card } from "@/components/ui/card";

interface NotificationProps {
  title: string;
  message: string;
  time: string;
  type: "success" | "error" | "info";
}

const icons = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

const colors = {
  success: "text-green-500 dark:text-green-400",
  error: "text-red-500 dark:text-red-400",
  info: "text-blue-500 dark:text-blue-400",
};

const backgrounds = {
  success: "bg-green-500/10",
  error: "bg-red-500/10",
  info: "bg-blue-500/10",
};

export function Notification({ title, message, time, type }: NotificationProps) {
  const Icon = icons[type];

  return (
    <Card className={`${backgrounds[type]} border-none shadow-lg`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex gap-4 p-4 rounded-lg"
      >
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className={`h-5 w-5 mt-1 ${colors[type]}`} />
        </motion.div>
        <div className="space-y-1">
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{message}</p>
          <p className="text-xs text-muted-foreground">{time}</p>
        </div>
      </motion.div>
    </Card>
  );
}