const fs = require("fs")
const path = require("path")
const userAgentFile = path.join(__dirname, "../userAgents.json")

const getUserAgents = (req, res) => {
  const rowFile = fs.readFileSync(userAgentFile)
  const userAgents = rowFile ? JSON.parse(rowFile) : []
  const formatedData = userAgents.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})

  res.status(200).send(JSON.stringify(formatedData, null, 2))
  // res.status(200).json({
  //   Postman: 2,
  //   "Thunder Client": 2,
  //   "Chrome Browser": 2,
  //   "Edge Browser": 2,
  //   curl: 2,
  //   Other: 0,
  // })
}

module.exports = { getUserAgents }
