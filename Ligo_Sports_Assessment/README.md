## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- Express.js
- fs
- csv-parse
- objects-to-csv

### Installation

- npm i fs
- npm i express
- npm i csv-parse
- npm i objects-to-csv

### Running the project

Instructions on how to run the project in a development environment

- will use this command `node server.js`

## How to make a GET request:
  Send the GET request using this following command:
  - `http://localhost:3000/games/:Id`

## How to make a POST request:
  Send the POST request using the following command:
  ```
   curl -X POST -H "Content-Type: application/json" -d '{"PlayerId": "99",
    "Game Date": "01/01/2029",
    "Opponent": "C.H Arman",
    "BA (Batting avg)": "10",
    "PA (Plate appereances)": "12",
    "AB (AtBats)": "12",
    "R (Runs)": "100",
    "H (Hits)": "10",
    "RBI (Runs Batted In)": "10",
    "2B (Doubles)": "10",
    "3B (Triples)": "9",
    "HR (Homerun)": "8",
    "Class": "Jr-test-post"}' http://localhost:3000/players
