const router = require("express").Router();
const get = require("lodash/get");

router.get("/", (_request, response) => {
  response.send("these are the restaurants");
});

router.get("/:id", (request, response) => {
  const id = get(request, "params.id", "");
  response.send("these are the restaurants");
});

router.patch("/:id", (request, response) => {
  const id = get(request, "params.id", "");
  const body = get(request, "body", {});
  response.send("these are the restaurants");
});

router.put("/:id", (request, response) => {
  const id = get(request, "params.id", "");
  const body = get(request, "body", {});
  response.send("these are the restaurants");
});

router.post("/", (request, response) => {
  const body = get(request, "body", {});
  response.send("these are the restaurants");
});

router.delete("/:id", (request, response) => {
  const id = get(request, "params.id", "");
  response.send("these are the restaurants");
});

module.exports = router;
