var express = require("express");
var app = express();
/** Serve static files */
app.use(express.static("Pages"));
app.get("/", function (req, res) {
    // Serve the index.html file
    res.sendFile(__dirname + "/Pages/index.html");
});
app.get("/about", function (req, res) {
    // Serve the about.html file
    res.sendFile(__dirname + "/Pages/about.html");
});
app.get("/contact", function (req, res) {
    // Serve the contact.html file
    res.sendFile(__dirname + "/Pages/contact.html");
});
app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
