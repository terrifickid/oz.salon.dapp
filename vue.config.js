const dotenvJSON = require("dotenv-json");
dotenvJSON(); // Loads .env.json from project root

module.exports = {
  lintOnSave: false,
  devServer: {
    webSocketServer: false,
  },
};
