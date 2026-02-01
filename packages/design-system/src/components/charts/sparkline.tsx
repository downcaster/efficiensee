"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts"

export type SparklineStyle = 
  | "line" 
  | "line-filled" 
  | "bar-horizontal" 
  | "bar-vertical" 
  | "graph" 
  | "radial" 
  | "radial-segment"
  | "radar"

interface SparklineProps {
  data: Array<Record<string, any>>
  dataKey: string
  style?: SparklineStyle
  color?: string
  className?: string
}

/**
 * Sparkline component based on Pegasus Design System Pro
 * Figma spec: Metric - Square Card Sparkline variations
 * 
 * Supports multiple chart styles:
 * - line: Simple line chart
 * - line-filled: Area chart with fill
 * - bar-vertical: Vertical bar chart
 * - bar-horizontal: Horizontal bar chart
 * - graph: Line with gradient fill
 * - radial: Circular progress
 * - radial-segment: Segmented radial
 * - radar: Radar/spider chart
 */
export function Sparkline({
  data,
  dataKey,
  style = "line",
  color = "hsl(var(--chart-1))",
  className,
}: SparklineProps) {
  const height = 80

  // Line chart (simple)
  if (style === "line") {
    return (
      <ResponsiveContainer width="100%" height={height} className={className}>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            dot={false}
            animationDuration={300}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  // Line filled (area chart)
  if (style === "line-filled" || style === "graph") {
    return (
      <ResponsiveContainer width="100%" height={height} className={className}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            fill={`url(#gradient-${dataKey})`}
            animationDuration={300}
          />
        </AreaChart>
      </ResponsiveContainer>
    )
  }

  // Bar vertical
  if (style === "bar-vertical") {
    return (
      <ResponsiveContainer width="100%" height={height} className={className}>
        <BarChart data={data} barGap={1}>
          <Bar
            dataKey={dataKey}
            fill={color}
            radius={[2, 2, 0, 0]}
            animationDuration={300}
            maxBarSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    )
  }

  // Bar horizontal
  if (style === "bar-horizontal") {
    return (
      <ResponsiveContainer width="100%" height={height} className={className}>
        <BarChart data={data} layout="vertical" barGap={1}>
          <Bar
            dataKey={dataKey}
            fill={color}
            radius={[0, 2, 2, 0]}
            animationDuration={300}
            maxBarSize={6}
          />
        </BarChart>
      </ResponsiveContainer>
    )
  }

  // Radial (circular progress)
  if (style === "radial" || style === "radial-segment") {
    // Calculate percentage for radial
    const total = data.reduce((sum, item) => sum + (item[dataKey] || 0), 0)
    const max = Math.max(...data.map((item) => item[dataKey] || 0))
    const percentage = total > 0 ? Math.round((max / total) * 100) : 0

    return (
      <ResponsiveContainer width="100%" height={height} className={className}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="100%"
          barSize={10}
          data={[{ name: "progress", value: percentage, fill: color }]}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            background
            dataKey="value"
            cornerRadius={style === "radial-segment" ? 0 : 10}
            animationDuration={300}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    )
  }

  // Default fallback to line
  return (
    <ResponsiveContainer width="100%" height={height} className={className}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2}
          dot={false}
          animationDuration={300}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
