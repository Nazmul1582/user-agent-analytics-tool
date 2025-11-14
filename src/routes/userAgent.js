const express = require("express")
const router = express.Router()
const { getUserAgents } = require("../controllers/userAgent")

router.get("/analytics/user-agents", getUserAgents)

module.exports = router
