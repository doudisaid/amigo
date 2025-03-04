const express = require('express');
const app = express();
const router = require('./routes/router');
const path = require('path');
const PORT = 3000;
// JWT
const jwt = require('jsonwebtoken');

app.set('view engine', 'ejs');
// Set views directory
app.set('views', path.join(__dirname, 'views'));
// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);



const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email }, // Payload
        'your_secret_key',  // Replace with a strong secret key
        { expiresIn: '1h' } // Token expiration
    );
};

// Example usage:
const user = { id: 1, email: "user@example.com" };
const token = generateToken(user);
console.log(token);


// Server run
app.listen(PORT, () => {
    console.log(`Server is runing on http://localhost:${PORT}`);
});
