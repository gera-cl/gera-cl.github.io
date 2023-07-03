/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "",
    images: {
      loader: 'custom',
      loaderFile: './app/image.ts',
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dptvuhhed/**',
        },
      ],
    },
}

module.exports = nextConfig
