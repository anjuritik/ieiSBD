// backend/routes/newsRoutes.js
import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM news ORDER BY date_posted DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

export default router;
