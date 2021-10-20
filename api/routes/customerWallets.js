module.exports = (app) => {
  const controller = require("../controllers/customerWallets")();

  app.route("/api/routes/customerWallets").get(controller.listCustomerWallets);
};
