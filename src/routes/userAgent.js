const express = require("express");
const path = require("path");
const router = express.Router();
const { getUserAgents } = require("../controllers/userAgent");

router.get("/analytics/user-agents", getUserAgents);
router.get("/analytics", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

module.exports = router;
