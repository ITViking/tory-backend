import express from "express";
const app = express();
const cors = require("cors");
const port = 5000;
import { itemsDb } from "./models";
import { v4 as uuid } from "uuid";
const items = require("./inventorySeed.json");

let databaseIsSeed = false;

const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("All good");
});

app.post("/containers/:id/items", (req, res) => {
  const newItem = { id: uuid(), name: req.body.item};
  itemsDb.add(newItem);
  res.send(newItem);
});

app.get("/containers/:id/items", (req, res) => {
  const inventory = itemsDb.list();
  res.send(inventory);
});

if(!databaseIsSeed) {
  seedDatabase();
  databaseIsSeed = true;
}

app.listen(port, () => {
  console.log("seeding Database");
  console.log(`Server started. Listening on port ${port}`);
});

function seedDatabase() {
  items.forEach(item => itemsDb.add(item));
}