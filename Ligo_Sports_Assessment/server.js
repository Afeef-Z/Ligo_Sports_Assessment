const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/games/:playerId", async (req, res) => {
  res.json("prototype of the get request");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});