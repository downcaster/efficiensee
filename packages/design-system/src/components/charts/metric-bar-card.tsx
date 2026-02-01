"use client"

import { Card, CardContent, CardHeader } from "../ui/card"
import { MoreHorizontal } from "lucide-react"

interface BarData {
  label: string
  value: number // 0-100 percentage
}

interface MetricBarCardProps {
  title: string
  subtitle?: string
  data: BarData[]
  showIcon?: boolean
  className?: string
}

/**
 * Metric Bar Card component based on Pegasus Design System Pro
 * Square card with vertical bar charts
 * 
 * Figma spec: node-id=9875:545881
 * - Card: 361x340px with shadow
 * - Bars: 12px wide, rounded (200px radius)
 * - Typography: Inter 18px/24px for labels, Plus Jakarta Sans 36px/48px Bold for title
 */
export function MetricBarCard({
  title,
  subtitle,
  data,
  showIcon = true,
  className,
}: MetricBarCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
        <div className="flex flex-col gap-3">
          {subtitle && (
            <p className="text-[1.25rem] leading-6 font-normal tracking-[0.046875rem] text-muted-foreground">
              {subtitle}
            </p>
          )}
          <h3
            className="text-[2.25rem] leading-[3rem] font-bold tracking-[0.03125rem]"
            style={{ fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            {title}
          </h3>
        </div>
        {showIcon && (
          <button
            className="flex items-center justify-center p-3 rounded-full bg-muted/50 backdrop-blur-[30px] hover:bg-muted transition-colors"
            aria-label="More options"
          >
            <MoreHorizontal className="h-6 w-6 text-muted-foreground" />
          </button>
        )}
      </CardHeader>
      <CardContent className="flex items-end justify-between gap-4 h-[200px] px-8 pb-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 h-full justify-end"
          >
            {/* Bar container */}
            <div className="relative w-3 flex-1 min-h-0">
              {/* Background bar */}
              <div className="absolute inset-0 bg-muted/30 rounded-full" />
              {/* Filled bar */}
              <div
                className="absolute bottom-0 left-0 right-0 bg-foreground rounded-full transition-all duration-300"
                style={{ height: `${item.value}%` }}
              />
            </div>
            {/* Label */}
            <p className="text-[1.125rem] leading-6 font-normal tracking-[0.046875rem] text-muted-foreground">
              {item.label}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
