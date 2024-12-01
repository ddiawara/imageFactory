"use client";

interface CustomizedAxisTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string | number;
  };
  fill?: string;
  textAnchor?: "start" | "middle" | "end";
}

export function CustomizedAxisTick({
  x = 0,
  y = 0,
  payload,
  fill,
  textAnchor = "middle",
}: CustomizedAxisTickProps) {
  if (!payload) return null;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor={textAnchor}
        fill={fill}
        fontSize={12}
        fontFamily="inherit"
      >
        {String(payload.value)}
      </text>
    </g>
  );
}