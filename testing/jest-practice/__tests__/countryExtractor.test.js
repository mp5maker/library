const countryExtractor = require("../countryExtractor");

const countriesAllData = [
  { name: "Argentina", capital: "Buenos Aires" },
  { name: "Belize", capital: "Belmopan" },
  { name: "Bolivia", capital: "Sucre" },
];

const countryList = countryExtractor(countriesAllData);
const countryNames = ["Argentina", "Belize", "Bolivia"];

test("convert array of country data objects to array of countries", () => {
  expect(countryList[0]).toBe("Argentina");
  expect(countryList).toEqual(countryNames);
  expect(countryList).toContain("Belize");
  expect(countryList[2] == "Bolivia").toBeTruthy();
  expect(countryList[3]).not.toBeDefined();
});
