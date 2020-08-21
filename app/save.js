const ObjectsToCsv = require("objects-to-csv");

const save = async (readableResult) => {
  const notFound = readableResult.filter((item) => !item.found);
  const found = readableResult.filter((item) => item.found);

  const allBooks = new ObjectsToCsv(readableResult);
  const notFoundBooks = new ObjectsToCsv(notFound);
  const foundBooks = new ObjectsToCsv(found);

  // Save to file:
  await allBooks.toDisk("./result/allBooks.csv");
  await foundBooks.toDisk("./result/found.csv");
  await notFoundBooks.toDisk("./result/notFound.csv");

  // Return the result as table of strings if needed
  console.table(await readableResult);
};

module.exports = save;
