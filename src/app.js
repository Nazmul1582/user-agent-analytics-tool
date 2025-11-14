const express = require("express")
const app = express()
const router = require("./routes/userAgent")

app.use(router)

module.exports = app
