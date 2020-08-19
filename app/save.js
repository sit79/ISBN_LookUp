const ObjectsToCsv = require("objects-to-csv");

const save = async (readableResult) => {
  const csv = new ObjectsToCsv(readableResult);

  // Save to file:
  await csv.toDisk("./result/books.csv");

  // Return the result as table of strings if needed
  console.table(await readableResult);
};

module.exports = save;
