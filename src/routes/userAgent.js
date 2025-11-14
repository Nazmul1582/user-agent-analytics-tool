const express = require("express")
const router = express.Router()

router.get("/analytics/user-agents", (req, res) => {
  res.status(200).json({
    Postman: 2,
    "Thunder Client": 2,
    "Chrome Browser": 2,
    "Edge Browser": 2,
    curl: 2,
    Other: 0,
  })
})

module.exports = router
