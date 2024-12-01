"use client";

export const chartConfig = {
  animation: {
    duration: 1000,
    delay: 200,
  },
  axis: {
    stroke: {
      width: 1,
    },
    tick: {
      size: 5,
      padding: 5,
    },
    padding: {
      left: 10,
      right: 10,
    },
  },
  grid: {
    strokeDasharray: "3 3",
  },
  bar: {
    radius: [4, 4, 0, 0] as [number, number, number, number],
    maxSize: 60,
  },
  tooltip: {
    cursor: false,
  },
};