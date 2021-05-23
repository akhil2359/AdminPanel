const express = require('express');

const mysqlconnect = require("../mysql/connection");
const connection = mysqlconnect.connection;

let router = express.Router();

router.get("/", (req, res) => {
    const {name, location, jobtitle, department, age} = req.query;
    const ename = `${name ? `${name}%` : '%%'}`;
    const elocation = `${location ? location : '%%'}`;
    const edepartment = `${department ? department : '%%'}`;
    const ejobtitle = `${jobtitle ? `%${jobtitle}%` : '%%'}`;
    const eage = `${age ? age : '%%'}`;

    connection.query("SELECT * FROM employees WHERE name LIKE ? AND location LIKE ? AND department LIKE ? AND jobtitle LIKE ? AND age LIKE ?", [ename, elocation, edepartment, ejobtitle, eage], (err, rows) => {
      if (err) {
        res.status(400);
        res.send({
          status: "failed",
          error: err.sqlMessage,
        });
        throw err;
      }
      res.status(200);
      if(rows.length > 0){
        res.send(rows);
      } else {
        res.send({
          message: "no results found"
        })
      }
      res.end();
    });
  });
  
  router.post("/", (req, res) => {
    var reqBody = req.body;
  
    const name = reqBody.name;
    const jobtitle = reqBody.jobtitle;
    const department = reqBody.department;
    const location = reqBody.location;
    const age = reqBody.age;
    const salary = reqBody.salary;
  
    const queryString = `INSERT INTO employees (name, jobtitle, department, location, age, salary) VALUES (
       ?, ?, ?, ?, ?, ?
     )`;
  
    connection.query(
      queryString,
      [name, jobtitle, department, location, age, salary],
      (err) => {
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
      }
    );
  });
  
  router.put("/:id", (req, res) => {
    const id = req.params.id;
  
    // check if employee with this id exists in DB, if not throw error
    connection.query("SELECT * FROM employees WHERE id=?", [id], (err, rows) => {
      if (err || rows.length === 0) {
        res.status(400);
        res.send({
          status: "failed",
          error: err ? err.sqlMessage : "No User Found",
        });
        if (err) {
          throw err;
        }
      } else if (!err) {
        // user exists
        var reqBody = req.body;
  
        const name = reqBody.name || rows[0].name;
        const jobtitle = reqBody.jobtitle || rows[0].jobtitle;
        const department = reqBody.department || rows[0].department;
        const location = reqBody.location || rows[0].location;
        const age = reqBody.age || rows[0].age;
        const salary = reqBody.salary || rows[0].salary;
  
        const queryString = `UPDATE employees SET name=?,jobtitle=?,department=?,location=?,age=?,salary=? WHERE id=?`;
        connection.query(
          queryString,
          [name, jobtitle, department, location, age, salary, id],
          (err) => {
            if (err) {
              res.status(400);
              res.send({
                status: "failed",
                message: err.sqlMessage,
              });
              res.end();
            } else {
              res.status(200);
              res.send({
                status: "User Updated Successfully",
                result: {
                  id: parseInt(id),
                  name: name,
                  jobtitle: jobtitle,
                  department: department,
                  location: location,
                  age: age,
                  salary: salary,
                },
              });
            }
          }
        );
      }
    });
  });
  
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    // check if user exists
    connection.query("SELECT * FROM employees WHERE id=?", [id], (err, rows) => {
      if (err) {
        res.status(400);
        res.send({
          status: "user not found",
          message: err.sqlMessage,
        });
        res.end();
      } else {
        connection.query("DELETE FROM employees WHERE id=?", [id], (err) => {
          if (err) {
            res.status(400);
            res.send({
              status: "failed",
              message: err.sqlMessage,
            });
          } else {
            if(rows.length === 0){
              res.status(400);
              res.send({
                status: "failed",
                message: "user not found",
              });
            } else {
            res.status(200);
            res.send({
              status: "success",
              message: "user deleted successfully",
            });
          }
          }
        });
      }
    });
  });

  module.exports = router;