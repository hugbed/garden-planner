const db = require(".");

module.exports.fetchAll = async () => {
  return await db.fetchAllRows("plant_view");
};
