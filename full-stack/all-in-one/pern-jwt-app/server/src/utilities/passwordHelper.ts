import bcrypt from "bcrypt";

const generateHash = async ({ password }) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const isPasswordValid = async ({ plainPassword, hashPassword }) => {
  return await bcrypt.compareSync(plainPassword, hashPassword);
};

export default {
  generateHash,
  isPasswordValid,
};
