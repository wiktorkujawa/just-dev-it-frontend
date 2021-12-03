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
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  }
}
