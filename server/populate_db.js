const fs = require("fs");
const path = require("path");
const db = require("./db");

function loadJSON(file) {
  let rawdata = fs.readFileSync(path.join(__dirname, file));
  return JSON.parse(rawdata);
}

function loadPlantsFromJson() {
  const plants = loadJSON("../db/plants.json");
  console.log(plants);
}

// todo:
// 1. If -force, or if the plants table doesn't exist, run 1_db.sql
//    Should have a version in the database to know what migrations to apply.
// 2. Load data from plants.json into the db. (if it's just an update, make sure it works).

loadPlantsFromJson();
