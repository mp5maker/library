const joi = require("joi");
const get = require("lodash/get");

const schema = joi.object({
  email: joi
    .string()
    .email()
    .required()
    .error((errors) => {
      return errors;
    }),
  password: joi
    .string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .error((errors) => {
      return errors;
    }),
});

module.exports = async (request, response, next) => {
  const email = get(request, "body.email", "");
  const password = get(request, "body.password", "");

  try {
    const validation = await schema.validateAsync({ email, password });
    const error = get(validation, "error", undefined);
    if (error) return response.status(403).json({ error });
    next();
  } catch (error) {
    console.log(error.message);
    return response.status(400).json({ error });
  }
};
