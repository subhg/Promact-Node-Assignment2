// src/routes/create.js
const express = require("express");
const router = express.Router();

// Create route - form to add a user
router.get("/", (req, res) => {
  res.send(`
    <form action="/create/add" method="post">
      <label for="userName">User Name:</label>
      <input type="text" id="userName" name="userName" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

module.exports = router;
