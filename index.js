// Import the express module
const express = require('express');
const path = require('path');

// Create an instance of an Express application
const app = express();

// Define an array of products with image paths
const products = [
    { id: 1, name: 'Laptop', price: 999.99, description: 'A high-performance laptop for all your needs', image: '/image/product1.jpg' },
    { id: 2, name: 'Smartphone', price: 499.99, description: 'A powerful smartphone with a stunning display', image: '/image/product2.jpg' },
    { id: 3, name: 'Headphones', price: 199.99, description: 'Noise-cancelling headphones for immersive sound', image: '/image/product3.jpg' },
   
];

// Serve static files from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define a route to get the list of products
app.get('/products', (req, res) => {
    res.json(products);
});

// Start the server and listen on port 3000
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
