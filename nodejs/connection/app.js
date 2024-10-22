// app.js  
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies 
app.use(express.json());

// MongoDB connection   
mongoose.connect('mongodb://localhost:27017/myapp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use the post routes   
app.use('', postRoutes);

// Start the server   
app.listen(PORT, () => {
    console.log(`Server is running on port -> http://localhost:${PORT}`);
}); 