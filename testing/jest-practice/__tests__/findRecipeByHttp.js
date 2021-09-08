const httpRequest = require("../httpRequest");
const findRecipeByHttp = require('../findRecipeByHttp.js')

// This step is required when we are exporting from the node_modules directory
jest.mock("../httpRequest.js");


test("get the full recipe for a dish", async () => {
  // arrange
  const dish = "Pesto";
  const expectedValue = { "Magical Deliciousness": "3 cups" };

  // set the resolved value for the next call to apiRequest
  const mockResponse = {
    status: 200,
    data: { "Magical Deliciousness": "3 cups" },
  };
  httpRequest.mockResolvedValueOnce(mockResponse);

  // act
  const actualRecipe = await findRecipeByHttp(dish);

  // assertion
  expect(actualRecipe.data).toEqual(expectedValue);
});
