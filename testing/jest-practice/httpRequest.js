const httpRequest = (data) =>
  Promise.resolve({ status: 200, data: data ? data : { first: "hello" } });

module.exports = httpRequest;
