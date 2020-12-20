const ora = require("ora");
const readInput = require("./app/readInput");
const findMyBooks = require("./app/findMyBooks");
const createResult = require("./app/createResult");
const report = require("./app/report");
const save = require("./app/save");

const runWorkflow = async () => {
  let spinner = ora("Reading input file").start();
  // this is the input file with ISBN numbers
  const path = "./input/20201219-input.csv";
  const isbnCollection = await readInput(path);
  spinner.succeed();
  spinner = ora("Calling openlibrary.org").start();
  const bookCollection = await findMyBooks(isbnCollection);
  spinner.succeed();
  spinner = ora("Creating output files").start();
  const readableResult = await createResult(bookCollection);
  spinner.succeed().stop();
  await save(readableResult);
  await report(readableResult);
};

runWorkflow();
