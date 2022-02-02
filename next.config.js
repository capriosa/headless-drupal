module.exports = {
  images: {
    domains: ["communitiesdev.devcloud.acquia-sites.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ]
  },
}
