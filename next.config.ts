/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ia.media-imdb.com',
            port: '',
            //pathname: '/account123/**',
          },
        
        ],
      },
};

export default nextConfig;
