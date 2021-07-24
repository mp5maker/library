const http = require("http");

const options = {
  host: "https://jsonplaceholder.typicode.com/todos",
};

const httpRequest = (options) => {
  return new Promise((resolve, reject) => {
    const callback = (response) => {
      try {
        var str = "";
        response.on("data", (chunk) => {
          str += chunk;
        });

        response.on("end", () => {
          resolve(str);
        });
      } catch (error) {
        reject(error);
      }
    };

    http.request(options, callback);
  });
};

const init = async () => {
  const data = await httpRequest(options);
  console.log(data);
};

init();
