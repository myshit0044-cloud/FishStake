import Link from 'next/link'

export default function About() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>About Fish Stake</h1>
      <p style={{ marginTop: '1rem' }}>
        Fish Stake is a demonstration project showcasing Next.js with Vercel Web Analytics.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Technology Stack</h2>
        <ul style={{ marginTop: '1rem' }}>
          <li>Next.js 14 with App Router</li>
          <li>TypeScript for type safety</li>
          <li>Vercel Web Analytics for visitor tracking</li>
          <li>Modern React patterns</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Analytics Features</h2>
        <p style={{ marginTop: '1rem' }}>
          With Vercel Web Analytics enabled, this application tracks:
        </p>
        <ul style={{ marginTop: '1rem' }}>
          <li>Page views across all routes</li>
          <li>Visitor information (respecting privacy)</li>
          <li>Performance metrics</li>
          <li>User engagement data</li>
        </ul>
      </div>

      <nav style={{ marginTop: '2rem' }}>
        <Link href="/">← Back to Home</Link>
      </nav>
    </main>
  )
}
