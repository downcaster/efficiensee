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

interface DashboardChartProps {
  title: string
  description?: string
  data: Array<Record<string, any>>
  type: "line" | "bar" | "area"
  dataKey: string
  xAxisKey?: string
  color?: string
  className?: string
}

/**
 * Display Chart component based on Pegasus Design System Pro
 * Figma spec: Dashboard Display Chart (1777x448px)
 * 
 * Typography:
 * - Title: Inter 18px/24px Medium Tight (Text Medium - Tight)
 * - Description: Inter 15px/24px (Text Small)
 * - Axis labels: Inter 12px/22px (Text X-Small)
 */
export function DashboardChart({
  title,
  description,
  data,
  type,
  dataKey,
  xAxisKey = "name",
  color = "hsl(var(--chart-1))",
  className,
}: DashboardChartProps) {
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
            {type === "line" && (
              <Line 
                type="monotone" 
                dataKey={dataKey} 
                stroke={color} 
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            )}
            {type === "bar" && (
              <Bar 
                dataKey={dataKey} 
                fill={color} 
                radius={[6, 6, 0, 0]}
                maxBarSize={32}
                animationDuration={300}
                activeBar={false}
              />
            )}
            {type === "area" && (
              <Area 
                type="monotone" 
                dataKey={dataKey} 
                stroke={color} 
                fill={color} 
                fillOpacity={0.2}
                strokeWidth={2}
              />
            )}
          </ChartComponent>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
