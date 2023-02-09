const grpc = require("@grpc/grpc-js");
const PROTO_PATH = "../settings/news.proto";
const protoLoader = require("@grpc/proto-loader");
const options = require('../settings/options')
const news = require('../settings/news')

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const newsProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();

server.addService(newsProto.NewsService.service, {
  list: (_, callback) => {
    callback(null, news);
  },
  retrieve: (_, callback) => {
    const newsId = _.request.id;
    const newsItem = news.find(({ id }) => newsId == id);
    callback(null, newsItem);
  },
  destroy: (_, callback) => {
    const newsId = _.request.id;
    news = news.filter(({ id }) => id !== newsId);
    callback(null, {});
  },
  update: (_, callback) => {
    const newsId = _.request.id;
    const newsItem = news.find(({ id }) => newsId == id);
    newsItem.body = _.request.body;
    newsItem.postImage = _.request.postImage;
    newsItem.title = _.request.title;
    callback(null, newsItem);
  },
  create: (call, callback) => {
    let _news = { id: Date.now(), ...call.request };
    news.push(_news);
    callback(null, _news);
  },
});

server.bindAsync(
  "127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server at port:", port);
    console.log("Server running at http://127.0.0.1:50051");
    server.start();
  }
);
