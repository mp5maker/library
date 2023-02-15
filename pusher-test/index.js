const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1554597",
  key: "aebb52d0c2aaa79c0958",
  secret: "1ad24135b9e8161d15b1",
  cluster: "ap2",
  useTLS: true,
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world",
});
