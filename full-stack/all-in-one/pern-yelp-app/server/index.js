require("dotenv-safe").config({
  allowEmptyValues: true,
});
const express = require("express");
const cors = require("cors");
const path = require("path");
const logs = require('./middlewares/log')

const PORT = 5000;
const app = express();
const version = "/api/v1";

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(logs)

/* STATIC */
app.use(express.static(path.join(__dirname, "static")));

/* ROUTES */
app.use(`${version}/restaurants`, require("./routes/restaurants"));
app.use(`${version}/reviews`, require("./routes/reviews"));
app.use(`${version}/report`, require("./routes/report"));
app.use(`${version}/elasticsearch`, require('./routes/elasticsearch'));

/* SERVER */
app.listen(PORT, () => {
  console.log(`Connected to the Port: ${PORT}`);
});
