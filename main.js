// const isbnCollection = require("./app/data");
const readInput = require("./app/readInput");
const findMyBooks = require("./app/findMyBooks");
const createResult = require("./app/createResult");
const report = require("./app/report");
const save = require("./app/save");

const runWorkflow = async () => {
  const path = "./input/input.csv";
  const isbnCollection = await readInput(path);
  const bookCollection = await findMyBooks(isbnCollection);
  const readableResult = await createResult(bookCollection);
  await save(readableResult);
  await report(readableResult);
};

runWorkflow();
