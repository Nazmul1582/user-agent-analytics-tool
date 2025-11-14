const saveUserAgent = require("../utils/logger")

const storeUserAgent = (req, res, next) => {
  const userAgent = req.headers["user-agent"]
  saveUserAgent(userAgent)

  next()
}

module.exports = storeUserAgent
