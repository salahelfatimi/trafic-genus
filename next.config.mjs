/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lime-tiger-201835.hostingersite.com',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
};

export default nextConfig;
