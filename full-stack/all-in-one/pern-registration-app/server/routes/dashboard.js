const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (request, response) => {
  try {
    const user = await pool.query("SELECT name FROM  users where id = ($1)", [
      request.user,
    ]);
    return response.json(user.rows[0]);
  } catch (error) {
    console.error(error.message);
    response.status(500).json("Server Error");
  }
});

module.exports = router;
