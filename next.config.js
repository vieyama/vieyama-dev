const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack: (config, { isServer }) => {
        config.resolve.alias['~'] = path.join(__dirname, 'src');
        return config;
    },
    images: {
        domains: ['images.unsplash.com', 'storage.googleapis.com']
    }
}

module.exports = nextConfig
