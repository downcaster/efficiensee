export interface StakeholderMetrics {
  activeTeams: number
  teamVelocity: number
  activeProjects: number
  codeQuality: number
}

export interface VelocityDataPoint {
  sprint: string
  value: number
}

export interface CapacityData {
  team: string
  value: number
}

export interface GaugeMetrics {
  avgCapacity: number
  criticalBlockers: number
  regressionRate: number
  reviewSLA: number
}

export interface WorkDistributionData {
  status: string
  value: number
  color: string
}

export type TeamStatus = "healthy" | "overloaded" | "at-risk"

export interface TeamData {
  name: string
  sprint: number
  velocity: number
  capacity: number
  blockers: number
  status: TeamStatus
}

export interface SparklineData {
  day: number
  value: number
}

export interface TeamComparisonData {
  sprint: string
  alpha: number
  beta: number
  gamma: number
  delta: number
}

export interface MonthlyPerformanceData {
  month: string
  deployments: number
  incidents: number
}

export interface WeeklyBarData {
  label: string
  value: number
}

export interface StakeholderDashboardData {
  metrics: StakeholderMetrics
  sparklines: {
    activeTeams: SparklineData[]
    teamVelocity: SparklineData[]
    activeProjects: SparklineData[]
    codeQuality: SparklineData[]
  }
  velocityTrend: VelocityDataPoint[]
  teamComparison: TeamComparisonData[]
  monthlyPerformance: MonthlyPerformanceData[]
  weeklyVelocity: WeeklyBarData[]
  capacity: CapacityData[]
  gauges: GaugeMetrics
  workDistribution: WorkDistributionData[]
  topTeams: TeamData[]
}
