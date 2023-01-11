## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- Express.js
- fs
- csv-parse
- objects-to-csv
- jest
- supertest

### Installation

- npm i fs
- npm i express
- npm i csv-parse
- npm i objects-to-csv
- npm i jest
- npm i supertest

Command to install all the dependencies:
```npm i```

### Running the project

Instructions on how to run the project in a development environment

Will use this command:
 ```node server.js```

### Running the test cases

1. Run the server using this command:
```node server.js```
2. Run testcase using this command:
```npm test```
### How to make a GET request:
  Send the GET request using this following command:
  ```curl http://localhost:3000/games/:Id```

### How to make a POST request:
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
