const express = require("express");
const cors = require("cors");
const products = require("./product");

const PORT = process.env.PORT ||5000;

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to Online Shopping API");
});
app.get("/products", (req, res) => {
    res.send(products);
  });
app.listen(PORT, console.log(`Server is running${PORT}`));
