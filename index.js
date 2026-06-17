const express = require("express");
const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("🚀 Hello! Your Simple Node App is Running wow");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is a simple Node + Express app for CI/CD practice");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});