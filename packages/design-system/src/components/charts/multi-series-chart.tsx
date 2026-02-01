"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export interface SeriesConfig {
  dataKey: string
  name: string
  color: string
}

interface MultiSeriesChartProps {
  title: string
  description?: string
  data: Array<Record<string, any>>
  type: "line" | "bar" | "area"
  series: SeriesConfig[]
  xAxisKey?: string
  className?: string
}

/**
 * Multi-Series Chart component based on Pegasus Design System Pro
 * Displays multiple data series on a single chart with legend
 * 
 * Typography:
 * - Title: Inter 18px/24px Medium Tight
 * - Description: Inter 15px/24px
 * - Axis labels: Inter 12px/22px
 * - Legend: Inter 12px/22px
 */
export function MultiSeriesChart({
  title,
  description,
  data,
  type,
  series,
  xAxisKey = "name",
  className,
}: MultiSeriesChartProps) {
  const ChartComponent = type === "line" ? LineChart : type === "bar" ? BarChart : AreaChart

  return (
    <Card className={className}>
      <CardHeader className="pb-4">
        <CardTitle className="text-[1.125rem] leading-6 font-medium tracking-[0.046875rem]">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-[0.9375rem] leading-6 tracking-[0.046875rem] mt-1">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <ChartComponent data={data} barCategoryGap="20%">
            {/* Gradient definitions for area charts */}
            {type === "area" && (
              <defs>
                {series.map((s, index) => (
                  <linearGradient
                    key={`gradient-${s.dataKey}`}
                    id={`gradient-${s.dataKey}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={s.color} stopOpacity={0.8} />
                    <stop offset="50%" stopColor={s.color} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={s.color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
            )}
            
            <CartesianGrid
              strokeDasharray="3 3"
              className="stroke-muted"
              vertical={false}
              opacity={0.2}
            />
            <XAxis
              dataKey={xAxisKey}
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              style={{
                fontSize: "0.75rem",
                lineHeight: "1.375rem",
                letterSpacing: "0.015625rem",
              }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              style={{
                fontSize: "0.75rem",
                lineHeight: "1.375rem",
                letterSpacing: "0.015625rem",
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                fontSize: "0.9375rem",
                lineHeight: "1.5rem",
              }}
            />
            <Legend
              wrapperStyle={{
                fontSize: "0.75rem",
                lineHeight: "1.375rem",
                letterSpacing: "0.015625rem",
              }}
            />
            
            {type === "line" &&
              series.map((s) => (
                <Line
                  key={s.dataKey}
                  type="monotone"
                  dataKey={s.dataKey}
                  stroke={s.color}
                  strokeWidth={2}
                  name={s.name}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            
            {type === "bar" &&
              series.map((s) => (
                <Bar
                  key={s.dataKey}
                  dataKey={s.dataKey}
                  fill={s.color}
                  name={s.name}
                  radius={[6, 6, 0, 0]}
                  maxBarSize={32}
                  animationDuration={300}
                />
              ))}
            
            {type === "area" &&
              series.map((s) => (
                <Area
                  key={s.dataKey}
                  type="monotone"
                  dataKey={s.dataKey}
                  stroke={s.color}
                  fill={`url(#gradient-${s.dataKey})`}
                  strokeWidth={2}
                  name={s.name}
                />
              ))}
          </ChartComponent>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
