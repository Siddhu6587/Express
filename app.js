const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send("Hello Welcome to Main Page");
});
app.get('/about', (req, res) => {
    res.send("Welcome to About Page");
});
app.get('/home', (req, res) => {
    res.send("This is our Home Page to select any option");
});
app.get('/contact', (req, res) => {
    res.send("Welcome to Contact Page");
});
app.listen(port, () => {
    console.log("Server Created");
});