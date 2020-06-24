// Packages/App
const express = require("express");
const app = express();

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Express Routes
app.get("/", function(req, res){
    res.sendFile("/views/homepage.ejs");
});

app.get("/education", function(req, res){
    res.sendFile("/views/education.ejs");
});

app.get("/contactUs", function(req, res){
    res.sendFile("/views/contactUs.ejs");
});

// Error Route - Must be last
app.get("*", function(req, res){
    res.send("Error, that route does not exist!");
});