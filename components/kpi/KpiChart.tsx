"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChartComponent } from "../charts/BarChartComponent";

const mockData = {
  daily: [
    { name: "Mon", value: 85, trend: "+5%" },
    { name: "Tue", value: 92, trend: "+2%" },
    { name: "Wed", value: 88, trend: "-1%" },
    { name: "Thu", value: 95, trend: "+4%" },
    { name: "Fri", value: 90, trend: "-2%" },
  ],
  weekly: [
    { name: "Week 1", value: 89, trend: "+3%" },
    { name: "Week 2", value: 91, trend: "+2%" },
    { name: "Week 3", value: 87, trend: "-4%" },
    { name: "Week 4", value: 93, trend: "+6%" },
  ],
  monthly: [
    { name: "Jan", value: 88, trend: "+2%" },
    { name: "Feb", value: 90, trend: "+2%" },
    { name: "Mar", value: 92, trend: "+2%" },
    { name: "Apr", value: 89, trend: "-3%" },
  ],
};

export function KpiChart() {
  const [period, setPeriod] = useState<keyof typeof mockData>("daily");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Build Success Rate Trend</h3>
        <Select value={period} onValueChange={(value: keyof typeof mockData) => setPeriod(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="p-6">
        <BarChartComponent
          data={mockData[period]}
          dataKey="value"
          height={300}
          showTrends
          trendKey="trend"
        />
      </Card>
    </div>
  );
}