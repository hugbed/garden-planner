const plants = require("../db/plants");
const Router = require("express-promise-router");

const router = new Router();

router.get("/", async (req, res) => {
  res.send(JSON.stringify(await plants.fetchAll()));
});

module.exports = router;
