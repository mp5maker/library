import bcrypt from "bcrypt";

export default {
  generate: async ({ password }) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  },
};
