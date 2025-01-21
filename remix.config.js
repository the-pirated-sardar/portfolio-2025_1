/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "app", // Default Remix app directory
    assetsBuildDirectory: "public/build", // Where built assets are placed
    serverBuildDirectory: "netlify/functions", // Server build directory for Netlify
    publicPath: "/build/", // Path to static assets
    serverBuildTarget: "netlify", // Use the Netlify target
    ignoredRouteFiles: ["**/.*"], // Ignore hidden files
  };
  