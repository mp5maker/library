const apiRequest = jest.fn(() => {
  return Promise.resolve({
    status: "",
    data: {}
  })
})

module.exports = apiRequest;