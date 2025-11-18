const express = require("express");
const app = express();
const router = require("./routes/userAgent");
const storeUserAgent = require("./middleware/userAgent");

app.use(express.json());
app.use("/api", storeUserAgent, router);

module.exports = app;
