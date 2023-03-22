require("dotenv").config();
const express = require("express");
const router = require("./routes/routes");
require("./models/db");
const cors = require("cors");
const PORT = process.env.PORT || 2030;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/todos", router);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`connected to ${PORT}`);
});
