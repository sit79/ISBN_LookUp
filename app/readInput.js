const neatCsv = require("neat-csv");
const fs = require("fs");

const readInput = () => {
  fs.readFile("./input/input.csv", async (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(await neatCsv(data));
  });
};

module.exports = readInput;
