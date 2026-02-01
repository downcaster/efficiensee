# Efficiensee Setup Guide

## What Was Created

### 1. Design System Package (`packages/design-system`)
- **Tokens**: Colors, typography, and spacing based on Pegasus Design System Pro
- **UI Components**: Card components
- **Chart Components**: 
  - MetricCard - Square metric cards with trends
  - DashboardChart - Line, bar, and area charts
  - GaugeChart - Circular gauge indicators
  - RadialChart - Donut/pie charts
- **Layout Components**:
  - DashboardHeader - Top navigation bar
  - DashboardSidebar - Left sidebar navigation

### 2. Webapp (`apps/webapp`)
- Next.js 15 application with App Router
- Dark mode only configuration
- Stakeholder dashboard at `/dashboards/stakeholder`
- Mock data utilities for testing

### 3. Configuration
- Tailwind CSS v4 with Pegasus design tokens
- TypeScript workspace with path aliases
- Turborepo for monorepo management
- Biome for linting and formatting

## Project Structure

```
efficiensee/
├── apps/
│   └── webapp/                    # Next.js 15 application
│       ├── src/
│       │   ├── app/
│       │   │   ├── layout.tsx
│       │   │   ├── page.tsx
│       │   │   └── dashboards/
│       │   │       └── stakeholder/
│       │   │           └── page.tsx
│       │   ├── components/
│       │   ├── lib/
│       │   │   ├── utils.ts
│       │   │   └── mock-data.ts
│       │   ├── styles/
│       │   │   └── globals.css
│       │   └── types/
│       │       └── dashboard.ts
│       └── package.json
├── packages/
│   └── design-system/              # Shared design system
│       ├── src/
│       │   ├── tokens/             # Design tokens
│       │   ├── components/
│       │   │   ├── ui/
│       │   │   ├── charts/
│       │   │   └── layout/
│       │   └── index.ts
│       └── package.json
├── package.json                    # Root package.json
├── turbo.json                      # Turborepo config
├── tsconfig.json                   # TypeScript config
└── tailwind.config.ts              # Tailwind config
```

## Installation & Running

### Prerequisites
- Node.js >= 20.0.0
- Bun >= 1.1.0 (recommended) or npm

### Install Dependencies

**With Bun (recommended):**
```bash
bun install
```

**With npm:**
The project uses `workspace:*` protocol which requires Bun or pnpm. If using npm, you'll need to modify package.json files to use relative paths.

### Run Development Server

```bash
# Start all workspaces
bun dev

# Or start just the webapp
cd apps/webapp
bun dev
```

The application will be available at: http://localhost:3000

### Available Routes

- `/` - Home page with link to dashboard
- `/dashboards/stakeholder` - Stakeholder dashboard with mocked data

## Dashboard Features

The stakeholder dashboard includes:

1. **Key Metrics Row** (4 cards):
   - Active Teams: 24
   - Team Velocity: 87%
   - Active Projects: 156
   - Code Quality: 4.2/5

2. **Performance Charts** (2 charts):
   - Team Velocity Trends (line chart)
   - Capacity Utilization (bar chart)

3. **Risk Indicators** (4 gauges):
   - Average Capacity: 92%
   - Critical Blockers: 3
   - Regression Rate: 4.2%
   - Review SLA: 18h

4. **Bottom Section**:
   - Work Distribution (radial chart)
   - Top 5 Teams table

## Design System

All components follow the Pegasus Design System Pro:
- Dark mode only
- HSL color system
- 8px grid spacing
- Recharts for data visualization

### Using Components

```tsx
import {
  MetricCard,
  DashboardChart,
  GaugeChart,
  RadialChart,
  DashboardHeader,
  DashboardSidebar,
} from "@efficiensee/design-system"

// MetricCard example
<MetricCard
  title="Active Teams"
  value={24}
  change="+3 this month"
  trend="up"
/>

// DashboardChart example
<DashboardChart
  title="Velocity Trends"
  data={data}
  type="line"
  dataKey="value"
  xAxisKey="sprint"
/>
```

## Scripts

```bash
# Development
bun dev          # Start all workspaces in dev mode
bun build        # Build all workspaces
bun start        # Start production build

# Code Quality
bun lint         # Run linter
bun format       # Format code with Biome
bun typecheck    # Type check with TypeScript

# Changelog
bun changelog    # Generate changelog
```

## Dark Mode

The application is configured for dark mode only:
- CSS variables defined in `globals.css`
- `dark` class applied to `<html>` element in layout
- All colors optimized for dark backgrounds

## Next Steps

1. **Replace Mock Data**: Update `apps/webapp/src/lib/mock-data.ts` with real data sources
2. **Add More Charts**: Extend chart components in design system
3. **Add Interactivity**: Implement filters, date pickers, and data refresh
4. **Add More Dashboards**: Create manager, developer, and project dashboards
5. **Connect Backend**: Integrate with APIs for real-time data

## Troubleshooting

### Dependency Installation Issues
If using npm and encountering `workspace:*` errors, you have two options:
1. Use Bun: `npm install -g bun && bun install`
2. Use pnpm: `npm install -g pnpm && pnpm install`

### TypeScript Errors
```bash
# Rebuild TypeScript references
bun typecheck
```

### Import Errors
Ensure path aliases are configured in:
- `tsconfig.json` (root)
- `apps/webapp/tsconfig.json`
- `apps/webapp/next.config.mjs`

## Support

For issues or questions:
- GitHub Issues: https://github.com/downcaster/efficiensee/issues
- Documentation: See `/docs` directory (to be added)
