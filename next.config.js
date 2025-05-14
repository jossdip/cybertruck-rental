/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/rentals/:path*',
        destination: 'https://rentals.wattevillegroup.ch/:path*',
      },
    ]
  }
}

module.exports = nextConfig
