// module.exports = () => ({});
module.exports = ({ env }) => ({
    upload: {
      enabled: true,
      config: {
        provider: "local",
        providerOptions: {
          sizeLimit: 1000000, // 1MB
          localServer: {
            maxage: 300000,
          },
        },
        breakpoints: {
          large: 0,
          medium: 0,
          small: 0,
          xsmall: 0,
        },
      },
    },
  });