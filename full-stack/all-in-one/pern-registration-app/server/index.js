require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

// App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/jwtAuth"));

// Assets
app.use(express.static(path.join(__dirname, "static")));

// Listen
app.listen(4000, () => {
  console.log("Listening to 4000");
});
