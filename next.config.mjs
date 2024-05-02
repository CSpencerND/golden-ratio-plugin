// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "nextuipro.nyc3.cdn.digitaloceanspaces.com",
                pathname: "/components-images/places/**",
            },
        ],
    },
};

export default withPlaiceholder(nextConfig);
