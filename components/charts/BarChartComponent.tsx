"use client";

import {
  BarChart,
  Bar as RechartsBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "./ChartContainer";
import { ChartTooltip } from "./ChartTooltip";
import { useChartTheme } from "./useChartTheme";
import { BaseChartProps } from "./types";
import { CustomizedAxisTick } from "./CustomizedAxisTick";
import { motion, AnimatePresence } from "framer-motion";

interface EnhancedBaseChartProps extends BaseChartProps {
  showTrends?: boolean;
  trendKey?: string;
}

export function BarChartComponent({
  data,
  dataKey,
  xAxisKey = "name",
  height = 300,
  className,
  showTrends = false,
  trendKey,
}: EnhancedBaseChartProps) {
  const theme = useChartTheme();

  const chartData = data.map((item) => ({
    ...item,
    value: item[dataKey],
  }));

  return (
    <ChartContainer height={height} className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={chartData} 
          margin={{ top: 10, right: 30, left: 40, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={theme.colors.grid}
            vertical={false}
          />
          <XAxis
            dataKey={xAxisKey}
            tick={<CustomizedAxisTick fill={theme.colors.text} />}
            tickLine={false}
            axisLine={{ stroke: theme.colors.axis }}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            tick={<CustomizedAxisTick fill={theme.colors.text} />}
            tickLine={false}
            axisLine={{ stroke: theme.colors.axis }}
            width={40}
            label={{
              value: "Number of Images",
              angle: -90,
              position: "insideLeft",
              style: { textAnchor: 'middle', fill: theme.colors.text }
            }}
          />
          <Tooltip
            content={({ active, payload, label }) => (
              <ChartTooltip
                active={active}
                payload={payload}
                label={label}
                valueLabel="images"
                showTrend={showTrends}
                trendKey={trendKey}
              />
            )}
          />
          <RechartsBar
            dataKey="value"
            fill={theme.bar.fill}
            radius={theme.bar.radius}
            maxBarSize={theme.bar.maxSize}
            isAnimationActive={true}
            animationDuration={1000}
            animationBegin={0}
          >
            {showTrends && (
              <AnimatePresence>
                {chartData.map((entry, index) => (
                  <motion.g
                    key={`trend-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <text
                      x={`${(index + 0.5) * (100 / chartData.length)}%`}
                      y={height - 40}
                      textAnchor="middle"
                      fill={theme.colors.trend}
                      fontSize={12}
                      className="chart-trend-label"
                    >
                      {entry[trendKey || '']}
                    </text>
                  </motion.g>
                ))}
              </AnimatePresence>
            )}
          </RechartsBar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}