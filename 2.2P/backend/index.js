const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

//ADD TWO NUMBERS
app.get("/api/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .json({ error: "One or more inputs is not a number" });
  } else {
    return res.status(200).json({ a, b, result: a + b });
  }
});

//SUBTRACT TWO NUMBERS
app.get("/api/subtract", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .json({ error: "One or more inputs is not a number" });
  } else {
    return res.status(200).json({ a, b, result: a - b });
  }
});

//MULTIPLY TWO NUMBERS
app.get("/api/multiply/", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .json({ error: "One or more inputs is not a number" });
  } else {
    return res.status(200).json({ a, b, result: a * b });
  }
});

//DIVIDE
app.get("/api/divide/", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res
      .status(400)
      .json({ error: "One or more inputs is not a number" });
  } else {
    return res.status(200).json({ a, b, result: a / b });
  }
});

app.listen(port, () => {
  console.log("App listening to: " + port);
});
