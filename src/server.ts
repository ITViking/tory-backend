import express from "express";
const app = express();
const cors = require("cors");
const port = 5000;
import { itemsDb } from "./models";
const items = require("./inventorySeed.json");

let databaseIsSeed = false;

const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.get("/health", (req, res) => {
  res.send("All good");
});

app.post("/containers/:id/items", (req, res) => {
  const item: any = req.body;

  itemsDb.add(item);
  res.sendStatus(200);
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
  items.forEach(item => itemsDb.add(item.name));
}