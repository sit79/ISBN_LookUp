const ObjectsToCsv = require("objects-to-csv");

const save = async (readableResult) => {
  const csv = new ObjectsToCsv(readableResult);

  // Save to file:
  await csv.toDisk("./result/books.csv");

  // Return the CSV file as string if needed
  // console.log(await csv.toString());
};

module.exports = save;
