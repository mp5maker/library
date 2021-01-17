const router = require("express").Router();
const elasticSearchClient = require("../elasticsearch");

router.get("/health", async (_request, response) => {
  try {
    await elasticSearchClient.cluster.health(
      {},
      (eError, eResponse, eStatus) => {
        response.status(200).json({
          response: eResponse,
          error: eError,
          status: eStatus,
        });
      }
    );
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

router.get("/logs", async (_request, response) => {
  try {
    const results = await elasticSearchClient.search({
      index: "logs",
    });
    response.status(200).json({
      results,
    });
  } catch (error) {
    response.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
