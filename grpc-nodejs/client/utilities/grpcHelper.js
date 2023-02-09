const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "../../settings/news.proto";


const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const NewsService = grpc.loadPackageDefinition(packageDefinition).NewsService;

const news = new NewsService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

const grpcHelper = {
  news
}

module.exports = grpcHelper;
