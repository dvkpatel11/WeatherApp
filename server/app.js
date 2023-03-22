const express = require('express');
const app = express();
const weatherRoutes = require('./routes/weatherRoutes');

// set up middleware
app.use(express.json());

// set up routes
app.use('/', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
