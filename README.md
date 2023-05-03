# [Craig Parfitt - Portfolio Headless CMS](https://www.craigparfitt.com/)

<https://www.craigparfitt.com>

This is the front end.
Built with [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The backend is located [GitHub](https://github.com/craigsteel/csportfoliosanity.git).
Built With [SanityStudio](https://www.sanity.io/).
A content management system.

The front and backend are both deployed and hosted with [vercel.com](https://vercel.com/).

## Getting Started

create `.env.local` file in root folder with values of:

```javascript
SANITY_DATASET_NAME=YOUR_DATASET_NAME // from sanity dashboard
SANITY_PROJECT_ID=YOUR_PROJECT_ID // from sanity dashboard
SANITY_PREVIEW_SECRET=YOUR_PREVIEW_SECRET // unique string
SANITY_API_TOKEN=YOUR_API_TOKEN // from sanity dashboard
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000] with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
