import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to Fish Stake</h1>
      <p>A Next.js application with Vercel Web Analytics</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Features</h2>
        <ul>
          <li>Built with Next.js 14 (App Router)</li>
          <li>TypeScript support</li>
          <li>Vercel Web Analytics integrated</li>
          <li>Ready for deployment</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Navigation</h2>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
