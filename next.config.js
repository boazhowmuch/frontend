/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: '/api/:path*',
        destination: `http://43.201.117.177:80/:path*`,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
