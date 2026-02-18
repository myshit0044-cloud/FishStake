import Link from 'next/link'

export default function Dashboard() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Dashboard</h1>
      <p style={{ marginTop: '1rem' }}>
        Welcome to the Fish Stake dashboard!
      </p>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Vercel Analytics Status</h2>
        <p style={{ marginTop: '1rem' }}>
          ✅ Analytics component is integrated in the root layout
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          ✅ Page views are being tracked automatically
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          ✅ Route changes are monitored
        </p>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #0ea5e9' }}>
        <h3>📊 View Your Analytics</h3>
        <p style={{ marginTop: '1rem' }}>
          After deploying to Vercel, visit your project dashboard and click the
          <strong> Analytics</strong> tab to view:
        </p>
        <ul style={{ marginTop: '1rem' }}>
          <li>Real-time visitor data</li>
          <li>Page view statistics</li>
          <li>Top pages and referrers</li>
          <li>Geographic distribution</li>
          <li>Device and browser information</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fefce8', borderRadius: '8px', border: '1px solid #facc15' }}>
        <h3>💡 Verification</h3>
        <p style={{ marginTop: '1rem' }}>
          To verify analytics is working, open your browser&apos;s Network tab and look for
          a request to <code>/_vercel/insights/view</code> when you navigate between pages.
        </p>
      </div>

      <nav style={{ marginTop: '2rem' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </main>
  )
}
