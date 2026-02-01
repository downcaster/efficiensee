"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { cn } from "../../lib/utils"
import { Sparkline, type SparklineStyle } from "./sparkline"

interface MetricCardProps {
  title: string
  value: string | number
  change?: string
  trend?: "up" | "down"
  icon?: React.ReactNode
  sparklineData?: Array<Record<string, any>>
  sparklineDataKey?: string
  sparklineStyle?: SparklineStyle
  sparklineColor?: string
  className?: string
}

/**
 * Metric Card component based on Pegasus Design System Pro
 * Figma spec: Dashboard Metrics Square (361x360px)
 * 
 * Typography:
 * - Title: Inter 15px/24px (Text Small)
 * - Value: Plus Jakarta Sans 36px/48px Bold (Display Small Bold)
 * - Change: Inter 12px/22px (Text X-Small)
 * 
 * Sparkline Styles:
 * - line: Simple line chart
 * - line-filled: Area chart with gradient
 * - bar-vertical: Vertical bars
 * - bar-horizontal: Horizontal bars
 * - graph: Line with gradient fill
 * - radial: Circular progress
 * - radial-segment: Segmented radial
 * - radar: Radar chart
 */
export function MetricCard({
  title,
  value,
  change,
  trend,
  icon,
  sparklineData,
  sparklineDataKey = "value",
  sparklineStyle = "line",
  sparklineColor = "hsl(var(--chart-1))",
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-[0.9375rem] leading-6 font-normal tracking-[0.046875rem]">
          {title}
        </CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div
          className="text-[2.25rem] leading-[3rem] font-bold tracking-[0.03125rem]"
          style={{
            fontFamily:
              "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
          }}
        >
          {value}
        </div>
        {change && (
          <p className="text-[0.75rem] leading-[1.375rem] tracking-[0.015625rem] text-muted-foreground flex items-center gap-1 mt-1">
            {trend === "up" && <TrendingUp className="h-3 w-3 text-success" />}
            {trend === "down" && <TrendingDown className="h-3 w-3 text-destructive" />}
            {change}
          </p>
        )}
        {sparklineData && sparklineData.length > 0 && (
          <div className="mt-4">
            <Sparkline
              data={sparklineData}
              dataKey={sparklineDataKey}
              style={sparklineStyle}
              color={sparklineColor}
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
