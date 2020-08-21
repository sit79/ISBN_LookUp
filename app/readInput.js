const fs = require("fs");

const generateInputArray = (path) => {
  const inputString = fs.readFileSync(path, { encoding: "utf-8" }).toString();
  const inputArray = inputString
    .split("\r\n")
    .filter((item) => item !== "ISBN");
  return inputArray;
};

module.exports = generateInputArray;
