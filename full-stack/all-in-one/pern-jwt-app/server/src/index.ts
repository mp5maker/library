import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import express from "express";
import get from "lodash/get";
import { RegisterDTO } from "./dto/request/register.dto";
import { Database } from "./database";
import registerSchema from "./schema/register.schema";

const app = express();

// Middleware
app.use(express.json());
Database.initialize();

// Route
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello There");
});
app.post("/register", (req: express.Request, res: express.Response) => {
  const body: RegisterDTO = get(req, "body", {});

  res.status(200).json({
    token: "dummy-token",
    refreshToken: "dummy-refresh-token",
    user: {
      id: 1,
      username: "dummy-username",
    },
  });
});

// Lis
app.listen(4000, () => {
  console.log("Successfully Connected to Port: 4000");
});

createConnection()
  .then(async (connection) => {})
  .catch((error) => console.log(error));
