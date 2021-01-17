const router = require("express").Router();
const db = require("../db");
const get = require("lodash/get");
const head = require("lodash/head");

router.get("/", async (_request, response) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    response.status(200).json({
      data: get(results, "rows", []),
      count: get(results, "rowCount", 0),
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = get(request, "params.id", "");
    const results = await db.query(
      "SELECT * FROM restaurants WHERE id = ($1)",
      [id]
    );
    response.status(200).json({
      data: head(get(results, "rows", [])),
      count: get(results, "rowCount", 0),
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

router.patch("/:id", (request, response) => {
  const id = get(request, "params.id", "");
  const body = get(request, "body", {});
  response.send("these are the restaurants");
});

router.put("/:id", async (request, response) => {
  try {
    const id = get(request, "params.id", "");
    const body = get(request, "body", {});
    const name = get(body, "name", "");
    const location = get(body, "location", "");
    const price_range = get(body, "price_range", "");
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
      [name, location, price_range, id]
    );
    response.status(200).json({
      data: get(results, "rows", []),
      count: get(results, "rowCount", 0),
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const body = get(request, "body", {});
    const name = get(body, "name", "");
    const location = get(body, "location", "");
    const price_range = get(body, "price_range", "");
    const results = await db.query(
      "INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *",
      [name, location, price_range]
    );
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

router.delete("/:id", async (request, response) => {
  try {
    const id = get(request, "params.id", "");
    const results = await db.query(
      "DELETE FROM restaurants WHERE id = $1 RETURNING *",
      [id]
    );
    console.log(results);
    response.status(200).json({
      data: get(results, "rows", []),
      count: get(results, "rowCount", 0),
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

router.get("/:id/reviews", async (request, response) => {
  try {
    const id = get(request, "params.id", "");
    const results = await db.query(
      "SELECT * FROM reviews WHERE restaurant_id = $1",
      [id]
    );
    response.status(200).json({
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
