import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: 'localhost',           // or your MySQL server address
    user: 'root',                // your MySQL username
    password: '7611',   // your MySQL password
    database: 'iei',  // your database name
  });

db.connect((err) => {
  if (err) {
    console.error("❌ DB Connection Failed:", err);
    return;
  }
  console.log("✅ DB Connected Successfully!");
  db.end();
});