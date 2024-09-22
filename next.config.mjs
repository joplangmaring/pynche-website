/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add handlebars-loader for .hbs files
        config.module.rules.push({
            test: /\.hbs$/,
            loader: 'handlebars-loader',
        });
        
        // Important: Return the modified config
        return config;
    },
};

export default nextConfig;
