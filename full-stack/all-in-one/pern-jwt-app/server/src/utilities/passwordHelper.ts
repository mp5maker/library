import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import get from "lodash/get";
import { v4 } from "uuid";

export default {
  generateHash: async ({ password }) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  },
  generateToken: async ({ user }) => {
    const id = get(user, "id", "");
    const email = get(user, "email", "");

    const payload = {
      id,
      email,
    };

    const token = await jwt.sign(payload, process.env.SECRET, {
      expiresIn: "1h",
      jwtid: v4(),
      subject: id.toString(),
    });

    return token;
  },
};
