# Efficiensee

<p align="center">
  <strong>Intelligence Platform for Data-Driven Organizations</strong>
</p>

---

## Overview

**Efficiensee** is an advanced intelligence platform designed for stakeholders, managers, and developers who need to make data-driven decisions with confidence. By aggregating, analyzing, and visualizing data from multiple sources, Efficiensee transforms raw information into actionable insights that drive operational efficiency, security, and strategic planning.

### What is an Intelligence Platform?

Intelligence platforms are technology solutions that:
- **Aggregate** data from diverse sources (GitHub, Jira, and other tools)
- **Analyze** patterns, trends, and anomalies using AI-powered algorithms
- **Visualize** complex data through intuitive dashboards and reports
- **Facilitate** informed decision-making at every organizational level

Efficiensee eliminates guesswork by replacing subjective assessments with objective, data-backed insights.

---

## The Problem We Solve

Modern organizations face critical challenges:

- **Data Silos**: Information scattered across multiple tools (GitHub, Jira, Slack, etc.)
- **Subjective Assessments**: Performance reviews based on perception rather than data
- **Blind Spots**: Hidden risks like knowledge concentration, bottlenecks, and capacity issues
- **Reactive Management**: Discovering problems after they impact delivery
- **Limited Visibility**: Executives lack real-time insights into engineering health

### Our Solution

Efficiensee provides:

✅ **Unified Data View** - Single source of truth across all your tools  
✅ **Objective Metrics** - Data-driven insights replace subjective opinions  
✅ **Proactive Alerts** - Identify risks before they become crises  
✅ **Role-Based Intelligence** - Relevant insights for each organizational level  
✅ **AI-Powered Analysis** - Automated pattern detection and recommendations  

---

## Core Value Propositions

### For Executives & Leadership
- **Strategic Oversight**: Organization-wide performance metrics and trend analysis
- **Risk Management**: Early detection of team health issues, knowledge silos, and capacity problems
- **Investment Decisions**: Data-backed insights for resource allocation and hiring
- **Compliance & Security**: Automated monitoring and audit trails

### For Engineering Managers
- **Team Performance**: Real-time sprint tracking, velocity trends, and quality metrics
- **Capacity Planning**: Workload distribution, burnout risk detection, and capacity forecasting
- **Process Optimization**: Identify bottlenecks in code review, deployment, and delivery cycles
- **Talent Development**: Track individual growth trajectories and skill distribution

### For Developers
- **Personal Growth**: Individual performance metrics, skill development tracking, and impact visibility
- **Productivity Insights**: Code quality trends, review effectiveness, and contribution patterns
- **Collaboration Visibility**: Cross-team contributions and knowledge sharing metrics
- **Transparent Recognition**: Objective data showcasing your impact and contributions

---

## Key Features

### 🎯 Smart Role-Based Dashboards

Automatically adapts to your position in the organization:
- **Developer View**: Personal productivity hub with task tracking and skill development
- **Manager View**: Sprint command center with capacity monitoring and team health
- **Executive View**: Organization-wide performance and strategic initiative tracking

### 📊 Comprehensive Analytics Framework

**Team Metrics**
- Team velocity and sprint predictability
- Code review engagement and collaboration patterns
- Quality index and technical debt tracking
- Bus factor analysis and knowledge distribution
- Cross-team collaboration metrics

**Individual Metrics**
- Code quality score and impact assessment
- Growth trajectory and skill development
- Collaboration index and review quality
- Cycle time and consistency tracking
- Knowledge spread across repositories

**Repository Health**
- Change frequency and activity trends
- Review depth and quality metrics
- Knowledge concentration risk analysis
- Code ownership distribution

**Cross-Domain Integration**
- GitHub + Jira unified insights
- PR-to-ticket alignment tracking
- Feature cycle time (idea to production)
- Work-commit alignment analysis

### 🤖 AI-Powered Intelligence

- **Automated Code Review Analysis**: Quality scoring and improvement suggestions
- **Pattern Detection**: Identify trends, anomalies, and emerging risks
- **Predictive Insights**: Forecast delivery timelines and capacity needs
- **Smart Alerts**: Proactive notifications for critical issues (P0/P1/P2 severity levels)

### 🔔 Intelligent Alert System

Automated monitoring with email notifications for:
- Sprint capacity overages and velocity drops
- Blocked tickets and workflow bottlenecks
- Code quality regressions
- Knowledge concentration risks
- Team health deterioration

### 🔐 Enterprise-Grade Security

