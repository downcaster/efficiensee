"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { cn } from "../../lib/utils"

interface GaugeChartProps {
  title: string
  value: number
  maxValue?: number
  unit?: string
  status?: "success" | "warning" | "error"
  className?: string
}

/**
 * Gauge Chart component based on Pegasus Design System Pro
 * Figma spec: Gauge Graphs
 * 
 * Typography:
 * - Title: Inter 15px/24px (Text Small)
 * - Value: Plus Jakarta Sans 36px/48px Bold (Display Small Bold)
 * - Unit: Inter 18px/24px Medium Tight
 */
export function GaugeChart({
  title,
  value,
  maxValue = 100,
  unit = "",
  status = "success",
  className,
}: GaugeChartProps) {
  const percentage = (value / maxValue) * 100
  const rotation = (percentage / 100) * 180 - 90

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-4">
        <CardTitle className="text-[0.9375rem] leading-6 font-normal tracking-[0.046875rem]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center pt-2 px-12 pb-8">
        <div className="relative w-64 h-[150px] mb-8">
          <svg viewBox="0 0 256 150" className="w-full h-full">
            {/* Background arc */}
            <path
              d="M 20 134 A 108 108 0 0 1 236 134"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.3"
            />
            {/* Value arc - always white */}
            <path
              d="M 20 134 A 108 108 0 0 1 236 134"
              fill="none"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${(percentage / 100) * 339.3} 339.3`}
              style={{
                transition: "stroke-dasharray 0.5s ease",
              }}
            />
            {/* Needle/Pointer */}
            <line
              x1="128"
              y1="134"
              x2="128"
              y2="50"
              stroke="hsl(var(--foreground))"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                transformOrigin: "128px 134px",
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.6s ease-out",
              }}
            />
            {/* Center dot/pivot */}
            <circle cx="128" cy="134" r="6" fill="hsl(var(--foreground))" />
          </svg>
        </div>
        <div className="flex items-baseline gap-1">
          <div
            className="text-[2.25rem] leading-[3rem] font-bold tracking-[0.03125rem] text-muted-foreground"
            style={{
              fontFamily:
                "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            {value}
          </div>
          {unit && (
            <span className="text-[1.125rem] leading-6 font-medium tracking-[0.046875rem] text-muted-foreground">
              {unit}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
