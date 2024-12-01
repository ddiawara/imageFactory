"use client";

import { Bar as RechartsBar } from "recharts";
import { useChartTheme } from "./useChartTheme";

interface BarProps {
  dataKey: string;
}

export function Bar({ dataKey }: BarProps) {
  const theme = useChartTheme();
  
  return (
    <RechartsBar
      dataKey={dataKey}
      fill={theme.bar.fill}
      radius={theme.bar.radius}
      maxBarSize={theme.bar.maxSize}
      isAnimationActive={false}
    />
  );
}