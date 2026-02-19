const express = require("express");
const app = express();

const ENV = process.env.APP_ENV || "development";
const MESSAGE = process.env.APP_MESSAGE || "Default message";

app.get("/", (req, res) => {
  res.send(`Environment: ${ENV} | Message: ${MESSAGE}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
