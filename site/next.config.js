/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Devick Kasm workspaces',
    description: 'The official store for devick kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://devick.github.io/kasm_repository/',
    contactUrl: 'https://devick.github.io/kasm_repository/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_repository/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
