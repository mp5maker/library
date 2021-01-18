import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import * as express from "express";

const app = express();

// Middleware
app.use(express.json())

// Route
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello There")
})
app.post("/register", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    token: 'dummy-token',
    refreshToken: 'dummy-refresh-token',
    user: {
      id: 1,
      username: 'dummy-username'
    }
  })
})

// Lis
app.listen(4000, () => {
  console.log("Successfully Connected to Port: 4000");
});

createConnection()
  .then(async (connection) => {})
  .catch((error) => console.log(error));
