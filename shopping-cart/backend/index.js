const express = require("express");
const cors = require("cors");
const products = require("./product");

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/products", (req, res) => {
    res.send(products);
  });
app.listen(PORT, console.log(`Server is running${PORT}`));
