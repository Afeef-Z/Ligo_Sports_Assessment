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

const getPlayers = (array, playerId) => {
  const games = [];
  array.forEach((e) => {
    if (e.PlayerId == playerId) {
      games.push(e);
    }
  });
  return games;
};

app.get("/games/:playerId", async (req, res) => {
  await promise.then(function (arr) {
    playerId = req.params.playerId;
    const keys = [
      "BA (Batting avg)",
      "PA (Plate appereances)",
      "AB (AtBats)",
      "R (Runs)",
      "H (Hits)",
      "RBI (Runs Batted In)",
      "2B (Doubles)",
      "3B (Triples)",
      "HR (Homerun)",
    ];

    const getInitilizedkeys = () => {
      totals = {};
      keys.forEach((key) => {
        totals[key] = 0;
      });
      return totals;
    };

    totals = getInitilizedkeys();
    let games = getPlayers(arr, playerId);


    keys.forEach((key) => {
      totals[key] = games.reduce(
        (accumulator, currentValue) =>
          accumulator + parseFloat(currentValue[key]),
        0
      );
    });

    if (games.length < 1) {
      res.json(404);
    } else {
      tempHash = {};
      tempHash["Total Stats"] = { PlayerID: playerId, ...totals };
      tempHash["Individual games"] = games;
      res.json(tempHash);
    }
  });
});

app.post("/players", async (req, res) => {
  let temp_array = [];
  await promise.then(function (arr) {
    temp_array = arr;
    temp_array.push(req.body);
    const csv = new ObjectsToCsv(temp_array);
    csv.toDisk(csvFile);
  });

  const new_player = req.body.PlayerId;
  let games = getPlayers(temp_array, new_player);

  if (games.length < 1) {
    res.json(404);
  } else {
    res.json(games);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});