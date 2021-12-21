/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: [
      'd2k0dwyogc7m42.cloudfront.net'
    ]
  },
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  }
}
