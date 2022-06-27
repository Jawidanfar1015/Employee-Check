const mysql = require("mysql2");

require('dotenv').config()

// Connect to database
const connection = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    // Your MySQL password
    password: process.env.DB_PASSWORD
  },
  console.log("Connected to the database.")
);

module.exports = connection;