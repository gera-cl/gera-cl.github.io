/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "",
    images: {
      loader: 'custom',
      loaderFile: './app/util/image.ts',
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/dptvuhhed/**',
        },
      ],
    },
    trailingSlash: true,
}

module.exports = nextConfig
