const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const { parse } = require("csv-parse");
const ObjectsToCsv = require("objects-to-csv");
app.use(express.json());

const csvFile = "./data.csv";

const promise = new Promise((resolve, reject) => {
  const arr = [];
  fs.createReadStream(csvFile)
    .pipe(parse({ delimiter: ",", columns: true, trim: true }))
    .on("data", (row) => {
      arr.push(row);
    })
    .on("end", resolve(arr))
    .on("error", reject);
});

app.get("/games/:playerId", async (req, res) =>  {
  await promise.then(function (arr) {
    if (arr.length < 1) {
      res.status(404);
    } else {
      res.json(arr);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});