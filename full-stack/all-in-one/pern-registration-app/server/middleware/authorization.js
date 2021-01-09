const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    const jwtToken = request.header("token");
    if (!jwtToken) {
      return response.status(403).json({ error: "Not Authorized" });
    }

    const payload = await jwt.verify(jwtToken, process.env.SECRET);
    request.user = payload.user;
    next();
  } catch (error) {
    console.log(error.message);
    return response.status(403).json({ error: "Not Authorized" });
  }
};
