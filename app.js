// Packages/App
const express = require("express");
const app = express();

// Express Routes
app.get("/Home", function(req, res){
    res.render("homepage.html");
});

app.get("/Resume", function(req, res){
    res.render("resume.html");
});

app.get("/Contact Us", function(req, res){
    res.render("contactUs.html");
});

// Error Route - Must be last
app.get("*", function(req, res){
    res.send("Error, that route does not exist!");
});