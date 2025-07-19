// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const membersRoutes = require('./members'); // ✅ correct path
app.use(membersRoutes);

const academicsRoutes=require('./academics');
app.use(academicsRoutes);

// Optional base route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});


/* const port = process.env.PORT || 3000||5000;
app.listen(port, () => console.log(`Server running on port ${port}`)); */
/* app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});
 */
