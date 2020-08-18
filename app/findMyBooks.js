const isbnCollection = require("./data");
const getData = require("./getData");

const findMyBooks = async () => {
  let bookCollection = [];
  try {
    for (const isbn of isbnCollection) {
      let result = await getData(isbn);
      let modResult;
      if (Object.keys(result).length === 0) {
        modResult = Object.assign(
          { ISBN: isbn.toString() },
          { "Not Found": true }
        );
      } else {
        modResult = Object.assign({ ISBN: isbn.toString() }, result);
      }
      bookCollection.push(modResult);
    }
  } catch (error) {
    console.log(error);
  }
  return bookCollection;
};

module.exports = findMyBooks;
