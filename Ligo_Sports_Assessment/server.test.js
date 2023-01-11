const request = require("supertest");
const baseURL = "http://localhost:3000";

const player_data = {
  PlayerId: "101",
  "Game Date": "01/01/2029",
  Opponent: "C.H Arman",
  "BA (Batting avg)": "10",
  "PA (Plate appearences)": "12",
  "AB (AtBats)": "12",
  "R (Runs)": "100",
  "H (Hits)": "10",
  "RBI (Runs Batted In)": "10",
  "2B (Doubles)": "10",
  "3B (Triples)": "9",
  "HR (Homerun)": "8",
  Class: "Jr-test-post",
};

describe("GET /games/1", () => {
  test("It should respond with player stats and game details", async () => {
    const response = await request(baseURL).get("/games/1");
    expect(response.statusCode).toBe(200);
  });

  test("It should respond with status code 404 if no data is found for a player", async () => {
    const response = await request(baseURL).get("/games/1010");
    expect(response.statusCode).toBe(404);
  });
});

describe("POST /players", () => {
  test("It should respond with status code 201 Player data", async () => {
    const response = await request(baseURL).post("/players").send(player_data);
    expect(response.statusCode).toBe(201);
  });
});
