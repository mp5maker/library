const router = require("express").Router();
const get = require("lodash/get");
const head = require("lodash/head");
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utilities/jwtGenerator");

router.post("/register", async (request, response) => {
  try {
    const name = get(request, "body.name", "");
    const email = get(request, "body.email", "");
    const password = get(request, "body.password", "");

    if (name && email && password) {
      const user = await pool.query("SELECT * FROM users WHERE email = ($1)", [
        email,
      ]);

      if (user.rows.length !== 0) {
        return response.status(401).send("User already exists");
      }

      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const brcyptPassword = await bcrypt.hash(password, salt);

      const newUser = await pool.query(
        "INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, brcyptPassword]
      );

      const token = await jwtGenerator({ id: head(newUser.rows).id });
      response.json({ token });
    } else new Error("");
  } catch (error) {
    console.error(error.message);
    return response.status(500).send("Server Error");
  }
});

module.exports = router;
