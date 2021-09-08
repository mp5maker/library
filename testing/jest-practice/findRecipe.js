const findRecipe = (dish) =>
  new Promise((resolve, reject) => {
    const recipe = {
      Basil: "2 cups",
      "Pine Nuts": "2 tablespoons",
      Garlic: "2 cloves",
      "Olive Oil": "0.5 cups",
      "Grated Parmesan": "0.5 cups",
    };

    try {
      setTimeout(() => {
        resolve(recipe);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });

module.exports = findRecipe;
