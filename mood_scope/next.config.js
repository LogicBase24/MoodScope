/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    async redirects() {
      return [
        {
          source: '/my-page',
          destination: '/path/to/your/custom-page',
          permanent: true,
        },
      ];
    },
  };
  