- **Role-Based Access Control (RBAC)**: Granular permissions for data access
- **OAuth 2.0 Authentication**: Secure identity management
- **Audit Trails**: Complete activity logging and compliance reporting
- **Data Privacy**: Configurable data retention and anonymization

---

## Technical Architecture

### Tech Stack

**Frontend**
- **Framework**: Next.js 15 with App Router (React 19)
- **Language**: TypeScript 5.4+
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI, Radix UI
- **Charts & Visualization**: Recharts
- **Forms**: React Hook Form with Zod validation

**Backend**
- **Runtime**: Bun (high-performance JavaScript runtime)
- **Database**: PostgreSQL with Drizzle ORM
- **Architecture**: Three-layer pattern (Queries → Connectors → Services)
- **AI Integration**: OpenAI SDK for intelligent analysis
- **APIs**: GitHub API (Octokit), Jira API

**DevOps & Tools**
- **Monorepo**: Turborepo for efficient workspace management
- **Containerization**: Docker & Docker Compose
- **Linting**: Biome (fast, modern linter)
- **Testing**: Vitest, Bun Test, Playwright
- **CI/CD**: GitHub Actions
- **Monitoring**: Built-in performance tracking and query optimization

### Architecture Principles

**Three-Layer Backend Pattern**

```
Client Component
      ↓
   Actions (optional)
      ↓
   Services (business logic)
      ↓
   Connectors (error handling)
      ↓
   Queries (database operations)
      ↓
   Database
```

**Key Benefits:**
- Clear separation of concerns
- Enhanced testability (mock each layer independently)
- Reusable code across features
- Type-safe operations with `ServerActionResult<T>`
- Optimized performance with direct service calls from Server Components

### Database Schema Design

**Domain-Driven Organization:**
- **GitHub Domain**: Repositories, organizations, users, pull requests, reviews
- **Jira Domain**: Projects, tickets, users, worklogs, sprints
- **Teams Domain**: Team structures, members, assignments
- **Evaluations Domain**: Quality assessments and scoring
- **Analytics Domain**: User events, engagement tracking
- **Mappings Domain**: Cross-domain relationships

**Relationship Management:**
- Direct references for same-domain relationships (strong typing)
- String-based references for cross-domain relationships (avoid circular dependencies)

---

## Project Structure

```
efficiensee/
├── apps/
│   └── frontend/              # Next.js application
│       ├── src/
│       │   ├── app/           # Next.js App Router pages
│       │   ├── components/    # React components
│       │   │   ├── analytics/ # Analytics components
│       │   │   ├── dashboards/ # Dashboard components
│       │   │   └── ui/        # Shared UI components
│       │   ├── lib/
│       │   │   ├── api/
│       │   │   │   ├── queries/     # Database queries
│       │   │   │   ├── connectors/  # Error handling layer
│       │   │   │   └── services/    # Business logic
│       │   │   ├── utils/     # Utility functions
│       │   │   └── types/     # TypeScript types
│       │   └── hooks/         # Custom React hooks
│       └── public/            # Static assets
├── packages/
│   ├── db/                    # Database schema & ORM
│   │   ├── schema/            # Drizzle schema definitions
│   │   │   ├── github/        # GitHub domain
│   │   │   ├── jira/          # Jira domain
│   │   │   ├── teams/         # Teams domain
│   │   │   ├── evaluations/   # Evaluations domain
│   │   │   └── analytics/     # Analytics domain
│   │   └── queries/           # Reusable queries
│   └── fingerprint/           # Browser fingerprinting
├── docs/                      # Documentation
│   ├── getting-started/       # Setup guides
│   ├── architecture/          # Architecture docs
│   ├── metrics/               # Metric definitions
│   └── api/                   # API documentation
├── rules/                     # Project rules
│   ├── figma.md               # Design system rules
│   └── react_tailwind.md      # React/Tailwind rules
└── .cursorrules               # AI assistant rules
```

---

## Getting Started

> **📖 Complete Setup Guide**: See [SETUP.md](SETUP.md) for detailed installation instructions, project structure overview, and development workflow.

### Prerequisites

**Option 1: Docker (Recommended)**
- Docker Desktop or Docker Engine
- Docker Compose

**Option 2: Local Development**
- Node.js >= 20.0.0
- Bun >= 1.1.0
- PostgreSQL database
- OpenAI API key (for AI features)

