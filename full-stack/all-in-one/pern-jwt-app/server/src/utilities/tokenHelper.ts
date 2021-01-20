import dotenv from "dotenv-safe";
import jwt from "jsonwebtoken";
import get from "lodash/get";
import { RefreshToken } from "../entity/RefreshToken";
import { Database } from "../database";

dotenv.config();

const generateToken = async ({ user, options = {} }) => {
  const id = get(user, "id", "");
  const email = get(user, "email", "");

  const payload = {
    email,
  };

  const token = await jwt.sign(payload, process.env.SECRET, {
    expiresIn: "1h",
    issuer: process.env.SITE_NAME,
    audience: String(id),
    ...options,
  });

  return token;
};

const generateRefreshToken = async ({ user }) => {
  const refreshToken = new RefreshToken();
  refreshToken.user = user;
  refreshToken.jwtId = await generateToken({
    user,
    options: {
      expiresIn: "1y",
    },
  });
  await Database.refreshTokenRepository.save(refreshToken);
  return refreshToken.jwtId;
};

const verifyToken = async ({ token }) => {
  return jwt.verify(token, process.env.SECRET);
};

export default {
  generateToken,
  generateRefreshToken,
  verifyToken,
};
