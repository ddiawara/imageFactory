"use client";

import { Card } from "@/components/ui/card";
import { BarChartComponent } from "@/components/charts/BarChartComponent";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChartPeriodSelect } from "@/components/charts/ChartPeriodSelect";

const mockDataByPeriod = {
  "7d": [
    { name: "RHEL", images: 45, trend: "+5" },
    { name: "Ubuntu", images: 32, trend: "+3" },
    { name: "CentOS", images: 28, trend: "+2" },
    { name: "Amazon Linux", images: 22, trend: "+4" },
  ],
  "30d": [
    { name: "RHEL", images: 180, trend: "+15" },
    { name: "Ubuntu", images: 145, trend: "+12" },
    { name: "CentOS", images: 120, trend: "+8" },
    { name: "Amazon Linux", images: 95, trend: "+10" },
  ],
  "90d": [
    { name: "RHEL", images: 520, trend: "+45" },
    { name: "Ubuntu", images: 480, trend: "+38" },
    { name: "CentOS", images: 380, trend: "+25" },
    { name: "Amazon Linux", images: 320, trend: "+28" },
  ],
};

type Period = "7d" | "30d" | "90d";

export function OsDistributionChart() {
  const [period, setPeriod] = useState<Period>("7d");
  const [showTrends, setShowTrends] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="p-6 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <motion.h3 
              className="text-lg font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Images by OS Family
            </motion.h3>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowTrends(!showTrends)}
                className="hover:bg-primary/10"
              >
                {showTrends ? "Hide Trends" : "Show Trends"}
              </Button>
              <ChartPeriodSelect value={period} onValueChange={(v) => setPeriod(v as Period)} />
            </div>
          </div>
          
          <BarChartComponent
            data={mockDataByPeriod[period]}
            dataKey="images"
            height={300}
            className="mt-4"
            showTrends={showTrends}
            trendKey="trend"
          />

          <div className="grid grid-cols-4 gap-4 mt-6">
            {mockDataByPeriod[period].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <p className="text-sm font-medium text-muted-foreground">{item.name}</p>
                  <p className="text-2xl font-bold">{item.images}</p>
                  <p className="text-sm text-green-600 mt-1 font-medium">
                    {item.trend} new
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}