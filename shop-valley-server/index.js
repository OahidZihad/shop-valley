const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9wgmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const shopCollection = client.db("shopValley").collection("products");

  app.post("/addProduct", (req, res) => {
    const newProduct = req.body;
    console.log("adding new product: ", newProduct);
    shopCollection.insertOne(newProduct).then((result) => {
      console.log("inserted Count: ", result.insertedCount);
      res.send(result.insertedCount > 0);
    });
  });

  app.get("/products", (req, res) => {
    shopCollection.find().toArray((err, items) => {
      res.send(items);
    });
  });

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
