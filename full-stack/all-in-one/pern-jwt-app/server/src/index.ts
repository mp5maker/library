import "reflect-metadata";
import dotenv from "dotenv-safe";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import express, { response } from "express";
import get from "lodash/get";
import { RegisterDTO } from "./dto/request/register.dto";
import { Database } from "./database";
import registerSchema from "./schema/register.schema";
import errorHelper from "./utilities/errorHelper";
import passwordHelper from "./utilities/passwordHelper";
import tokenHelper from "./utilities/tokenHelper";
import i18next from "i18next";
import { AuthenticationDTO } from "./dto/response/authentication.dto";
import { LoginDTO } from "./dto/request/login.dto";

dotenv.config();
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
    user.password = await passwordHelper.generateHash({ password });
    user.age = age;
    await Database.userRepository.save(user);

    const token = await tokenHelper.generateToken({ user });
    const refreshToken = await tokenHelper.generateRefreshToken({ user });

    const response: AuthenticationDTO = {
      token,
      refreshToken,
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

app.post("/login", async (req: express.Request, res: express.Response) => {
  const body: LoginDTO = get(req, "body", "");
  const email = get(body, "email", "");
  const password = get(body, "password", "");
  const findUser = await Database.userRepository.findOne({ email });

  if (findUser) {
    const isPasswordValid = await passwordHelper.isPasswordValid({
      plainPassword: password,
      hashPassword: findUser.password,
    });

    if (isPasswordValid) {
      const token = await tokenHelper.generateToken({ user: findUser });
      const refreshToken = await tokenHelper.generateRefreshToken({
        user: findUser,
      });
      const id = get(findUser, "id", 0);
      const username = get(findUser, "username", "");
      const age = get(findUser, "age", 0);

      const response: AuthenticationDTO = {
        token,
        refreshToken,
        user: {
          email,
          id,
          username,
          age,
        },
      };

      res.status(200).json(response);
    } else {
      res.status(400).json({
        error: {
          overall: "WRONG_CREDENTIALS",
        },
      });
    }
  } else {
    res.status(400).json({
      error: {
        overall: "WRONG_CREDENTIALS",
      },
    });
  }
});

app.post("/verify", async (req: express.Request, res: express.Response) => {
  const token = get(req, "body.refreshToken", "");
  const onVerifySuccessToken = (_response) => res.status(200).send(true);
  const onVerifyErrorToken = (_error) => res.status(400).send(false);

  tokenHelper
    .verifyToken({ token })
    .then(onVerifySuccessToken)
    .catch(onVerifyErrorToken);
});

app.post(
  "/refresh-token",
  async (req: express.Request, res: express.Response) => {
    const bodyToken = get(req, "body.refreshToken", "");
    const onVerifySuccessToken = async (verifyResponse) => {
      const email = get(verifyResponse, "email", "");
      const id = get(verifyResponse, "aud", "");

      const user = await Database.userRepository.findOne({ id, email });
      if (user) {
        const findToken = await Database.refreshTokenRepository.findOne({
          jwtId: bodyToken,
          user,
        });
        await Database.refreshTokenRepository.save({
          ...findToken,
          used: true,
        });
        const token = await tokenHelper.generateToken({ user });
        const refreshToken = await tokenHelper.generateRefreshToken({ user });
        res.status(200).send({
          token,
          refreshToken,
        });
      } else {
        res.status(400).send(false);
      }
    };
    const onVerifyErrorToken = () => res.status(400).send(false);

    tokenHelper
      .verifyToken({ token: bodyToken })
      .then(onVerifySuccessToken)
      .catch(onVerifyErrorToken);
  }
);

app.post("/logout", async (req: express.Request, res: express.Response) => {
  response.send(200);
});

// Listen
app.listen(4000, () => {
  console.log("Successfully Connected to Port: 4000");
});

createConnection()
  .then(async (connection) => {})
  .catch((error) => console.log(error));
