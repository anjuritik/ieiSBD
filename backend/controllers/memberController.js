import { db } from "../config/db.js";

// GET /api/members
export function getMembers(req, res) {
  const query = "SELECT * FROM members";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching members:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
}
