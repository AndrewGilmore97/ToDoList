const express = require("express");
const app = express();
const port = 3000;
let itemList = [];

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.set("view engine", "ejs");

const today = new Date();
const options = {
    weekday:"long",
    month:"long",
    day:"numeric"
};

const todayRead = today.toLocaleDateString('en-EN', options);

app.get("/", function(req,res){
    res.render("index", {dayofWeek:todayRead,itemList:itemList});
});

app.post("/", function(req,res){
    const listInput = req.body.todoItem;
    itemList.push(listInput);
    res.redirect("/");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});

// Unordered list in a form that posts
// Pass to an array to generate
// Res.redirect to home route after post request

// Make background change depending on the hour of the day