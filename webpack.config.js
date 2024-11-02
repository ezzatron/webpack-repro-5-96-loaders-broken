const { join } = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    assetModuleFilename: "[name].public[ext]",
    filename: "main.js",
    path: join(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /txt$/,
        type: "asset/resource",
      },
      {
        test: /\/asset\.json$/,
        use: join(__dirname, "src/loader.js"),
      },
    ],
  },
};
