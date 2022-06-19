const path = require("path");
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    domains: ['static2.tgstat.ru','static4.tgstat.ru'],
  },
};

module.exports = nextConfig;
