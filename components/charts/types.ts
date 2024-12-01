"use client";

import { ReactNode } from "react";

export interface ChartDataPoint {
  name: string;
  value: number;
  trend?: string;
  [key: string]: any;
}

export interface BaseChartProps {
  data: ChartDataPoint[];
  dataKey: string;
  xAxisKey?: string;
  height?: number;
  className?: string;
}

export interface ChartContainerProps {
  children: ReactNode;
  height?: number;
  className?: string;
}