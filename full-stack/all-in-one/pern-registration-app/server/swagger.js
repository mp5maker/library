const path = require("path");

const swaggerAutogen = require("swagger-autogen")();
const outputFile = path.join(__dirname, "swaggerOutput.json");
const endpointsFiles = [path.join(__dirname, "routes/jwtAuth.js")];
swaggerAutogen(outputFile, endpointsFiles);
