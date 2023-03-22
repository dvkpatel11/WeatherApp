const express = require('express');
const path = require('path');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the client/build directory
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Handle API routes
app.use('/api/weather', weatherRoutes);

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
