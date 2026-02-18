# Fish Stake

A Next.js application with Vercel Web Analytics integrated.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Vercel Web Analytics pre-configured
- ✅ Multiple pages demonstrating route tracking
- ✅ Ready for deployment to Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- A Vercel account (for analytics features)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Vercel Web Analytics

This project has Vercel Web Analytics pre-configured using the `@vercel/analytics` package.

### How it works

The `<Analytics />` component from `@vercel/analytics/next` is added to the root layout (`app/layout.tsx`), which automatically:
- Tracks page views across all routes
- Monitors route changes
- Collects visitor analytics (privacy-compliant)
- Reports performance metrics

### Enabling Analytics

1. Deploy your app to Vercel:
```bash
vercel deploy
```

2. In your Vercel dashboard:
   - Go to your project
   - Click the **Analytics** tab
   - Click **Enable** to activate Web Analytics

3. After enabling, redeploy if necessary to ensure the analytics routes are active.

### Verifying Analytics

After deployment, you can verify analytics is working by:
1. Opening your deployed site
2. Opening browser DevTools (F12)
3. Going to the Network tab
4. Navigating between pages
5. Looking for requests to `/_vercel/insights/view`

### Viewing Your Data

Once enabled and deployed:
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. View real-time visitor data, page views, and more

## Project Structure

```
fish-stake/
├── app/
│   ├── layout.tsx          # Root layout with Analytics component
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   └── dashboard/
│       └── page.tsx        # Dashboard page
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Deployment

Deploy to Vercel with one command:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on every push.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Web Analytics](https://vercel.com/docs/analytics)
- [Vercel Deployment](https://vercel.com/docs/deployments/overview)

## License

MIT
