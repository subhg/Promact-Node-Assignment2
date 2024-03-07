// src/app.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for checking if users file exists
const checkUsersFileMiddleware = (req, res, next) => {
  const usersFilePath = path.join(__dirname, "users.txt");
  if (!fs.existsSync(usersFilePath)) {
    return res.redirect("/create");
  }
  next();
};

// Routes
app.use("/", require("./routes/home"));
app.use("/create", require("./routes/create"));
app.use("/users", checkUsersFileMiddleware, require("./routes/users"));

// Add user route - handle POST request to add user to the text file
app.post("/create/add", (req, res) => {
  const usersFilePath = path.join(__dirname, "users.txt");
  const { userName } = req.body;

  try {
    fs.appendFileSync(usersFilePath, `${userName}\n`);
    res.send(`User ${userName} added successfully!`);
  } catch (error) {
    console.error("Error writing to users.txt:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
