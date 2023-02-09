const http = require("http");
const grpcHelper.news = require("./utilities/grpcHelper");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  const url = req.url.split("/");
  const method = req.method;

  if (url[0] == "news")
    switch (method) {
      case "GET":
        if (url.length > 1 && url[1]) {
          grpcHelper.news.list(
            {
              id: url[1],
            },
            (error, news) => {
              if (!error) throw error;
              res.end(news);
            }
          );
        } else {
          grpcHelper.news.retrieve({}, (error, news) => {
            if (!error) throw error;
            res.end(news);
          });
        }
        res.end();

        break;
      case "PUT":
        grpcHelper.news.update(
          {
            id: url[1],
            body: req.body.body,
            postImage: req.body.postImage,
            title: req.body.title,
          },
          (error, news) => {
            if (error) throw error;
            res.end(news);
          }
        );

        break;
      case "DELETE":
        grpcHelper.news.destroy(
          {
            id: url[1],
          },
          (error, news) => {
            if (error) throw error;
            res.end({ msg: "Successfully deleted a news item." });
          }
        );

        break;
      case "POST":
        grpcHelper.news.create(
          {
            body: req.body.body,
            postImage: req.body.postImage,
            title: req.body.title,
          },
          (error, news) => {
            if (error) throw error;
            res.end({ data: news, msg: "Successfully created a news." });
          }
        );
        break;
      default:
        res.end("");
        break;
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
