import { mockStakeholderData } from "@/lib/mock-data"
import {
  DashboardHeader,
  DashboardSidebar,
  MetricCard,
  DashboardChart,
  MultiSeriesChart,
  MetricBarCard,
  GaugeChart,
  RadialChart,
} from "@efficiensee/design-system"
import { Activity, Users, FolderKanban, Award } from "lucide-react"

export default function StakeholderDashboardPage() {
  const data = mockStakeholderData

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Efficiensee" />
      <DashboardSidebar activeItem="Home" />

      <main className="ml-64 pt-16">
        <div className="container mx-auto p-6 space-y-6">
                {/* Page Title */}
                <div className="space-y-1">
                  <h1 
                    className="text-[2.25rem] leading-[3rem] font-bold tracking-[0.03125rem]"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', system-ui, sans-serif" }}
                  >
                    Stakeholder Dashboard
                  </h1>
                  <p className="text-[0.9375rem] leading-6 tracking-[0.046875rem] text-muted-foreground">
                    Organization-wide metrics and performance insights
                  </p>
                </div>

          {/* Key Metrics Row */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Active Teams"
              value={data.metrics.activeTeams}
              change="+3 this month"
              trend="up"
              icon={<Users className="h-4 w-4 text-muted-foreground" />}
              sparklineData={data.sparklines.activeTeams}
              sparklineDataKey="value"
              sparklineStyle="line"
              sparklineColor="hsl(var(--chart-1))"
            />
            <MetricCard
              title="Team Velocity"
              value={`${data.metrics.teamVelocity}%`}
              change="+5% vs last sprint"
              trend="up"
              icon={<Activity className="h-4 w-4 text-muted-foreground" />}
              sparklineData={data.sparklines.teamVelocity}
              sparklineDataKey="value"
              sparklineStyle="line-filled"
              sparklineColor="hsl(var(--chart-2))"
            />
            <MetricCard
              title="Active Projects"
              value={data.metrics.activeProjects}
              change="12 completing this week"
              icon={<FolderKanban className="h-4 w-4 text-muted-foreground" />}
              sparklineData={data.sparklines.activeProjects}
              sparklineDataKey="value"
              sparklineStyle="bar-vertical"
              sparklineColor="hsl(var(--chart-3))"
            />
            <MetricCard
              title="Code Quality"
              value={`${data.metrics.codeQuality}/5`}
              change="+0.3 this month"
              trend="up"
              icon={<Award className="h-4 w-4 text-muted-foreground" />}
              sparklineData={data.sparklines.codeQuality}
              sparklineDataKey="value"
              sparklineStyle="graph"
              sparklineColor="hsl(var(--chart-4))"
            />
          </div>

          {/* Performance Charts */}
          <div className="grid gap-6 lg:grid-cols-2">
            <DashboardChart
              title="Team Velocity Trends"
              description="Story points completed over last 6 sprints"
              data={data.velocityTrend}
              type="line"
              dataKey="value"
              xAxisKey="sprint"
              color="hsl(var(--chart-1))"
            />
            <DashboardChart
              title="Capacity Utilization"
              description="Team capacity usage by team"
              data={data.capacity}
              type="bar"
              dataKey="value"
              xAxisKey="team"
              color="hsl(var(--chart-2))"
            />
          </div>

          {/* Multi-Series Chart - Team Comparison */}
          <MultiSeriesChart
            title="Team Performance Comparison"
            description="Velocity comparison across top teams over last 6 sprints"
            data={data.teamComparison}
            type="line"
            xAxisKey="sprint"
            series={[
              { dataKey: "alpha", name: "Team Alpha", color: "hsl(var(--chart-1))" },
              { dataKey: "beta", name: "Team Beta", color: "hsl(var(--chart-2))" },
              { dataKey: "gamma", name: "Team Gamma", color: "hsl(var(--chart-3))" },
              { dataKey: "delta", name: "Team Delta", color: "hsl(var(--chart-4))" },
            ]}
          />

          {/* Multi-Series Area Chart - Monthly Performance */}
          <MultiSeriesChart
            title="Monthly Performance Overview"
            description="Deployments and incidents tracked over 12 months"
            data={data.monthlyPerformance}
            type="area"
            xAxisKey="month"
            series={[
              { dataKey: "deployments", name: "Deployments", color: "hsl(var(--chart-1))" },
              { dataKey: "incidents", name: "Incidents", color: "hsl(var(--chart-5))" },
            ]}
          />

          {/* Weekly Velocity Bar Chart */}
          <div className="grid gap-6 lg:grid-cols-2">
            <MetricBarCard
              title="Weekly Velocity"
              subtitle="Metric"
              data={data.weeklyVelocity}
            />
          </div>

                {/* Risk Indicators */}
                <div>
                  <h2 
                    className="text-[1.5rem] leading-8 font-bold tracking-[0.03125rem] mb-4"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', system-ui, sans-serif" }}
                  >
                    Risk Indicators
                  </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <GaugeChart
                title="Avg Capacity"
                value={data.gauges.avgCapacity}
                unit="%"
                status="success"
              />
              <GaugeChart
                title="Critical Blockers"
                value={data.gauges.criticalBlockers}
                maxValue={10}
                status="warning"
              />
              <GaugeChart
                title="Regression Rate"
                value={data.gauges.regressionRate}
                maxValue={10}
                unit="%"
                status="success"
              />
              <GaugeChart
                title="Review SLA"
                value={data.gauges.reviewSLA}
                maxValue={48}
                unit="h"
                status="success"
              />
            </div>
          </div>

          {/* Bottom Section: Radial Chart and Team Table */}
          <div className="grid gap-6 lg:grid-cols-2">
            <RadialChart
              title="Work Distribution"
              description="Current sprint status breakdown"
              data={data.workDistribution.map((item) => ({
                name: item.status,
                value: item.value,
                color: item.color,
              }))}
            />

                    {/* Team Stats Table */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                      <div className="p-6">
                        <h3 
                          className="text-[1.125rem] leading-8 font-bold tracking-[0.03125rem] mb-4"
                          style={{ fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', system-ui, sans-serif" }}
                        >
                          Top 5 Teams
                        </h3>
                <div className="overflow-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium">Team</th>
                        <th className="text-left py-3 px-2 font-medium">Sprint</th>
                        <th className="text-left py-3 px-2 font-medium">Velocity</th>
                        <th className="text-left py-3 px-2 font-medium">Capacity</th>
                        <th className="text-left py-3 px-2 font-medium">Blockers</th>
                        <th className="text-left py-3 px-2 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.topTeams.map((team, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{team.name}</td>
                          <td className="py-3 px-2 text-muted-foreground">
                            Sprint {team.sprint}
                          </td>
                          <td className="py-3 px-2">{team.velocity} pts</td>
                          <td className="py-3 px-2">{team.capacity}%</td>
                          <td className="py-3 px-2">{team.blockers}</td>
                          <td className="py-3 px-2">
                            <span
                              className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                                team.status === "healthy"
                                  ? "bg-success/10 text-success"
                                  : team.status === "overloaded"
                                    ? "bg-chart-3/10 text-chart-3"
                                    : "bg-destructive/10 text-destructive"
                              }`}
                            >
                              {team.status === "healthy" && "🟢 Healthy"}
                              {team.status === "overloaded" && "🟡 Overloaded"}
                              {team.status === "at-risk" && "🔴 At Risk"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
