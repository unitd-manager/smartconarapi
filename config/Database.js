var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smartconar',
   
});
db.connect(); 
module.exports = db;