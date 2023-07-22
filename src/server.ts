import express from "express";
const app = express();
const port = 5000;
import { container } from "./models";

app.get("/health", (req, res) => {
  res.send("All good");
});

app.post("/item", (req, res) => {
  const item: any = req.body;
  if(typeof item.name === "undefined") {
    res.sendStatus(400);
  }

  container.add(item);
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Server started. Listening on port ${port}`);
})
