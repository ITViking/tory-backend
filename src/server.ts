import express from "express";
const app = express();
const cors = require("cors");
const port = 5000;
import { container } from "./models";

const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.get("/health", (req, res) => {
  res.send("All good");
});

app.post("/item", (req, res) => {
  const item: any = req.body;

  container.add(item);
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Server started. Listening on port ${port}`);
})
