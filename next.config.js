const { GuessPlugin } = require("guess-webpack");
module.exports = {
  webpack: function (config, { isServer }) {
    if (isServer) return config;
    config.plugins.push(
      new GuessPlugin({
      //Here you can add your Google Analytics View ID
      //GA: "XXXX",
        reportProvider() {
          return Promise.resolve(
            JSON.parse(require("fs").readFileSync("./routes.json"))
          );
        },
      })
    );
    return config;
  },
};