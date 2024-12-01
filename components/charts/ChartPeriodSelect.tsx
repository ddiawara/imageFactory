"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChartPeriodSelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function ChartPeriodSelect({ value, onValueChange }: ChartPeriodSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select period" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="7d">Last 7 days</SelectItem>
        <SelectItem value="30d">Last 30 days</SelectItem>
        <SelectItem value="90d">Last 90 days</SelectItem>
      </SelectContent>
    </Select>
  );
}