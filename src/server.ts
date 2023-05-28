import express from "express";
const app = express();
const port = 5000;

app.get("/health", (req, res) => {
  res.send("All good");
})

app.listen(port, () => {
  console.log(`Server started. Listening on port ${port}`);
})
