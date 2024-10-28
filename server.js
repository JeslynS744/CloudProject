const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000; // Choose a port for your backend

// Middleware
app.use(express.json()); // To parse incoming JSON data
app.use(cors()); // Enable CORS for cross-origin requests

// Add this after the middleware section in server.js
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Connect to MongoDB
// Change 'localhost' to 'mongodb', which refers to the MongoDB service in Docker Compose
mongoose.connect('mongodb://mongodb:27017/userinfo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Define a simple route for testing
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
