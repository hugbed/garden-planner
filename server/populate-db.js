const fs = require("fs");
const path = require("path");
const db = require("./db");

function loadJSON(file) {
  let rawdata = fs.readFileSync(path.join(__dirname, file));
  return JSON.parse(rawdata);
}

async function getCategoryID(client, category) {
  const res = await client.query("SELECT id from category where name = $1", [
    category,
  ]);
  if (res.rows === undefined || res.rows.length === 0) {
    return null;
  }
  return res.rows[0].id;
}

async function addCategory(client, category) {
  // Check if category already exists
  const categoryID = await getCategoryID(client, category);
  if (categoryID != null) {
    console.log(`Category already exists: ${category}`);
    return;
  }

  // If not, add it to the category table
  console.log(`Adding new category: ${category}`);
  await client.query("INSERT INTO category(name) VALUES ($1)", [category]);
}

async function addPlant(client, category, plant) {
  // Find category name by ID
  const categoryID = await getCategoryID(client, category);
  if (categoryID == null) {
    return;
  }

  await client.query(
    "INSERT INTO plant(category, name, image) VALUES ($1, $2, $3)",
    [categoryID, plant, `${plant}_256x256.jpg`]
  );
}

async function loadPlantsFromJson() {
  const plants = loadJSON("../db/plants.json");

  const client = await db.connect();

  try {
    await client.query("BEGIN");

    for (category in plants.categories) {
      console.log(`Adding category: ${category}`);
      await addCategory(client, category);
      for (plant of plants.categories[category]) {
        console.log(`Adding plant: ${plant}`);
        await addPlant(client, category, plant);
      }
    }

    await client.query("COMMIT");

    // console.log("Category: " + category);
    // console.log("Plants: " + plants.categories[category]);
  } catch (err) {
    await client.query("ROLLBACK");
    console.log("Rolling back brah!");
    console.log(`Error: ${err}`);
    throw err;
  }
}

// todo: add a --force or clear mode, and have the normal mode add stuff only if it's not already there.

(async () => {
  await loadPlantsFromJson();
})()
  .then(() => console.log("All done!"))
  .catch((e) => console.error(e.stack));
