/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'cloudinary',
        loaderFile: 'https://res.cloudinary.com/dptvuhhed/image/upload/',
      }
}

module.exports = nextConfig
