const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

require("./routes")(app);

db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});
app.listen(9000, () => console.log("Server is listening on 9000..."));
