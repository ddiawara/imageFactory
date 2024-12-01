"use client";

import { useTheme } from "next-themes";
import { chartConfig } from "./ChartConfig";

export function useChartTheme() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return {
    colors: {
      text: isDark ? "hsl(var(--foreground))" : "hsl(var(--foreground))",
      grid: isDark ? "hsl(var(--border))" : "hsl(var(--border))",
      axis: isDark ? "hsl(var(--border))" : "hsl(var(--border))",
      trend: isDark ? "hsl(var(--primary))" : "hsl(var(--primary))",
      tooltip: {
        background: isDark ? "hsl(var(--popover))" : "hsl(var(--popover))",
        text: isDark ? "hsl(var(--popover-foreground))" : "hsl(var(--popover-foreground))",
      },
    },
    bar: {
      fill: "hsl(var(--primary))",
      radius: chartConfig.bar.radius,
      maxSize: chartConfig.bar.maxSize,
    },
    animation: chartConfig.animation,
    axis: chartConfig.axis,
    grid: chartConfig.grid,
    tooltip: chartConfig.tooltip,
  };
}