"use client";

import { Bell } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Notification } from "./Notification";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  {
    id: 1,
    title: "New Image Available",
    message: "RHEL 8.6 image has been successfully built and is ready for use.",
    time: "5 minutes ago",
    type: "success" as const,
  },
  {
    id: 2,
    title: "Build Failed",
    message: "Ubuntu 22.04 LTS image build failed. Check logs for details.",
    time: "1 hour ago",
    type: "error" as const,
  },
  {
    id: 3,
    title: "Scheduled Maintenance",
    message: "System maintenance scheduled for tomorrow at 2 AM UTC.",
    time: "2 hours ago",
    type: "info" as const,
  },
];

export function NotificationCenter() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="h-5 w-5" />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center"
            >
              3
            </motion.span>
          </motion.div>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] mt-4">
          <AnimatePresence>
            <div className="space-y-4 pr-4">
              {notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Notification {...notification} />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}