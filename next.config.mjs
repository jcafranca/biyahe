/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
        'www.facebook.com', 
        'scontent.fmnl9-2.fna.fbcdn.net', 
        'scontent.fmnl9-3.fna.fbcdn.net'
      ],
  },
  distDir: 'build',
};

export default nextConfig;
