// routes/members.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/api/members', (req, res) => {
  db.query('SELECT * FROM members', (err, results) => {
    if (err) {
      console.error('❌ MySQL Query Error:', err);  // <-- This will show the REAL error
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
});

module.exports = router;
