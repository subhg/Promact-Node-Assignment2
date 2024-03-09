// src/middleware/checkUsersFile.js
// const fs = require("fs");
// const path = require("path");

// // Middleware for checking if users file exists
// const checkUsersFileMiddleware = (req, res, next) => {
//   const usersFilePath = path.join(__dirname, "users.txt");
//   if (!fs.existsSync(usersFilePath)) {
//     return res.redirect("/create");
//   }
//   next();
// };

//module.exports = checkUsersFileMiddleware;
