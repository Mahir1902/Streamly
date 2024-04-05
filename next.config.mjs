/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname: 'avatars.githubusercontent.com',
                
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/**'
            },
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            }
        ]
    }
};

export default nextConfig;
