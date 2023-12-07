
const express = require('express');
const app = express();
const mysql2 = require('mysql2');
const db = mysql2.createPool({
    host: "localhost",
    user: "qtechnet_react1",
    password: "ASDF@2asdf",
    database: "qtechnet_react1",
    connectionLimit: 10,

});
module.exports=db


  // Optionally, you can test the pool by connecting and querying the database
  db.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to the database:", err);
    } else {
      console.log("Connected to the database");
  
      // Execute a test query
      connection.query("SELECT 1 + 1 AS result", (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
        } else {
          console.log("Result:", results[0].result);
        }
        // Release the connection back to the pool
        connection.release();
      });
    }
  });
  // const express = require('express');
// const app = express();
// const mysql2 = require('mysql2');
// const db = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "arcdeco"
// });
// module.exports=db