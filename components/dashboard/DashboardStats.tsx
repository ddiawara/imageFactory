"use client";

import { Image, Server, Clock, Activity } from "lucide-react";
import { StatsCard } from "./StatsCard";
import { OsDistributionChart } from "./OsDistributionChart";

const stats = [
  {
    title: "Total Images",
    value: "127",
    icon: Image,
    change: "+12%",
  },
  {
    title: "Active Builds",
    value: "8",
    icon: Server,
    change: "+3%",
  },
  {
    title: "Scheduled Jobs",
    value: "24",
    icon: Clock,
    change: "+18%",
  },
  {
    title: "Success Rate",
    value: "98.5%",
    icon: Activity,
    change: "+2.1%",
  },
];

export function DashboardStats() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={stat.title} {...stat} delay={index * 0.1} />
        ))}
      </div>
      <OsDistributionChart />
    </div>
  );
}