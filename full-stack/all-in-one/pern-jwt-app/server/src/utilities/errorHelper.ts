import get from "lodash/get";

export default {
  generate: (error) => {
    const inner = get(error, "inner", []);
    return inner.reduce((allErrors, newError) => {
      const message = get(newError, "message", "");
      const path = get(newError, "path", "");
      return {
        ...allErrors,
        [path]: message,
      };
    }, {});
  },
};
