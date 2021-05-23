const express = require("express");
const cors = require('cors');
const mysqlconnect = require("./mysql/connection");

//routers
const employeesRouter = require('./routes/employees');

const app = express();

//configures Mysql and creates a connection
mysqlconnect.connectMysql();

// middlewares
app.use(express.json());
app.use(cors());
app.use('/api/employees', employeesRouter);

app.use(function(req,res,next){
  res.json(req.body);
  next();
});


app.get("/", (req, res) => {
  res.send("Server is up!");
  res.end();
});


const port = process.env.PORT || 3001;
app.listen(port, () => console.log("connected to port-", port));
