// src/routes/users.js
const express = require("express");
const router = express.Router();
const fs = require("fs"); // Add this line
const path = require("path"); // Add this line

// Users route - display all users
router.get("/", (req, res) => {
  const usersFilePath = path.join(__dirname, "../users.txt"); // Fix the path
  const users = fs
    .readFileSync(usersFilePath, "utf8")
    .split("\n")
    .filter(Boolean);
  res.send(`Users: ${users.join(", ")}`);
});

module.exports = router;
