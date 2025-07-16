// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',        // your MySQL host
  user: 'root',             // your MySQL username
  password: '7611',// your MySQL password
  database: 'iei' // your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to MySQL database.');
  }
});

module.exports = db;