### Quick Start with Docker

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd efficiensee
   ```

2. **Configure environment variables**
   ```bash
   cp apps/frontend/.env.example apps/frontend/.env
   # Edit .env with your configuration
   ```

3. **Start the platform**
   ```bash
   bun run docker:dev
   ```
   The application will be available at `http://localhost:3000`

4. **View logs (optional)**
   ```bash
   bun run docker:logs
   ```

5. **Stop the platform**
   ```bash
   bun run docker:stop
   ```

### Local Development Setup

1. **Install dependencies**
   ```bash
   bun install
   ```

2. **Configure environment**
   ```bash
   cp apps/frontend/.env.example apps/frontend/.env
   # Configure your database, API keys, etc.
   ```

3. **Initialize database**
   ```bash
   bun run db:push
   ```

4. **Start development server**
   ```bash
   bun dev
   ```

---

## Available Commands

### Development
- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run linter
- `bun test` - Run tests

### Database Management
- `bun db:generate` - Generate database migrations
- `bun db:push` - Push schema changes to database
- `bun db:pull` - Pull schema from database
- `bun db:studio` - Open Drizzle Studio (database GUI)

### Docker Operations
- `bun run docker:dev` - Start Docker environment
- `bun run docker:stop` - Stop Docker containers
- `bun run docker:logs` - View container logs
- `bun run docker:clean` - Remove containers and volumes

---

## Use Cases

### Sprint Planning & Tracking
- Real-time capacity monitoring with automated alerts
- Historical velocity trends for accurate planning
- Blocked ticket detection and resolution tracking
- Sprint health scoring and predictive completion estimates

### Performance Reviews
- Objective metrics replace subjective assessments
- Growth trajectory visualization over time
- Cross-functional contribution visibility
- Peer comparison within role and seniority level

### Risk Management
- Bus factor analysis identifies knowledge concentration
- Early warning system for team health deterioration
- Technical debt accumulation tracking
- Capacity overload detection

### Process Optimization
- Code review bottleneck identification
- Cycle time analysis (PR creation to merge)
- Feature delivery time tracking (Jira ticket to production)
- Workflow efficiency metrics

### Resource Planning
- Workload distribution analysis
- Team capacity forecasting
- Skill gap identification
- Hiring need justification with data

---

## Metrics Overview

### 60+ Built-in Metrics

Efficiensee provides a comprehensive metrics library spanning:

- **User Analytics** (4 metrics): Engagement, retention, feature usage, session behavior
- **Team Performance** (9 metrics): Velocity, quality, collaboration, autonomy
- **Individual Contributors** (10 metrics): Impact, growth, quality, consistency
- **Repository Health** (5 metrics): Activity, quality trends, knowledge distribution
- **GitHub Organization** (14 metrics): PR throughput, review coverage, collaboration
- **Jira Projects** (11 metrics): Completion rate, estimation accuracy, lead time
- **Cross-Domain Integration** (7 metrics): PR-ticket alignment, feature cycle time

All metrics include:
- Clear mathematical formulas
- Interpretation guidelines
- Historical trend analysis
- Configurable thresholds and alerts

---

## Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[SETUP.md](SETUP.md)** - **START HERE** - Complete setup guide with installation, project structure, and usage
- **[Getting Started Guide](docs/getting-started/quick-start.md)** - Setup and configuration
- **[Architecture Overview](docs/architecture/README.md)** - System design and patterns
- **[Metrics Reference](docs/metrics/README.md)** - Complete metrics catalog
- **[API Documentation](docs/api/README.md)** - API endpoints and usage
- **[Database Schema](docs/db/schema.md)** - Data model and relationships

---

## Roadmap

### Current Features (v1.0)
✅ Role-based dashboards  
✅ GitHub + Jira integration  
✅ 60+ metrics across all domains  
✅ AI-powered code review analysis  
✅ Automated alert system  
✅ RBAC and OAuth authentication  

### Coming Soon
🔜 Slack integration and notifications  
🔜 Custom metric builder  
🔜 Advanced forecasting models  
🔜 Team benchmarking and comparisons  
🔜 Mobile application  
🔜 GitLab and Bitbucket support  

---

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on:
- Code of conduct
- Development process
- Pull request guidelines
- Testing requirements

---

## Support

- **Documentation**: [docs/](docs/)
- **Issues**: GitHub Issues
- **Community**: [Community Forum](COMMUNITY.md)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with modern technologies:
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [Bun](https://bun.sh/) - Fast JavaScript runtime
- [Shadcn UI](https://ui.shadcn.com/) - Beautiful components

---

<p align="center">
  Made with ❤️ by developers, for developers
</p>
