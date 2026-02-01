import type { StakeholderDashboardData } from "@/types/dashboard"

export const mockStakeholderData: StakeholderDashboardData = {
  metrics: {
    activeTeams: 24,
    teamVelocity: 87,
    activeProjects: 156,
    codeQuality: 4.2,
  },

  // Sparkline data for metric cards (last 7 days)
  sparklines: {
    activeTeams: [
      { day: 1, value: 22 },
      { day: 2, value: 23 },
      { day: 3, value: 22 },
      { day: 4, value: 24 },
      { day: 5, value: 23 },
      { day: 6, value: 24 },
      { day: 7, value: 24 },
    ],
    teamVelocity: [
      { day: 1, value: 82 },
      { day: 2, value: 84 },
      { day: 3, value: 83 },
      { day: 4, value: 85 },
      { day: 5, value: 86 },
      { day: 6, value: 87 },
      { day: 7, value: 87 },
    ],
    activeProjects: [
      { day: 1, value: 150 },
      { day: 2, value: 152 },
      { day: 3, value: 153 },
      { day: 4, value: 154 },
      { day: 5, value: 155 },
      { day: 6, value: 156 },
      { day: 7, value: 156 },
    ],
    codeQuality: [
      { day: 1, value: 4.0 },
      { day: 2, value: 4.1 },
      { day: 3, value: 4.0 },
      { day: 4, value: 4.2 },
      { day: 5, value: 4.1 },
      { day: 6, value: 4.2 },
      { day: 7, value: 4.2 },
    ],
  },
  velocityTrend: [
    { sprint: "Sprint 40", value: 45 },
    { sprint: "Sprint 41", value: 52 },
    { sprint: "Sprint 42", value: 48 },
    { sprint: "Sprint 43", value: 61 },
    { sprint: "Sprint 44", value: 58 },
    { sprint: "Sprint 45", value: 67 },
  ],

  // Multi-series chart: Team comparison over time
  teamComparison: [
    { sprint: "Sprint 40", alpha: 85, beta: 72, gamma: 90, delta: 68 },
    { sprint: "Sprint 41", alpha: 88, beta: 75, gamma: 92, delta: 71 },
    { sprint: "Sprint 42", alpha: 87, beta: 78, gamma: 89, delta: 74 },
    { sprint: "Sprint 43", alpha: 92, beta: 80, gamma: 94, delta: 76 },
    { sprint: "Sprint 44", alpha: 90, beta: 82, gamma: 91, delta: 79 },
    { sprint: "Sprint 45", alpha: 94, beta: 85, gamma: 96, delta: 82 },
  ],

  // Multi-series area chart: Monthly performance metrics
  monthlyPerformance: [
    { month: "JAN", deployments: 1350, incidents: 1400 },
    { month: "FEB", deployments: 1480, incidents: 1520 },
    { month: "MAR", deployments: 1420, incidents: 1460 },
    { month: "APR", deployments: 1520, incidents: 1680 },
    { month: "MAY", deployments: 1440, incidents: 1420 },
    { month: "JUN", deployments: 1380, incidents: 1450 },
    { month: "JUL", deployments: 1460, incidents: 1520 },
    { month: "AUG", deployments: 1520, incidents: 1600 },
    { month: "SEP", deployments: 1580, incidents: 1560 },
    { month: "OCT", deployments: 1520, incidents: 1520 },
    { month: "NOV", deployments: 1620, incidents: 1580 },
    { month: "DEC", deployments: 1680, incidents: 1650 },
  ],

  // Weekly velocity bar chart
  weeklyVelocity: [
    { label: "S", value: 20 },
    { label: "M", value: 70 },
    { label: "T", value: 58 },
    { label: "W", value: 75 },
    { label: "T", value: 58 },
    { label: "F", value: 75 },
    { label: "S", value: 100 },
  ],

  capacity: [
    { team: "Platform", value: 95 },
    { team: "Frontend", value: 87 },
    { team: "Backend", value: 102 },
    { team: "Mobile", value: 78 },
  ],
  gauges: {
    avgCapacity: 92,
    criticalBlockers: 3,
    regressionRate: 4.2,
    reviewSLA: 18,
  },
  workDistribution: [
    { status: "In Progress", value: 35, color: "hsl(var(--chart-1))" },
    { status: "In Review", value: 22, color: "hsl(var(--chart-2))" },
    { status: "Testing", value: 18, color: "hsl(var(--chart-3))" },
    { status: "Completed", value: 20, color: "hsl(var(--chart-4))" },
    { status: "Blocked", value: 5, color: "hsl(var(--destructive))" },
  ],
  topTeams: [
    {
      name: "Platform Team",
      sprint: 45,
      velocity: 67,
      capacity: 95,
      blockers: 1,
      status: "healthy",
    },
    {
      name: "Frontend Team",
      sprint: 23,
      velocity: 52,
      capacity: 87,
      blockers: 0,
      status: "healthy",
    },
    {
      name: "Backend API",
      sprint: 34,
      velocity: 45,
      capacity: 102,
      blockers: 2,
      status: "overloaded",
    },
    {
      name: "Mobile Team",
      sprint: 12,
      velocity: 38,
      capacity: 78,
      blockers: 0,
      status: "healthy",
    },
    {
      name: "DevOps Team",
      sprint: 8,
      velocity: 29,
      capacity: 85,
      blockers: 3,
      status: "at-risk",
    },
  ],
}
