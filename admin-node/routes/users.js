const express = require("express");
var nodemailer = require('nodemailer');


const mysqlconnect = require("../mysql/connection");
const connection = mysqlconnect.connection;

let router = express.Router();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akhil2359@gmail.com',
      pass: 'ivrmwvpzmkymohxz'
    }
  });

  var mailOptions = {
    from: 'akhil2359@gmail.com',
    to: '',
    subject: 'ONPASSIVE-RESET PASSWORD REQUEST',
    text: 'Dear user, we have received your request to reset password. Please click here to reset your password.'
  };

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

// forgot password
router.post("/forgot-password", (req, res) => {
    var reqBody = req.body;
    const email = reqBody.email;
  
    transporter.sendMail({...mailOptions, to: email,
    }, function(error, info){
        if (error) {
          console.log(error);
          res.status(400);
          res.send('Something went wrong!');
          res.end();
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200);
          res.send('Email has been sent');
          res.end();
        }
      });

  });

module.exports = router;
