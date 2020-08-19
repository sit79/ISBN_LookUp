const findMyBooks = require("./app/findMyBooks");
const createResult = require("./app/createResult");
const save = require("./app/save");

const runWorkflow = async () => {
  const bookCollection = await findMyBooks();
  const readableResult = createResult(bookCollection);
  save(readableResult);
};

runWorkflow();
