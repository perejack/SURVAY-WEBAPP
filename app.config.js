// This configuration is applied after app.json is loaded
module.exports = ({ config }) => ({
  ...config,
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/applogo.png",
  },
  plugins: [
    ...(config.plugins || []),
    "expo-router"
  ],
  extra: {
    ...(config.extra || {}),
    router: {
      origin: false
    },
    eas: {
      projectId: "survay-webapp"
    }
  }
});
