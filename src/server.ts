import express from "express";
const app = express();
const port = 5000;

app.get("/health", (req, res) => {
  res.send("All good");
});

app.post("/item", (req, res) => {
  const item = req.body;
  if(typeof item.name === "undefined") {
    res.sendStatus(400);
  }
})

app.listen(port, () => {
  console.log(`Server started. Listening on port ${port}`);
})
