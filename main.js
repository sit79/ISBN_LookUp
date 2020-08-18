const findMyBooks = require("./app/findMyBooks");
const display = require("./app/display");

const runWorkflow = async () => {
  const bookCollection = await findMyBooks();
  display(bookCollection);
  // TODO implement writing result to excel or csv file;
};

runWorkflow();
