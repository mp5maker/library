import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import express from "express";
import get from "lodash/get";
import { RegisterDTO } from "./dto/request/register.dto";
import { Database } from "./database";
import registerSchema from "./schema/register.schema";
import errorHelper from "./utilities/errorHelper";

const app = express();

// Middleware
app.use(express.json());
Database.initialize();

// Route
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello There");
});

app.post("/register", async (req: express.Request, res: express.Response) => {
  const body: RegisterDTO = get(req, "body", {});
  const currentLanguage = get(req, "headers.accept-language", "");

  const onSuccessValidation = () => {
    res.status(200).json({
      token: "dummy-token",
      refreshToken: "dummy-refresh-token",
      user: {
        id: 1,
        username: "dummy-username",
      },
    });
  };

  const onErrorValidation = (error) => {
    res.status(400).json({
      ...errorHelper.generate(error),
    });
  };

  registerSchema({
    currentLanguage: currentLanguage.trim() ? currentLanguage : "en",
  })
    .validate(body, { abortEarly: false })
    .then(onSuccessValidation)
    .catch(onErrorValidation);
});

// Lis
app.listen(4000, () => {
  console.log("Successfully Connected to Port: 4000");
});

createConnection()
  .then(async (connection) => {})
  .catch((error) => console.log(error));
