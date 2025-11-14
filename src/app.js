const express = require("express")
const app = express()
const router = require("./routes/userAgent")
const saveUserAgent = require("./middleware/userAgent")

app.use("/api", saveUserAgent, router)

module.exports = app
