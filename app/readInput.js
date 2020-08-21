const fs = require("fs");

const generateInputArray = (path) => {
  const inputString = fs.readFileSync(path, { encoding: "utf-8" }).toString();

  // split string into array and remove "ISBN" header
  const inputArray = inputString
    .split("\r\n")
    .filter((item) => item !== "ISBN");

  // remove duplicates
  const inputArrayWithoutDuplicates = Array.from(new Set(inputArray));

  return inputArrayWithoutDuplicates;
};

module.exports = generateInputArray;
