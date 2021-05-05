const express = require("express");
const mountRoutes = require("./routes");

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
mountRoutes(app);

app.listen(3100, () => {
  console.log("listening on 3100");
});
