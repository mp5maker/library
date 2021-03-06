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

  console.log("_.split");
  const lodashSplit = _.split("first/second", "/");
  console.log("lodashSplit", lodashSplit);

  console.log("_.join");
  const lodashJoin = _.join(["first", "second"], ", ");
  console.log("lodashJoin", lodashJoin);

  console.log("_.capitalize");
  const lodashCapitalize = _.capitalize("HOW are You, broo?");
  console.log("lodashCapitalize", lodashCapitalize);

  console.log("_.camelCase");
  const lodashCamelCase = _.camelCase("bro-you-go-tit");
  console.log("lodashCamelCase", lodashCamelCase);

  console.log("_.snakeCase");
  const lodashSnakeCase = _.snakeCase("bro-you-go-tit");
  console.log("lodashSnakeCase", lodashSnakeCase);

  console.log("_.random");
  const lodashRandom = _.random(100);
  console.log("lodashRandom", lodashRandom);

  console.log("_.flatten");
  const lodashFlatten = _.flatten([
    [1, 2],
    [3, 4],
  ]);
  console.log("lodashFlatten", lodashFlatten);

  console.log("_.compact");
  const lodashCompact = _.compact([1, 2, null, 3, undefined, 0, false, 4, ""]);
  console.log("lodashCompact", lodashCompact);

  console.log("_.assign");
  const lodashAssign = _.assign(
    { isLoading: true, data: null, error: null },
    { isLoading: false, data: { id: 1, name: "John" } }
  );
  console.log("lodashAssign", lodashAssign);

  console.log("_.clone");
  const lodashClone = _.clone({ isLoading: true, data: null, error: null });
  console.log("lodashClone", lodashClone);

  console.log("_.cloneDeep");
  const lodashCloneDeep = _.cloneDeep({
    isLoading: true,
    data: null,
    error: null,
  });
  console.log("lodashCloneDeep", lodashCloneDeep);

  console.log("_.isEqual");
  const lodashIsEqual = _.isEqual(1, "1");
  const lodashIsEqualTwo = _.isEqual({ a: "a" }, { a: "a" });
  console.log("lodashIsEqual", lodashIsEqual);
  console.log("lodashIsEqualTwo", lodashIsEqualTwo);

  console.log("_.isEmpty");
  const lodashIsEmpty = _.isEmpty([]);
  console.log("lodashIsEmpty", lodashIsEmpty);

  console.log("_.isNil");
  const lodashIsNill = _.isNil(null);
  console.log("lodashIsNill", lodashIsNill);

  console.log("_.debounce");
  const searchElement = document.querySelector(".search");
  searchElement.addEventListener(
    "keyup",
    _.debounce((event) => {
      console.log(event.target.value);
    }, 250)
  );

  console.log("_.throttle");
  const buttonElement = document.querySelector(".go");
  buttonElement.addEventListener(
    "click",
    _.throttle((_event) => {
      console.log("clicked");
    }, 2000)
  );
})();
