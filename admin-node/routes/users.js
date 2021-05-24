const express = require("express");

const mysqlconnect = require("../mysql/connection");
const connection = mysqlconnect.connection;

let router = express.Router();

// adds new user
router.post("/signup", (req, res) => {
  var reqBody = req.body;
  const username = reqBody.username;
  const password = reqBody.password;

  // check if employee with this id exists in DB, if not throw error
  connection.query(
    "SELECT * FROM users WHERE username=?",
    [username],
    (err, rows) => {
      // username already exists
      if (err || rows.length > 0) {
        res.status(400);
        res.send({
          status: "failed",
          error: err
            ? err.sqlMessage
            : "User Name already exists, please try another one",
        });
      } else {
        // create new user
        const queryString = `INSERT INTO users (username, password) VALUES (
                ?, ?
              )`;

        connection.query(queryString, [username, password], (err) => {
          if (err) {
            res.status(400);
            res.send({
              status: "failed",
              error: err.sqlMessage,
            });
            throw err;
          } else {
            res.status(200);
            res.send({
              status: "success",
              data: reqBody,
            });
            res.end();
          }
        });
      }
    }
  );
});

// adds new user
router.post("/login", (req, res) => {
  var reqBody = req.body;
  const username = reqBody.username;
  const password = reqBody.password;

  connection.query(
    "SELECT * FROM users WHERE username=? AND password = ?",
    [username, password],
    (err, rows) => {
      // username already exists
      if (err || rows.length === 0) {
        res.status(400);
        res.send({
          status: "failed",
          error: err ? err.sqlMessage : "Invalid Credentials",
        });
      } else if (rows.length > 0) {
        res.status(200);
        res.send({
          status: "success",
        });
      }
    }
  );
});

module.exports = router;
