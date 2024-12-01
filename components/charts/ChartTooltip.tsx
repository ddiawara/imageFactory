"use client";

import { useChartTheme } from "./useChartTheme";
import { motion } from "framer-motion";

interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  valueLabel?: string;
  showTrend?: boolean;
  trendKey?: string;
}

export function ChartTooltip({
  active,
  payload,
  label,
  valueLabel = "value",
  showTrend = false,
  trendKey,
}: ChartTooltipProps) {
  const theme = useChartTheme();

  if (!active || !payload?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-popover/95 p-4 rounded-lg shadow-lg border backdrop-blur-sm"
      style={{ backgroundColor: theme.colors.tooltip.background }}
    >
      <p className="text-base font-medium mb-1">{label}</p>
      <p className="text-lg font-bold">
        {`${payload[0].value} ${valueLabel}`}
      </p>
      {showTrend && trendKey && (
        <p className="text-sm text-green-600 mt-1">
          {`Trend: ${payload[0].payload[trendKey]}`}
        </p>
      )}
    </motion.div>
  );
}