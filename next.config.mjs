/** @type {import('next').NextConfig} */
const PAGES = [
  'index','about','courses','recon','enroll','cycle-score',
  'cignal','signals','ahead-of-the-herd','terms','privacy','disclaimer',
];

const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/site/index.html' },
        { source: `/:page(${PAGES.join('|')}).html`, destination: '/site/:page.html' },
        { source: `/:page(${PAGES.join('|')})`, destination: '/site/:page.html' },
        { source: '/assets/:path*', destination: '/site/assets/:path*' },
      ],
    };
  },
};

export default nextConfig;
