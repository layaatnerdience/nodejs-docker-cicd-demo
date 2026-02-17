const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Node.js CI/CD Demo 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
