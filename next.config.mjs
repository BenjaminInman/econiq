/** @type {import('next').NextConfig} */
const PAGES = [
  'index','about','courses','recon','special-ops','enroll','cycle-score',
  'cignal','signals','books','ahead-of-the-herd','terms','privacy','disclaimer',
];

const nextConfig = {
  async redirects() {
    return [
      // curriculum moved under the /multifamily/ vertical namespace (2026-09)
      { source: '/recon/:path*', destination: '/multifamily/recon/:path*', permanent: true },
      { source: '/site/recon/:path*', destination: '/multifamily/recon/:path*', permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/site/index.html' },
        { source: `/:page(${PAGES.join('|')}).html`, destination: '/site/:page.html' },
        { source: `/:page(${PAGES.join('|')})`, destination: '/site/:page.html' },
        { source: '/assets/:path*', destination: '/site/assets/:path*' },
        { source: '/multifamily/:path*', destination: '/site/multifamily/:path*' },
      ],
    };
  },
};

export default nextConfig;
