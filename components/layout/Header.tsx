"use client";

import { ModeToggle } from "@/components/theme/ModeToggle";
import { Image } from "lucide-react";
import { UserNav } from "./UserNav";
import { NotificationCenter } from "../notifications/NotificationCenter";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image className="h-6 w-6" />
          <span className="text-xl font-bold">ImageFactory</span>
        </div>
        
        <div className="flex items-center gap-4">
          <NotificationCenter />
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}