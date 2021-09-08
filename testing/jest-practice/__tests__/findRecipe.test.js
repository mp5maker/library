const findRecipe = require("../findRecipe");

test("Asynchronously fetch the recipe", (done) => {
  const dish = "pesto";
  const expectedRecipe = {
    Basil: "2 cups",
    "Pine Nuts": "2 tablespoons",
    Garlic: "2 cloves",
    "Olive Oil": "0.5 cups",
    "Grated Parmesan": "0.5 cups",
  };

  findRecipe(dish)
    .then((actualRecipe) => {
      expect(actualRecipe).toEqual(expectedRecipe);
      done();
    })
    .catch((error) => {
      done(error);
    });
});


test("get the full recipe for pesto", async () => {
  //arrange
  const dish = "Pesto";
  const expectedRecipe = {
    Basil: "2 cups",
    "Pine Nuts": "2 tablespoons",
    Garlic: "2 cloves",
    "Olive Oil": "0.5 cups",
    "Grated Parmesan": "0.5 cups",
  };

  //act
  const actualRecipe = await findRecipe(dish);

  //assertion
  expect(actualRecipe).toEqual(expectedRecipe);
});