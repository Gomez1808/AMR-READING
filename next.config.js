/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gamebrott.com', 'rortmqmnamdxeoqqltic.supabase.co'],
  },
};

module.exports = nextConfig;
