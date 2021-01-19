import dotenv from "dotenv-safe";
import jwt from "jsonwebtoken";
import get from "lodash/get";
import { v4 } from "uuid";
import { RefreshToken } from "../entity/RefreshToken";
import add from "date-fns/add";
import { Database } from "../database";

dotenv.config();

const generateRefreshToken = async ({ user, jwtId }) => {
  const refreshToken = new RefreshToken();
  refreshToken.user = user;
  refreshToken.jwtId = jwtId;
  refreshToken.expiryDate = add(new Date(), {
    days: 10,
  });
  await Database.refreshTokenRepository.save(refreshToken);
  return refreshToken.id;
};

const generateTokenAndRefreshToken = async ({ user }) => {
  const id = get(user, "id", "");
  const email = get(user, "email", "");

  const payload = {
    id,
    email,
  };

  const jwtId = v4();

  const token = await jwt.sign(payload, process.env.SECRET, {
    expiresIn: "1h",
    jwtid: jwtId,
    subject: id.toString(),
  });

  const refreshToken = await generateRefreshToken({ user, jwtId });
  return { token, refreshToken };
};

const verifyToken = async ({ token }) => {
  return jwt.verify(token, process.env.SECRET);
};

export default {
  generateRefreshToken,
  generateTokenAndRefreshToken,
  verifyToken,
};
