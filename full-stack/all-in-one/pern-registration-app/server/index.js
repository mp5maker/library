require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./swaggerOutput.json");

// App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerFile));

// Assets
app.use(express.static(path.join(__dirname, "static")));

// Listen
app.listen(4000, () => {
  console.log("Listening to 4000");
});
