const fs = require("fs");
const path = require("path");
const userAgentFile = path.join(__dirname, "../userAgents.json");

const getUserAgents = (req, res) => {
  const rowFile = fs.readFileSync(userAgentFile);
  const userAgents = rowFile ? JSON.parse(rowFile) : [];

  const initialData = {
    Postman: 0,
    "Thunder Client": 0,
    "Chrome Browser": 0,
    "Edge Browser": 0,
    curl: 0,
    Other: 0,
  };
  const formatedData = userAgents.reduce((acc, item) => {
    if (item.includes("Postman")) acc["Postman"] += 1;
    else if (item.includes("Thunder Client")) acc["Thunder Client"] += 1;
    else if (item.includes("Edg")) acc["Edge Browser"] += 1;
    else if (item.includes("Chrome")) acc["Chrome Browser"] += 1;
    else if (item.includes("curl")) acc["curl"] += 1;
    else acc["Other"] += 1;
    return acc;
  }, initialData);

  res.status(200).send(JSON.stringify(formatedData, null, 2));
};

module.exports = { getUserAgents };
