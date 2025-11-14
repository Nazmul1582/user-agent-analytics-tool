const fs = require("fs")
const path = require("path")
const userAgentFile = path.join(__dirname, "../userAgents.json")

const saveUserAgent = (agent) => {
  let data = []
  try {
    if (fs.existsSync(userAgentFile)) {
      const row = fs.readFileSync(userAgentFile)
      data = row ? JSON.parse(row) : []
    }
  } catch (error) {
    console.log(error)
  }
  data.push(agent)
  fs.writeFileSync(userAgentFile, JSON.stringify(data, null, 2))
}

module.exports = saveUserAgent
