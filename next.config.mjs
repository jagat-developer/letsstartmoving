const serviceRedirects = [
  "residential-services",
  "local-moving",
  "home-furniture-moving",
  "piano-moving",
  "home-moving",
  "appliance-moving",
  "couch-moving",
  "hot-tub-moving",
  "refrigerator-moving",
  "treadmill-moving",
  "small-items-moving",
  "commercial-services",
  "office-furniture-moving",
  "inventory-moving",
  "warehouse-moving",
  "packing-services",
  "long-distance-moving-ottawa",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: false },
      { source: "/about-us.html", destination: "/about-us", permanent: false },
      { source: "/services.html", destination: "/services", permanent: false },
      { source: "/contact-us.html", destination: "/contact-us", permanent: false },
      { source: "/getaquote.html", destination: "/get-a-quote", permanent: false },
      { source: "/videoquote.html", destination: "/video-quote", permanent: false },
      ...serviceRedirects.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
