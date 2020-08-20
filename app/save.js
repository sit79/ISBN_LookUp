const ObjectsToCsv = require("objects-to-csv");

const save = async (readableResult) => {
  const csv = new ObjectsToCsv(readableResult);

  // Save to file:
  await csv.toDisk("./result/books.csv");

  //TODO save two files: file1 contains finds,
  // file2 contains books that could not be found

  // Return the result as table of strings if needed
  console.table(await readableResult);
};

module.exports = save;
