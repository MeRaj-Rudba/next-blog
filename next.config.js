const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "lumiereAdmin",
        mongodb_password: "dariusme1",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blog-site-dev",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "lumiereAdmin",
      mongodb_password: "dariusme1",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blog-site-production",
    },
  };
};
