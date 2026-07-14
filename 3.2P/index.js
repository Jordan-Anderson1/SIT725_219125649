const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/books", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "books.html"));
});

app.listen(port, () => {
  console.log("App listening to: " + port);
});
