const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");

module.exports = () => {
  const app = express();
  app.set("port", process.env.PORT || config.get("server.port"));

  require("../api/routes/customerWallets")(app);
  app.use(bodyParser.json());
  
  // app.use(express.json());
  // app.use(
  //   express.urlencoded({
  //     extended: true,
  //   })
  // );
  return app;
};
