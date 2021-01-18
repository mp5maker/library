import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import express from "express";
import get from "lodash/get";
import { RegisterDTO } from "./dto/request/register.dto";
import { Database } from "./database";
import registerSchema from "./schema/register.schema";
import errorHelper from "./utilities/errorHelper";
import passwordHelper from "./utilities/passwordHelper";
import i18next from "i18next";
import { AuthenticationDTO } from "./dto/response/authentication.dto";

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
  const headerLanguage = get(req, "headers.accept-language", "").trim();
  const currentLanguage = headerLanguage ? headerLanguage : "en";

  const onSuccessValidation = async () => {
    const t = i18next.getDataByLanguage(currentLanguage).translation;
    const email = get(body, "email", "");
    const username = get(body, "username", "");
    const password = get(body, "password", "");
    const age = get(body, "age", 0);

    const findUser = await Database.userRepository.findOne({ email });
    if (findUser) {
      res.status(400).json({
        error: {
          overall: t["USER_ALREADY_EXIST"],
        },
      });
    }

    // Store the user
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = await passwordHelper.generate({ password });
    user.age = age;
    await Database.userRepository.save(user);

    const response: AuthenticationDTO = {
      token: "dummy-token",
      refreshToken: "dummy-refresh-token",
      user,
    };
    res.status(200).json(response);
  };

  const onErrorValidation = (error) => {
    res.status(400).json({
      error: {
        ...errorHelper.generate(error),
      },
    });
  };

  registerSchema({
    currentLanguage,
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
