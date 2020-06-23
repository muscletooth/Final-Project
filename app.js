// Packages/App
const express = require("express");
const app = express();

// Server run
app.listen("3000", function(){
    console.log("The Website is online");
});

// Express Routes
app.get("/", function(req, res){
    res.render("homepage.ejs");
});

app.get("/contactUs", function(req, res){
    res.render("contactUs.ejs");
});

app.get("/game/:gameTitle/:gameCreator", function(req, res){
    const author = req.params.gameCreator;
    const title = req.params.gameTitle;
    res.render("game.ejs", {
        title: title,
        author: author
    });
});

app.get("/gamelist", function(req, res){

    //  Games List
    const games = [
        {title: "Fortnite", author: "Epic Games"},
        {title: "Battlefield 5", author: "EA"},
        {title: "Call of Duty: Modern Warfare", author: "Activision"}
    ]

    res.render("gamelist.ejs", {
        gamesList: games
    });
});

app.get("/hello", function(req, res){
    res.send("Hello! Welcome to the hello route!");
});

// Error Route - Must be last
app.get("*", function(req, res){
    res.send("Error, that route does not exist!");
});