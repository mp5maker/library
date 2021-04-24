const genericFilter = <T>(
  object: T,
  filterProperties: Array<keyof T>
): boolean => {
  return filterProperties.every((filterProperty) => {
    return object[filterProperty] ? true : false;
  });
};

export default genericFilter;
