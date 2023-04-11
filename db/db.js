const mysql = require("mysql");

//p4 create koneksi ke database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "service",
});
//open mysql koneksi
connection.connect((error) => {
  if (error) throw error;
  console.log("successfully connected to database");
});
module.exports = connection;
