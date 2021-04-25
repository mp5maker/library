import _ from "lodash";

(function () {
  console.log(_.VERSION);
  const singleEmployee = {
    id: 1,
    name: "John",
    isActive: true,
    likes: 10,
    age: 17,
  };
  const sampleData = [
    singleEmployee,
    { id: 2, name: "Jack", isActive: false, likes: 20, age: 37 },
    {
      id: 3,
      name: "Bob",
      isActive: true,
      likes: 1,
      age: 22,
    },
  ];

  console.log("_.each");
  const nativeEach = [1, 2].forEach((item) => item);
  const lodashEach = _.each([1, 2], (item) => item);
  const lodashEachTwo = _.each(singleEmployee, (item) => console.log(item));
  console.log("nativeEach", nativeEach); // undefined
  console.log("lodashEach", lodashEach); // array
  console.log("Lodash each on object", lodashEachTwo); // keys of object

  console.log("_.map");
  const nativeMap = [1, 2, 3].map((item) => item);
  const lodashMap = _.map([1, 2, 3], (item) => item);
  const lodashMapTwo = _.map(sampleData, "name");
  console.log("nativeMap", nativeMap); // undefined
  console.log("lodashMap", lodashMap); // array
  console.log("lodashMapTwo", lodashMapTwo); // array

  console.log("_.filter");
  const lodashFilter = _.filter([1, 2, 3, 4, 5], (item) => item > 3);
  const lodashFilterTwo = _.filter(sampleData, { id: 2 });
  console.log("lodashFilter", lodashFilter);
  console.log("lodashFilterTwo", lodashFilterTwo);

  console.log("_.find");
  const lodashFind = _.find(sampleData, (item) => item.id == 2);
  const lodashFindTwo = _.find(sampleData, { id: 1 });
  console.log("lodashFind", lodashFind);
  console.log("lodashFindTwo", lodashFindTwo);

  console.log("_.without");
  const lodashWithout = _.without([1, 2, 3], 1, 2);
  console.log("lodashWithout", lodashWithout);

  console.log("_.reject");
  const lodashReject = _.reject(sampleData, (item) => item.id == 1);
  const lodashRejectTwo = _.reject(sampleData, { id: 1 });
  console.log("lodashReject", lodashReject);
  console.log("lodashRejectTwo", lodashRejectTwo);

  console.log("_.every");
  const lodashEvery = _.every(sampleData, (item) => item.isActive);
  const lodashEveryTwo = _.every(sampleData, { isActive: true });
  console.log("lodashEvery", lodashEvery);
  console.log("lodashEveryTwo", lodashEveryTwo);

  console.log("_.some");
  const lodashSome = _.some(sampleData, (item) => item.isActive);
  const lodashSomeTwo = _.some(sampleData, { isActive: true });
  console.log("lodashSome", lodashSome);
  console.log("lodashSomeTwo", lodashSomeTwo);

  console.log("_.orderBy");
  const nativeSort = [...sampleData].sort((a, b) =>
    a.likes > b.likes ? -1 : 1
  ); // mutable
  const lodashOrderBy = _.orderBy(
    sampleData,
    ["likes", "name"],
    ["desc", "asc"]
  );
  console.log("nativeSort", nativeSort);
  console.log("lodashOrderBy", lodashOrderBy);

  console.log("_.groupBy");
  const lodashGroupBy = _.groupBy(sampleData, (user) => user.isActive);
  console.log("lodashGroupBy", lodashGroupBy);

  console.log("_.chain");
  const lodashChain = _.chain(sampleData)
    .filter("isActive")
    .orderBy(["age"])
    .head()
    .value();
  console.log("lodashChain", lodashChain);

  console.log("_.head");
  const lodashHead = _.head(sampleData);
  console.log("lodashHead", lodashHead);

  console.log("_.tail");
  const lodashTail = _.tail(sampleData);
  console.log("lodashTail", lodashTail);

  console.log("_.last");
  const lodashLast = _.last(sampleData);
  console.log("lodashLast", lodashLast);

  console.log("_.initial");
  const lodashInitial = _.initial(sampleData);
  console.log("lodashInitial", lodashInitial);

  console.log("_.toUpper");
  const lodashUpper = _.toUpper("aaA");
  console.log("lodashUpper", lodashUpper);

  console.log("_.toLower");
  const lodashLower = _.toLower("bbB");
  console.log("lodashLower", lodashLower);
})();
