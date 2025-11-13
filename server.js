const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Use environment variable for MongoDB connection to avoid committing credentials
// Set MONGODB_URI in your hosting provider or in a local .env file (see .env.example)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bakery';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.error('MongoDB connection error:', err));

// Cake Schema
const cakeSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  pounds: Number,
  ingredients: String,
});

const Cake = mongoose.model('Cake', cakeSchema);

// Admin authentication middleware (simple example)
function adminAuth(req, res, next) {
  // Replace with your real admin check (e.g., JWT, session)
  if (req.headers['x-admin'] === 'true') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: Admins only' });
  }
}

// API routes
app.get('/api/cakes', adminAuth, async (req, res) => {
  try {
    const cakes = await Cake.find();
    res.json(cakes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cakes', error: err });
  }
});

app.post('/api/cakes', adminAuth, async (req, res) => {
  try {
    const cake = new Cake(req.body);
    await cake.save();
    res.json(cake);
  } catch (err) {
    res.status(500).json({ message: 'Error saving cake', error: err });
  }
});

// Serve static frontend from the build/ directory (so the repo can be deployed as a single app)
const buildPath = path.join(__dirname, 'build');
if (require('fs').existsSync(buildPath)) {
  app.use(express.static(buildPath));

  // For any other request, serve index.html so React Router works
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});