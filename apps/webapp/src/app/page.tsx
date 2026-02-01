import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Efficiensee</h1>
        <p className="text-muted-foreground">Intelligence Platform for Data-Driven Organizations</p>
        <Link
          href="/dashboards/stakeholder"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          View Stakeholder Dashboard
        </Link>
      </div>
    </div>
  )
}
