const get = require("lodash/get");
const head = require("lodash/head");
const db = require("../db");
const router = require("express").Router();

router.get("/restaurant/total", async (_request, response) => {
  try {
    const results = await db.query("SELECT COUNT(*) FROM restaurants");
    response.json({
      results: get(results, "rows", []),
      count: get(results, "rowCount", 0),
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

router.get("/reviews/total", async (_request, response) => {
  try {
    const results = await db.query("SELECT COUNT(*) FROM reviews");
    response.json({
      results: get(results, "rows", []),
      count: get(results, "rowCount", 0),
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

router.get("/reviews/rating/avg/:id", async (request, response) => {
  try {
    const id = get(request, "params.id", "");
    const results = await db.query(
      "SELECT ROUND(AVG(rating)) FROM reviews WHERE id = $1",
      [id]
    );
    response.json({
      results: get(results, "rows", []),
      count: get(results, "rowCount", 0),
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

router.get("/reviews/rating/avg/", async (_request, response) => {
  try {
    const results = await db.query(
      "SELECT res.name, COALESCE(ROUND(AVG(rev.rating)), 0) as total FROM reviews AS rev \
        RIGHT JOIN restaurants AS res \
        ON rev.restaurant_id = res.id \
        GROUP BY res.name \
      "
    );
    response.json({
      results: get(results, "rows", []),
      count: get(results, "rowCount", 0),
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
