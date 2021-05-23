let mysql = require('mysql');

// configure mysql here
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'nodeuser',
  password: 'nodeuser@1234',
  database: 'ONPASSIVE',
});

function connectMysql() {
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});
}

module.exports.connectMysql = connectMysql;
module.exports.connection = connection;