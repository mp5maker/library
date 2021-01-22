import "module-alias/register";
import "reflect-metadata";
import "dotenv-safe/config";

import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createConnection } from "typeorm";

import swaggerRoute from "@plant-rest-api/swagger";
import { RegisterRoutes } from "@plant-rest-api/api/routes";
import { __prod__ } from "@plant-rest-api/constants/settings";
import { Sample } from "@plant-rest-api/sample/entity";

const main = async () => {
  /* SETUP */
  const PORT = 4000;
  const app = express();

  /* DATABASE */
  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: !__prod__,
    ...(__prod__ ? { synchronize: true } : {}),
    migrations: [path.join(__dirname, "**/migrations/*")],
    entities: [Sample],
  });

  /* MIDDLEWARE */
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  /* ROUTES */
  app.use(express.static(`${__dirname}/static`));
  app.use(swaggerRoute);
  app.get("/", (_req, res) => res.send("Where all the api lives"));
  RegisterRoutes(app);

  /* LISTEN */
  app.listen(PORT, () => console.log(`You are connected to: ${PORT}`));
};

main().catch((error) => console.log(error));
