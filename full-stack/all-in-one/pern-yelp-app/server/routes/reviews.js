const router = require("express").Router();
const get = require("lodash/get");
const db = require("../db");
const head = require("lodash/head");

router.post("/", async (request, response) => {
  try {
    const body = get(request, "body", {});
    const restaurant_id = get(body, "restaurant_id", "");
    const name = get(body, "name", "");
    const review = get(body, "review", "");
    const rating = get(body, "rating", "");

    const results = await db.query(
      "INSERT INTO reviews(restaurant_id, name, review, rating) values($1, $2, $3, $4) RETURNING *",
      [restaurant_id, name, review, rating]
    );

    console.log(results)
    response.status(201).json({
      data: head(get(results, "rows", [])),
      count: get(results, "rowCount", 0),
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
