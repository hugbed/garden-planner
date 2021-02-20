const plants = require("./plants");

module.exports = (app) => {
  app.use("/plants", plants);
};
