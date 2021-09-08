const httpRequest = require("./httpRequest");

const findRecipe = (dish) =>
  httpRequest({
    Basil: "2 cups",
    "Pine Nuts": "2 tablespoons",
    Garlic: "2 cloves",
    "Olive Oil": "0.5 cups",
    "Grated Parmesan": "0.5 cups",
  });

module.exports = findRecipe;
