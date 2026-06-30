// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Remove this deprecated option:
    // domains: ['images.unsplash.com', 'picsum.photos'],
    
    // Use remotePatterns instead:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS images (use cautiously)
      },
    ],
  },
  // ... rest of your config
};

module.exports = nextConfig;