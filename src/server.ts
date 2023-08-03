import express from "express";
const app = express();
const cors = require("cors");
const port = 5000;
import { itemsDb, containersDb } from "./models";
import { v4 as uuid } from "uuid";
const seedItems = require("./seedItems.json");
const seedContainers = require("./seedContainers.json");

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

app.post("/containers", (req, res) => {
  const newContainerName = req.body.container;
  containersDb.add({ id: uuid(), name: newContainerName });
})

app.get("/containers", (req, res) => {
  const containers = containersDb.list();
  res.send(containers);
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
  seedItems.forEach(item => itemsDb.add(item));
  seedContainers.forEach(container => containersDb.add(container));
}